import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });

const w = 1600, h = 700;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="55%" r="80%">
      <stop offset="0%" stop-color="#bcbab9"/>
      <stop offset="60%" stop-color="#a4a2a1"/>
      <stop offset="100%" stop-color="#7f7d7c"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`;

await sharp(Buffer.from(svg))
  .grayscale()
  .jpeg({ quality: 82 })
  .toFile('public/images/photo-placeholder.jpg');

console.log('wrote public/images/photo-placeholder.jpg');