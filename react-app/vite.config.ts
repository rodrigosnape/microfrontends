import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "../centralizador/react-web-component", // Diretório do build
    lib: {
      entry: "src/main.tsx",
      name: "ReactApp",
      fileName: "react-app",
      formats: ["es"],
    },
  },
  plugins: [react()],
  define: {
    "process.env": {}, // Evita erro do process
  },
});
