import type { Article } from "@/lib/articles";

interface JsonLdProps {
    type: "website" | "article" | "faq" | "comparison";
    article?: Article;
    faqs?: { question: string; answer: string }[];
}

export function JsonLd({ type, article, faqs }: JsonLdProps) {
    let structuredData: Record<string, unknown> | Record<string, unknown>[];

    switch (type) {
        case "website":
            structuredData = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "EXIT HACK",
                alternateName: "イグジットハック",
                url: "https://exit-hack.com",
                description: "退職代行サービスの徹底比較と、自分らしくはたらくためのキャリア・リセットガイド。",
                inLanguage: "ja",
                publisher: {
                    "@type": "Organization",
                    name: "EXIT HACK",
                    url: "https://exit-hack.com",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://exit-hack.com/ogp.png",
                    },
                },
            };
            break;

        case "article":
            const articleSchema = {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: article?.title,
                description: article?.excerpt,
                image: article?.coverImage ? `https://exit-hack.com${article.coverImage}` : undefined,
                datePublished: article?.publishedAt,
                dateModified: article?.publishedAt,
                author: {
                    "@type": "Organization",
                    name: "EXIT HACK編集部",
                },
                publisher: {
                    "@type": "Organization",
                    name: "EXIT HACK",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://exit-hack.com/ogp.png",
                    },
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://exit-hack.com/columns/${article?.slug}`,
                },
                inLanguage: "ja",
            };

            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "ホーム",
                        item: "https://exit-hack.com",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "コラム一覧",
                        item: "https://exit-hack.com/columns",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: article?.title,
                        item: `https://exit-hack.com/columns/${article?.slug}`,
                    },
                ],
            };

            structuredData = [articleSchema, breadcrumbSchema];
            break;

        case "comparison":
            structuredData = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "退職代行サービス 徹底比較表",
                description: "厳選の退職代行サービスを料金・運営元・対応範囲で徹底比較。",
                url: "https://exit-hack.com/compare",
                mainEntity: {
                    "@type": "ItemList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "退職代行ガーディアン",
                            description: "労働組合法人が直接運営。19,800円。一律料金・追加費用なし。",
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "退職代行Jobs",
                            description: "弁護士監修×労働組合提携。29,000円（税込・安心パック）。後払い・全額返金保証あり。",
                        },
                        {
                            "@type": "ListItem",
                            position: 3,
                            name: "退職110番",
                            description: "弁護士法人あおば運営。43,800円。損害賠償・未払い請求・訴訟対応。",
                        },
                    ],
                },
            };
            break;

        case "faq":
            structuredData = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs?.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            };
            break;

        default:
            return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
