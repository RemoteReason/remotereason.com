import type { CollectionEntry } from "astro:content";
import { site } from "../data/site";

export const imagePath = (image: string) => `/images/${image.replace(/^\/+/, "")}`;

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export const imageUrl = (image: string) => absoluteUrl(imagePath(image));

export const blogPostPath = (post: CollectionEntry<"posts">) => `/blog/${post.id}`;

export const blogPostThumbnailPath = (post: CollectionEntry<"posts">) =>
  imagePath(`posts/${post.data.date.getUTCFullYear()}/${post.data.thumbnail}`);

export const blogPostThumbnailUrl = (post: CollectionEntry<"posts">) =>
  absoluteUrl(blogPostThumbnailPath(post));

/** ISO date (YYYY-MM-DD), matching how the original site printed post dates. */
export const formatDate = (date: Date) => date.toISOString().slice(0, 10);

/** Truncates on word boundaries, appending "..." when the text is cut. */
export function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;

  let result = "";
  for (const word of text.split(" ")) {
    const candidate = result === "" ? word : `${result} ${word}`;
    if (candidate.length > maxLength) {
      return result === "" ? `${word.slice(0, maxLength - 3)}...` : `${result.trim()}...`;
    }
    result = candidate;
  }
  return result.trim();
}
