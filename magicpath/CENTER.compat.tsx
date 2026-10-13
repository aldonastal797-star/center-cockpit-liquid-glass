// @ts-nocheck
// GENERATED JavaScript packaged as TSX for MagicPath. Do not hand-edit.
// Typed source is checked with strict TypeScript before generation.
// Regenerate: npm run magicpath:bundle
// Images and font remain network assets; only React is required from the host.
/* Liquid Glass React 1.1.1 — original MIT source bundled below.
Copyright 2025 MAX ROVENSKY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// src/components/generated/CENTER.tsx
import { useEffect as useEffect6, useRef as useRef6, useState as useState6 } from "react";

// src/components/generated/CENTER.css
var CENTER_default = "@font-face{font-family:'Center Chinese';src:url(https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/fonts/CenterChinese.ttf) format('truetype');font-style:normal;font-weight:100 900;font-display:swap}\n.center-app{--ink:#e8f4ff;--muted:#b7d0e4;--accent:#6fd3ff;position:relative;isolation:isolate;min-height:900px;height:100svh;width:100%;overflow:hidden;background:#03060c;color:var(--ink);font-family:'Center Chinese',Inter,'Microsoft YaHei','PingFang SC',sans-serif;font-size:15px;line-height:1.6;color-scheme:dark}\n.center-app *{box-sizing:border-box}.center-app button{font:inherit;cursor:pointer}.center-app button:focus-visible{outline:2px solid #a5e7ff;outline-offset:4px}.center-app ::selection{background:#6fd3ff;color:#03060c}.center-app p,.center-app h1,.center-app h2{margin:0}.center-app button{transition:background-color .18s,color .18s}.space-scene{position:absolute;inset:0;z-index:-2;overflow:hidden;pointer-events:none}.earth-layer{position:absolute;width:100%;height:100%;object-fit:cover;object-position:center;transform:none!important;animation:none!important}.station-anchor{position:absolute;left:47.7%;top:20%;width:31%;height:30%;pointer-events:none}.station-layer{width:100%;height:100%;object-fit:contain;animation:station-forward 100s linear 1 both;transform-origin:center;will-change:transform}.window-shade{position:absolute;inset:0;background:radial-gradient(75% 70% at 55% 45%,transparent 40%,#03060cd9 100%);box-shadow:inset 0 0 100px 20px #02040a80;pointer-events:none}@keyframes station-forward{from{transform:translate3d(0,0,0)}to{transform:translate3d(-70px,0,0)}}.motion-paused .station-layer{animation-play-state:paused}\n.top-bar{position:absolute;top:40px;left:48px;right:48px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{font-size:19px;font-weight:600;letter-spacing:2px}.brand span{font-size:15px;letter-spacing:1px}.system-status{display:flex;gap:20px;align-items:center;font-size:12px;color:#c8e6ff;font-variant-numeric:tabular-nums}.system-status span,.online{display:inline-flex;align-items:center;gap:6px}.system-status i,.online i{display:inline-block;width:5px;height:5px;background:#81e3c6;border-radius:50%}.dashboard-grid{position:relative;display:grid;grid-template-columns:320px minmax(0,1fr) 300px;grid-template-rows:auto 1fr auto;gap:24px;height:calc(100% - 230px);min-height:670px;margin:110px 48px 120px}.panel{background:#08101eb8;backdrop-filter:blur(14px);border:1px solid #8cd2ff29;border-radius:18px;padding:20px}.panel-heading{display:flex;justify-content:space-between;gap:12px;align-items:center;color:#c8e6ff;font-size:13px;margin-bottom:16px}.panel-heading h2{font-size:14px;font-weight:600}.panel-heading>span{font-size:12px}.today-panel{grid-column:1;grid-row:1}.task-list{display:flex;flex-direction:column;gap:7px}.task{display:flex;align-items:center;gap:12px;padding:11px 12px;background:transparent;border:1px solid transparent;border-radius:10px;color:var(--ink);text-align:left;width:100%}.task:hover{background:#8cd2ff14}.task-active{border-color:#6fd3ff36;background:#6fd3ff0d}.task-label{display:flex;flex-direction:column;gap:2px;font-size:14px}.task-label small{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums}.task-active small{color:var(--accent)}.task-check{width:15px;height:15px;border:1px solid #8cd2ff66;border-radius:4px;flex-shrink:0}.task-check svg{stroke:#89d9e4;fill:none;stroke-width:1.8;width:100%;height:100%}.task-done .task-label{color:#a8c3d6}.task-done .task-label>small{color:#a8c3d6}.orbit-view{grid-column:2/4;grid-row:1/3;display:flex;justify-content:flex-end;align-items:flex-start}.motion-toggle{display:flex;gap:6px;align-items:center;background:#08101e8c;color:#b7d0e4;border:1px solid #8cd2ff29;border-radius:8px;padding:7px 10px;font-size:11px!important}.motion-toggle:hover{background:#15283ec9}.motion-toggle svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}.focus-panel{grid-column:1/3;grid-row:3;width:420px;padding:24px}.focus-panel .panel-heading{color:var(--accent);margin-bottom:10px}.focus-panel h1{font-size:34px;line-height:1.2;font-weight:700;letter-spacing:-.02em}.focus-panel p{color:var(--muted);font-size:14px;margin-top:14px}.progress-track{height:5px;background:#c8e6ff1c;border-radius:3px;overflow:hidden;margin-top:22px}.progress-track span{display:block;width:68%;height:100%;background:#6fd3ff;border-radius:3px}.focus-footer{margin-top:16px;display:flex;align-items:center;justify-content:space-between;gap:10px}.focus-footer>span{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.primary-button{border:0;border-radius:8px;padding:10px 14px;color:#03101b;background:#8cddff;font-size:13px!important;font-weight:600!important;display:inline-flex;gap:8px;align-items:center}.primary-button:hover{background:#b4eaff}.primary-button svg{width:17px;height:17px;stroke:currentColor;stroke-width:1.5;fill:none}.focus-time{font-variant-numeric:tabular-nums}.ai-panel{grid-column:3;grid-row:3;align-self:end}.ai-message{min-height:73px;font-size:14px;line-height:1.8}.quick-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.quick-actions button,.panel-heading button{background:transparent;color:#cfeaff;border:1px solid #8cd2ff38;border-radius:8px;padding:6px 8px;font-size:11px}.quick-actions button:hover,.panel-heading button:hover{background:#8cd2ff20}.demo-note{display:block;font-size:10px;color:#abc8dc;margin-top:8px}.main-nav{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);display:flex;align-items:center;background:#08101ed9;border:1px solid #8cd2ff29;backdrop-filter:blur(14px);border-radius:14px;padding:7px;gap:4px}.main-nav button{background:transparent;border:0;color:var(--muted);padding:10px 20px;border-radius:8px;font-size:14px;white-space:nowrap}.main-nav button:hover{background:#8cd2ff14;color:white}.main-nav button[aria-current]{background:#8cd2ff25;color:white}.selected-panel{border-color:#8cd2ff80}.expanded-panel{position:absolute;top:0;right:0;width:300px;z-index:3}.expanded-panel p{margin-bottom:18px;font-size:14px;color:var(--muted)}.status-notice{position:fixed;left:50%;bottom:110px;transform:translateX(-50%);color:#e8f4ff;font-size:13px;background:#101d2e;border-radius:8px;padding:0}.status-notice:not(:empty){padding:10px 16px;box-shadow:0 8px 24px #0006}\n@media(max-width:1000px){.center-app{min-height:850px}.top-bar{left:24px;right:24px}.dashboard-grid{margin-left:24px;margin-right:24px;grid-template-columns:280px 1fr 270px;gap:20px}.focus-panel{width:370px}.panel{padding:18px}.main-nav button{padding:10px 16px}.system-status{gap:12px}.system-status time{display:none}}\n@media(max-width:760px){.center-app{min-height:100svh;height:auto;overflow:visible;padding-bottom:100px}.space-scene{position:absolute;height:570px;bottom:auto}.earth-layer{object-position:58% center}.station-anchor{left:40%;top:24%;width:53%;height:25%}.window-shade{background:linear-gradient(180deg,#03060c30 20%,#03060c44 55%,#03060c 100%);box-shadow:none}.top-bar{position:relative;top:auto;left:auto;right:auto;padding:26px 20px;gap:12px}.brand{font-size:17px;letter-spacing:1.2px}.brand span{font-size:12px}.system-status{font-size:10px}.dashboard-grid{display:flex;flex-direction:column;gap:16px;margin:0 20px;height:auto;min-height:0}.orbit-view{order:0;min-height:230px;justify-content:flex-end;padding-top:2px}.today-panel{order:2}.focus-panel{order:1;width:100%;padding:22px}.ai-panel{order:3;width:100%}.focus-panel h1{font-size:30px}.task-list{gap:4px}.task{padding:12px}.task-label{display:flex;flex:1;flex-direction:row;justify-content:space-between;align-items:center;gap:12px;font-size:13px}.task-label small{font-size:10px;white-space:nowrap}.ai-message{min-height:0}.quick-actions{gap:8px}.quick-actions button{padding:9px 12px;font-size:12px}.main-nav{position:fixed;z-index:6;bottom:12px;left:12px;right:12px;transform:none;justify-content:space-between;padding:6px;gap:0;padding-bottom:max(6px,env(safe-area-inset-bottom))}.main-nav button{padding:12px 0;flex:1;font-size:12px}.expanded-panel{position:static;order:4;width:100%}.status-notice{bottom:92px;white-space:nowrap}.motion-toggle{padding:8px 10px}}\n@media(prefers-reduced-motion:reduce){.station-layer{animation:none;will-change:auto}.center-app button{transition:none}html{scroll-behavior:auto}}\n\n.earth-layer{overflow:hidden}.earth-fallback,.earth-sphere{position:absolute;inset:0;width:100%;height:100%;display:block}.earth-fallback{object-fit:cover;object-position:center}.earth-sphere{opacity:0}.earth-sphere[data-ready=true]{opacity:1}@media(max-width:760px){.earth-fallback{object-position:58% center}}\r\n\n.star-backdrop{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:55% center;opacity:.85;pointer-events:none}.earth-layer[data-rendered=true] .earth-fallback{visibility:hidden}.space-scene{background:#03060c}\n\r\n.space-scene{transform-origin:0 0;transition:transform 1s cubic-bezier(.16,1,.3,1)}\n.dashboard-grid{pointer-events:none}.dashboard-grid .panel,.dashboard-grid .motion-toggle{pointer-events:auto}\n.station-hit{position:relative;display:block;width:100%;height:100%;padding:0;border:0;background:transparent;color:#cfeaff;pointer-events:auto;cursor:zoom-in!important;border-radius:12px}\n.station-hit .station-layer{pointer-events:none}.station-hit:focus-visible{outline-offset:6px}\n.station-cue{position:absolute;bottom:0;left:50%;transform:translateX(-50%);padding:4px 10px;font-size:11px;white-space:nowrap;border-radius:6px;background:#08101ec9;opacity:0;transition:opacity .18s;pointer-events:none}\n.station-hit:hover .station-cue,.station-hit:focus-visible .station-cue{opacity:1}\n.camera-focused{height:100svh;min-height:100svh;overflow:hidden}.camera-focused .dashboard-grid,.camera-focused .main-nav,.camera-focused .status-notice{display:none}.camera-focused .station-hit{cursor:zoom-out!important}.camera-focused .station-cue{display:none}\n.camera-controls{position:absolute;z-index:5;bottom:32px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;white-space:nowrap;padding:8px;background:#08101ed9;border-radius:12px}.camera-controls .motion-toggle{font-size:13px!important;padding:10px 14px}\n@media(max-width:760px){.camera-focused{padding-bottom:0}.camera-controls{bottom:max(20px,env(safe-area-inset-bottom))}.station-cue{opacity:1;font-size:10px;bottom:-8px}.camera-focused .top-bar{position:absolute;top:0;left:0;right:0;z-index:2}}\n@media(prefers-reduced-motion:reduce){.space-scene,.station-cue{transition:none}}\r\n\n.station-hit{animation:station-forward 100s linear 1 both;will-change:transform}.station-hit .station-layer{animation:none;transform:none;will-change:auto}.motion-paused .station-hit{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.station-hit{animation:none;will-change:auto}}\n\r\n\n.space-particles{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:.8}\n\r\n\n.space-particles{opacity:1}\n\r\n\n\n/* Material is rendered by rdev/liquid-glass-react; preserve native semantics and layout. */\n.center-app{--radius:1rem;height:auto;min-height:100svh;overflow:visible}\n.center-app .panel,.center-app .main-nav,.center-app .camera-controls,.center-app .motion-toggle,.center-app .primary-button{\n  position:relative;isolation:auto;border:0;background:rgba(3,10,20,.13);\n  backdrop-filter:none;-webkit-backdrop-filter:none;box-shadow:none;overflow:visible;\n}\n.center-app .panel{border-radius:16px}\n.center-app .panel::before,.center-app .panel::after,.center-app .main-nav::before,.center-app .main-nav::after,\n.center-app .camera-controls::before,.center-app .camera-controls::after,.center-app .motion-toggle::before,.center-app .motion-toggle::after,\n.center-app .primary-button::before,.center-app .primary-button::after{content:none}\n.rdev-glass-surface{position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:inherit}\n.rdev-glass-surface .glass__warp{background:rgba(255,255,255,.025)}\n.rdev-glass-surface .glass{width:100%;height:100%}\n.panel>:not(.rdev-glass-surface),.main-nav>button,.camera-controls>button,.primary-button>svg,.motion-toggle>svg{position:relative;z-index:1}\n.center-app .primary-button{padding:11px 17px;border-radius:100px;color:#f3faff;background:rgba(174,224,237,.065)}\n.center-app .primary-button:hover{background:rgba(174,224,237,.11)}\n.center-app .motion-toggle{border-radius:100px;color:#e8f4ff;background:rgba(255,255,255,.02)}\n.center-app .motion-toggle:hover{background:rgba(255,255,255,.05)}\n.center-app button{transition:background-color .18s,color .18s,scale .2s cubic-bezier(.16,1,.3,1)}\n@media(hover:hover){.center-app button:not(.station-hit):not(.task):hover{scale:1.05}}\n.center-app button:not(.station-hit):active{scale:.97}\n.station-layer{filter:brightness(1.08) contrast(.97) drop-shadow(-1px -1px 1px rgba(159,216,239,.15))}\n.space-particles{opacity:1;mix-blend-mode:screen}.space-particles[data-renderer=canvas]{mix-blend-mode:normal}\n.task-label{min-width:0;flex:1;display:block;font-size:14px;line-height:1.5}\n.task-label small{float:right;margin-left:12px;white-space:nowrap;padding-top:2px}\n.task{padding:11px 10px;min-height:46px;align-items:flex-start}\n.task-check{margin-top:3px}.task-active .task-label small{font-size:10px}\n.today-panel{align-self:start}\n.orbit-view{gap:8px;flex-wrap:wrap}\n.settings-region{position:relative;grid-column:3;grid-row:1;z-index:8;align-self:start;pointer-events:auto}\n.center-app .expanded-panel{position:absolute}\n.center-app .scene-settings{position:relative;top:auto;right:auto;width:100%;max-height:calc(100svh - 170px);overflow:auto;padding:20px}\n.scene-settings .panel-heading{position:relative;margin-bottom:12px}\n.scene-settings .settings-description{font-size:12px;line-height:1.7;color:#c8dce9;margin-bottom:16px}\n.scene-settings .settings-fallback{font-size:12px;color:#e8f4ff;margin-bottom:12px}\n.scene-settings fieldset{min-width:0;margin:0;padding:0;border:0}\n.scene-settings legend{font-size:12px;font-weight:600;color:#e8f4ff;margin-bottom:10px}\n.scene-presets>div{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px}\n.scene-presets button{font-size:11px;padding:7px 8px;min-height:34px;color:#d8eaf6;border:0;border-radius:8px;background:rgba(255,255,255,.055)}\n.scene-presets button[aria-pressed=true]{background:rgba(255,255,255,.16);color:white}\n.scene-controls{margin-bottom:18px!important}\n.scene-slider{display:block;margin-bottom:13px}\n.scene-slider>span{display:flex;justify-content:space-between;gap:12px;color:#dcebf5;font-size:12px}\n.scene-slider output{font-variant-numeric:tabular-nums;color:#b7d0e4}\n.scene-slider input{display:block;width:100%;height:24px;margin:4px 0 0;accent-color:#dcebf5;cursor:pointer}\n.scene-slider input:focus-visible,.scene-switch input:focus-visible{outline:2px solid #a5e7ff;outline-offset:3px;border-radius:4px}\n.scene-switch{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:12px;color:#dcebf5;min-height:36px;cursor:pointer}\n.scene-switch input{width:17px;height:17px;margin:0;accent-color:#dcebf5;cursor:pointer}\n.settings-footer{display:flex;align-items:center;justify-content:space-between;gap:8px}\n.settings-reset{background:transparent;border:0;color:#c8dce9;font-size:12px!important;padding:9px 5px}\n.scene-settings{scrollbar-width:thin;scrollbar-color:#637888 rgba(3,6,12,.2)}\n.scene-settings::-webkit-scrollbar{width:5px}.scene-settings::-webkit-scrollbar-thumb{background:#637888;border-radius:5px}\n/* The first viewport is the orbital scene. Learning, AI and navigation follow below. */\n.space-scene{position:fixed;inset:0;height:100svh;overflow:hidden;transform:none;transition:none}\n.planet-camera,.station-camera,.particle-camera{position:absolute;inset:0;transform-origin:0 0;transition:transform 1s cubic-bezier(.16,1,.3,1)}\n.star-backdrop{transform-origin:0 0;transition:transform 1s cubic-bezier(.16,1,.3,1)}\n.dashboard-grid{height:auto;min-height:0;grid-template-rows:minmax(calc(100svh - 110px),auto) auto;row-gap:32px;margin:110px 48px 0}\n.orbit-view{grid-row:1;align-self:start}\n.focus-panel{grid-row:2;align-self:start;scroll-margin-top:28px}\n.ai-panel{grid-row:2;align-self:start;scroll-margin-top:28px}\n.center-app .main-nav{position:relative;bottom:auto;left:auto;right:auto;transform:none;width:max-content;max-width:calc(100% - 40px);margin:36px auto 40px}\n.scroll-cue{position:absolute;top:calc(100svh - 64px);left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:8px;color:#c8dce9;font-size:12px;text-decoration:none;padding:12px;z-index:2}\n.scroll-cue svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.5}\n.scroll-cue:hover{color:white}\n.scroll-cue:focus-visible{outline:2px solid #a5e7ff;outline-offset:3px;border-radius:8px}\n.camera-focused .space-scene{position:absolute;height:100%}\n.camera-focused .scroll-cue{display:none}\n.center-app.camera-focused .camera-controls{position:absolute}\n@media(max-width:1000px){\n .dashboard-grid{margin-left:24px;margin-right:24px}\n .task-label small{float:none;display:block;margin-left:0}\n .orbit-view{justify-content:flex-end}\n}\n@media(max-width:760px){\n .center-app{padding-bottom:20px}\n .space-scene{position:fixed;height:100svh;bottom:0}\n .dashboard-grid{margin:0 20px;row-gap:0;gap:20px}\n .orbit-view{order:0;min-height:calc(100svh - 94px);align-content:flex-start;gap:6px}\n .today-panel{order:1;width:100%}\n .focus-panel{order:2}.ai-panel{order:3}\n .task-label{display:block;font-size:13px}.task-label small{float:right;display:inline;margin-left:10px}\n .settings-region{order:4;width:100%;scroll-margin-top:20px}\n .center-app .scene-settings{position:relative;width:100%;max-height:none;overflow:visible;padding:22px}\n .scene-slider input{height:32px}.scene-switch{min-height:44px}.scene-presets button{min-height:40px}\n .center-app .main-nav{position:relative;width:calc(100% - 40px);max-width:none;margin:24px 20px 20px}\n .motion-toggle{font-size:10px!important;padding:8px}\n .scroll-cue{white-space:nowrap;font-size:11px;top:calc(100svh - 54px)}\n .camera-focused .space-scene{position:absolute;height:100%}\n .camera-focused .top-bar{position:absolute}\n}\n@media(prefers-reduced-motion:reduce){\n .center-app button{transition:none;scale:1!important}\n .planet-camera,.station-camera,.particle-camera,.star-backdrop{transition:none}\n .rdev-glass-surface *{transition:none!important}\n}\n\n/* Keep the opaque light-field canvas additive across its transformed camera layer. */\n.center-app{display:flow-root}\n.particle-camera{mix-blend-mode:screen}\n.space-particles{mix-blend-mode:normal}\n\n/* Keep the upstream border/warp layers aligned while responsive content resizes. */\n.rdev-glass-surface>div,.rdev-glass-surface>span{width:100%!important;height:100%!important;top:50%!important;left:50%!important}\n.rdev-glass-surface>div>svg{pointer-events:none}\n\n.center-app .relative{position:relative}\n.center-app .bg-black{background:#000}\n.center-app .opacity-0{opacity:0}\n.center-app .opacity-20{opacity:.2}\n.center-app .opacity-100{opacity:1}\n.center-app .pointer-events-none{pointer-events:none}\n.center-app .mix-blend-overlay{mix-blend-mode:overlay}\n";

// src/components/generated/Earth.tsx
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
var fragment = `
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
function Earth({
  paused,
  fallback
}) {
  const canvasRef = useRef(null);
  const pausedRef = useRef(paused);
  const wakeRef = useRef(null);
  useEffect(() => {
    pausedRef.current = paused;
    wakeRef.current?.();
  }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      preserveDrawingBuffer: true
    });
    if (!gl) {
      canvas.dataset.error = "webgl-unavailable";
      return;
    }
    const compile = (kind, code) => {
      const shader = gl.createShader(kind);
      if (!shader) return null;
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        canvas.dataset.error = gl.getShaderInfoLog(shader) || "shader-compile-failed";
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
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
    canvas.dataset.program = "linked";
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    const texture2 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const uResolution = gl.getUniformLocation(program, "resolution"), uAngle = gl.getUniformLocation(program, "angle"), uMobile = gl.getUniformLocation(program, "mobile");
    gl.uniform1i(gl.getUniformLocation(program, "surface"), 0);
    const cloudTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, cloudTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.uniform1i(gl.getUniformLocation(program, "clouds"), 1);
    gl.activeTexture(gl.TEXTURE0);
    let ready = false, disposed = false, frame = 0, last = 0, phase = 0.45;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const paint = () => {
      if (!ready || disposed || gl.isContextLost()) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uAngle, phase);
      gl.uniform1f(uMobile, canvas.clientWidth <= 760 ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.dataset.rotation = phase.toFixed(6);
    };
    const tick = (time) => {
      frame = 0;
      if (disposed || !ready || pausedRef.current || media.matches || document.hidden) {
        last = 0;
        return;
      }
      if (last && time - last < 1e3 / 24) {
        frame = requestAnimationFrame(tick);
        return;
      }
      if (last) phase = (phase + Math.min(time - last, 100) * 1e-3 * Math.PI * 2 / 720) % (Math.PI * 2);
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
    img.crossOrigin = "anonymous";
    img.onerror = () => {
      canvas.dataset.error = "surface-load-failed";
    };
    img.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture2);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      ready = true;
      canvas.dataset.ready = "true";
      canvas.parentElement?.setAttribute("data-rendered", "true");
      resize();
      wake();
    };
    img.src = "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/earth/surface.png";
    const cloudImage = new Image();
    cloudImage.crossOrigin = "anonymous";
    cloudImage.onload = () => {
      if (disposed) return;
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cloudTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cloudImage);
      gl.activeTexture(gl.TEXTURE0);
      canvas.dataset.clouds = "true";
      paint();
    };
    cloudImage.src = "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/earth/clouds.png";
    media.addEventListener("change", wake);
    document.addEventListener("visibilitychange", wake);
    const contextLost = (event) => {
      event.preventDefault();
      canvas.dataset.ready = "false";
      canvas.parentElement?.setAttribute("data-rendered", "false");
      if (frame) cancelAnimationFrame(frame);
    };
    canvas.addEventListener("webglcontextlost", contextLost);
    return () => {
      disposed = true;
      wakeRef.current = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", wake);
      document.removeEventListener("visibilitychange", wake);
      canvas.removeEventListener("webglcontextlost", contextLost);
      img.onload = null;
      cloudImage.onload = null;
      gl.deleteTexture(cloudTexture);
      gl.deleteTexture(texture2);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "earth-layer", children: [
    /* @__PURE__ */ jsx("img", { className: "earth-fallback", src: fallback, alt: "" }),
    /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "earth-sphere", "data-ready": "false", "aria-hidden": "true" })
  ] });
}

// src/components/generated/SpaceParticles.tsx
import { useEffect as useEffect2, useRef as useRef2, useState } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var vertex2 = `#version 300 es
in vec2 position;
void main(){gl_Position=vec4(position,0.,1.);}`;
var fragment2 = `#version 300 es
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
function SpaceParticles({
  paused,
  config,
  onFallback
}) {
  const canvasRef = useRef2(null), fallbackRef = useRef2(null);
  const pausedRef = useRef2(paused), configRef = useRef2(config), phaseRef = useRef2(0), wakeRef = useRef2(null);
  const [fallback, setFallback] = useState(false);
  useEffect2(() => {
    pausedRef.current = paused;
    configRef.current = config;
    wakeRef.current?.();
  }, [paused, config]);
  useEffect2(() => {
    const canvas = fallback ? fallbackRef.current : canvasRef.current;
    if (!canvas) return;
    let disposed = false, frame = 0, last = 0;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const useFallback = () => {
      if (!disposed) {
        setFallback(true);
        onFallback(true);
      }
    };
    let paint, cleanup = () => {
    };
    if (!fallback) {
      const gl = canvas.getContext("webgl2", {
        alpha: false,
        antialias: false
      });
      if (!gl) {
        useFallback();
        return;
      }
      const compile = (type, source) => {
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
      const vs = compile(gl.VERTEX_SHADER, vertex2), fs = compile(gl.FRAGMENT_SHADER, fragment2), program = gl.createProgram();
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
      const pos = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
      const names = ["resolution", "phase", "brightness", "layers", "glow", "scale", "starSize", "direction", "randomize", "blinkEnabled", "warp", "ship", "panels[0]"];
      const u = Object.fromEntries(names.map((n) => [n, gl.getUniformLocation(program, n)]));
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
        const root = canvas.closest(".center-app"), scene = canvas.getBoundingClientRect();
        const boxOf = (el) => {
          if (!el || scene.width <= 0 || scene.height <= 0) return [0, 0, 0, 0];
          const b = el.getBoundingClientRect();
          return [(b.x + b.width / 2 - scene.x) / scene.width, (b.y + b.height / 2 - scene.y) / scene.height, b.width / 2 / scene.width, b.height / 2 / scene.height];
        };
        gl.uniform4fv(u.ship, boxOf(root?.querySelector(".station-layer") ?? null));
        [".today-panel", ".focus-panel", ".ai-panel"].forEach((selector, i) => {
          const el = root?.querySelector(selector);
          areas.set(el && getComputedStyle(el).display !== "none" ? boxOf(el) : [0, 0, 0, 0], i * 4);
        });
        gl.uniform4fv(u["panels[0]"], areas);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        canvas.dataset.phase = phaseRef.current.toFixed(4);
        canvas.dataset.ready = "true";
      };
      const lost = (e) => {
        e.preventDefault();
        useFallback();
      };
      canvas.addEventListener("webglcontextlost", lost);
      cleanup = () => {
        canvas.removeEventListener("webglcontextlost", lost);
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      };
      onFallback(false);
    } else {
      const ctx = canvas.getContext("2d");
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
        const p = configRef.current, w = canvas.width, h = canvas.height, t = phaseRef.current;
        ctx.clearRect(0, 0, w, h);
        for (const star of stars.slice(0, Math.round(p.layers * 5))) {
          const a = p.randomize ? star.dir : p.direction * Math.PI / 180, travel = t * (20 + star.depth * 50);
          let x = ((star.x * w + Math.cos(a) * travel) % w + w) % w, y = ((star.y * h + Math.sin(a) * travel) % h + h) % h;
          if (p.warp) {
            const distance = (star.depth + t * 0.08) % 1 * Math.hypot(w, h) * 0.6;
            x = w / 2 + Math.cos(star.phase) * distance;
            y = h / 2 + Math.sin(star.phase) * distance;
          }
          x = w / 2 + (x - w / 2) * p.scale / 0.7;
          y = h / 2 + (y - h / 2) * p.scale / 0.7;
          const r = (1 + star.depth * 3) * (w / 1200) * (0.7 + p.glow) * (0.8 + p.size * 10);
          const pulse = p.blink ? 0.3 + 0.3 * (0.5 + 0.5 * Math.sin(t * (1 + star.depth * 4) + star.phase)) : 0.45;
          const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
          g.addColorStop(0, "rgba(230,243,255," + Math.min(1, pulse * p.brightness) + ")");
          g.addColorStop(1, "rgba(230,243,255,0)");
          ctx.fillStyle = g;
          ctx.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
        }
        canvas.dataset.phase = t.toFixed(4);
        canvas.dataset.ready = "true";
      };
    }
    const tick = (now) => {
      frame = 0;
      if (disposed || pausedRef.current || media.matches || document.hidden) {
        last = 0;
        return;
      }
      if (last && now - last < 1e3 / 24) {
        frame = requestAnimationFrame(tick);
        return;
      }
      if (last) phaseRef.current += Math.min(now - last, 100) / 1e3 * configRef.current.speed;
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
    media.addEventListener("change", wake);
    document.addEventListener("visibilitychange", wake);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      wakeRef.current = null;
      observer.disconnect();
      media.removeEventListener("change", wake);
      document.removeEventListener("visibilitychange", wake);
      cleanup();
    };
  }, [fallback, onFallback]);
  return fallback ? /* @__PURE__ */ jsx2("canvas", { ref: fallbackRef, className: "space-particles", "data-renderer": "canvas", "aria-hidden": "true" }, "fallback") : /* @__PURE__ */ jsx2("canvas", { ref: canvasRef, className: "space-particles", "data-renderer": "webgl2", "aria-hidden": "true" }, "webgl2");
}

