import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/modern-glance-showcase/', // Ensure this matches your repository name
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
