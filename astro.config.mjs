// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import tailwindcss from "@tailwindcss/vite";
import { markdownEmbeds } from "./src/lib/markdown-embeds.mjs";

export default defineConfig({
  site: "https://remotereason.com",
  // Emit `page/clients.html` instead of `page/clients/index.html` so GitHub Pages
  // serves the original extensionless URLs (e.g. /page/clients) without a redirect.
  build: { format: "file" },
  trailingSlash: "never",
  // Keep inter-element whitespace: the markup relies on it between inline elements (e.g. icon + text).
  compressHTML: false,
  markdown: {
    processor: satteri({ mdastPlugins: [markdownEmbeds()] }),
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
