import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './CENTER.css';
import { Earth } from './Earth';
import { SpaceParticles } from './SpaceParticles';
import { SceneSettings, defaultScene, SceneConfig } from './SceneSettings';
import { GlassSurface, GlassContext } from './GlassSurface';
const sections = ['驾驶舱', '今日', '学习', '项目', 'AI', '更多'];
const initialTasks = [{
  title: '英语 · 阅读训练',
  time: '进行中 14:00',
  done: false
}, {
  title: '项目 · 需求梳理',
  time: '19:00',
  done: false
}, {
  title: '复盘 · 知识整理',
  time: '21:00',
  done: false
}, {
  title: '数学 · 习题练习',
  time: '已完成',
  done: true
}];
export const CENTER = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [section, setSection] = useState('驾驶舱');
  const [paused, setPaused] = useState(false);
  const [sceneConfig, setSceneConfig] = useState<SceneConfig>(defaultScene);
  const [particlesFallback, setParticlesFallback] = useState(false);
  const [preferencesReady, setPreferencesReady] = useState(false);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('center-scene-v1') || 'null');
      if (saved && typeof saved === 'object') {
        const p = {
          ...defaultScene.particles
        };
        const limits: Record<string, [number, number]> = {
          brightness: [.3, 2],
          layers: [8, 30],
          speed: [0, .6],
          glow: [.1, .85],
          scale: [.4, 1.2],
          size: [.005, .08],
          direction: [0, 360]
        };
        for (const key of Object.keys(p) as Array<keyof typeof p>) {
          const value = saved.particles?.[key];
          if (typeof p[key] === 'boolean' && typeof value === 'boolean') Object.assign(p, {
            [key]: value
          });else if (limits[key] && typeof value === 'number' && Number.isFinite(value)) {
            const [min, max] = limits[key];
            Object.assign(p, {
              [key]: Math.min(max, Math.max(min, value))
            });
          }
        }
        p.layers = Math.round(p.layers);
        setSceneConfig({
          particles: p,
          glassColor: typeof saved.glassColor === 'number' && Number.isFinite(saved.glassColor) ? Math.max(0, Math.min(1, saved.glassColor)) : .8,
          glass: typeof saved.glass === 'number' && Number.isFinite(saved.glass) ? Math.max(.4, Math.min(1, saved.glass)) : 1
        });
      }
    } catch {/* Storage may be unavailable in private previews. */}
    setPreferencesReady(true);
  }, []);
  useEffect(() => {
    if (!preferencesReady) return;
    const id = setTimeout(() => {
      try {
        localStorage.setItem('center-scene-v1', JSON.stringify(sceneConfig));
      } catch {}
    }, 250);
    return () => clearTimeout(id);
  }, [sceneConfig, preferencesReady]);
  useEffect(() => {
    if (section !== '更多') return;
    if (innerWidth <= 760) requestAnimationFrame(() => document.querySelector('.scene-settings')?.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    }));
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSection('驾驶舱');
        requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('.scene-open')?.focus());
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [section]);
  const [cameraFocused, setCameraFocused] = useState(false);
  const [camera, setCamera] = useState({
    x: 0,
    y: 0,
    scale: 1
  });
  const rootRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const stationRef = useRef<HTMLDivElement>(null);
  const stationButtonRef = useRef<HTMLButtonElement>(null);
  const returnToWide = () => {
    setCameraFocused(false);
    requestAnimationFrame(() => stationButtonRef.current?.focus({
      preventScroll: true
    }));
  };
  const toggleCamera = () => {
    if (cameraFocused) {
      returnToWide();
      return;
    }
    rootRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
    setCameraFocused(true);
  };
  useLayoutEffect(() => {
    if (!cameraFocused) {
      setCamera({
        x: 0,
        y: 0,
        scale: 1
      });
      return;
    }
    const scene = sceneRef.current,
      station = stationRef.current,
      root = rootRef.current;
    if (!scene || !station || !root) return;
    const fitCamera = () => {
      const image = station.querySelector<HTMLImageElement>('.station-layer');
      const ratio = image && image.naturalHeight ? image.naturalWidth / image.naturalHeight : 2;
      const shipWidth = Math.min(station.offsetWidth, station.offsetHeight * ratio);
      const scale = Math.max(1.35, Math.min(3, root.clientWidth * (root.clientWidth <= 760 ? .86 : .67) / Math.max(shipWidth, 1)));
      const transform = stationButtonRef.current ? getComputedStyle(stationButtonRef.current).transform : 'none';
      const offset = transform === 'none' ? 0 : new DOMMatrixReadOnly(transform).m41;
      const cx = station.offsetLeft + station.offsetWidth / 2 + offset;
      const cy = station.offsetTop + station.offsetHeight / 2;
      setCamera({
        x: root.clientWidth * .5 - cx * scale,
        y: scene.clientHeight * .46 - cy * scale,
        scale
      });
    };
    fitCamera();
    const observer = new ResizeObserver(fitCamera);
    observer.observe(scene);
    observer.observe(root);
    const followTimer = setInterval(fitCamera, 100);
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        returnToWide();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => {
      observer.disconnect();
      clearInterval(followTimer);
      window.removeEventListener('keydown', onEscape);
    };
  }, [cameraFocused]);
  const [studying, setStudying] = useState(false);
  const [ai, setAi] = useState('今晚的地球很美。先完成英语阅读，再休息一下？');
  const [clock, setClock] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const [notice, setNotice] = useState('');
  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => setClock(new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date()).replace(/\//g, '.'));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!studying) return;
    const id = setInterval(() => setElapsed(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [studying]);
  useEffect(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(''), 3500);
    return () => clearTimeout(id);
  }, [notice]);
  const chooseSection = (value: string) => {
    setSection(value);
    if (['今日','项目','更多','驾驶舱'].includes(value)) rootRef.current?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    if (value==='AI') document.querySelector('.ai-panel')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    if (value === '学习') focusRef.current?.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'center'
    });
  };
  return <GlassContext.Provider value={{strength:sceneConfig.glass,color:sceneConfig.glassColor ?? .8}}><main ref={rootRef} style={{
    '--glass-strength': sceneConfig.glass,
    '--glass-blur': 50 * sceneConfig.glass + 'px',
    '--glass-tint': (.12 + .10 * sceneConfig.glass).toFixed(2),
    '--glass-color': sceneConfig.glassColor ?? .8
  } as React.CSSProperties} data-camera={cameraFocused ? 'station' : 'wide'} className={`center-app ${paused ? 'motion-paused' : ''} ${cameraFocused ? 'camera-focused' : ''}`}>
      <div ref={sceneRef} className="space-scene" style={{
      transform: 'none'
    }}><img className="star-backdrop" style={{transform: `translate3d(${camera.x*.015}px,${camera.y*.015}px,0) scale(${1+(camera.scale-1)*.015})`}} src="assets/space/starfield.png" alt="" />
        <div className="planet-camera" style={{transform:`translate3d(${camera.x*.13}px,${camera.y*.13}px,0) scale(${1+(camera.scale-1)*.16})`}}><Earth paused={paused} fallback="assets/space/earth-fallback.png" /></div>
        <div className="station-camera" style={{transform:`translate3d(${camera.x}px,${camera.y}px,0) scale(${camera.scale})`}}><div ref={stationRef} className="station-anchor"><button ref={stationButtonRef} className="station-hit" aria-label={cameraFocused ? '点击航天器返回全景' : '拉近航天器'} aria-pressed={cameraFocused} onClick={toggleCamera}><img className="station-layer" src="assets/space/station.png" alt="" /><span className="station-cue" aria-hidden="true">点击靠近</span></button></div></div>
        <div className="window-shade" /><div className="particle-camera" style={{transform:`translate3d(${camera.x*.3}px,${camera.y*.3}px,0) scale(${1+(camera.scale-1)*.35})`}}><SpaceParticles paused={paused} config={sceneConfig.particles} onFallback={setParticlesFallback} /></div>
      </div>
      <header className="top-bar"><div className="brand">CENTER <span>· 更高的你</span></div><div className="system-status"><time>{clock}</time><span><i /> 所有系统正常</span></div></header>
      <div className="dashboard-grid" aria-hidden={cameraFocused || undefined}>
        <section className={`panel liquid-glass-strong today-panel ${section === '今日' ? 'selected-panel' : ''}`} aria-labelledby="today-heading"><GlassSurface />
          <div className="panel-heading"><h2 id="today-heading">今日行动</h2><span>已完成 {tasks.filter(t => t.done).length}/4</span></div>
          <div className="task-list">{tasks.map((task, index) => <button className={`task ${task.done ? 'task-done' : ''} ${index === 0 && !task.done ? 'task-active' : ''}`} key={task.title} aria-pressed={task.done} onClick={() => setTasks(list => list.map((t, i) => i === index ? {
            ...t,
            done: !t.done
          } : t))}><span className="task-check" aria-hidden="true">{task.done && <svg viewBox="0 0 16 16"><path d="m3 8 3 3 7-7" /></svg>}</span><span className="task-label">{task.title}<small>{task.done ? '已完成' : task.time}</small></span></button>)}</div>
        </section>
        <div className="orbit-view"><button type="button" className="motion-toggle liquid-glass scene-open" aria-expanded={section === '更多'} aria-controls="scene-settings-region" onClick={() => setSection(section === '更多' ? '驾驶舱' : '更多')}><GlassSurface compact /><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 3 .5-1h3l.5 1 1.5.9 1.2-.1 1.5 2.6-.7 1 .1 1.7.7 1-1.5 2.6-1.2-.1-1.5.9-.5 1h-3l-.5-1-1.5-.9-1.2.1L4 11.1l.7-1-.1-1.7-.7-1 1.5-2.6 1.2.1Z" /><circle cx="10" cy="8.4" r="2.3" /></svg>场景调节</button><button className="motion-toggle liquid-glass" aria-pressed={paused} onClick={() => setPaused(!paused)}><GlassSurface compact /><svg viewBox="0 0 20 20" aria-hidden="true">{paused ? <path d="m7 4 9 6-9 6Z" /> : <path d="M6 4v12M14 4v12" />}</svg>{paused ? '继续航行' : '暂停航行'}</button></div>
        <section ref={focusRef} id="learning-content" className={`panel liquid-glass-strong focus-panel ${section === '学习' ? 'selected-panel' : ''}`} aria-labelledby="focus-heading"><GlassSurface /><div className="panel-heading"><span>继续学习</span>{studying && <span className="focus-time">{Math.floor(elapsed / 60).toString().padStart(2, '0')}:{(elapsed % 60).toString().padStart(2, '0')}</span>}</div><h1 id="focus-heading">考研数学</h1><p>下一节：高等数学 · 极限与连续</p><div className="progress-track" role="progressbar" aria-label="考研数学学习进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={68}><span /></div><div className="focus-footer"><span>进度 68% · 本周 5/7</span><button className="primary-button liquid-glass-strong" onClick={() => {
            setStudying(!studying);
            setNotice(studying ? '已暂停专注计时' : '专注计时已开始');
          }}><GlassSurface compact />{studying ? '暂停学习' : '继续学习'}<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" /></svg></button></div></section>
        <section className={`panel liquid-glass-strong ai-panel ${section === 'AI' ? 'selected-panel' : ''}`} aria-labelledby="ai-heading"><GlassSurface /><div className="panel-heading"><h2 id="ai-heading">AI 副官</h2><span className="online"><i /> 在线</span></div><p className="ai-message" aria-live="polite">{ai}</p><div className="quick-actions">{['制定计划', '解释难题', '今日总结'].map((label, i) => <button key={label} onClick={() => setAi(['先用 25 分钟完成英语阅读，再梳理项目需求。每完成一项，可在今日行动里标记。', '极限描述函数趋近某点时的变化。开始学习后，可以把具体题目整理在这里。', `今日已完成 ${tasks.filter(t => t.done).length}/4 项行动。给自己留一点时间，记录一个今天学到的知识点。`][i])}>{label}</button>)}</div><small className="demo-note">演示建议</small></section>
        {section === '项目' && <section className="panel liquid-glass-strong expanded-panel"><GlassSurface /><div className="panel-heading"><h2>项目 · 需求梳理</h2><button onClick={() => setSection('驾驶舱')} aria-label="关闭项目详情">关闭</button></div><p>今日 19:00</p><p>梳理要解决的问题，整理下一步行动。</p><button className="primary-button liquid-glass-strong" onClick={() => {
          setTasks(list => list.map((t, i) => i === 1 ? {
            ...t,
            done: true
          } : t));
          setNotice('项目行动已标记完成');
        }}><GlassSurface compact />标记完成</button></section>}
        {section === '更多' && <div id="scene-settings-region" className="settings-region"><SceneSettings config={sceneConfig} onChange={setSceneConfig} paused={paused} onPause={() => setPaused(!paused)} fallback={particlesFallback} onClose={() => {
          setSection('驾驶舱');
          requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('.scene-open')?.focus({
            preventScroll: true
          }));
        }} /></div>}
      </div>
      <a className="scroll-cue" href="#learning-content"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg>下滑查看学习与 AI</a><nav className="main-nav liquid-glass-strong" aria-label="主导航"><GlassSurface compact />{sections.map(label => <button key={label} aria-current={section === label ? 'page' : undefined} onClick={() => chooseSection(label)}>{label}</button>)}</nav>
      {cameraFocused && <div className="camera-controls liquid-glass-strong" role="group" aria-label="航天器镜头"><GlassSurface compact /><button className="primary-button liquid-glass-strong" onClick={returnToWide}><GlassSurface compact /><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H4m5-5-5 5 5 5" /></svg>返回全景</button><button className="motion-toggle liquid-glass" aria-pressed={paused} onClick={() => setPaused(!paused)}><GlassSurface compact />{paused ? '继续航行' : '暂停航行'}</button></div>}
      <div className="status-notice" role="status">{notice}</div>
    </main></GlassContext.Provider>;
};