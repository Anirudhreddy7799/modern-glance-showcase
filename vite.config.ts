import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
=======
  base: '/modern-glance-showcase/',  // Add this line - replace with your repo name
>>>>>>> a7e1139ad682b6a002d1965f59ad9733a9e65d6c
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
}));
>>>>>>> a7e1139ad682b6a002d1965f59ad9733a9e65d6c
