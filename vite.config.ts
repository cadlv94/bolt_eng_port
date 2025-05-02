import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://cadlv94.github.io/bolt_eng_port/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
