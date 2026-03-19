import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@rescui/card": "@rescui/card/lib/index.js",
      "@rescui/button": "@rescui/button/lib/index.js",
      "@rescui/typography": "@rescui/typography/lib/index.js",
      "@rescui/ui-contexts": "@rescui/ui-contexts/lib/index.js",
      "@rescui/tab-list": "@rescui/tab-list/lib/index.js",
      "@rescui/icons": "@rescui/icons/lib/index.js",
      "@rescui/colors": "@rescui/colors/lib/index.js",
    },
  },
  optimizeDeps: {
    include: ["@rescui/colors"],
  },
  ssr: {
    noExternal: [
      "@rescui/button",
      "@rescui/card",
      "@rescui/typography",
      "@rescui/ui-contexts",
      "@rescui/tab-list",
      "@rescui/icons",
      "@rescui/colors",
    ],
  },
});