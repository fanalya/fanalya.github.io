import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./", "src")
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".vue"]
  },
})
