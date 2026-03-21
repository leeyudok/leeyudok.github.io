import type { CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/translations";

const getPostsByLang = (
  posts: CollectionEntry<"blog">[],
  lang: Locale = "ko"
) => {
  return posts.filter(({ data }) => (data.lang ?? "ko") === lang);
};

export default getPostsByLang;
