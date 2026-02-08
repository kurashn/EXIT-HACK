import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },
    collections: {
        articles: collection({
            label: "コラム記事",
            slugField: "slug",
            path: "content/articles/*/",
            format: { contentField: "content" },
            schema: {
                slug: fields.slug({ name: { label: "スラッグ" } }),
                title: fields.text({
                    label: "タイトル",
                }),
                excerpt: fields.text({
                    label: "概要",
                    multiline: true,
                }),
                category: fields.select({
                    label: "カテゴリ",
                    options: [
                        { label: "基礎知識", value: "basic" },
                        { label: "お金・制度", value: "money" },
                        { label: "トラブル回避", value: "trouble" },
                        { label: "選び方", value: "selection" },
                        { label: "注意喚起", value: "attention" },
                        { label: "比較", value: "comparison" },
                    ],
                    defaultValue: "basic",
                }),
                publishedAt: fields.date({
                    label: "公開日",
                }),
                readTime: fields.text({
                    label: "読了時間",
                    defaultValue: "3分",
                }),
                coverImage: fields.text({
                    label: "カバー画像",
                    defaultValue: "",
                }),
                content: fields.markdoc({
                    label: "本文",
                }),
            },
        }),
    },
});
