import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/modern-glance-showcase/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'modern-glance-showcase',
        },
      },
    }),
  ],
});
