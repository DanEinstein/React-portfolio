// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-portfolio /', // e.g. '/my-portfolio/'
  plugins: [react()],
});
