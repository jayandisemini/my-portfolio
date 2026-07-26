import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, ".output", "public");
const distDir = path.join(rootDir, "dist");
const assetsDir = path.join(publicDir, "assets");

console.log("Running Vercel postbuild static HTML generator...");

try {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  let cssFile = "";
  let jsFile = "";

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
    jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Jayandi Semini | Computer Science & Software Developer Portfolio</title>
    <meta name="description" content="Official personal portfolio of Jayandi Semini — Computer Science undergraduate passionate about full-stack web development, Flutter mobile apps, cloud computing, and UI/UX design." />
    <meta name="keywords" content="Jayandi Semini, Portfolio, Software Developer, Full-Stack, Flutter, React, TypeScript, Sri Lanka, Computer Science, UI/UX" />
    <meta name="author" content="Jayandi Semini" />
    <meta name="theme-color" content="#191924" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Jayandi Semini Portfolio" />
    <meta property="og:title" content="Jayandi Semini | Software Developer & Designer" />
    <meta property="og:description" content="Explore software projects, mobile applications, technical skills, and resume of Jayandi Semini." />
    <meta property="og:image" content="/profile.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jayandi Semini | Software Developer Portfolio" />
    <meta name="twitter:description" content="Computer Science undergraduate building full-stack web applications and cross-platform mobile apps." />
    <meta name="twitter:image" content="/profile.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;

  fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent, "utf-8");
  fs.writeFileSync(path.join(distDir, "index.html"), htmlContent, "utf-8");
  console.log("Successfully generated index.html in .output/public and dist!");

  // Copy assets to dist folder as well for fallback static hosters
  const distAssetsDir = path.join(distDir, "assets");
  if (!fs.existsSync(distAssetsDir)) {
    fs.mkdirSync(distAssetsDir, { recursive: true });
  }

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    for (const file of files) {
      fs.copyFileSync(path.join(assetsDir, file), path.join(distAssetsDir, file));
    }
  }

  // Copy public static files
  const rootPublicDir = path.join(rootDir, "public");
  if (fs.existsSync(rootPublicDir)) {
    const publicFiles = fs.readdirSync(rootPublicDir);
    for (const file of publicFiles) {
      fs.copyFileSync(path.join(rootPublicDir, file), path.join(distDir, file));
    }
  }

  console.log("Postbuild completed cleanly for Vercel deployment!");
} catch (err) {
  console.error("Postbuild error:", err);
}
