import { getCollection } from "astro:content";

/** All blog posts, newest first. */
export async function getPosts() {
  const posts = await getCollection("posts");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
