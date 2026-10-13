import { useCallback, useLayoutEffect, useRef, useState } from 'react';

/** Fits only the spacecraft layer; the caller applies depth to the other layers. */
export function useOrbitCamera() {
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
  const returnToWide = useCallback(() => {
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
  }, [cameraFocused, returnToWide]);
  return { cameraFocused, camera, rootRef, sceneRef, stationRef, stationButtonRef, returnToWide, toggleCamera };
}
