import type { APIRoute } from "astro";
import { allNavigation } from "../data/pages";
import { socialLinks } from "../data/site";
import { absoluteUrl, blogPostPath } from "../lib/links";
import { getPosts } from "../lib/posts";

const entry = (url: string, lastMod: string) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>`;

export const GET: APIRoute = async () => {
  const lastMod = new Date().toISOString().slice(0, 10);
  const posts = await getPosts();

  const urls = [
    ...allNavigation.map((page) => absoluteUrl(page.url)),
    ...posts.map((post) => absoluteUrl(blogPostPath(post))),
    socialLinks.github,
    socialLinks.twitter,
    socialLinks.linkedin,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => entry(url, lastMod)).join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
