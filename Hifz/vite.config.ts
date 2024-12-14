import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Add proper WebSocket configuration
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  }
});