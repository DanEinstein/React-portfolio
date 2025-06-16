// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-portfolio/', // Correct: matches your repo name
  plugins: [react()],
});