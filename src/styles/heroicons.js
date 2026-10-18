// Tailwind plugin that exposes Heroicons as `hero-<name>` utilities (CSS masks), ported from Phoenix.
// Variants: `hero-x-mark` (24 outline), `hero-x-mark-solid` (24 solid),
// `hero-x-mark-mini` (20 solid) and `hero-x-mark-micro` (16 solid).
import plugin from "tailwindcss/plugin";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const iconsDir = path.dirname(require.resolve("heroicons/package.json"));

export default plugin(function ({ matchComponents, theme }) {
  const values = {};
  const icons = [
    ["", "/24/outline"],
    ["-solid", "/24/solid"],
    ["-mini", "/20/solid"],
    ["-micro", "/16/solid"],
  ];

  icons.forEach(([suffix, dir]) => {
    fs.readdirSync(path.join(iconsDir, dir)).forEach((file) => {
      const name = path.basename(file, ".svg") + suffix;
      values[name] = { name, fullPath: path.join(iconsDir, dir, file) };
    });
  });

  matchComponents(
    {
      hero: ({ name, fullPath }) => {
        const content = fs.readFileSync(fullPath).toString().replace(/\r?\n|\r/g, "");
        const encoded = encodeURIComponent(content);
        let size = theme("spacing.6");
        if (name.endsWith("-mini")) {
          size = theme("spacing.5");
        } else if (name.endsWith("-micro")) {
          size = theme("spacing.4");
        }
        return {
          [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${encoded}')`,
          "-webkit-mask": `var(--hero-${name})`,
          mask: `var(--hero-${name})`,
          "mask-repeat": "no-repeat",
          "background-color": "currentColor",
          "vertical-align": "middle",
          display: "inline-block",
          width: size,
          height: size,
        };
      },
    },
    { values },
  );
});
