import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["quill", "react-quilljs"], // force quill di pre-bundle di dev mode
  },
  ssr: {
    noExternal: ["react-quilljs", "quill"], // jangan di-external-kan saat build SSR / prod
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