// src/components/generated/GlassSurface.tsx
import { createContext, useContext, useLayoutEffect, useRef as useRef4, useState as useState3, useEffect as useEffect4 } from "react";

// src/components/generated/liquid-glass/index.tsx
import { forwardRef, useCallback, useEffect as useEffect3, useId, useRef as useRef3, useState as useState2 } from "react";

// src/components/generated/liquid-glass/shader-utils.ts
function smoothStep(a, b, t) {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
function length(x, y) {
  return Math.sqrt(x * x + y * y);
}
function roundedRectSDF(x, y, width, height, radius) {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius;
}
function texture(x, y) {
  return { x, y };
}
var fragmentShaders = {
  liquidGlass: (uv) => {
    const ix = uv.x - 0.5;
    const iy = uv.y - 0.5;
    const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
    const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
    const scaled = smoothStep(0, 1, displacement);
    return texture(ix * scaled + 0.5, iy * scaled + 0.5);
  }
};
var ShaderDisplacementGenerator = class {
  constructor(options) {
    this.options = options;
    this.canvasDPI = 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = options.width * this.canvasDPI;
    this.canvas.height = options.height * this.canvasDPI;
    this.canvas.style.display = "none";
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get 2D context");
    }
    this.context = context;
  }
  updateShader(mousePosition) {
    const w = this.options.width * this.canvasDPI;
    const h = this.options.height * this.canvasDPI;
    let maxScale = 0;
    const rawValues = [];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const uv = { x: x / w, y: y / h };
        const pos = this.options.fragment(uv, mousePosition);
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;
        maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
        rawValues.push(dx, dy);
      }
    }
    if (maxScale > 0) {
      maxScale = Math.max(maxScale, 1);
    } else {
      maxScale = 1;
    }
    const imageData = this.context.createImageData(w, h);
    const data = imageData.data;
    let rawIndex = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dx = rawValues[rawIndex++];
        const dy = rawValues[rawIndex++];
        const edgeDistance = Math.min(x, y, w - x - 1, h - y - 1);
        const edgeFactor = Math.min(1, edgeDistance / 2);
        const smoothedDx = dx * edgeFactor;
        const smoothedDy = dy * edgeFactor;
        const r = smoothedDx / maxScale + 0.5;
        const g = smoothedDy / maxScale + 0.5;
        const pixelIndex = (y * w + x) * 4;
        data[pixelIndex] = Math.max(0, Math.min(255, r * 255));
        data[pixelIndex + 1] = Math.max(0, Math.min(255, g * 255));
        data[pixelIndex + 2] = Math.max(0, Math.min(255, g * 255));
        data[pixelIndex + 3] = 255;
      }
    }
    this.context.putImageData(imageData, 0, 0);
    return this.canvas.toDataURL();
  }
  destroy() {
    this.canvas.remove();
  }
  getScale() {
    return this.canvasDPI;
  }
};

