import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";
import tailwindcss from "tailwindcss"; // Importando o tailwindcss
import autoprefixer from "autoprefixer"; // Importando o autoprefixer

export default defineConfig({
  plugins: [...mochaPlugins(process.env as any), react(), cloudflare()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()], // Configurando o PostCSS para usar o Tailwind e Autoprefixer
    },
  },
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    } as { [key: string]: string },
  },
});
