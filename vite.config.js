import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubPagesFallback = {
  name: "github-pages-404",
  closeBundle: () => copyFileSync("dist/index.html", "dist/404.html"),
};

export default defineConfig({
  plugins: [react(), githubPagesFallback],
  server: { port: 5173, strictPort: true },
});
