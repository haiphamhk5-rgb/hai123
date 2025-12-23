
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Nếu bạn đặt tên repo GitHub là 'haipham-master', hãy đổi base thành '/haipham-master/'
  base: './', 
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
