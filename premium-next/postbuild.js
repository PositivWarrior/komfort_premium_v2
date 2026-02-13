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

// ── 4. Create .htaccess for proper MIME types and caching ────────────
const htaccess = `# Ensure JS files are served with correct MIME type
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType font/woff2 .woff2
  AddType font/woff .woff
  AddType application/json .json
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json font/woff2
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
</IfModule>

# Allow serving files from _next directory
<IfModule mod_rewrite.c>
  RewriteEngine On
  # SPA fallback: serve index.html for non-file requests
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
`;

fs.writeFileSync(path.join(outDir, '.htaccess'), htaccess);
console.log('\n  Created .htaccess (MIME types, gzip, caching)');

// ── 5. Summary ───────────────────────────────────────────────────────
const jsFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
const totalJs = jsFiles.reduce((sum, f) => sum + fs.statSync(path.join(chunksDir, f)).length, 0);

console.log('\n✅ Post-build complete!');
console.log(`   HTML: CSS inlined, font paths fixed`);
console.log(`   JS:   ${jsFiles.length} chunks in _next/ (${(totalJs / 1024).toFixed(0)} KB) — untouched`);
console.log(`   Fonts: copied to /fonts/`);
console.log(`   .htaccess: MIME types + gzip + caching`);
console.log('\n📁 Upload entire contents of out/ to Hostinger public_html/');
