const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

console.log('=== Post-build: Inlining CSS and fixing paths ===\n');

// 1. Find the CSS file
const chunksDir = path.join(outDir, '_next', 'static', 'chunks');
const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.css'));

if (cssFiles.length === 0) {
  console.error('ERROR: No CSS files found!');
  process.exit(1);
}

// Read the CSS content
let cssContent = fs.readFileSync(path.join(chunksDir, cssFiles[0]), 'utf8');
console.log(`Found CSS: ${cssFiles[0]} (${cssContent.length} chars)`);

// 2. Copy font files to /fonts/ (simple top-level folder)
const mediaDir = path.join(outDir, '_next', 'static', 'media');
const fontsDir = path.join(outDir, 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

if (fs.existsSync(mediaDir)) {
  const fontFiles = fs.readdirSync(mediaDir).filter(f => 
    f.endsWith('.woff2') || f.endsWith('.woff') || f.endsWith('.ttf')
  );
  fontFiles.forEach(file => {
    fs.copyFileSync(path.join(mediaDir, file), path.join(fontsDir, file));
    console.log(`  Copied font: ${file}`);
  });
}

// Fix ALL font path patterns in CSS to be /fonts/
cssContent = cssContent.replace(/\/_next\/static\/media\//g, '/fonts/');
cssContent = cssContent.replace(/\.\.\/(media|static\/media)\//g, '/fonts/');
cssContent = cssContent.replace(/url\((['"]?)(?:\.\.\/)*media\//g, 'url($1/fonts/');

// 3. Copy JS files to /js/ (simple top-level folder)
const jsDir = path.join(outDir, 'js');
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });

const jsFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
jsFiles.forEach(file => {
  fs.copyFileSync(path.join(chunksDir, file), path.join(jsDir, file));
  console.log(`  Copied JS: ${file}`);
});

// Copy build manifests
const staticDir = path.join(outDir, '_next', 'static');
const buildDirs = fs.readdirSync(staticDir).filter(d => {
  const full = path.join(staticDir, d);
  return fs.statSync(full).isDirectory() && d !== 'chunks' && d !== 'media';
});

buildDirs.forEach(dir => {
  const srcDir = path.join(staticDir, dir);
  const destDir = path.join(jsDir, dir);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, path.join(destDir, file));
      console.log(`  Copied manifest: ${dir}/${file}`);
    }
  });
});

// Copy _next top-level dirs (build ID dirs)
const nextDir = path.join(outDir, '_next');
const nextTopDirs = fs.readdirSync(nextDir).filter(d => {
  const full = path.join(nextDir, d);
  return fs.statSync(full).isDirectory() && d !== 'static';
});

nextTopDirs.forEach(dir => {
  const srcDir = path.join(nextDir, dir);
  const destDir = path.join(jsDir, dir);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, path.join(destDir, file));
    }
  });
});

// 4. Process all HTML files - INLINE the CSS and fix JS paths
function processHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Replace the external CSS <link> with an inline <style> tag
  // Match: <link rel="stylesheet" href="/_next/static/chunks/XXXX.css" .../>
  const cssLinkRegex = /<link[^>]*href="[^"]*\/_next\/static\/chunks\/[^"]*\.css"[^>]*\/?>/g;
  html = html.replace(cssLinkRegex, `<style>${cssContent}</style>`);
  
  // Also handle already-processed /styles/ paths from previous runs
  const stylesLinkRegex = /<link[^>]*href="[^"]*\/styles\/[^"]*\.css"[^>]*\/?>/g;
  html = html.replace(stylesLinkRegex, `<style>${cssContent}</style>`);

  // Fix JS paths: /_next/static/chunks/ -> /js/
  html = html.replace(/\/_next\/static\/chunks\//g, '/js/');
  
  // Fix font preload paths: /_next/static/media/ -> /fonts/
  html = html.replace(/\/_next\/static\/media\//g, '/fonts/');
  
  // Fix build manifest paths
  buildDirs.forEach(dir => {
    const regex = new RegExp(`\\/_next\\/static\\/${dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/`, 'g');
    html = html.replace(regex, `/js/${dir}/`);
  });
  nextTopDirs.forEach(dir => {
    const regex = new RegExp(`\\/_next\\/${dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/`, 'g');
    html = html.replace(regex, `/js/${dir}/`);
  });

  fs.writeFileSync(filePath, html);
  console.log(`  Updated HTML: ${path.basename(filePath)}`);
}

// 5. Process all text (RSC payload) files
function processTxt(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  content = content.replace(/\/_next\/static\/chunks\//g, '/js/');
  content = content.replace(/\/_next\/static\/media\//g, '/fonts/');
  
  buildDirs.forEach(dir => {
    const regex = new RegExp(`\\/_next\\/static\\/${dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/`, 'g');
    content = content.replace(regex, `/js/${dir}/`);
  });
  nextTopDirs.forEach(dir => {
    const regex = new RegExp(`\\/_next\\/${dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/`, 'g');
    content = content.replace(regex, `/js/${dir}/`);
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`  Updated TXT: ${path.basename(filePath)}`);
  }
}

// Walk and process
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !['_next', 'fonts', 'js', 'node_modules'].includes(entry.name)) {
      walk(fullPath);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.html')) processHtml(fullPath);
      if (entry.name.endsWith('.txt')) processTxt(fullPath);
    }
  });
}

console.log('\nProcessing files...');
walk(outDir);

// 6. Remove _next directory entirely - it's no longer needed
fs.rmSync(path.join(outDir, '_next'), { recursive: true, force: true });
console.log('\nRemoved _next/ directory');

// 7. Clean up unnecessary files
['file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg'].forEach(f => {
  const p = path.join(outDir, f);
  if (fs.existsSync(p)) { fs.unlinkSync(p); }
});

console.log('\n✅ Post-build complete!');
console.log('Output structure:');
console.log('  out/');
console.log('  ├── index.html     (CSS inlined, JS paths fixed)');
console.log('  ├── assets/        (images)');
console.log('  ├── fonts/         (woff2 font files)');
console.log('  └── js/            (JavaScript files)');
