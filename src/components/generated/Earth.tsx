import { useEffect, useRef } from 'react';
const vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
const fragment = `
precision highp float;
uniform sampler2D surface;
uniform sampler2D clouds;
uniform vec2 resolution;
uniform float angle;
uniform float mobile;
void main(){
  float fit=max(resolution.x/1536.,resolution.y/1024.);
  vec2 size=vec2(1536.,1024.)*fit;
  vec2 offset=(resolution-size)*vec2(mobile>.5?.58:.5,.5);
  vec2 pixel=vec2(gl_FragCoord.x,resolution.y-gl_FragCoord.y);
  vec2 source=(pixel-offset)/fit;
  vec2 p=(source-vec2(1180.,1000.))/950.;
  p.y=-p.y;
  float rr=dot(p,p);
  vec3 bg=vec3(.012,.024,.047);
  if(rr>1.){
    float distance=sqrt(rr)-1.;
    float edgeLight=max(0.,dot(normalize(vec3(p,0.)),normalize(vec3(-.62,.7,.36))));
    float core=exp(-distance*190.)*(.07+edgeLight*.75);
    float bloom=exp(-distance*32.)*(.02+edgeLight*.23);
    vec3 atmosphere=mix(vec3(.10,.56,.86),vec3(.56,.94,1.),core);
    gl_FragColor=vec4(atmosphere,clamp(core+bloom,0.,1.));
    return;
  }
  vec3 n=vec3(p,sqrt(max(0.,1.-rr)));
  float longitude=atan(n.x,n.z)+angle;
  vec2 uv=vec2(fract(longitude/6.2831853+.5),asin(n.y)/3.14159265+.5);
  vec3 tex=texture2D(surface,uv).rgb;
  float cloud=texture2D(clouds,uv).a;
  vec3 sun=normalize(vec3(-.62,.7,.36));
  float light=max(0.,dot(n,sun));
  float white=smoothstep(.48,.85,max(tex.r,max(tex.g,tex.b)));
  vec3 tint=mix(vec3(.42,.69,.77),vec3(.82,.79,.86),white*.65);
  vec3 land=tex*tint*(.045+pow(light,.82)*.88);
  land=mix(land,vec3(.51,.62,.71)*(.025+light*.34),cloud*.12);
  // Lighting follows the sun, not a latitude mask.
  land+=vec3(.003,.008,.013);
  float haze=pow(1.-n.z,2.)*light;
  land=mix(land,vec3(.1,.23,.29),haze*.14);
  float rim=pow(1.-n.z,3.8)*(.12+light*.7);
  float limb=exp(-(1.-sqrt(rr))*220.);
  vec3 color=land+vec3(.13,.58,.79)*rim;
  color=mix(color,vec3(.45,.88,.98)*(.08+light*.92),limb*.92);
  float edge=smoothstep(1.-2./(950.*fit),1.,sqrt(rr));
  color=mix(color,vec3(.52,.94,1.)*(.25+light*.75),edge);
  gl_FragColor=vec4(color,1.);
}`;
export function Earth({
  paused,
  fallback
}: {
  paused: boolean;
  fallback: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  const wakeRef = useRef<(() => void) | null>(null);
  useEffect(() => {
    pausedRef.current = paused;
    wakeRef.current?.();
  }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      preserveDrawingBuffer: true
    });
    if (!gl) { canvas.dataset.error='webgl-unavailable'; return; }
    const compile = (kind: number, code: string) => {
      const shader = gl.createShader(kind);
      if (!shader) return null;
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        canvas.dataset.error=gl.getShaderInfoLog(shader)||'shader-compile-failed';
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex),
      fs = compile(gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    if (!vs || !fs || !program) {
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      return;
    }
    canvas.dataset.program='linked';
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const uResolution = gl.getUniformLocation(program, 'resolution'),
      uAngle = gl.getUniformLocation(program, 'angle'),
      uMobile = gl.getUniformLocation(program, 'mobile');
    gl.uniform1i(gl.getUniformLocation(program, 'surface'), 0);
    const cloudTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, cloudTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.uniform1i(gl.getUniformLocation(program, 'clouds'), 1);
    gl.activeTexture(gl.TEXTURE0);
    let ready = false,
      disposed = false,
      frame = 0,
      last = 0,
      phase = .45;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const paint = () => {
      if (!ready || disposed || gl.isContextLost()) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uAngle, phase);
      gl.uniform1f(uMobile, canvas.clientWidth <= 760 ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.dataset.rotation = phase.toFixed(6);
    };
    const tick = (time: number) => {
      frame = 0;
      if (disposed || !ready || pausedRef.current || media.matches || document.hidden) {
        last = 0;
        return;
      }
      if (last && time - last < 1000 / 24) {
        frame = requestAnimationFrame(tick);
        return;
      }
      if (last) phase = (phase + Math.min(time - last, 100) * .001 * Math.PI * 2 / 720) % (Math.PI * 2);
      last = time;
      paint();
      frame = requestAnimationFrame(tick);
    };
    const wake = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      paint();
      if (ready && !pausedRef.current && !media.matches && !document.hidden) frame = requestAnimationFrame(tick);
    };
    wakeRef.current = wake;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      paint();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onerror=()=>{canvas.dataset.error='surface-load-failed';};
    img.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      ready = true;
      canvas.dataset.ready = 'true';
      canvas.parentElement?.setAttribute('data-rendered', 'true');
      resize();
      wake();
    };
    img.src = "assets/earth/surface.png";
    const cloudImage = new Image();
    cloudImage.crossOrigin = 'anonymous';
    cloudImage.onload = () => {
      if (disposed) return;
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cloudTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cloudImage);
      gl.activeTexture(gl.TEXTURE0);
      canvas.dataset.clouds = 'true';
      paint();
    };
    cloudImage.src = "assets/earth/clouds.png";
    media.addEventListener('change', wake);
    document.addEventListener('visibilitychange', wake);
    const contextLost = (event: Event) => {
      event.preventDefault();
      canvas.dataset.ready = 'false';
      canvas.parentElement?.setAttribute('data-rendered', 'false');
      if (frame) cancelAnimationFrame(frame);
    };
    canvas.addEventListener('webglcontextlost', contextLost);
    return () => {
      disposed = true;
      wakeRef.current = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener('change', wake);
      document.removeEventListener('visibilitychange', wake);
      canvas.removeEventListener('webglcontextlost', contextLost);
      img.onload = null;
      cloudImage.onload = null;
      gl.deleteTexture(cloudTexture);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);
  return <div className="earth-layer"><img className="earth-fallback" src={fallback} alt="" /><canvas ref={canvasRef} className="earth-sphere" data-ready="false" aria-hidden="true" /></div>;
}