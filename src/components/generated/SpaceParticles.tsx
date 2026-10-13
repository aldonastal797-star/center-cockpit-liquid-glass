import { useEffect, useRef, useState } from 'react';
import { ParticleConfig } from './SceneSettings';
const vertex = `#version 300 es
in vec2 position;
void main(){gl_Position=vec4(position,0.,1.);}`;
// Original Framer light field, adapted to the independent CENTER scene.
const fragment = `#version 300 es
precision highp float;
precision highp int;
out vec4 color;
uniform vec2 resolution;
uniform float phase,brightness,layers,glow,scale,starSize,direction;
uniform bool randomize,blinkEnabled,warp;
uniform vec4 ship,panels[3];
uint pcg(uint v){uint state=v*747796405u+2891336453u;uint word=((state>>((state>>28u)+4u))^state)*277803737u;return (word>>22u)^word;}
float hash1(float p){return float(pcg(floatBitsToUint(p)))/float(0xFFFFFFFFu);}
void main(){
 vec2 uv=(2.*gl_FragCoord.xy-resolution)/resolution.y/scale;
 vec2 dir=vec2(cos(radians(direction)),sin(radians(direction)));
 vec3 O=vec3(0.);float sharpness=mix(.3,2.,glow);
 for(int j=0;j<30;j++){
  if(float(j)>=layers)break;
  float i=21.+float(j);vec2 q;float fade=1.,blink=.3,light=brightness*3e-4;
  if(warp){float d=length(uv);q=vec2(atan(uv.x,uv.y),1./(d*2.+.001))*60./i;q.y-=phase;q+=cos(i*vec2(9.,7.));fade=smoothstep(0.,1.2,d);blink=1.;light=brightness*1.8e-4;}
  else{
   q=uv*40./i+cos(i*vec2(9.,7.));
   if(randomize){float a=hash1(i*123.456)*6.28318;q+=vec2(cos(a),sin(a))*phase*.3;}else q+=dir*phase*.3;
   if(blinkEnabled)blink=(sin(phase*(1.+fract(i*.737)*4.)+i*3.14)*.5+.5)*.3+.3;
  }
  float dist=pow(max(length(sin(q*3.)),starSize),sharpness);
  O+=(i*cos(i+vec3(3.))+i)*light*blink*fade/dist;
 }
 O=tanh(O*O);
 vec2 pixel=vec2(gl_FragCoord.x,resolution.y-gl_FragCoord.y)/resolution;
 float keep=1.;
 if(ship.z>0.)keep*=mix(.3,1.,smoothstep(.5,1.15,length((pixel-ship.xy)/ship.zw)));
 for(int k=0;k<3;k++){vec4 box=panels[k];if(box.z>0.){vec2 d=abs(pixel-box.xy)-box.zw;float inside=1.-smoothstep(-.01,.025,max(d.x,d.y));keep*=mix(1.,.38,inside);}}
 color=vec4(O*keep,1.);
}`;
export function SpaceParticles({
  paused,
  config,
  onFallback
}: {
  paused: boolean;
  config: ParticleConfig;
  onFallback: (value: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null),
    fallbackRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused),
    configRef = useRef(config),
    phaseRef = useRef(0),
    wakeRef = useRef<(() => void) | null>(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    pausedRef.current = paused;
    configRef.current = config;
    wakeRef.current?.();
  }, [paused, config]);
  useEffect(() => {
    const canvas = fallback ? fallbackRef.current : canvasRef.current;
    if (!canvas) return;
    let disposed = false,
      frame = 0,
      last = 0;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const useFallback = () => {
      if (!disposed) {
        setFallback(true);
        onFallback(true);
      }
    };
    let paint: () => void,
      cleanup = () => {};
    if (!fallback) {
      const gl = canvas.getContext('webgl2', {
        alpha: false,
        antialias: false
      });
      if (!gl) {
        useFallback();
        return;
      }
      const compile = (type: number, source: string) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };
      const vs = compile(gl.VERTEX_SHADER, vertex),
        fs = compile(gl.FRAGMENT_SHADER, fragment),
        program = gl.createProgram();
      if (!vs || !fs || !program) {
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
        if (program) gl.deleteProgram(program);
        useFallback();
        return;
      }
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteProgram(program);
        useFallback();
        return;
      }
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const pos = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
      const names = ['resolution', 'phase', 'brightness', 'layers', 'glow', 'scale', 'starSize', 'direction', 'randomize', 'blinkEnabled', 'warp', 'ship', 'panels[0]'];
      const u = Object.fromEntries(names.map(n => [n, gl.getUniformLocation(program, n)]));
      const areas = new Float32Array(12);
      paint = () => {
        if (disposed || gl.isContextLost() || !canvas.width || !canvas.height) return;
        const p = configRef.current;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(u.resolution, canvas.width, canvas.height);
        gl.uniform1f(u.phase, phaseRef.current);
        gl.uniform1f(u.brightness, p.brightness);
        gl.uniform1f(u.layers, p.layers);
        gl.uniform1f(u.glow, p.glow);
        gl.uniform1f(u.scale, p.scale);
        gl.uniform1f(u.starSize, p.size);
        gl.uniform1f(u.direction, p.direction);
        gl.uniform1i(u.randomize, p.randomize ? 1 : 0);
        gl.uniform1i(u.blinkEnabled, p.blink ? 1 : 0);
        gl.uniform1i(u.warp, p.warp ? 1 : 0);
        const root = canvas.closest('.center-app'),
          scene = canvas.getBoundingClientRect();
        const boxOf = (el: Element | null) => {
          if (!el || scene.width <= 0 || scene.height <= 0) return [0, 0, 0, 0];
          const b = el.getBoundingClientRect();
          return [(b.x + b.width / 2 - scene.x) / scene.width, (b.y + b.height / 2 - scene.y) / scene.height, b.width / 2 / scene.width, b.height / 2 / scene.height];
        };
        gl.uniform4fv(u.ship, boxOf(root?.querySelector('.station-layer') ?? null));
        ['.today-panel', '.focus-panel', '.ai-panel'].forEach((selector, i) => {
          const el = root?.querySelector(selector);
          areas.set(el && getComputedStyle(el).display !== 'none' ? boxOf(el) : [0, 0, 0, 0], i * 4);
        });
        gl.uniform4fv(u['panels[0]'], areas);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        canvas.dataset.phase = phaseRef.current.toFixed(4);
        canvas.dataset.ready = 'true';
      };
      const lost = (e: Event) => {
        e.preventDefault();
        useFallback();
      };
      canvas.addEventListener('webglcontextlost', lost);
      cleanup = () => {
        canvas.removeEventListener('webglcontextlost', lost);
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      };
      onFallback(false);
    } else {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let seed = 82735;
      const random = () => {
        seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
        return seed / 4294967296;
      };
      const stars = Array.from({
        length: 160
      }, () => ({
        x: random(),
        y: random(),
        depth: random(),
        phase: random() * Math.PI * 2,
        dir: random() * Math.PI * 2
      }));
      paint = () => {
        const p = configRef.current,
          w = canvas.width,
          h = canvas.height,
          t = phaseRef.current;
        ctx.clearRect(0, 0, w, h);
        for (const star of stars.slice(0, Math.round(p.layers * 5))) {
          const a = p.randomize ? star.dir : p.direction * Math.PI / 180,
            travel = t * (20 + star.depth * 50);
          let x = ((star.x * w + Math.cos(a) * travel) % w + w) % w,
            y = ((star.y * h + Math.sin(a) * travel) % h + h) % h;
          if (p.warp) {
            const distance = (star.depth + t * .08) % 1 * Math.hypot(w, h) * .6;
            x = w / 2 + Math.cos(star.phase) * distance;
            y = h / 2 + Math.sin(star.phase) * distance;
          }
          x = w / 2 + (x - w / 2) * p.scale / .7;
          y = h / 2 + (y - h / 2) * p.scale / .7;
          const r = (1 + star.depth * 3) * (w / 1200) * (.7 + p.glow) * (.8 + p.size * 10);
          const pulse = p.blink ? .3 + .3 * (.5 + .5 * Math.sin(t * (1 + star.depth * 4) + star.phase)) : .45;
          const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
          g.addColorStop(0, 'rgba(230,243,255,' + Math.min(1, pulse * p.brightness) + ')');
          g.addColorStop(1, 'rgba(230,243,255,0)');
          ctx.fillStyle = g;
          ctx.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
        }
        canvas.dataset.phase = t.toFixed(4);
        canvas.dataset.ready = 'true';
      };
    }
    const tick = (now: number) => {
      frame = 0;
      if (disposed || pausedRef.current || media.matches || document.hidden) {
        last = 0;
        return;
      }
      if (last && now - last < 1000 / 24) {
        frame = requestAnimationFrame(tick);
        return;
      }
      if (last) phaseRef.current += Math.min(now - last, 100) / 1000 * configRef.current.speed;
      last = now;
      paint();
      frame = requestAnimationFrame(tick);
    };
    const wake = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      paint();
      if (!disposed && !pausedRef.current && !media.matches && !document.hidden) frame = requestAnimationFrame(tick);
    };
    wakeRef.current = wake;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, canvas.clientWidth <= 760 ? 1 : 1.25);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      wake();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    media.addEventListener('change', wake);
    document.addEventListener('visibilitychange', wake);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      wakeRef.current = null;
      observer.disconnect();
      media.removeEventListener('change', wake);
      document.removeEventListener('visibilitychange', wake);
      cleanup();
    };
  }, [fallback, onFallback]);
  return fallback ? <canvas key="fallback" ref={fallbackRef} className="space-particles" data-renderer="canvas" aria-hidden="true" /> : <canvas key="webgl2" ref={canvasRef} className="space-particles" data-renderer="webgl2" aria-hidden="true" />;
}