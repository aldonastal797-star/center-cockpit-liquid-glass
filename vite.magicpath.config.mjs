import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    outDir: 'dist-magicpath',
    rollupOptions: { input: fileURLToPath(new URL('./magicpath-preview.html', import.meta.url)) }
  }
});
