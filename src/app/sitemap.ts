import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://firereel.net/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://firereel.net",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://firereel.net/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
