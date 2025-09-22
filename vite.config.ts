import react from "@vitejs/plugin-react";
// biome-ignore lint/style/useNodejsImportProtocol: We use Bun here instead of Node
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
