import { build } from 'esbuild';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = await build({
  absWorkingDir: root, entryPoints: ['src/components/generated/sceneConfig.ts'],
  bundle: true, write: false, platform: 'node', format: 'esm'
});
const { normalizeSceneConfig, parseScenePreferences, defaultScene } = await import(
  'data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64')
);

for (const value of [null, [], 0, 'old preferences', { particles: [] }]) {
  assert.deepEqual(normalizeSceneConfig(value), defaultScene);
}
for (const serialized of [null, '', '{broken', 'false']) {
  assert.deepEqual(parseScenePreferences(serialized), defaultScene);
}
const normalized = normalizeSceneConfig({
  glass: -20, glassColor: Infinity,
  particles: { brightness: 200, layers: 14.7, speed: -1, direction: 999, glow: NaN, randomize: false, blink: 'false', warp: true }
});
assert.equal(normalized.glass, .4);
assert.equal(normalized.glassColor, .8);
assert.equal(normalized.particles.brightness, 2);
assert.equal(normalized.particles.layers, 15);
assert.equal(normalized.particles.speed, 0);
assert.equal(normalized.particles.direction, 360);
assert.equal(normalized.particles.glow, defaultScene.particles.glow);
assert.equal(normalized.particles.randomize, false);
assert.equal(normalized.particles.blink, true);
assert.equal(normalized.particles.warp, true);
const restored = parseScenePreferences(JSON.stringify(normalized));
assert.deepEqual(restored, normalized);
restored.particles.brightness = .5;
assert.equal(normalized.particles.brightness, 2);
assert.equal(defaultScene.particles.brightness, 1.2);
console.log('Scene preferences: invalid input, limits, round-trip and independent defaults passed');
