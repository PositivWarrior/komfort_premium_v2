const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

console.log('=== Post-build: Inlining CSS & preparing for static hosting ===\n');

// ── 1. Find the CSS file ─────────────────────────────────────────────
const chunksDir = path.join(outDir, '_next', 'static', 'chunks');
const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.css'));

if (cssFiles.length === 0) {
  console.error('ERROR: No CSS files found!');
  process.exit(1);
}

let cssContent = fs.readFileSync(path.join(chunksDir, cssFiles[0]), 'utf8');
console.log(`Found CSS: ${cssFiles[0]} (${cssContent.length} chars)`);

// ── 2. Copy fonts to /fonts/ (shorter, cleaner path) ─────────────────
const mediaDir = path.join(outDir, '_next', 'static', 'media');
const fontsDir = path.join(outDir, 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

if (fs.existsSync(mediaDir)) {
  fs.readdirSync(mediaDir)
    .filter(f => /\.(woff2?|ttf|otf)$/.test(f))
    .forEach(file => {
      fs.copyFileSync(path.join(mediaDir, file), path.join(fontsDir, file));
      console.log(`  Copied font: ${file}`);
    });
}

// Fix font paths in CSS (so fonts load from /fonts/ instead of deep _next path)
cssContent = cssContent.replace(/\/_next\/static\/media\//g, '/fonts/');
cssContent = cssContent.replace(/\.\.\/media\//g, '/fonts/');
cssContent = cssContent.replace(/url\((['"]?)(?:\.\.\/)*media\//g, 'url($1/fonts/');

// ── 3. Process HTML files — inline CSS only ──────────────────────────
//    JS files and _next/ folder are LEFT UNTOUCHED.
//    Next.js generated the correct paths — don't break them.

function processHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Inline CSS: replace <link ... .css ...> with <style>
  html = html.replace(
    /<link[^>]*href="[^"]*\.css"[^>]*\/?>/g,
    `<style>${cssContent}</style>`
  );

  // Fix font preload paths in HTML
  html = html.replace(/\/_next\/static\/media\//g, '/fonts/');

  fs.writeFileSync(filePath, html);
  console.log(`  HTML: ${path.basename(filePath)} (${(html.length / 1024).toFixed(1)} KB)`);
}

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !['_next', 'fonts', 'node_modules'].includes(entry.name)) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      processHtml(fullPath);
    }
  });
}

console.log('\nProcessing HTML files...');
walk(outDir);

// ── 4. Generate sitemap.xml + sitemap2.xml (fresh lastmod on every deploy) ──
const SITE_URL = "https://komfortpremium.eu";
const lastmod = new Date().toISOString().slice(0, 10);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

["sitemap.xml", "sitemap2.xml"].forEach((fileName) => {
  fs.writeFileSync(path.join(outDir, fileName), sitemapXml, "utf8");
  console.log(`  Sitemap: ${fileName} (lastmod: ${lastmod})`);
});

// ── 4b. Block indexing of static error/duplicate HTML files ───────────────
const notFoundPath = path.join(outDir, "404.html");
if (fs.existsSync(notFoundPath)) {
  let notFoundHtml = fs.readFileSync(notFoundPath, "utf8");
  if (!/name="robots"/i.test(notFoundHtml)) {
    notFoundHtml = notFoundHtml.replace(
      "<head>",
      '<head><meta name="robots" content="noindex, nofollow" />'
    );
    fs.writeFileSync(notFoundPath, notFoundHtml, "utf8");
    console.log("  404.html: added noindex meta");
  }
}

const htaccess = `# ── SEO / routing for static Next.js export on Apache ───────────────
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Always serve SEO files as real static files (never SPA HTML fallback)
  RewriteRule ^(robots\\.txt|sitemap\\.xml|sitemap2\\.xml)$ - [L]

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

  # Canonical host: non-www
  RewriteCond %{HTTP_HOST} ^www\\.komfortpremium\\.eu [NC]
  RewriteRule ^ https://komfortpremium.eu%{REQUEST_URI} [R=301,L]

  # Duplicate homepage URLs -> single canonical /
  RewriteRule ^index\\.html$ https://komfortpremium.eu/ [R=301,L,NC]
  RewriteRule ^index/?$ https://komfortpremium.eu/ [R=301,L,NC]

  # Trailing slash for directory-like URLs only (not .xml/.json/.html files)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]+$
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteRule ^(.*)$ /$1/ [R=301,L]

  # Serve existing files/directories as-is
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # SPA fallback
  RewriteRule ^ index.html [L]
</IfModule>

<Files "sitemap.xml">
  <IfModule mod_headers.c>
    Header set Content-Type "application/xml; charset=UTF-8"
    Header set Cache-Control "public, max-age=3600"
  </IfModule>
</Files>

<Files "sitemap2.xml">
  <IfModule mod_headers.c>
    Header set Content-Type "application/xml; charset=UTF-8"
    Header set Cache-Control "public, max-age=3600"
  </IfModule>
</Files>

<Files "robots.txt">
  <IfModule mod_headers.c>
    Header set Content-Type "text/plain; charset=UTF-8"
    Header set Cache-Control "public, max-age=3600"
  </IfModule>
</Files>

<Files "404.html">
  <IfModule mod_headers.c>
    Header set X-Robots-Tag "noindex, nofollow"
  </IfModule>
</Files>

# ── MIME types ───────────────────────────────────────────────────────
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType font/woff2 .woff2
  AddType font/woff .woff
  AddType application/json .json
  AddType application/xml .xml
  AddType text/xml .xml
  AddType text/plain .txt
  AddType image/webp .webp
  AddType image/avif .avif
</IfModule>

# ── Gzip compression ────────────────────────────────────────────────
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json font/woff2 application/xml text/xml image/svg+xml
</IfModule>

# ── Cache control ────────────────────────────────────────────────────
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType image/avif "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType application/xml "access plus 1 day"
  ExpiresByType text/plain "access plus 1 day"
  ExpiresByType application/json "access plus 0 seconds"
</IfModule>

# ── Security headers ────────────────────────────────────────────────
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  # Opinie z Google — zawsze świeże (aktualizowane przez GitHub Actions)
  <Files "google-reviews.json">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </Files>
</IfModule>
`;


fs.writeFileSync(path.join(outDir, '.htaccess'), htaccess);
console.log('\n  Created .htaccess (MIME types, gzip, caching)');

// ── 5. Clean up debug files ──────────────────────────────────────────
const cleanTxtFiles = () => {
  fs.readdirSync(outDir).forEach(file => {
    if (file.endsWith('.txt') && file !== 'robots.txt') {
      fs.unlinkSync(path.join(outDir, file));
      console.log(`  Deleted debug file: ${file}`);
    }
  });
};
console.log('\nCleaning up debug files...');
cleanTxtFiles();

// ── 6. Summary ───────────────────────────────────────────────────────
const jsFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
const totalJs = jsFiles.reduce((sum, f) => sum + fs.statSync(path.join(chunksDir, f)).length, 0);

console.log('\n✅ Post-build complete!');
console.log(`   HTML: CSS inlined, font paths fixed`);
console.log(`   JS:   ${jsFiles.length} chunks in _next/ (${(totalJs / 1024).toFixed(0)} KB) — untouched`);
console.log(`   Fonts: copied to /fonts/`);
console.log(`   .htaccess: MIME types + gzip + caching`);
console.log(`   Sitemaps: sitemap.xml + sitemap2.xml (lastmod: ${lastmod})`);
console.log('\n📁 Upload entire contents of out/ to Hostinger public_html/');
