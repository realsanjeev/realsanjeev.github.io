import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // NOTE(sanjeev): When deploying a repository other than `{github-username}.github.io`, explicitly define the base URL using the repository name.
  // base: `/realsanjeev.github.io/`,
  base: ``,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split CSS per JS chunk so each stylesheet loads only when its chunk loads,
    // removing the single render-blocking index-*.css from the critical path.
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Separate vendor CSS from app CSS for better caching granularity
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
}));
