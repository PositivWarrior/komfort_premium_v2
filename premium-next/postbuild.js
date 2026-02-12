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

let cssContent = fs.readFileSync(path.join(chunksDir, cssFiles[0]), 'utf8');
console.log(`Found CSS: ${cssFiles[0]} (${cssContent.length} chars)`);

// 2. Determine build directory names (needed for path rewriting)
const staticDir = path.join(outDir, '_next', 'static');
const buildDirs = fs.readdirSync(staticDir).filter(d => {
  const full = path.join(staticDir, d);
  return fs.statSync(full).isDirectory() && d !== 'chunks' && d !== 'media';
});

const nextDir = path.join(outDir, '_next');
const nextTopDirs = fs.readdirSync(nextDir).filter(d => {
  const full = path.join(nextDir, d);
  return fs.statSync(full).isDirectory() && d !== 'static';
});

console.log(`Build dirs: ${buildDirs.join(', ')}`);
console.log(`Next top dirs: ${nextTopDirs.join(', ')}`);

// Helper: rewrite all _next paths in content
function rewritePaths(content) {
  content = content.replace(/\/_next\/static\/chunks\//g, '/js/');
  content = content.replace(/\/_next\/static\/media\//g, '/fonts/');
  buildDirs.forEach(dir => {
    content = content.replace(new RegExp(`/_next/static/${dir}/`, 'g'), `/js/${dir}/`);
  });
  nextTopDirs.forEach(dir => {
    content = content.replace(new RegExp(`/_next/${dir}/`, 'g'), `/js/${dir}/`);
  });
  // Catch-all: replace any remaining /_next/ with /js/ (Turbopack runtime uses this as prefix)
  content = content.replace(/\/_next\//g, '/js/');
  return content;
}

// 3. Copy fonts to /fonts/
const mediaDir = path.join(outDir, '_next', 'static', 'media');
const fontsDir = path.join(outDir, 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

if (fs.existsSync(mediaDir)) {
  fs.readdirSync(mediaDir)
    .filter(f => f.endsWith('.woff2') || f.endsWith('.woff') || f.endsWith('.ttf'))
    .forEach(file => {
      fs.copyFileSync(path.join(mediaDir, file), path.join(fontsDir, file));
      console.log(`  Copied font: ${file}`);
    });
}

// Fix font paths in CSS
cssContent = cssContent.replace(/\/_next\/static\/media\//g, '/fonts/');
cssContent = cssContent.replace(/\.\.\/media\//g, '/fonts/');
cssContent = cssContent.replace(/url\((['"]?)(?:\.\.\/)*media\//g, 'url($1/fonts/');

// 4. Copy & fix JS files to /js/
const jsDir = path.join(outDir, 'js');
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });

fs.readdirSync(chunksDir)
  .filter(f => f.endsWith('.js'))
  .forEach(file => {
    let content = fs.readFileSync(path.join(chunksDir, file), 'utf8');
    content = rewritePaths(content);
    fs.writeFileSync(path.join(jsDir, file), content);
    console.log(`  Fixed JS: ${file}`);
  });

// 5. Copy & fix build manifests
buildDirs.forEach(dir => {
  const srcDir = path.join(staticDir, dir);
  const destDir = path.join(jsDir, dir);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    if (fs.statSync(srcFile).isFile()) {
      if (file.endsWith('.js') || file.endsWith('.json')) {
        let content = fs.readFileSync(srcFile, 'utf8');
        content = rewritePaths(content);
        fs.writeFileSync(path.join(destDir, file), content);
      } else {
        fs.copyFileSync(srcFile, path.join(destDir, file));
      }
      console.log(`  Manifest: ${dir}/${file}`);
    }
  });
});

// Copy _next top-level dirs
nextTopDirs.forEach(dir => {
  const srcDir = path.join(nextDir, dir);
  const destDir = path.join(jsDir, dir);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    if (fs.statSync(srcFile).isFile()) {
      if (file.endsWith('.js') || file.endsWith('.json')) {
        let content = fs.readFileSync(srcFile, 'utf8');
        content = rewritePaths(content);
        fs.writeFileSync(path.join(destDir, file), content);
      } else {
        fs.copyFileSync(srcFile, path.join(destDir, file));
      }
    }
  });
});

// 6. Process HTML files - inline CSS + fix paths
function processHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Inline CSS
  html = html.replace(/<link[^>]*href="[^"]*\.css"[^>]*\/?>/g, `<style>${cssContent}</style>`);
  
  // Fix all _next paths
  html = rewritePaths(html);

  fs.writeFileSync(filePath, html);
  console.log(`  HTML: ${path.basename(filePath)}`);
}

// 7. Process TXT files (RSC payloads)
function processTxt(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = rewritePaths(content);
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`  TXT: ${path.basename(filePath)}`);
  }
}

// Walk directories
function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
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

// 8. Remove _next directory
fs.rmSync(path.join(outDir, '_next'), { recursive: true, force: true });
console.log('\nRemoved _next/');

// 9. Verify no _next references remain in output
let issues = 0;
function verify(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      verify(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/\/_next\//g);
      if (matches) {
        console.log(`  ⚠️  ${entry.name}: ${matches.length} remaining _next references`);
        issues++;
      }
    }
  });
}
verify(outDir);

if (issues === 0) {
  console.log('\n✅ All _next references eliminated!');
} else {
  console.log(`\n⚠️  ${issues} files still have _next references`);
}

console.log('\n✅ Post-build complete!');
console.log('Output: out/ → index.html, assets/, fonts/, js/');
