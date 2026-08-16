// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "./", // ← مسیر نسبی برای cPanel (حیاتی!)
  plugins: [
    react(),
    visualizer({
      open: false, // دیگه هر بار خودکار باز نشه
      gzipSize: true,
      brotliSize: true,
      filename: "dist/stats.html",
      json: true, // خروجی JSON با اعداد دقیق
      // (اختیاری) خروجی JSON رو جدا بنویس:
      // filename: "dist/stats.json",
      // json: true,
    }),
  ],
});
