import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Extract tightly framed portrait with comfortable headroom (removing 140px empty space above hair)
const cutout = sharp('niladri-clean-cutout.png')
  .extract({ left: 0, top: 140, width: 745, height: 884 });

for (const w of [1100, 720, 420]) {
  await cutout
    .clone()
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
  console.log(`Generated ${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on Netflix dark backdrop with crimson glow
const portraitCutout = await cutout
  .clone()
  .resize({ height: 605 })
  .png()
  .toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="75%" cy="45%" r="50%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.48"/>
            <stop offset="60%" stop-color="#e5132b" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#glow)"/>
      </svg>`),
    },
    { input: portraitCutout, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="285" font-family="Impact, 'Arial Narrow', sans-serif" font-size="126" fill="#f4f1ec" letter-spacing="4">NILADRI</text>
        <text x="78" y="340" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL-STACK DEVELOPER • CLOUD • REACT &amp; NODE.JS</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images rebuilt with larger portrait framing.');
