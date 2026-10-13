import { useEffect, useState } from 'react';
import { normalizeSceneConfig, parseScenePreferences } from './sceneConfig';
import type { SceneConfig } from './sceneConfig';

const STORAGE_KEY = 'center-scene-v1';

export function useScenePreferences() {
  const [config, setConfig] = useState<SceneConfig>(() => normalizeSceneConfig(null));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { setConfig(parseScenePreferences(localStorage.getItem(STORAGE_KEY))); }
    catch { /* Some embedded previews deny access to local storage. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); }
      catch { /* Keep live controls working even when persistence is unavailable. */ }
    }, 250);
    return () => clearTimeout(timer);
  }, [config, ready]);

  return [config, setConfig] as const;
}
