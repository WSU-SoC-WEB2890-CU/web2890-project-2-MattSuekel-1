import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [
    tailwindcss(),
    htmlInject()
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about/index.html",
        contact: "contact/index.html",
        work: "work/index.html",
      },
    },
  },
});
