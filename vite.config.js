import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  base: "",
  root: "src",
  server: {
    open: true,
    watch: true,
    host: true,
  },
  build: {
    outDir: "../",
  },
});
