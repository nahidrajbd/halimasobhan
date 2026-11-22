// Post-build SEO pass for halimasobhan.org (single-page Vite site).
// Runs after `vite build`:
//   1. Verifies the built homepage carries the correct self-canonical,
//      absolute social image URLs and the NGO + WebSite JSON-LD graph.
//   2. Writes dist/robots.txt and dist/sitemap.xml (single public route).
//   3. Writes dist/404.html, a standalone Bengali 404 page. On Cloudflare
//      Pages, public/_redirects ("/* /404.html 404") makes unknown URLs
//      return this page with a real 404 status instead of the SPA shell.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, "dist");
const SITE = "https://halimasobhan.org";
const LASTMOD = "2026-11-22";

// --- 1. Homepage meta check -------------------------------------------------
const indexPath = path.join(distDir, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

if (!html.includes(`<link rel="canonical" href="${SITE}/" />`)) {
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${SITE}/" />`
  );
  console.log("prerender: fixed canonical");
}
if (!html.includes(`${SITE}/images/hero.jpg`)) {
  html = html.replaceAll('content="/images/hero.jpg"', `content="${SITE}/images/hero.jpg"`);
  console.log("prerender: fixed social image URLs");
}
if (!html.includes('"@type": "NGO"')) {
  throw new Error("prerender: NGO JSON-LD missing from built index.html");
}
fs.writeFileSync(indexPath, html);
console.log("prerender: homepage meta verified");

// --- 2. robots.txt + sitemap.xml --------------------------------------------
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, "robots.txt"), robots);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log("prerender: wrote robots.txt and sitemap.xml");

// --- 3. Standalone 404 page ---------------------------------------------------
const notFound = `<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>পেজ পাওয়া যায়নি | Halima Sobhan Foundation</title>
    <meta name="description" content="দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি। হালিমা সোবহান ফাউন্ডেশনের হোম পেজে ফিরে যান।" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <style>
      body { margin: 0; font-family: "Hind Siliguri", "Noto Sans Bengali", sans-serif; background: #FCFBF7; color: #1f2937; display: flex; min-height: 100vh; align-items: center; justify-content: center; }
      main { text-align: center; padding: 2rem; max-width: 34rem; }
      .code { font-size: 4rem; font-weight: 700; color: #991b1b; margin: 0; }
      h1 { font-size: 1.75rem; margin: 0.5rem 0 1rem; }
      p { line-height: 1.7; margin: 0 0 1.5rem; }
      a { display: inline-block; background: #991b1b; color: #fff; text-decoration: none; padding: 0.75rem 1.75rem; border-radius: 9999px; font-weight: 600; }
    </style>
  </head>
  <body>
    <main>
      <p class="code">404</p>
      <h1>পেজটি পাওয়া যায়নি</h1>
      <p>দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি অথবা সরিয়ে নেওয়া হয়েছে।</p>
      <a href="/">হোম পেজে ফিরে যান</a>
    </main>
  </body>
</html>
`;
fs.writeFileSync(path.join(distDir, "404.html"), notFound);
console.log("prerender: wrote 404.html");
console.log("prerender done");
