import { build } from 'esbuild';
import ts from 'typescript';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const entry = 'magicpath/CENTER.compat.tsx';
const code = await readFile(path.join(root, entry), 'utf8');
const parsed = ts.createSourceFile(entry, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
assert.equal(parsed.parseDiagnostics.length, 0, 'Generated TSX must be valid syntax');
const result = await build({
  absWorkingDir: root, entryPoints: [entry], bundle: true, write: false,
  platform: 'browser', format: 'esm', jsx: 'automatic', metafile: true,
  external: ['react', 'react/jsx-runtime']
});
const output = Object.values(result.metafile.outputs)[0];
assert.deepEqual(new Set(output.exports), new Set(['CENTER', 'default']));
assert.ok(output.imports.every(i => i.external && ['react', 'react/jsx-runtime'].includes(i.path)));
assert.equal(Object.keys(result.metafile.inputs).length, 1, 'No local component imports allowed');
assert.ok(!/["']assets\//.test(code), 'No relative image paths allowed');
assert.ok(code.includes('data-center-material') && code.includes('backdropFilter'), 'Styles and real glass must be bundled');
const assetBase = 'https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/';
const paths = [...new Set([...code.matchAll(/https:\/\/raw\.githubusercontent\.com\/aldonastal797-star\/center-cockpit-liquid-glass\/main\/public\/assets\/([\w/.-]+)/g)].map(m => m[1]))];
assert.ok(paths.length >= 8, 'Scene, glass maps and font must all be included');
for (const asset of paths) await access(path.join(root, 'public/assets', asset));
console.log(`MagicPath compatibility: one file, React-only imports, both exports, syntax and ${paths.length} assets passed (${assetBase})`);
