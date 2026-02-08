import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/lib/articles";
import { ColumnsList } from "@/components/ColumnsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "お役立ちコラム | 退職の基礎知識",
    description: "退職に関する法律知識やトラブル回避のテクニックなど、退職前に知っておきたい情報をわかりやすく解説します。",
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
                    <ColumnsList articles={articles} />
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
