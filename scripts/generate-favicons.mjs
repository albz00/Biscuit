import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const src = path.join(publicDir, 'cursor-plane.png');
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function squareIcon(size) {
  const meta = await sharp(src).metadata();
  const scale = Math.min((size * 0.88) / meta.width, (size * 0.88) / meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const plane = await sharp(src).resize(w, h, { fit: 'inside' }).png().toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: transparent
    }
  }).composite([{ input: plane, gravity: 'center' }]);
}

async function main() {
  const favicon32 = await (await squareIcon(32)).png().toBuffer();
  const apple180 = await (await squareIcon(180)).png().toBuffer();
  const favicon16 = await (await squareIcon(16)).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), favicon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), favicon16);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), apple180);

  const { default: pngToIco } = await import('png-to-ico');
  const ico = await pngToIco([favicon16, favicon32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);

  const b64 = favicon32.toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <title>Elevation Aviation</title>
  <image width="32" height="32" href="data:image/png;base64,${b64}"/>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg);

  const manifest = {
    name: 'Elevation Aviation',
    short_name: 'Elevation',
    icons: [
      { src: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    theme_color: '#0c1629',
    background_color: '#0c1629',
    display: 'standalone'
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);

  console.log('Generated favicon-16.png, favicon-32.png, favicon.ico, apple-touch-icon.png, favicon.svg, site.webmanifest');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
