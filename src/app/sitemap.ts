import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://exit-hack.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getArticles();

    const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${BASE_URL}/columns/${article.slug}`,
        lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/compare`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/columns`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...articleEntries,
        {
            url: `${BASE_URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
