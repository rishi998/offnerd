/**
 * Copies SVG brand marks into public/logos/{bucket}/ from local simple-icons,
 * with CDN fallbacks for icons removed from newer releases.
 *
 * Run: npm run export-logos
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const nmIcons = path.join(root, "node_modules", "simple-icons", "icons");
const outRoot = path.join(root, "public", "logos");

/** @type {Array<[fileKey: string, slug: string, bucket: string]>} */
const LOCAL_ICONS = [
  ["notion", "notion", "productivity"],
  ["grammarly", "grammarly", "ai"],
  ["perplexity", "perplexity", "ai"],
  ["elevenlabs", "elevenlabs", "ai"],
  ["zapier", "zapier", "ai"],
  ["make", "make", "ai"],
  ["netflix", "netflix", "productivity"],
  ["spotify", "spotify", "productivity"],
  ["youtube", "youtube", "productivity"],
  ["audible", "audible", "productivity"],
  ["appletv", "appletv", "productivity"],
  ["cursor", "cursor", "dev"],
  ["github", "github", "dev"],
  ["gitlab", "gitlab", "dev"],
  ["githubcopilot", "githubcopilot", "dev"],
  ["postman", "postman", "dev"],
  ["insomnia", "insomnia", "dev"],
  ["jest", "jest", "dev"],
  ["cypress", "cypress", "dev"],
  ["googlecloud", "googlecloud", "dev"],
  ["vercel", "vercel", "dev"],
  ["netlify", "netlify", "dev"],
  ["firebase", "firebase", "dev"],
  ["digitalocean", "digitalocean", "dev"],
  ["kubernetes", "kubernetes", "dev"],
  ["mailchimp", "mailchimp", "productivity"],
  ["hubspot", "hubspot", "productivity"],
  ["meta", "meta", "productivity"],
  ["googleads", "googleads", "productivity"],
  ["figma", "figma", "design"],
  ["zoom", "zoom", "productivity"],
  ["discord", "discord", "productivity"],
  ["stripe", "stripe", "finance"],
  ["razorpay", "razorpay", "finance"],
  ["intuit", "intuit", "finance"],
  ["framer", "framer", "design"],
  ["googlegemini", "googlegemini", "ai"],
  ["mongodb", "mongodb", "dev"],
  ["coursera", "coursera", "productivity"],
  ["jetbrains", "jetbrains", "dev"],
  ["webflow", "webflow", "design"],
  ["flutter", "flutter", "dev"],
  ["linear", "linear", "dev"],
  ["supabase", "supabase", "dev"],
  ["replit", "replit", "dev"],
  ["v0", "v0", "dev"],
  ["loom", "loom", "productivity"],
  ["tinder", "tinder", "productivity"],
  ["jio", "jio", "productivity"],
];

/** simple-icons pack version that still shipped some marks absent today */
const LEGACY_VER = "v9.20.0";

/** @type {Array<[fileKey: string, slug: string, bucket: string]>} */
const LEGACY_FETCH = [
  ["openai", "openai", "ai"],
  ["amazonprime", "primevideo", "productivity"],
  ["vscode", "visualstudiocode", "dev"],
  ["aws", "amazonaws", "dev"],
  ["codeium", "codeium", "dev"],
  ["microsoftazure", "microsoftazure", "dev"],
  ["canva", "canva", "design"],
  ["adobe", "adobe", "design"],
  ["slack", "slack", "productivity"],
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyLocal(fileKey, slug, bucket) {
  const src = path.join(nmIcons, `${slug}.svg`);
  const destDir = path.join(outRoot, bucket);
  ensureDir(destDir);
  const dest = path.join(destDir, `${fileKey}.svg`);
  if (!fs.existsSync(src)) {
    console.warn(`[missing local] ${slug}.svg → ${bucket}/${fileKey}.svg`);
    return false;
  }
  fs.copyFileSync(src, dest);
  console.log(`[copy] ${bucket}/${fileKey}.svg`);
  return true;
}

async function fetchLegacy(fileKey, slug, bucket) {
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@${LEGACY_VER}/icons/${slug}.svg`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`[fetch fail] ${url} (${res.status})`);
    return false;
  }
  const destDir = path.join(outRoot, bucket);
  ensureDir(destDir);
  const dest = path.join(destDir, `${fileKey}.svg`);
  fs.writeFileSync(dest, await res.text(), "utf8");
  console.log(`[fetch] ${bucket}/${fileKey}.svg`);
  return true;
}

ensureDir(outRoot);
for (const row of LOCAL_ICONS) {
  copyLocal(...row);
}
for (const row of LEGACY_FETCH) {
  await fetchLegacy(...row);
}

console.log("Done. Hand-authored SVGs (if any) live beside these under public/logos/.");
