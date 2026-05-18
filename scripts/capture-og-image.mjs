import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const url = process.env.OG_CAPTURE_URL || 'http://localhost:5173/';
const width = 1200;
const height = 630;

await mkdir(publicDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height } });

await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
// Splash screen (~1.4s) + fade; extra buffer for hero images
await page.waitForTimeout(3000);

const pngPath = path.join(publicDir, 'og-image.png');
await page.screenshot({ path: pngPath, type: 'png' });

await browser.close();

// JPEG for smaller share payloads; keep PNG as primary OG asset
const jpgPath = path.join(publicDir, 'og-image.jpg');
await sharp(pngPath).jpeg({ quality: 88, mozjpeg: true }).toFile(jpgPath);

console.log(`Saved ${pngPath}`);
console.log(`Saved ${jpgPath}`);
