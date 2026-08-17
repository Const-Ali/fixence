import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  base: "./",
  plugins: [
    react(),

    ...(mode === "analyze"
      ? [
          visualizer({
            open: false,
            gzipSize: true,
            brotliSize: true,
            filename: "dist/stats.html",
          }),
          visualizer({
            template: "raw-data",
            gzipSize: true,
            brotliSize: true,
            filename: "dist/stats.json",
          }),
        ]
      : []),
  ],
}));
