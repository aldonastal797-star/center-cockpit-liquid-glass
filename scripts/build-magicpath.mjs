import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const assetBase = 'https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/';
const generated = path.join(root, 'src/components/generated');
const cssPath = path.join(generated, 'CENTER.css');
const originalCss = await readFile(cssPath, 'utf8');

// Keep the font in the public repository instead of consuming the editor's token budget.
const font = originalCss.match(/data:font\/ttf;base64,([A-Za-z0-9+/=]+)/);
if (!font) throw new Error('Expected bundled Chinese font not found');
await mkdir(path.join(root, 'public/assets/fonts'), { recursive: true });
await writeFile(path.join(root, 'public/assets/fonts/CenterChinese.ttf'), Buffer.from(font[1], 'base64'));

const helpers = `
.center-app .relative{position:relative}
.center-app .bg-black{background:#000}
.center-app .opacity-0{opacity:0}
.center-app .opacity-20{opacity:.2}
.center-app .opacity-100{opacity:1}
.center-app .pointer-events-none{pointer-events:none}
.center-app .mix-blend-overlay{mix-blend-mode:overlay}
`;

const result = await build({
  absWorkingDir: root,
  stdin: {
    contents: `import { CENTER as Cockpit } from './src/components/generated/CENTER';
import css from './src/components/generated/CENTER.css';
export function CENTER() { return <><style data-center-material="liquid-glass-react">{css}</style><Cockpit /></>; }
export default CENTER;`,
    resolveDir: root,
    sourcefile: 'magicpath-entry.tsx',
    loader: 'tsx'
  },
  bundle: true,
  write: false,
  platform: 'browser',
  format: 'esm',
  target: 'es2020',
  jsx: 'automatic',
  external: ['react', 'react/jsx-runtime'],
  metafile: true,
  plugins: [{
    name: 'inline-center-css',
    setup(buildApi) {
      buildApi.onLoad({ filter: /CENTER\.css$/ }, () => ({
        contents: `export default ${JSON.stringify(originalCss.replace(font[0], assetBase + 'fonts/CenterChinese.ttf') + helpers)};`,
        loader: 'js'
      }));
    }
  }]
});

const license = await readFile(path.join(generated, 'liquid-glass/LICENSE.txt'), 'utf8');
const header = `// @ts-nocheck
// GENERATED JavaScript packaged as TSX for MagicPath. Do not hand-edit.
// Typed source is checked with strict TypeScript before generation.
// Regenerate: npm run magicpath:bundle
// Images and font remain network assets; only React is required from the host.
/* Liquid Glass React 1.1.1 — original MIT source bundled below.
${license.trim()}
*/
`;
const compiled = result.outputFiles[0].text.replace(/(["'])assets\//g, '$1' + assetBase);
const output = header + compiled;
await mkdir(path.join(root, 'magicpath'), { recursive: true });
await writeFile(path.join(root, 'magicpath/CENTER.compat.tsx'), output);
console.log(`Generated magicpath/CENTER.compat.tsx (${Buffer.byteLength(output)} bytes)`);
console.log('External runtime imports: ' + [...new Set(Object.values(result.metafile.outputs).flatMap(o => o.imports.map(i => i.path)))].join(', '));
