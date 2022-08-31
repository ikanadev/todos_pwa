import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import {VitePWA} from 'vite-plugin-pwa';

const pwaConfig = VitePWA({
  registerType: 'prompt',
  strategies: 'injectManifest',
  srcDir: 'src',
  filename: 'main-sw.ts',
  devOptions: {
    enabled: true,
    type: 'module',
  },
});

export default defineConfig({
  plugins: [solidPlugin(), pwaConfig],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
