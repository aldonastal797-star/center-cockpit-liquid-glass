import { GlassSurface } from './GlassSurface';
import { defaultScene, originalParticles, particlePresets } from './sceneConfig';
import type { ParticleConfig, SceneConfig } from './sceneConfig';
export function SceneSettings({
  config,
  onChange,
  paused,
  onPause,
  onClose,
  fallback
}: {
  config: SceneConfig;
  onChange: (config: SceneConfig) => void;
  paused: boolean;
  onPause: () => void;
  onClose: () => void;
  fallback: boolean;
}) {
  const p = config.particles;
  const patch = (changes: Partial<ParticleConfig>) => onChange({
    ...config,
    particles: {
      ...p,
      ...changes
    }
  });
  const slider = (key: keyof ParticleConfig, label: string, min: number, max: number, step: number, unit = '') => <label className="scene-slider" key={key}>
      <span>{label}<output>{Number(p[key]).toFixed(step >= 1 ? 0 : step >= .01 ? 2 : 3)}{unit}</output></span>
      <input type="range" aria-label={label} min={min} max={max} step={step} value={Number(p[key])} onChange={e => patch({
      [key]: Number(e.target.value)
    })} />
    </label>;
  return <section className="panel liquid-glass-strong expanded-panel scene-settings" aria-labelledby="scene-settings-title"><GlassSurface />
    <div className="panel-heading"><h2 id="scene-settings-title">场景调节</h2><button type="button" onClick={onClose} aria-label="关闭场景调节">关闭</button></div>
    <p className="settings-description">找到你喜欢的星光与玻璃质感。调整即时生效，自动保存在此浏览器。</p>
    {fallback && <p className="settings-fallback" role="status">当前设备使用柔光粒子兼容模式。</p>}
    <fieldset className="scene-presets"><legend>星光风格</legend><div>{Object.entries(particlePresets).map(([name, preset]) => <button type="button" key={name} aria-pressed={Object.keys(preset).every(k => p[k as keyof ParticleConfig] === preset[k as keyof ParticleConfig])} onClick={() => onChange({
          ...config,
          particles: {
            ...preset
          }
        })}>{name}</button>)}</div></fieldset>
    <fieldset className="scene-controls"><legend>粒子</legend>
      {slider('brightness', '亮度', .3, 2, .05)}
      {slider('layers', '丰富度', 8, 30, 1)}
      {slider('speed', '漂移速度', 0, .6, .01)}
      {slider('glow', '光点锐度', .1, .85, .01)}
      {slider('size', '柔光范围', .005, .08, .005)}
      {slider('scale', '星光尺度', .4, 1.2, .05)}
      <label className="scene-switch"><span>分层随机漂移</span><input type="checkbox" checked={p.randomize} onChange={e => patch({
          randomize: e.target.checked
        })} /></label>
      {!p.randomize && slider('direction', '漂移方向', 0, 360, 1, '°')}
      <label className="scene-switch"><span>柔和闪烁</span><input type="checkbox" checked={p.blink} onChange={e => patch({
          blink: e.target.checked
        })} /></label>
      <label className="scene-switch"><span>跃迁效果</span><input type="checkbox" checked={p.warp} onChange={e => patch({
          warp: e.target.checked
        })} /></label>
    </fieldset>
    <fieldset className="scene-controls"><legend>面板材质</legend><label className="scene-slider"><span>透光色泽<output>{Math.round((config.glassColor ?? .8) * 100)}%</output></span><input type="range" aria-label="透光色泽" min="0" max="1" step=".05" value={config.glassColor ?? .8} onChange={e => onChange({
          ...config,
          glassColor: Number(e.target.value)
        })} /></label><label className="scene-slider"><span>玻璃强度<output>{Math.round(config.glass * 100)}%</output></span>
      <input type="range" aria-label="玻璃强度" min=".4" max="1" step=".05" value={config.glass} onChange={e => onChange({
          ...config,
          glass: Number(e.target.value)
        })} /></label></fieldset>
    <div className="settings-footer"><button type="button" className="motion-toggle liquid-glass" aria-pressed={paused} onClick={onPause}><GlassSurface compact />{paused ? '继续航行' : '暂停航行'}</button>
      <button type="button" className="settings-reset" onClick={() => onChange({
        ...defaultScene,
        particles: {
          ...originalParticles
        }
      })}>恢复默认</button></div>
  </section>;
}