import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "お役立ちコラム | 退職の基礎知識",
    description: "退職に関する法律知識やトラブル回避のテクニックなど、退職前に知っておきたい情報をわかりやすく解説します。",
};

const categoryLabels: Record<string, string> = {
    basic: "基礎知識",
    money: "お金・制度",
    trouble: "トラブル回避",
    selection: "選び方",
};

export default async function Columns() {
    const articles = await getArticles();

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 py-32 container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                        お役立ちコラム
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        退職の不安を解消する<br />基礎知識
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        法律の話から、損しないためのテクニックまで。<br />
                        あなたの「知りたい」をわかりやすく解説します。
                    </p>
                </div>

                {articles.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-slate-500 mb-4">まだ記事がありません。</p>
                        <Button variant="outline" asChild>
                            <Link href="/keystatic">管理画面で記事を追加する</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {articles.map((article) => (
                            <Link key={article.slug} href={`/columns/${article.slug}`} className="block h-full group">
                                <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
                                    {/* Text or Image */}
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

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/">トップページに戻る</Link>
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
