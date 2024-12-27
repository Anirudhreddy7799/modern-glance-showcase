import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  // This 'base' URL is important for GitHub Pages deployment to ensure the app loads correctly
  base: 'https://anirudhreddy7799.github.io/modern-glance-showcase/', // Ensure this matches your repository name
  plugins: [
    react(), // SWC-based React plugin for faster builds
    createHtmlPlugin({
      inject: {
        data: {
          title: 'modern-glance-showcase', // Title of your HTML document
        },
      },
    }),
  ],
  build: {
    outDir: 'dist', // Output directory for production build
    rollupOptions: {
      // Ensure that all static assets are correctly handled
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  server: {
    port: 3000, // You can specify the local development server port
  },
});