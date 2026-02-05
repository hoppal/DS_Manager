import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'OppalUI',
      fileName: (format) => `oppal-ui.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
  },
});
