import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import {VitePWA} from 'vite-plugin-pwa';

const pwaConfig = VitePWA({
  registerType: 'autoUpdate',
  strategies: 'injectManifest',
  srcDir: 'src',
  filename: 'main-sw.ts',
  manifest: {
    name: 'QR Pay India',
    short_name: 'QRPay',
    description: 'Offline UPI Payment App',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'img/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'img/android-chrome-256x256.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'img/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: 'img/favicon.ico',
        type: 'image/png'
      }
    ]
  },
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