// src/components/generated/liquid-glass/utils.ts
var displacementMap = "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/liquid-glass/displacementMap.jpg";
var polarDisplacementMap = "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/liquid-glass/polarDisplacementMap.jpg";
var prominentDisplacementMap = "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/liquid-glass/prominentDisplacementMap.png";

// src/components/generated/liquid-glass/index.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var generateShaderDisplacementMap = (width, height) => {
  const generator = new ShaderDisplacementGenerator({
    width,
    height,
    fragment: fragmentShaders.liquidGlass
  });
  const dataUrl = generator.updateShader();
  generator.destroy();
  return dataUrl;
};
var getMap = (mode, shaderMapUrl) => {
  switch (mode) {
    case "standard":
      return displacementMap;
    case "polar":
      return polarDisplacementMap;
    case "prominent":
      return prominentDisplacementMap;
    case "shader":
      return shaderMapUrl || displacementMap;
    default:
      throw new Error(`Invalid mode: ${mode}`);
  }
};
var GlassFilter = ({
  id,
  displacementScale,
  aberrationIntensity,
  width,
  height,
  mode,
  shaderMapUrl
}) => /* @__PURE__ */ jsx3("svg", { style: { position: "absolute", width, height }, "aria-hidden": "true", children: /* @__PURE__ */ jsxs2("defs", { children: [
  /* @__PURE__ */ jsxs2("radialGradient", { id: `${id}-edge-mask`, cx: "50%", cy: "50%", r: "50%", children: [
    /* @__PURE__ */ jsx3("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
    /* @__PURE__ */ jsx3("stop", { offset: `${Math.max(30, 80 - aberrationIntensity * 2)}%`, stopColor: "black", stopOpacity: "0" }),
    /* @__PURE__ */ jsx3("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
  ] }),
  /* @__PURE__ */ jsxs2("filter", { id, x: "-35%", y: "-35%", width: "170%", height: "170%", colorInterpolationFilters: "sRGB", children: [
    /* @__PURE__ */ jsx3("feImage", { id: "feimage", x: "0", y: "0", width: "100%", height: "100%", result: "DISPLACEMENT_MAP", href: getMap(mode, shaderMapUrl), preserveAspectRatio: "xMidYMid slice" }),
    /* @__PURE__ */ jsx3(
      "feColorMatrix",
      {
        in: "DISPLACEMENT_MAP",
        type: "matrix",
        values: "0.3 0.3 0.3 0 0\n                 0.3 0.3 0.3 0 0\n                 0.3 0.3 0.3 0 0\n                 0 0 0 1 0",
        result: "EDGE_INTENSITY"
      }
    ),
    /* @__PURE__ */ jsx3("feComponentTransfer", { in: "EDGE_INTENSITY", result: "EDGE_MASK", children: /* @__PURE__ */ jsx3("feFuncA", { type: "discrete", tableValues: `0 ${aberrationIntensity * 0.05} 1` }) }),
    /* @__PURE__ */ jsx3("feOffset", { in: "SourceGraphic", dx: "0", dy: "0", result: "CENTER_ORIGINAL" }),
    /* @__PURE__ */ jsx3("feDisplacementMap", { in: "SourceGraphic", in2: "DISPLACEMENT_MAP", scale: displacementScale * (mode === "shader" ? 1 : -1), xChannelSelector: "R", yChannelSelector: "B", result: "RED_DISPLACED" }),
    /* @__PURE__ */ jsx3(
      "feColorMatrix",
      {
        in: "RED_DISPLACED",
        type: "matrix",
        values: "1 0 0 0 0\n                 0 0 0 0 0\n                 0 0 0 0 0\n                 0 0 0 1 0",
        result: "RED_CHANNEL"
      }
    ),
    /* @__PURE__ */ jsx3("feDisplacementMap", { in: "SourceGraphic", in2: "DISPLACEMENT_MAP", scale: displacementScale * ((mode === "shader" ? 1 : -1) - aberrationIntensity * 0.05), xChannelSelector: "R", yChannelSelector: "B", result: "GREEN_DISPLACED" }),
    /* @__PURE__ */ jsx3(
      "feColorMatrix",
      {
        in: "GREEN_DISPLACED",
        type: "matrix",
        values: "0 0 0 0 0\n                 0 1 0 0 0\n                 0 0 0 0 0\n                 0 0 0 1 0",
        result: "GREEN_CHANNEL"
      }
    ),
    /* @__PURE__ */ jsx3("feDisplacementMap", { in: "SourceGraphic", in2: "DISPLACEMENT_MAP", scale: displacementScale * ((mode === "shader" ? 1 : -1) - aberrationIntensity * 0.1), xChannelSelector: "R", yChannelSelector: "B", result: "BLUE_DISPLACED" }),
    /* @__PURE__ */ jsx3(
      "feColorMatrix",
      {
        in: "BLUE_DISPLACED",
        type: "matrix",
        values: "0 0 0 0 0\n                 0 0 0 0 0\n                 0 0 1 0 0\n                 0 0 0 1 0",
        result: "BLUE_CHANNEL"
      }
    ),
    /* @__PURE__ */ jsx3("feBlend", { in: "GREEN_CHANNEL", in2: "BLUE_CHANNEL", mode: "screen", result: "GB_COMBINED" }),
    /* @__PURE__ */ jsx3("feBlend", { in: "RED_CHANNEL", in2: "GB_COMBINED", mode: "screen", result: "RGB_COMBINED" }),
    /* @__PURE__ */ jsx3("feGaussianBlur", { in: "RGB_COMBINED", stdDeviation: Math.max(0.1, 0.5 - aberrationIntensity * 0.1), result: "ABERRATED_BLURRED" }),
    /* @__PURE__ */ jsx3("feComposite", { in: "ABERRATED_BLURRED", in2: "EDGE_MASK", operator: "in", result: "EDGE_ABERRATION" }),
    /* @__PURE__ */ jsx3("feComponentTransfer", { in: "EDGE_MASK", result: "INVERTED_MASK", children: /* @__PURE__ */ jsx3("feFuncA", { type: "table", tableValues: "1 0" }) }),
    /* @__PURE__ */ jsx3("feComposite", { in: "CENTER_ORIGINAL", in2: "INVERTED_MASK", operator: "in", result: "CENTER_CLEAN" }),
    /* @__PURE__ */ jsx3("feComposite", { in: "EDGE_ABERRATION", in2: "CENTER_CLEAN", operator: "over" })
  ] })
] }) });
var GlassContainer = forwardRef(
  ({
    children,
    className = "",
    style,
    displacementScale = 25,
    blurAmount = 12,
    saturation = 180,
    aberrationIntensity = 2,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    active = false,
    overLight = false,
    cornerRadius = 999,
    padding = "24px 32px",
    glassSize = { width: 270, height: 69 },
    onClick,
    mode = "standard"
  }, ref) => {
    const filterId = useId();
    const [shaderMapUrl, setShaderMapUrl] = useState2("");
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    useEffect3(() => {
      if (mode === "shader") {
        const url = generateShaderDisplacementMap(glassSize.width, glassSize.height);
        setShaderMapUrl(url);
      }
    }, [mode, glassSize.width, glassSize.height]);
    const backdropStyle = {
      filter: isFirefox ? null : `url(#${filterId})`,
      backdropFilter: `blur(${(overLight ? 12 : 4) + blurAmount * 32}px) saturate(${saturation}%)`
    };
    return /* @__PURE__ */ jsxs2("div", { ref, className: `relative ${className} ${active ? "active" : ""} ${Boolean(onClick) ? "cursor-pointer" : ""}`, style, onClick, children: [
      /* @__PURE__ */ jsx3(GlassFilter, { mode, id: filterId, displacementScale, aberrationIntensity, width: glassSize.width, height: glassSize.height, shaderMapUrl }),
      /* @__PURE__ */ jsxs2(
        "div",
        {
          className: "glass",
          style: {
            borderRadius: `${cornerRadius}px`,
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "24px",
            padding,
            overflow: "hidden",
            transition: "all 0.2s ease-in-out",
            boxShadow: overLight ? "0px 16px 70px rgba(0, 0, 0, 0.75)" : "0px 12px 40px rgba(0, 0, 0, 0.25)"
          },
          onMouseEnter,
          onMouseLeave,
          onMouseDown,
          onMouseUp,
          children: [
            /* @__PURE__ */ jsx3(
              "span",
              {
                className: "glass__warp",
                style: {
                  ...backdropStyle,
                  position: "absolute",
                  inset: "0"
                }
              }
            ),
            /* @__PURE__ */ jsx3(
              "div",
              {
                className: "transition-all duration-150 ease-in-out text-white",
                style: {
                  position: "relative",
                  zIndex: 1,
                  font: "500 20px/1 system-ui",
                  textShadow: overLight ? "0px 2px 12px rgba(0, 0, 0, 0)" : "0px 2px 12px rgba(0, 0, 0, 0.4)"
                },
                children
              }
            )
          ]
        }
      )
    ] });
  }
);
GlassContainer.displayName = "GlassContainer";
function LiquidGlass({
  children,
  displacementScale = 70,
  blurAmount = 0.0625,
  saturation = 140,
  aberrationIntensity = 2,
  elasticity = 0.15,
  cornerRadius = 999,
  globalMousePos: externalGlobalMousePos,
  mouseOffset: externalMouseOffset,
  mouseContainer = null,
  className = "",
  padding = "24px 32px",
  overLight = false,
  style = {},
  mode = "standard",
  onClick
}) {
  const glassRef = useRef3(null);
  const [isHovered, setIsHovered] = useState2(false);
  const [isActive, setIsActive] = useState2(false);
  const [glassSize, setGlassSize] = useState2({ width: 270, height: 69 });
  const [internalGlobalMousePos, setInternalGlobalMousePos] = useState2({ x: 0, y: 0 });
  const [internalMouseOffset, setInternalMouseOffset] = useState2({ x: 0, y: 0 });
  const globalMousePos = externalGlobalMousePos || internalGlobalMousePos;
  const mouseOffset = externalMouseOffset || internalMouseOffset;
  const handleMouseMove = useCallback(
    (e) => {
      const container = mouseContainer?.current || glassRef.current;
      if (!container) {
        return;
      }
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setInternalMouseOffset({
        x: (e.clientX - centerX) / rect.width * 100,
        y: (e.clientY - centerY) / rect.height * 100
      });
      setInternalGlobalMousePos({
        x: e.clientX,
        y: e.clientY
      });
    },
    [mouseContainer]
  );
  useEffect3(() => {
    if (externalGlobalMousePos && externalMouseOffset) {
      return;
    }
    const container = mouseContainer?.current || glassRef.current;
    if (!container) {
      return;
    }
    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, mouseContainer, externalGlobalMousePos, externalMouseOffset]);
  const calculateDirectionalScale = useCallback(() => {
    if (!globalMousePos.x || !globalMousePos.y || !glassRef.current) {
      return "scale(1)";
    }
    const rect = glassRef.current.getBoundingClientRect();
    const pillCenterX = rect.left + rect.width / 2;
    const pillCenterY = rect.top + rect.height / 2;
    const pillWidth = glassSize.width;
    const pillHeight = glassSize.height;
    const deltaX = globalMousePos.x - pillCenterX;
    const deltaY = globalMousePos.y - pillCenterY;
    const edgeDistanceX = Math.max(0, Math.abs(deltaX) - pillWidth / 2);
    const edgeDistanceY = Math.max(0, Math.abs(deltaY) - pillHeight / 2);
    const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY);
    const activationZone = 200;
    if (edgeDistance > activationZone) {
      return "scale(1)";
    }
    const fadeInFactor = 1 - edgeDistance / activationZone;
    const centerDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (centerDistance === 0) {
      return "scale(1)";
    }
    const normalizedX = deltaX / centerDistance;
    const normalizedY = deltaY / centerDistance;
    const stretchIntensity = Math.min(centerDistance / 300, 1) * elasticity * fadeInFactor;
    const scaleX = 1 + Math.abs(normalizedX) * stretchIntensity * 0.3 - Math.abs(normalizedY) * stretchIntensity * 0.15;
    const scaleY = 1 + Math.abs(normalizedY) * stretchIntensity * 0.3 - Math.abs(normalizedX) * stretchIntensity * 0.15;
    return `scaleX(${Math.max(0.8, scaleX)}) scaleY(${Math.max(0.8, scaleY)})`;
  }, [globalMousePos, elasticity, glassSize]);
  const calculateFadeInFactor = useCallback(() => {
    if (!globalMousePos.x || !globalMousePos.y || !glassRef.current) {
      return 0;
    }
    const rect = glassRef.current.getBoundingClientRect();
    const pillCenterX = rect.left + rect.width / 2;
    const pillCenterY = rect.top + rect.height / 2;
    const pillWidth = glassSize.width;
    const pillHeight = glassSize.height;
    const edgeDistanceX = Math.max(0, Math.abs(globalMousePos.x - pillCenterX) - pillWidth / 2);
    const edgeDistanceY = Math.max(0, Math.abs(globalMousePos.y - pillCenterY) - pillHeight / 2);
    const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY);
    const activationZone = 200;
    return edgeDistance > activationZone ? 0 : 1 - edgeDistance / activationZone;
  }, [globalMousePos, glassSize]);
  const calculateElasticTranslation = useCallback(() => {
    if (!glassRef.current) {
      return { x: 0, y: 0 };
    }
    const fadeInFactor = calculateFadeInFactor();
    const rect = glassRef.current.getBoundingClientRect();
    const pillCenterX = rect.left + rect.width / 2;
    const pillCenterY = rect.top + rect.height / 2;
    return {
      x: (globalMousePos.x - pillCenterX) * elasticity * 0.1 * fadeInFactor,
      y: (globalMousePos.y - pillCenterY) * elasticity * 0.1 * fadeInFactor
    };
  }, [globalMousePos, elasticity, calculateFadeInFactor]);
  useEffect3(() => {
    const updateGlassSize = () => {
      if (glassRef.current) {
        const rect = glassRef.current.getBoundingClientRect();
        setGlassSize({ width: rect.width, height: rect.height });
      }
    };
    updateGlassSize();
    window.addEventListener("resize", updateGlassSize);
    return () => window.removeEventListener("resize", updateGlassSize);
  }, []);
  const transformStyle = `translate(calc(-50% + ${calculateElasticTranslation().x}px), calc(-50% + ${calculateElasticTranslation().y}px)) ${isActive && Boolean(onClick) ? "scale(0.96)" : calculateDirectionalScale()}`;
  const baseStyle = {
    ...style,
    transform: transformStyle,
    transition: "all ease-out 0.2s"
  };
  const positionStyles = {
    position: baseStyle.position || "relative",
    top: baseStyle.top || "50%",
    left: baseStyle.left || "50%"
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx3(
      "div",
      {
        className: `bg-black transition-all duration-150 ease-in-out pointer-events-none ${overLight ? "opacity-20" : "opacity-0"}`,
        style: {
          ...positionStyles,
          height: glassSize.height,
          width: glassSize.width,
          borderRadius: `${cornerRadius}px`,
          transform: baseStyle.transform,
          transition: baseStyle.transition
        }
      }
    ),
    /* @__PURE__ */ jsx3(
      "div",
      {
        className: `bg-black transition-all duration-150 ease-in-out pointer-events-none mix-blend-overlay ${overLight ? "opacity-100" : "opacity-0"}`,
        style: {
          ...positionStyles,
          height: glassSize.height,
          width: glassSize.width,
          borderRadius: `${cornerRadius}px`,
          transform: baseStyle.transform,
          transition: baseStyle.transition
        }
      }
    ),
    /* @__PURE__ */ jsx3(
      GlassContainer,
      {
        ref: glassRef,
        className,
        style: baseStyle,
        cornerRadius,
        displacementScale: overLight ? displacementScale * 0.5 : displacementScale,
        blurAmount,
        saturation,
        aberrationIntensity,
        glassSize,
        padding,
        mouseOffset,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onMouseDown: () => setIsActive(true),
        onMouseUp: () => setIsActive(false),
        active: isActive,
        overLight,
        onClick,
        mode,
        children
      }
    ),
    /* @__PURE__ */ jsx3(
      "span",
      {
        style: {
          ...positionStyles,
          height: glassSize.height,
          width: glassSize.width,
          borderRadius: `${cornerRadius}px`,
          transform: baseStyle.transform,
          transition: baseStyle.transition,
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.2,
          padding: "1.5px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          boxShadow: "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
          background: `linear-gradient(
          ${135 + mouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${0.12 + Math.abs(mouseOffset.x) * 8e-3}) ${Math.max(10, 33 + mouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${0.4 + Math.abs(mouseOffset.x) * 0.012}) ${Math.min(90, 66 + mouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`
        }
      }
    ),
    /* @__PURE__ */ jsx3(
      "span",
      {
        style: {
          ...positionStyles,
          height: glassSize.height,
          width: glassSize.width,
          borderRadius: `${cornerRadius}px`,
          transform: baseStyle.transform,
          transition: baseStyle.transition,
          pointerEvents: "none",
          mixBlendMode: "overlay",
          padding: "1.5px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          boxShadow: "0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)",
          background: `linear-gradient(
          ${135 + mouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${0.32 + Math.abs(mouseOffset.x) * 8e-3}) ${Math.max(10, 33 + mouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${0.6 + Math.abs(mouseOffset.x) * 0.012}) ${Math.min(90, 66 + mouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`
        }
      }
    ),
    Boolean(onClick) && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx3(
        "div",
        {
          style: {
            ...positionStyles,
            height: glassSize.height,
            width: glassSize.width + 1,
            borderRadius: `${cornerRadius}px`,
            transform: baseStyle.transform,
            pointerEvents: "none",
            transition: "all 0.2s ease-out",
            opacity: isHovered || isActive ? 0.5 : 0,
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%)",
            mixBlendMode: "overlay"
          }
        }
      ),
      /* @__PURE__ */ jsx3(
        "div",
        {
          style: {
            ...positionStyles,
            height: glassSize.height,
            width: glassSize.width + 1,
            borderRadius: `${cornerRadius}px`,
            transform: baseStyle.transform,
            pointerEvents: "none",
            transition: "all 0.2s ease-out",
            opacity: isActive ? 0.5 : 0,
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%)",
            mixBlendMode: "overlay"
          }
        }
      ),
      /* @__PURE__ */ jsx3(
        "div",
        {
          style: {
            ...baseStyle,
            height: glassSize.height,
            width: glassSize.width + 1,
            borderRadius: `${cornerRadius}px`,
            position: baseStyle.position,
            top: baseStyle.top,
            left: baseStyle.left,
            pointerEvents: "none",
            transition: "all 0.2s ease-out",
            opacity: isHovered ? 0.4 : isActive ? 0.8 : 0,
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            mixBlendMode: "overlay"
          }
        }
      )
    ] })
  ] });
}

