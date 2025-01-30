import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}, // Evita erro 'process is not defined'
  },
  resolve: {
    alias: {
      process: 'process/browser', // Garante compatibilidade com navegador
    },
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'VueApp',
      fileName: 'vue-app',
      formats: ['es', 'umd'],
    },
    outDir: '../centralizador/vue-web-component',
  },
});