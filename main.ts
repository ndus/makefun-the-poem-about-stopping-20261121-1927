const fs = require('node:fs');
const path = require('node:path');

const TEXT = 'My thumb waits above Send.\nThe blue arrow stays lit.\nI close the laptop.\nIn the dark glass,\nmy hand unclenches first.';

if ([...TEXT].length < 1 || [...TEXT].length > 280) {
  throw new Error(`Poem must be 1–280 Unicode characters; got ${[...TEXT].length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), TEXT, 'utf8');
