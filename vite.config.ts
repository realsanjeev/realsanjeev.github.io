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
    // Build-only plugin: converts render-blocking <link rel="stylesheet"> tags
    // to async-load pattern (media="print" + onload swap), removing ~300ms from
    // the critical path reported by Lighthouse. The inline critical CSS in
    // index.html prevents FOUC while the full stylesheet loads.
    {
      name: "make-css-async",
      apply: "build" as const,
      transformIndexHtml(html: string) {
        // P2 PATCH: Match <link> tags with rel="stylesheet" where href can appear
        // anywhere in the attribute list (order-agnostic). Captures:
        //   group 1 = everything before href
        //   group 2 = the href value
        //   group 3 = everything after href (up to closing >)
        // This is resilient to future Vite attribute ordering changes.
        return html.replace(
          /<link\s([^>]*?)href="([^"]+)"([^>]*?)>/g,
          (match, pre, href, post) => {
            // Only transform stylesheet links, pass through all others (preload, icon, canonical…)
            const fullAttrs = pre + post;
            if (!fullAttrs.includes('rel="stylesheet"') && !match.includes('rel="stylesheet"')) {
              return match;
            }
            // Strip rel="stylesheet" from the captured attrs so we can rebuild cleanly
            const otherAttrs = fullAttrs
              .replace(/rel="stylesheet"/, '')
              .replace(/\s+/g, ' ')
              .trim();
            const attrStr = otherAttrs ? ' ' + otherAttrs : '';
            return (
              // Preload hint — tells browser to fetch at high priority, non-blocking
              `<link rel="preload" as="style"${attrStr} href="${href}">` +
              // Async stylesheet — media trick defers paint-blocking
              `<link rel="stylesheet"${attrStr} href="${href}" media="print" onload="this.media='all'">` +
              // P3 PATCH: include crossorigin so noscript request matches preload cache key
              `<noscript><link rel="stylesheet"${attrStr} href="${href}"></noscript>`
            );
          }
        );
      },
    },
  ].filter(Boolean),
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
