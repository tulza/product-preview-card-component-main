import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tulza.github.io/product-preview-card-component-main",
  plugins: [react()],
});
