import { createContext, useContext, useLayoutEffect, useRef, useState, useEffect } from 'react';
import LiquidGlass from './liquid-glass';
export const GlassContext = createContext({ strength:1, color:.8 });
/** Uses the requested rdev component as the material; native content stays outside its typography wrapper. */
export function GlassSurface({ compact=false }: { compact?:boolean }) {
  const {strength,color}=useContext(GlassContext);
  const hostRef=useRef<HTMLDivElement>(null);
  const mouseContainer=useRef<HTMLElement|null>(null);
  const [size,setSize]=useState({width:1,height:1});
  const [reduce,setReduce]=useState(false);
  useLayoutEffect(()=>{
    const parent=hostRef.current?.parentElement;if(!parent)return;
    mouseContainer.current=parent;
    const measure=()=>setSize({width:parent.clientWidth,height:parent.clientHeight});
    const observer=new ResizeObserver(measure);observer.observe(parent);measure();
    return()=>observer.disconnect();
  },[]);
  useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduce(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[]);
  return <div ref={hostRef} className="rdev-glass-surface" aria-hidden="true" data-material="liquid-glass-react">
    <LiquidGlass key={Math.round(size.width)+'x'+Math.round(size.height)}
      displacementScale={(compact?36:54)*strength}
      blurAmount={compact?.04:.08+strength*.2}
      saturation={110+color*40} aberrationIntensity={reduce?0:(compact?1.2:1.7)*strength}
      elasticity={reduce?0:compact?.1:.045} cornerRadius={compact?100:16} padding="0px"
      mouseContainer={mouseContainer} mode="standard"
      style={{position:'absolute',top:'50%',left:'50%'}}>
      <div style={{width:size.width,height:size.height}} />
    </LiquidGlass>
  </div>;
}