// src/components/generated/GlassSurface.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var GlassContext = createContext({ strength: 1, color: 0.8 });
function GlassSurface({ compact = false }) {
  const { strength, color } = useContext(GlassContext);
  const hostRef = useRef4(null);
  const mouseContainer = useRef4(null);
  const [size, setSize] = useState3({ width: 1, height: 1 });
  const [reduce, setReduce] = useState3(false);
  useLayoutEffect(() => {
    const parent = hostRef.current?.parentElement;
    if (!parent) return;
    mouseContainer.current = parent;
    const measure = () => setSize({ width: parent.clientWidth, height: parent.clientHeight });
    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    measure();
    return () => observer.disconnect();
  }, []);
  useEffect4(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return /* @__PURE__ */ jsx4("div", { ref: hostRef, className: "rdev-glass-surface", "aria-hidden": "true", "data-material": "liquid-glass-react", children: /* @__PURE__ */ jsx4(
    LiquidGlass,
    {
      displacementScale: (compact ? 36 : 54) * strength,
      blurAmount: compact ? 0.04 : 0.08 + strength * 0.2,
      saturation: 110 + color * 40,
      aberrationIntensity: reduce ? 0 : (compact ? 1.2 : 1.7) * strength,
      elasticity: reduce ? 0 : compact ? 0.1 : 0.045,
      cornerRadius: compact ? 100 : 16,
      padding: "0px",
      mouseContainer,
      mode: "standard",
      style: { position: "absolute", top: "50%", left: "50%" },
      children: /* @__PURE__ */ jsx4("div", { style: { width: size.width, height: size.height } })
    },
    Math.round(size.width) + "x" + Math.round(size.height)
  ) });
}

// src/components/generated/sceneConfig.ts
var originalParticles = {
  brightness: 1.2,
  layers: 30,
  speed: 0.15,
  glow: 0.25,
  scale: 0.7,
  size: 0.01,
  direction: 200,
  randomize: true,
  blink: true,
  warp: false
};
var defaultScene = {
  particles: { ...originalParticles },
  glass: 1,
  glassColor: 0.8
};
var particlePresets = {
  "\u539F\u7248\u67D4\u5149": originalParticles,
  "\u6DF1\u7A7A\u5FAE\u5149": { ...originalParticles, brightness: 0.85, layers: 26, speed: 0.1, glow: 0.22 },
  "\u6E05\u6670\u661F\u5149": { ...originalParticles, brightness: 1.45, glow: 0.48, size: 0.015 }
};
var particleLimits = {
  brightness: [0.3, 2],
  layers: [8, 30],
  speed: [0, 0.6],
  glow: [0.1, 0.85],
  scale: [0.4, 1.2],
  size: [5e-3, 0.08],
  direction: [0, 360]
};
function record(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function bounded(value, fallback, min, max) {
  return typeof value === "number" && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}
function normalizeSceneConfig(value) {
  const saved = record(value);
  const savedParticles = record(saved.particles);
  const particles = { ...originalParticles };
  for (const key of Object.keys(particleLimits)) {
    const [min, max] = particleLimits[key];
    particles[key] = bounded(savedParticles[key], particles[key], min, max);
  }
  particles.layers = Math.round(particles.layers);
  for (const key of ["randomize", "blink", "warp"]) {
    if (typeof savedParticles[key] === "boolean") particles[key] = savedParticles[key];
  }
  return {
    particles,
    glass: bounded(saved.glass, defaultScene.glass, 0.4, 1),
    glassColor: bounded(saved.glassColor, defaultScene.glassColor ?? 0.8, 0, 1)
  };
}
function parseScenePreferences(serialized) {
  try {
    return normalizeSceneConfig(JSON.parse(serialized ?? "null"));
  } catch {
    return normalizeSceneConfig(null);
  }
}

// src/components/generated/SceneSettings.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function SceneSettings({
  config,
  onChange,
  paused,
  onPause,
  onClose,
  fallback
}) {
  const p = config.particles;
  const patch = (changes) => onChange({
    ...config,
    particles: {
      ...p,
      ...changes
    }
  });
  const slider = (key, label, min, max, step, unit = "") => /* @__PURE__ */ jsxs3("label", { className: "scene-slider", children: [
    /* @__PURE__ */ jsxs3("span", { children: [
      label,
      /* @__PURE__ */ jsxs3("output", { children: [
        Number(p[key]).toFixed(step >= 1 ? 0 : step >= 0.01 ? 2 : 3),
        unit
      ] })
    ] }),
    /* @__PURE__ */ jsx5("input", { type: "range", "aria-label": label, min, max, step, value: Number(p[key]), onChange: (e) => patch({
      [key]: Number(e.target.value)
    }) })
  ] }, key);
  return /* @__PURE__ */ jsxs3("section", { className: "panel liquid-glass-strong expanded-panel scene-settings", "aria-labelledby": "scene-settings-title", children: [
    /* @__PURE__ */ jsx5(GlassSurface, {}),
    /* @__PURE__ */ jsxs3("div", { className: "panel-heading", children: [
      /* @__PURE__ */ jsx5("h2", { id: "scene-settings-title", children: "\u573A\u666F\u8C03\u8282" }),
      /* @__PURE__ */ jsx5("button", { type: "button", onClick: onClose, "aria-label": "\u5173\u95ED\u573A\u666F\u8C03\u8282", children: "\u5173\u95ED" })
    ] }),
    /* @__PURE__ */ jsx5("p", { className: "settings-description", children: "\u627E\u5230\u4F60\u559C\u6B22\u7684\u661F\u5149\u4E0E\u73BB\u7483\u8D28\u611F\u3002\u8C03\u6574\u5373\u65F6\u751F\u6548\uFF0C\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668\u3002" }),
    fallback && /* @__PURE__ */ jsx5("p", { className: "settings-fallback", role: "status", children: "\u5F53\u524D\u8BBE\u5907\u4F7F\u7528\u67D4\u5149\u7C92\u5B50\u517C\u5BB9\u6A21\u5F0F\u3002" }),
    /* @__PURE__ */ jsxs3("fieldset", { className: "scene-presets", children: [
      /* @__PURE__ */ jsx5("legend", { children: "\u661F\u5149\u98CE\u683C" }),
      /* @__PURE__ */ jsx5("div", { children: Object.entries(particlePresets).map(([name, preset]) => /* @__PURE__ */ jsx5("button", { type: "button", "aria-pressed": Object.keys(preset).every((k) => p[k] === preset[k]), onClick: () => onChange({
        ...config,
        particles: {
          ...preset
        }
      }), children: name }, name)) })
    ] }),
    /* @__PURE__ */ jsxs3("fieldset", { className: "scene-controls", children: [
      /* @__PURE__ */ jsx5("legend", { children: "\u7C92\u5B50" }),
      slider("brightness", "\u4EAE\u5EA6", 0.3, 2, 0.05),
      slider("layers", "\u4E30\u5BCC\u5EA6", 8, 30, 1),
      slider("speed", "\u6F02\u79FB\u901F\u5EA6", 0, 0.6, 0.01),
      slider("glow", "\u5149\u70B9\u9510\u5EA6", 0.1, 0.85, 0.01),
      slider("size", "\u67D4\u5149\u8303\u56F4", 5e-3, 0.08, 5e-3),
      slider("scale", "\u661F\u5149\u5C3A\u5EA6", 0.4, 1.2, 0.05),
      /* @__PURE__ */ jsxs3("label", { className: "scene-switch", children: [
        /* @__PURE__ */ jsx5("span", { children: "\u5206\u5C42\u968F\u673A\u6F02\u79FB" }),
        /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: p.randomize, onChange: (e) => patch({
          randomize: e.target.checked
        }) })
      ] }),
      !p.randomize && slider("direction", "\u6F02\u79FB\u65B9\u5411", 0, 360, 1, "\xB0"),
      /* @__PURE__ */ jsxs3("label", { className: "scene-switch", children: [
        /* @__PURE__ */ jsx5("span", { children: "\u67D4\u548C\u95EA\u70C1" }),
        /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: p.blink, onChange: (e) => patch({
          blink: e.target.checked
        }) })
      ] }),
      /* @__PURE__ */ jsxs3("label", { className: "scene-switch", children: [
        /* @__PURE__ */ jsx5("span", { children: "\u8DC3\u8FC1\u6548\u679C" }),
        /* @__PURE__ */ jsx5("input", { type: "checkbox", checked: p.warp, onChange: (e) => patch({
          warp: e.target.checked
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("fieldset", { className: "scene-controls", children: [
      /* @__PURE__ */ jsx5("legend", { children: "\u9762\u677F\u6750\u8D28" }),
      /* @__PURE__ */ jsxs3("label", { className: "scene-slider", children: [
        /* @__PURE__ */ jsxs3("span", { children: [
          "\u900F\u5149\u8272\u6CFD",
          /* @__PURE__ */ jsxs3("output", { children: [
            Math.round((config.glassColor ?? 0.8) * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx5("input", { type: "range", "aria-label": "\u900F\u5149\u8272\u6CFD", min: "0", max: "1", step: ".05", value: config.glassColor ?? 0.8, onChange: (e) => onChange({
          ...config,
          glassColor: Number(e.target.value)
        }) })
      ] }),
      /* @__PURE__ */ jsxs3("label", { className: "scene-slider", children: [
        /* @__PURE__ */ jsxs3("span", { children: [
          "\u73BB\u7483\u5F3A\u5EA6",
          /* @__PURE__ */ jsxs3("output", { children: [
            Math.round(config.glass * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx5("input", { type: "range", "aria-label": "\u73BB\u7483\u5F3A\u5EA6", min: ".4", max: "1", step: ".05", value: config.glass, onChange: (e) => onChange({
          ...config,
          glass: Number(e.target.value)
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "settings-footer", children: [
      /* @__PURE__ */ jsxs3("button", { type: "button", className: "motion-toggle liquid-glass", "aria-pressed": paused, onClick: onPause, children: [
        /* @__PURE__ */ jsx5(GlassSurface, { compact: true }),
        paused ? "\u7EE7\u7EED\u822A\u884C" : "\u6682\u505C\u822A\u884C"
      ] }),
      /* @__PURE__ */ jsx5("button", { type: "button", className: "settings-reset", onClick: () => onChange({
        ...defaultScene,
        particles: {
          ...originalParticles
        }
      }), children: "\u6062\u590D\u9ED8\u8BA4" })
    ] })
  ] });
}

// src/components/generated/useScenePreferences.ts
import { useEffect as useEffect5, useState as useState4 } from "react";
var STORAGE_KEY = "center-scene-v1";
function useScenePreferences() {
  const [config, setConfig] = useState4(() => normalizeSceneConfig(null));
  const [ready, setReady] = useState4(false);
  useEffect5(() => {
    try {
      setConfig(parseScenePreferences(localStorage.getItem(STORAGE_KEY)));
    } catch {
    }
    setReady(true);
  }, []);
  useEffect5(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
      } catch {
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [config, ready]);
  return [config, setConfig];
}

// src/components/generated/useOrbitCamera.ts
import { useCallback as useCallback2, useLayoutEffect as useLayoutEffect2, useRef as useRef5, useState as useState5 } from "react";
function useOrbitCamera() {
  const [cameraFocused, setCameraFocused] = useState5(false);
  const [camera, setCamera] = useState5({
    x: 0,
    y: 0,
    scale: 1
  });
  const rootRef = useRef5(null);
  const sceneRef = useRef5(null);
  const stationRef = useRef5(null);
  const stationButtonRef = useRef5(null);
  const returnToWide = useCallback2(() => {
    setCameraFocused(false);
    requestAnimationFrame(() => stationButtonRef.current?.focus({
      preventScroll: true
    }));
  }, []);
  const toggleCamera = () => {
    if (cameraFocused) {
      returnToWide();
      return;
    }
    rootRef.current?.scrollIntoView({
      behavior: "auto",
      block: "start"
    });
    setCameraFocused(true);
  };
  useLayoutEffect2(() => {
    if (!cameraFocused) {
      setCamera({
        x: 0,
        y: 0,
        scale: 1
      });
      return;
    }
    const scene = sceneRef.current, station = stationRef.current, root = rootRef.current;
    if (!scene || !station || !root) return;
    const fitCamera = () => {
      const image = station.querySelector(".station-layer");
      const ratio = image && image.naturalHeight ? image.naturalWidth / image.naturalHeight : 2;
      const shipWidth = Math.min(station.offsetWidth, station.offsetHeight * ratio);
      const scale = Math.max(1.35, Math.min(3, root.clientWidth * (root.clientWidth <= 760 ? 0.86 : 0.67) / Math.max(shipWidth, 1)));
      const transform = stationButtonRef.current ? getComputedStyle(stationButtonRef.current).transform : "none";
      const offset = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m41;
      const cx = station.offsetLeft + station.offsetWidth / 2 + offset;
      const cy = station.offsetTop + station.offsetHeight / 2;
      setCamera({
        x: root.clientWidth * 0.5 - cx * scale,
        y: scene.clientHeight * 0.46 - cy * scale,
        scale
      });
    };
    fitCamera();
    const observer = new ResizeObserver(fitCamera);
    observer.observe(scene);
    observer.observe(root);
    const followTimer = setInterval(fitCamera, 100);
    const onEscape = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        returnToWide();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      observer.disconnect();
      clearInterval(followTimer);
      window.removeEventListener("keydown", onEscape);
    };
  }, [cameraFocused, returnToWide]);
  return { cameraFocused, camera, rootRef, sceneRef, stationRef, stationButtonRef, returnToWide, toggleCamera };
}

// src/components/generated/CENTER.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var sections = ["\u9A7E\u9A76\u8231", "\u4ECA\u65E5", "\u5B66\u4E60", "\u9879\u76EE", "AI", "\u66F4\u591A"];
var initialTasks = [{
  title: "\u82F1\u8BED \xB7 \u9605\u8BFB\u8BAD\u7EC3",
  time: "\u8FDB\u884C\u4E2D 14:00",
  done: false
}, {
  title: "\u9879\u76EE \xB7 \u9700\u6C42\u68B3\u7406",
  time: "19:00",
  done: false
}, {
  title: "\u590D\u76D8 \xB7 \u77E5\u8BC6\u6574\u7406",
  time: "21:00",
  done: false
}, {
  title: "\u6570\u5B66 \xB7 \u4E60\u9898\u7EC3\u4E60",
  time: "\u5DF2\u5B8C\u6210",
  done: true
}];
var CENTER = () => {
  const [tasks, setTasks] = useState6(initialTasks);
  const [section, setSection] = useState6("\u9A7E\u9A76\u8231");
  const [paused, setPaused] = useState6(false);
  const [sceneConfig, setSceneConfig] = useScenePreferences();
  const [particlesFallback, setParticlesFallback] = useState6(false);
  useEffect6(() => {
    if (section !== "\u66F4\u591A") return;
    if (innerWidth <= 760) requestAnimationFrame(() => document.querySelector(".scene-settings")?.scrollIntoView({
      behavior: "auto",
      block: "start"
    }));
    const close = (event) => {
      if (event.key === "Escape") {
        setSection("\u9A7E\u9A76\u8231");
        requestAnimationFrame(() => document.querySelector(".scene-open")?.focus());
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [section]);
  const { cameraFocused, camera, rootRef, sceneRef, stationRef, stationButtonRef, returnToWide, toggleCamera } = useOrbitCamera();
  const [studying, setStudying] = useState6(false);
  const [ai, setAi] = useState6("\u4ECA\u665A\u7684\u5730\u7403\u5F88\u7F8E\u3002\u5148\u5B8C\u6210\u82F1\u8BED\u9605\u8BFB\uFF0C\u518D\u4F11\u606F\u4E00\u4E0B\uFF1F");
  const [clock, setClock] = useState6("");
  const [elapsed, setElapsed] = useState6(0);
  const [notice, setNotice] = useState6("");
  const focusRef = useRef6(null);
  useEffect6(() => {
    const update = () => setClock(new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(/* @__PURE__ */ new Date()).replace(/\//g, "."));
    update();
    const id = setInterval(update, 1e3);
    return () => clearInterval(id);
  }, []);
  useEffect6(() => {
    if (!studying) return;
    const id = setInterval(() => setElapsed((t) => t + 1), 1e3);
    return () => clearInterval(id);
  }, [studying]);
  useEffect6(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(id);
  }, [notice]);
  const chooseSection = (value) => {
    setSection(value);
    if (["\u4ECA\u65E5", "\u9879\u76EE", "\u66F4\u591A", "\u9A7E\u9A76\u8231"].includes(value)) rootRef.current?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    if (value === "AI") document.querySelector(".ai-panel")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    if (value === "\u5B66\u4E60") focusRef.current?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center"
    });
  };
  return /* @__PURE__ */ jsx6(GlassContext.Provider, { value: { strength: sceneConfig.glass, color: sceneConfig.glassColor ?? 0.8 }, children: /* @__PURE__ */ jsxs4("main", { ref: rootRef, style: {
    "--glass-strength": sceneConfig.glass,
    "--glass-blur": 50 * sceneConfig.glass + "px",
    "--glass-tint": (0.12 + 0.1 * sceneConfig.glass).toFixed(2),
    "--glass-color": sceneConfig.glassColor ?? 0.8
  }, "data-camera": cameraFocused ? "station" : "wide", className: `center-app ${paused ? "motion-paused" : ""} ${cameraFocused ? "camera-focused" : ""}`, children: [
    /* @__PURE__ */ jsxs4("div", { ref: sceneRef, className: "space-scene", style: {
      transform: "none"
    }, children: [
      /* @__PURE__ */ jsx6("img", { className: "star-backdrop", style: { transform: `translate3d(${camera.x * 0.015}px,${camera.y * 0.015}px,0) scale(${1 + (camera.scale - 1) * 0.015})` }, src: "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/space/starfield.png", alt: "" }),
      /* @__PURE__ */ jsx6("div", { className: "planet-camera", style: { transform: `translate3d(${camera.x * 0.13}px,${camera.y * 0.13}px,0) scale(${1 + (camera.scale - 1) * 0.16})` }, children: /* @__PURE__ */ jsx6(Earth, { paused, fallback: "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/space/earth-fallback.png" }) }),
      /* @__PURE__ */ jsx6("div", { className: "station-camera", style: { transform: `translate3d(${camera.x}px,${camera.y}px,0) scale(${camera.scale})` }, children: /* @__PURE__ */ jsx6("div", { ref: stationRef, className: "station-anchor", children: /* @__PURE__ */ jsxs4("button", { ref: stationButtonRef, className: "station-hit", "aria-label": cameraFocused ? "\u70B9\u51FB\u822A\u5929\u5668\u8FD4\u56DE\u5168\u666F" : "\u62C9\u8FD1\u822A\u5929\u5668", "aria-pressed": cameraFocused, onClick: toggleCamera, children: [
        /* @__PURE__ */ jsx6("img", { className: "station-layer", src: "https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/public/assets/space/station.png", alt: "" }),
        /* @__PURE__ */ jsx6("span", { className: "station-cue", "aria-hidden": "true", children: "\u70B9\u51FB\u9760\u8FD1" })
      ] }) }) }),
      /* @__PURE__ */ jsx6("div", { className: "window-shade" }),
      /* @__PURE__ */ jsx6("div", { className: "particle-camera", style: { transform: `translate3d(${camera.x * 0.3}px,${camera.y * 0.3}px,0) scale(${1 + (camera.scale - 1) * 0.35})` }, children: /* @__PURE__ */ jsx6(SpaceParticles, { paused, config: sceneConfig.particles, onFallback: setParticlesFallback }) })
    ] }),
    /* @__PURE__ */ jsxs4("header", { className: "top-bar", children: [
      /* @__PURE__ */ jsxs4("div", { className: "brand", children: [
        "CENTER ",
        /* @__PURE__ */ jsx6("span", { children: "\xB7 \u66F4\u9AD8\u7684\u4F60" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "system-status", children: [
        /* @__PURE__ */ jsx6("time", { children: clock }),
        /* @__PURE__ */ jsxs4("span", { children: [
          /* @__PURE__ */ jsx6("i", {}),
          " \u6240\u6709\u7CFB\u7EDF\u6B63\u5E38"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "dashboard-grid", "aria-hidden": cameraFocused || void 0, children: [
      /* @__PURE__ */ jsxs4("section", { className: `panel liquid-glass-strong today-panel ${section === "\u4ECA\u65E5" ? "selected-panel" : ""}`, "aria-labelledby": "today-heading", children: [
        /* @__PURE__ */ jsx6(GlassSurface, {}),
        /* @__PURE__ */ jsxs4("div", { className: "panel-heading", children: [
          /* @__PURE__ */ jsx6("h2", { id: "today-heading", children: "\u4ECA\u65E5\u884C\u52A8" }),
          /* @__PURE__ */ jsxs4("span", { children: [
            "\u5DF2\u5B8C\u6210 ",
            tasks.filter((t) => t.done).length,
            "/4"
          ] })
        ] }),
        /* @__PURE__ */ jsx6("div", { className: "task-list", children: tasks.map((task, index) => /* @__PURE__ */ jsxs4("button", { className: `task ${task.done ? "task-done" : ""} ${index === 0 && !task.done ? "task-active" : ""}`, "aria-pressed": task.done, onClick: () => setTasks((list) => list.map((t, i) => i === index ? {
          ...t,
          done: !t.done
        } : t)), children: [
          /* @__PURE__ */ jsx6("span", { className: "task-check", "aria-hidden": "true", children: task.done && /* @__PURE__ */ jsx6("svg", { viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx6("path", { d: "m3 8 3 3 7-7" }) }) }),
          /* @__PURE__ */ jsxs4("span", { className: "task-label", children: [
            task.title,
            /* @__PURE__ */ jsx6("small", { children: task.done ? "\u5DF2\u5B8C\u6210" : task.time })
          ] })
        ] }, task.title)) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "orbit-view", children: [
        /* @__PURE__ */ jsxs4("button", { type: "button", className: "motion-toggle liquid-glass scene-open", "aria-expanded": section === "\u66F4\u591A", "aria-controls": "scene-settings-region", onClick: () => setSection(section === "\u66F4\u591A" ? "\u9A7E\u9A76\u8231" : "\u66F4\u591A"), children: [
          /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
          /* @__PURE__ */ jsxs4("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx6("path", { d: "m8 3 .5-1h3l.5 1 1.5.9 1.2-.1 1.5 2.6-.7 1 .1 1.7.7 1-1.5 2.6-1.2-.1-1.5.9-.5 1h-3l-.5-1-1.5-.9-1.2.1L4 11.1l.7-1-.1-1.7-.7-1 1.5-2.6 1.2.1Z" }),
            /* @__PURE__ */ jsx6("circle", { cx: "10", cy: "8.4", r: "2.3" })
          ] }),
          "\u573A\u666F\u8C03\u8282"
        ] }),
        /* @__PURE__ */ jsxs4("button", { className: "motion-toggle liquid-glass", "aria-pressed": paused, onClick: () => setPaused(!paused), children: [
          /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
          /* @__PURE__ */ jsx6("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: paused ? /* @__PURE__ */ jsx6("path", { d: "m7 4 9 6-9 6Z" }) : /* @__PURE__ */ jsx6("path", { d: "M6 4v12M14 4v12" }) }),
          paused ? "\u7EE7\u7EED\u822A\u884C" : "\u6682\u505C\u822A\u884C"
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("section", { ref: focusRef, id: "learning-content", className: `panel liquid-glass-strong focus-panel ${section === "\u5B66\u4E60" ? "selected-panel" : ""}`, "aria-labelledby": "focus-heading", children: [
        /* @__PURE__ */ jsx6(GlassSurface, {}),
        /* @__PURE__ */ jsxs4("div", { className: "panel-heading", children: [
          /* @__PURE__ */ jsx6("span", { children: "\u7EE7\u7EED\u5B66\u4E60" }),
          studying && /* @__PURE__ */ jsxs4("span", { className: "focus-time", children: [
            Math.floor(elapsed / 60).toString().padStart(2, "0"),
            ":",
            (elapsed % 60).toString().padStart(2, "0")
          ] })
        ] }),
        /* @__PURE__ */ jsx6("h1", { id: "focus-heading", children: "\u8003\u7814\u6570\u5B66" }),
        /* @__PURE__ */ jsx6("p", { children: "\u4E0B\u4E00\u8282\uFF1A\u9AD8\u7B49\u6570\u5B66 \xB7 \u6781\u9650\u4E0E\u8FDE\u7EED" }),
        /* @__PURE__ */ jsx6("div", { className: "progress-track", role: "progressbar", "aria-label": "\u8003\u7814\u6570\u5B66\u5B66\u4E60\u8FDB\u5EA6", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 68, children: /* @__PURE__ */ jsx6("span", {}) }),
        /* @__PURE__ */ jsxs4("div", { className: "focus-footer", children: [
          /* @__PURE__ */ jsx6("span", { children: "\u8FDB\u5EA6 68% \xB7 \u672C\u5468 5/7" }),
          /* @__PURE__ */ jsxs4("button", { className: "primary-button liquid-glass-strong", onClick: () => {
            setStudying(!studying);
            setNotice(studying ? "\u5DF2\u6682\u505C\u4E13\u6CE8\u8BA1\u65F6" : "\u4E13\u6CE8\u8BA1\u65F6\u5DF2\u5F00\u59CB");
          }, children: [
            /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
            studying ? "\u6682\u505C\u5B66\u4E60" : "\u7EE7\u7EED\u5B66\u4E60",
            /* @__PURE__ */ jsx6("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("path", { d: "M4 10h12m-5-5 5 5-5 5" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("section", { className: `panel liquid-glass-strong ai-panel ${section === "AI" ? "selected-panel" : ""}`, "aria-labelledby": "ai-heading", children: [
        /* @__PURE__ */ jsx6(GlassSurface, {}),
        /* @__PURE__ */ jsxs4("div", { className: "panel-heading", children: [
          /* @__PURE__ */ jsx6("h2", { id: "ai-heading", children: "AI \u526F\u5B98" }),
          /* @__PURE__ */ jsxs4("span", { className: "online", children: [
            /* @__PURE__ */ jsx6("i", {}),
            " \u5728\u7EBF"
          ] })
        ] }),
        /* @__PURE__ */ jsx6("p", { className: "ai-message", "aria-live": "polite", children: ai }),
        /* @__PURE__ */ jsx6("div", { className: "quick-actions", children: ["\u5236\u5B9A\u8BA1\u5212", "\u89E3\u91CA\u96BE\u9898", "\u4ECA\u65E5\u603B\u7ED3"].map((label, i) => /* @__PURE__ */ jsx6("button", { onClick: () => setAi(["\u5148\u7528 25 \u5206\u949F\u5B8C\u6210\u82F1\u8BED\u9605\u8BFB\uFF0C\u518D\u68B3\u7406\u9879\u76EE\u9700\u6C42\u3002\u6BCF\u5B8C\u6210\u4E00\u9879\uFF0C\u53EF\u5728\u4ECA\u65E5\u884C\u52A8\u91CC\u6807\u8BB0\u3002", "\u6781\u9650\u63CF\u8FF0\u51FD\u6570\u8D8B\u8FD1\u67D0\u70B9\u65F6\u7684\u53D8\u5316\u3002\u5F00\u59CB\u5B66\u4E60\u540E\uFF0C\u53EF\u4EE5\u628A\u5177\u4F53\u9898\u76EE\u6574\u7406\u5728\u8FD9\u91CC\u3002", `\u4ECA\u65E5\u5DF2\u5B8C\u6210 ${tasks.filter((t) => t.done).length}/4 \u9879\u884C\u52A8\u3002\u7ED9\u81EA\u5DF1\u7559\u4E00\u70B9\u65F6\u95F4\uFF0C\u8BB0\u5F55\u4E00\u4E2A\u4ECA\u5929\u5B66\u5230\u7684\u77E5\u8BC6\u70B9\u3002`][i]), children: label }, label)) }),
        /* @__PURE__ */ jsx6("small", { className: "demo-note", children: "\u6F14\u793A\u5EFA\u8BAE" })
      ] }),
      section === "\u9879\u76EE" && /* @__PURE__ */ jsxs4("section", { className: "panel liquid-glass-strong expanded-panel", children: [
        /* @__PURE__ */ jsx6(GlassSurface, {}),
        /* @__PURE__ */ jsxs4("div", { className: "panel-heading", children: [
          /* @__PURE__ */ jsx6("h2", { children: "\u9879\u76EE \xB7 \u9700\u6C42\u68B3\u7406" }),
          /* @__PURE__ */ jsx6("button", { onClick: () => setSection("\u9A7E\u9A76\u8231"), "aria-label": "\u5173\u95ED\u9879\u76EE\u8BE6\u60C5", children: "\u5173\u95ED" })
        ] }),
        /* @__PURE__ */ jsx6("p", { children: "\u4ECA\u65E5 19:00" }),
        /* @__PURE__ */ jsx6("p", { children: "\u68B3\u7406\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u6574\u7406\u4E0B\u4E00\u6B65\u884C\u52A8\u3002" }),
        /* @__PURE__ */ jsxs4("button", { className: "primary-button liquid-glass-strong", onClick: () => {
          setTasks((list) => list.map((t, i) => i === 1 ? {
            ...t,
            done: true
          } : t));
          setNotice("\u9879\u76EE\u884C\u52A8\u5DF2\u6807\u8BB0\u5B8C\u6210");
        }, children: [
          /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
          "\u6807\u8BB0\u5B8C\u6210"
        ] })
      ] }),
      section === "\u66F4\u591A" && /* @__PURE__ */ jsx6("div", { id: "scene-settings-region", className: "settings-region", children: /* @__PURE__ */ jsx6(SceneSettings, { config: sceneConfig, onChange: setSceneConfig, paused, onPause: () => setPaused(!paused), fallback: particlesFallback, onClose: () => {
        setSection("\u9A7E\u9A76\u8231");
        requestAnimationFrame(() => document.querySelector(".scene-open")?.focus({
          preventScroll: true
        }));
      } }) })
    ] }),
    /* @__PURE__ */ jsxs4("a", { className: "scroll-cue", href: "#learning-content", children: [
      /* @__PURE__ */ jsx6("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("path", { d: "m5 7 5 5 5-5" }) }),
      "\u4E0B\u6ED1\u67E5\u770B\u5B66\u4E60\u4E0E AI"
    ] }),
    /* @__PURE__ */ jsxs4("nav", { className: "main-nav liquid-glass-strong", "aria-label": "\u4E3B\u5BFC\u822A", children: [
      /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
      sections.map((label) => /* @__PURE__ */ jsx6("button", { "aria-current": section === label ? "page" : void 0, onClick: () => chooseSection(label), children: label }, label))
    ] }),
    cameraFocused && /* @__PURE__ */ jsxs4("div", { className: "camera-controls liquid-glass-strong", role: "group", "aria-label": "\u822A\u5929\u5668\u955C\u5934", children: [
      /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
      /* @__PURE__ */ jsxs4("button", { className: "primary-button liquid-glass-strong", onClick: returnToWide, children: [
        /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
        /* @__PURE__ */ jsx6("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("path", { d: "M16 10H4m5-5-5 5 5 5" }) }),
        "\u8FD4\u56DE\u5168\u666F"
      ] }),
      /* @__PURE__ */ jsxs4("button", { className: "motion-toggle liquid-glass", "aria-pressed": paused, onClick: () => setPaused(!paused), children: [
        /* @__PURE__ */ jsx6(GlassSurface, { compact: true }),
        paused ? "\u7EE7\u7EED\u822A\u884C" : "\u6682\u505C\u822A\u884C"
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "status-notice", role: "status", children: notice })
  ] }) });
};

// magicpath-entry.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function CENTER2() {
  return /* @__PURE__ */ jsxs5(Fragment2, { children: [
    /* @__PURE__ */ jsx7("style", { "data-center-material": "liquid-glass-react", children: CENTER_default }),
    /* @__PURE__ */ jsx7(CENTER, {})
  ] });
}
var magicpath_entry_default = CENTER2;
export {
  CENTER2 as CENTER,
  magicpath_entry_default as default
};
