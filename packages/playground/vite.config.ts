import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/status-tag-component/',
  server: {
    host: '0.0.0.0',
    port: 5174,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@blueking/status-tag': resolve(__dirname, '../core/src/index.ts')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
