// Sätteri mdast plugin that ports the custom Markdown behaviour of the original site:
// - `youtube: https://www.youtube.com/watch?v=ID` (inline code or plain text) becomes an embedded player
// - ```mermaid code blocks are rendered client side by Mermaid (loaded from jsDelivr)
import { defineMdastPlugin } from "satteri";

const YOUTUBE_PATTERN = /^\s*youtube:\s*https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)\s*$/;

const MERMAID_SCRIPT = `<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  mermaid.initialize({
    securityLevel: "loose",
    theme: "neutral",
    themeVariables: {
      primaryColor: "#BB2528",
      primaryTextColor: "#fff",
      primaryBorderColor: "#7C0000",
      lineColor: "#F8B229",
      secondaryColor: "#006100",
      tertiaryColor: "#fff",
    },
  });
</script>`;

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function replaceYoutubeLink(node, ctx) {
  const match = node.value.match(YOUTUBE_PATTERN);
  if (!match) return;

  ctx.replaceNode(node, {
    type: "html",
    value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${match[1]}" frameborder="0" allowfullscreen></iframe>`,
  });
}

export const markdownEmbeds = () => {
  let mermaidCount = 0;

  return defineMdastPlugin({
    name: "remotereason-markdown-embeds",
    before() {
      mermaidCount = 0;
    },
    inlineCode: replaceYoutubeLink,
    text: replaceYoutubeLink,
    code(node, ctx) {
      if (node.lang !== "mermaid") return;

      mermaidCount += 1;
      ctx.replaceNode(node, {
        type: "html",
        value: `<pre id="mermaid-${mermaidCount}" class="mermaid">${escapeHtml(node.value)}</pre>`,
      });
    },
    after(root, ctx) {
      if (mermaidCount > 0) ctx.appendChild(root, { type: "html", value: MERMAID_SCRIPT });
    },
  });
};
