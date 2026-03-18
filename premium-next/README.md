# Komfort Premium - Next.js Project

This project is a completely rewritten, modern, and multilingual (PL / EN) business showcase website for **Komfort Premium** using **Next.js 16 (React 19)**. The goal of the migration to Next.js using static HTML/JS/CSS export (`output: 'export'`) is to achieve extremely high performance, maximum SEO optimization, responsiveness, and independence from heavy plugins (formerly WordPress).

## 💡 Key Features

- **Static Export (SSG/Export):** During the build phase, the project generates fully static files (HTML, CSS, JS), designed for free shared hosting environments like Hostinger.
- **Post-build Script (`postbuild.js`):** An advanced process that optimizes the generated files for hosting: it minifies CSS (inlining it directly into HTML), cleans up Next.js `.txt` debug files, organizes font structure, and generates a custom `.htaccess` file for Apache servers - handling caching and MIME types.
- **Multilingual (i18n):** Seamless language switching (Polish / English) on the client side based on global state via React context (`LanguageContext.jsx`), without requiring a page reload.
- **Google Maps Reviews:** Automatic and stateless display of the latest ratings from the Google My Business profile. Reviews are fetched at build time thanks to the built-in `fetch-google-reviews.js` script. This reduces API requests to absolute zero during user visits.
- **Advanced SEO Mechanisms:** Modern SEO practices using the native `metadata` API and `<head>` tags generated during the build (Schema.org JSON-LD, OpenGraph, Canonical tags).
- **Component-based UI:** Modern and structured components (`Header`, `Footer`, `Hero Section`, `Reviews`). Animations rely on pure CSS and efficient interactions with `window.scrollY`.

## 🛠️ Technology Stack

- **Framework:** Next.js 16.1 (App Router)
- **Library:** React 19 / React DOM
- **Styling:** Pure CSS (`globals.css` and modules based on variables and classes)
- **On-the-fly Tasks:** Node.js scripts (`postbuild.js` and `fetch-google-reviews.js`)

## 🏗️ Project Structure

```text
premium-next/
├── public/                     # Static assets copied 1:1 to the server
│   ├── assets/                 # Background images, logo, fleet graphics
│   ├── favicon.ico             # Global icon
│   ├── sitemap.xml             # Sitemap (static for SEO)
│   ├── robots.txt              # Rules for SEO crawlers
│   └── manifest.json           # Basic PWA parameters
├── scripts/                    # Pre-run scripts
│   └── fetch-google-reviews.js # Google reviews fetching (requires API KEY)
├── src/                        
│   ├── app/                    # Next.js App Router files (base pages)
│   │   ├── globals.css         # Global styles base
│   │   ├── inline-styles.css   # Additional custom style overrides
│   │   ├── layout.jsx          # Outermost layout (header, SEO)
│   │   └── page.jsx            # Main page with all sections combined
│   ├── components/             # Reusable sections and UI blocks
│   │   ├── Header.jsx          # Navigation menu, transparent and "glass" on scroll
│   │   ├── Footer.jsx          # Bottom navigation and footer
│   │   └── Reviews.jsx         # Component responsible for the Reviews carousel
│   ├── context/
│   │   └── LanguageContext.jsx # Provides t(key) -> val (pl/en dictionary)
│   └── data/
│       └── google-reviews.json # Last successfully fetched Google reviews. (Replaced on npm run prebuild)
├── postbuild.js                # Script run AFTER build (optimization for Hostinger)
├── next.config.mjs             # Next config (requires "output: export")
└── package.json                # List of dependencies and useful NPM scripts
```

## 🚀 Running the Project Locally

1. Navigate to the `premium-next/` folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The website will be available at: [http://localhost:3000](http://localhost:3000). In the background, Next.js compiles the files you modify in real-time.

## 🔑 API Keys (Google Places for reviews)

For the application to fetch new, latest customer reviews from Google My Business on every "build", you need to create a `.env.local` file in the root folder:

Set the following variables in the file:
```env
# Google API Key (active Places API (Legacy))
GOOGLE_PLACES_API_KEY=your_api_key
# Optional (if you have a different place ID):
GOOGLE_PLACE_ID=ChIJG2ww4MCTMkcRvgaBdLz1z9A
```
*If you skip this step, during the `npm run build` command, the old reviews will still be displayed without errors (based on the local cache).*

## 📦 Building and Deployment (Hostinger)

The project is specially adapted for deployment on **Hostinger** without the need for a Node.js VPS cloud, using a free architecture on standard Web Hosting plans (e.g., "Single" or "Premium"). You just need to build the project and upload the prepared files to your Hostinger FTP/Panel.

Command for optimal production build:

```bash
npm run build
```

**What does this command do? (Step by step)**

1. `npm run prebuild`: The script connects to the Google API and fetches the 5 newest reviews (if `GOOGLE_PLACES_API_KEY` exists; if not, it keeps the current ones).
2. `next build`: The tool compiles Next.js and outputs the generated, static, and javascript-sandboxed application skeleton into the newly created `out/` folder.
3. `npm run postbuild`: The internal custom `postbuild.js` script runs:
    - Extracts all CSS and embeds it natively using `<style>` elements (significantly improves PageSpeed metrics).
    - Fixes and flattens paths to local fonts (`/fonts/`).
    - Generates a crucial `.htaccess` file enabling GZIP protocols and months-long browser caching for Next's static files.
    - Deletes Next.js `.txt` debug files and metadata unnecessary for public operation.

**Final Go-Live (Deploy):**

1. Take the contents from inside the newly created production folder: `out/`.
2. Move all folders and files 1-to-1 from the `out` folder to your Hostinger server, directly into the public folder assigned to the domain (most commonly `domains/yourdomain.com/public_html/`). Done!
