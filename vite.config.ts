import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/modern-glance-showcase/',  // Add this line - replace with your repo name
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'modern-glance-showcase',
        },
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: '/Users/anirudhreddy/Downloads/modern-glance-showcase-main/src/main.tsx',
    },
  },
}));
