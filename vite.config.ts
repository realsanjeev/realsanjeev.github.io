import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = "realsanjeev.github.io"

// https://vitejs.dev/config/
export default defineConfig
(({ mode }) => ({
  // NOTE(sanjeev): For development environment comment below line
  base: `/${repoName}/`,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
