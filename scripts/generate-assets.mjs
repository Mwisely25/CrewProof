import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);
const outputPath = join(root, "assets", "crewproof-field-map.png");
const width = 1400;
const height = 900;

function clamp(value, min = 0, max = 255) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function crc32(buffer) {
  let crc = -1;

  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }

  return (crc ^ -1) >>> 0;
}

function chunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);

  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);

  return Buffer.concat([length, typeBuffer, data, crc]);
}

function distanceToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared));
  const x = ax + t * dx;
  const y = ay + t * dy;

  return Math.hypot(px - x, py - y);
}

function addLight(color, x, y, cx, cy, radius, tint) {
  const distance = Math.hypot(x - cx, y - cy);
  const strength = Math.max(0, 1 - distance / radius) ** 2;

  color[0] += tint[0] * strength;
  color[1] += tint[1] * strength;
  color[2] += tint[2] * strength;
}

function paintPixel(x, y) {
  const nx = x / width;
  const ny = y / height;
  const color = [14 + nx * 22, 24 + ny * 18, 22 + nx * 12];

  addLight(color, x, y, 1040, 220, 560, [18, 96, 62]);
  addLight(color, x, y, 360, 720, 480, [24, 74, 118]);

  const gridX = x % 92;
  const gridY = y % 92;
  if (gridX < 2 || gridY < 2) {
    color[0] += 16;
    color[1] += 19;
    color[2] += 18;
  }

  const roads = [
    distanceToSegment(x, y, 90, 280, 1320, 190),
    distanceToSegment(x, y, 170, 700, 1260, 650),
    distanceToSegment(x, y, 270, 110, 1120, 805),
    distanceToSegment(x, y, 170, 510, 1180, 370),
  ];

  if (Math.min(...roads) < 8) {
    color[0] = color[0] * 0.35 + 82;
    color[1] = color[1] * 0.35 + 92;
    color[2] = color[2] * 0.35 + 96;
  }

  const route = [
    distanceToSegment(x, y, 190, 600, 430, 430),
    distanceToSegment(x, y, 430, 430, 710, 485),
    distanceToSegment(x, y, 710, 485, 1010, 300),
    distanceToSegment(x, y, 1010, 300, 1210, 520),
  ];

  if (Math.min(...route) < 13) {
    color[0] = 48;
    color[1] = 192;
    color[2] = 126;
  }

  const pins = [
    [190, 600, 34, [47, 192, 126]],
    [710, 485, 34, [228, 183, 75]],
    [1210, 520, 34, [230, 97, 82]],
    [1010, 300, 24, [99, 168, 245]],
  ];

  for (const [cx, cy, radius, tint] of pins) {
    const distance = Math.hypot(x - cx, y - cy);
    if (distance < radius) {
      color[0] = tint[0];
      color[1] = tint[1];
      color[2] = tint[2];
    }
  }

  const grain = ((x * 13 + y * 29 + (x ^ y) * 5) % 19) - 9;
  return [clamp(color[0] + grain), clamp(color[1] + grain), clamp(color[2] + grain), 255];
}

const raw = Buffer.alloc((width * 4 + 1) * height);
let offset = 0;

for (let y = 0; y < height; y += 1) {
  raw[offset] = 0;
  offset += 1;

  for (let x = 0; x < width; x += 1) {
    const [red, green, blue, alpha] = paintPixel(x, y);
    raw[offset] = red;
    raw[offset + 1] = green;
    raw[offset + 2] = blue;
    raw[offset + 3] = alpha;
    offset += 4;
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND"),
  ]),
);

console.log(`Generated ${outputPath}`);
