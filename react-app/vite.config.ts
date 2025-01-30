import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "../centralizador/react-web-component", // Definindo onde o build será gerado
    lib: {
      entry: "src/main.tsx", // Arquivo de entrada
      name: "ReactApp", // Nome do componente
      fileName: "react-app", // Nome do arquivo final
      formats: ["es"], // Formato ES Module
    },
    rollupOptions: {
      // As dependências de React e ReactDOM são internas
    },
  },
  plugins: [react()],
  define: {
    "process.env": {}, // Isso vai polifilar o objeto process
  },
});
