import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readTime: string;
    content: string;
    coverImage?: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

function formatPublishedAt(value: unknown): string {
    if (!value) return "";
    if (value instanceof Date) {
        return value.toISOString().split("T")[0];
    }
    return String(value);
}

export async function getArticles(): Promise<Article[]> {
    try {
        const folders = await fs.readdir(articlesDirectory);
        const articles: Article[] = [];

        for (const folder of folders) {
            const articlePath = path.join(articlesDirectory, folder, "index.mdoc");
            try {
                const fileContent = await fs.readFile(articlePath, "utf8");
                const { data, content } = matter(fileContent);
                articles.push({
                    slug: folder,
                    title: data.title || folder,
                    excerpt: data.excerpt || "",
                    category: data.category || "basic",
                    publishedAt: formatPublishedAt(data.publishedAt),
                    readTime: data.readTime || "3分",
                    content,
                    coverImage: data.coverImage || "",
                });
            } catch (e) {
                // Skip if file doesn't exist
                console.error(`Error reading article ${folder}:`, e);
            }
        }

        // Sort by publishedAt date, newest first
        return articles.sort((a, b) => {
            if (!a.publishedAt) return 1;
            if (!b.publishedAt) return -1;
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
    } catch {
        return [];
    }
}

export async function getArticle(slug: string): Promise<Article | null> {
    const articlePath = path.join(articlesDirectory, slug, "index.mdoc");
    try {
        const fileContent = await fs.readFile(articlePath, "utf8");
        const { data, content } = matter(fileContent);
        return {
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || "",
            category: data.category || "basic",
            publishedAt: formatPublishedAt(data.publishedAt),
            readTime: data.readTime || "3分",
            content,
            coverImage: data.coverImage || "",
        };
    } catch {
        return null;
    }
}
