import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], 
  },
  base: '/',
  build: {
    outDir: 'dist',  // This is the default output directory
  },
});
