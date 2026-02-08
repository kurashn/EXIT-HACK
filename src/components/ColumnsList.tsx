"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categoryLabels: Record<string, string> = {
    all: "すべて",
    basic: "基礎知識",
    money: "お金・制度",
    trouble: "トラブル回避",
    selection: "選び方",
    attention: "注意喚起",
};

type Article = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readTime: string;
    coverImage?: string;
};

export function ColumnsList({ articles }: { articles: Article[] }) {
    const [activeCategory, setActiveCategory] = useState("all");

    // カテゴリーの一覧（記事が存在するカテゴリーのみ表示）
    const usedCategories = new Set(articles.map((a) => a.category));
    const categoryKeys = ["all", ...Object.keys(categoryLabels).filter((k) => k !== "all" && usedCategories.has(k))];

    const filtered = activeCategory === "all"
        ? articles
        : articles.filter((a) => a.category === activeCategory);

    return (
        <>
            {/* カテゴリーフィルター */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categoryKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                            ${activeCategory === key
                                ? "bg-primary text-white shadow-md"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-primary/40 hover:text-primary"
                            }
                        `}
                    >
                        {categoryLabels[key] || key}
                        {key !== "all" && (
                            <span className={`ml-1.5 text-xs ${activeCategory === key ? "text-blue-200" : "text-slate-400"}`}>
                                {articles.filter((a) => a.category === key).length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* 記事グリッド */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-slate-500">このカテゴリーの記事はまだありません。</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {filtered.map((article) => (
                        <Link key={article.slug} href={`/columns/${article.slug}`} className="block h-full group">
                            <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
                                <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                                    {article.coverImage ? (
                                        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                                    )}
                                    <div className="absolute bottom-4 left-4">
                                        <Badge variant="secondary" className="bg-white/90 text-slate-700 font-bold shadow-sm">
                                            {categoryLabels[article.category] || article.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.publishedAt || "日付未設定"}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-0 pb-6">
                                    <Button variant="ghost" className="p-0 h-auto font-bold text-blue-600 hover:text-blue-800 hover:bg-transparent group-hover:translate-x-1 transition-all">
                                        <span>
                                            続きを読む <ArrowRight className="ml-1 w-4 h-4 inline" />
                                        </span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
