/** Shared configuration has no React or rendering dependencies. */
export type ParticleConfig = {
  brightness: number;
  layers: number;
  speed: number;
  glow: number;
  scale: number;
  size: number;
  direction: number;
  randomize: boolean;
  blink: boolean;
  warp: boolean;
};

export type SceneConfig = {
  particles: ParticleConfig;
  glass: number;
  glassColor?: number;
};

export const originalParticles: ParticleConfig = {
  brightness: 1.2, layers: 30, speed: .15, glow: .25, scale: .7,
  size: .01, direction: 200, randomize: true, blink: true, warp: false
};

export const defaultScene: SceneConfig = {
  particles: { ...originalParticles }, glass: 1, glassColor: .8
};

export const particlePresets: Record<string, ParticleConfig> = {
  '原版柔光': originalParticles,
  '深空微光': { ...originalParticles, brightness: .85, layers: 26, speed: .1, glow: .22 },
  '清晰星光': { ...originalParticles, brightness: 1.45, glow: .48, size: .015 }
};

type NumericParticleKey = {
  [K in keyof ParticleConfig]: ParticleConfig[K] extends number ? K : never
}[keyof ParticleConfig];

const particleLimits: Record<NumericParticleKey, readonly [number, number]> = {
  brightness: [.3, 2], layers: [8, 30], speed: [0, .6], glow: [.1, .85],
  scale: [.4, 1.2], size: [.005, .08], direction: [0, 360]
};

function record(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown> : {};
}

function bounded(value: unknown, fallback: number, min: number, max: number) {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.min(max, Math.max(min, value)) : fallback;
}

/** Never trust old or partial browser preferences; always return a fresh object. */
export function normalizeSceneConfig(value: unknown): SceneConfig {
  const saved = record(value);
  const savedParticles = record(saved.particles);
  const particles = { ...originalParticles };
  for (const key of Object.keys(particleLimits) as NumericParticleKey[]) {
    const [min, max] = particleLimits[key];
    particles[key] = bounded(savedParticles[key], particles[key], min, max);
  }
  particles.layers = Math.round(particles.layers);
  for (const key of ['randomize', 'blink', 'warp'] as const) {
    if (typeof savedParticles[key] === 'boolean') particles[key] = savedParticles[key];
  }
  return {
    particles,
    glass: bounded(saved.glass, defaultScene.glass, .4, 1),
    glassColor: bounded(saved.glassColor, defaultScene.glassColor ?? .8, 0, 1)
  };
}

export function parseScenePreferences(serialized: string | null): SceneConfig {
  try { return normalizeSceneConfig(JSON.parse(serialized ?? 'null')); }
  catch { return normalizeSceneConfig(null); }
}
