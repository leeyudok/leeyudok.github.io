import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import getPostsByLang from "@/utils/getPostsByLang";
import { SITE } from "@/config";

export async function GET() {
  const posts = await getCollection("blog");
  const langPosts = getPostsByLang(posts, "en");
  const sortedPosts = getSortedPosts(langPosts);
  return rss({
    title: `${SITE.title} (EN)`,
    description: "New World, 2nd Playthrough, and ...",
    site: `${SITE.website}en/`,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: `/en${getPath(id, filePath)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
