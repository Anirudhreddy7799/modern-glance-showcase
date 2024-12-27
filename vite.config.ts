import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  base: 'https://anirudhreddy7799.github.io/modern-glance-showcase/', // Ensure this matches your repository name
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
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});