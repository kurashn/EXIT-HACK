import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticle, getArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticle(slug);
    if (!article) return {};
    return {
        title: article.title,
        description: article.excerpt || `${article.title} - EXIT HACKのコラム記事`,
        alternates: {
            canonical: `/columns/${slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.publishedAt || undefined,
            images: article.coverImage ? [article.coverImage] : [],
        },
    };
}

const categoryLabels: Record<string, string> = {
    basic: "基礎知識",
    money: "お金・制度",
    trouble: "トラブル回避",
    selection: "選び方",
    attention: "注意喚起",
};

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    // Stateful Markdown parser
    const contentLines = article.content.split('\n');
    let processedContent = "";
    let inList = false;

    const closeListIfNeeded = () => {
        if (inList) {
            processedContent += "</ul>\n";
            inList = false;
        }
    };

    contentLines.forEach((line) => {
        // H2
        const h2Match = line.match(/^##\s+(.+)$/);
        if (h2Match) {
            closeListIfNeeded();
            const text = h2Match[1];
            // Match Reference: White Card, 4px Left Border, Shadow
            processedContent += `<h2 class="text-2xl md:text-3xl font-bold mt-16 mb-8 text-slate-900 bg-white px-6 py-5 rounded-xl border-l-4 border-blue-600 shadow-sm flex items-center gap-3">${text}</h2>\n`;
            return;
        }

        // H3
        const h3Match = line.match(/^###\s+(.+)$/);
        if (h3Match) {
            closeListIfNeeded();
            // Match Reference: Left Border, Padding, No Bottom Border
            processedContent += `<h3 class="text-xl md:text-2xl font-bold mt-10 mb-6 text-slate-900 border-l-4 border-blue-600 pl-4">${h3Match[1]}</h3>\n`;
            return;
        }

        // Checkmark SVG for lists
        const checkIcon = `<span class="text-blue-600 mt-2 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>`;

        // Bold List Items
        const boldListItemMatch = line.match(/^\-\s+\*\*(.+?)\*\*(.*)$/);
        if (boldListItemMatch) {
            if (!inList) {
                // Match Reference: White box, shadow
                processedContent += `<ul class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8">\n`;
                inList = true;
            }
            processedContent += `<li class="text-slate-700 flex items-start gap-3">${checkIcon}<span><strong class="text-slate-900 font-bold">${boldListItemMatch[1]}</strong>${boldListItemMatch[2]}</span></li>\n`;
            return;
        }

        // Normal List Items
        const listItemMatch = line.match(/^\-\s+(.+)$/);
        if (listItemMatch) {
            if (!inList) {
                // Match Reference: White box, shadow
                processedContent += `<ul class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8">\n`;
                inList = true;
            }
            // Uses Check icon now
            processedContent += `<li class="text-slate-700 flex items-start gap-3">${checkIcon}<span>${listItemMatch[1]}</span></li>\n`;
            return;
        }

        // Numbered List Items
        const orderedItemMatch = line.match(/^(\d+)\.\s+(.+)$/);
        if (orderedItemMatch) {
            if (!inList) {
                // Match Reference: White box, shadow, space-y-4
                processedContent += `<ol class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mb-8">\n`;
                inList = true;
            }
            const number = orderedItemMatch[1];
            let text = orderedItemMatch[2];

            // Bold text replacement inside list item
            text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900 font-bold bg-yellow-200/40 px-1 rounded mx-0.5">$1</strong>');

            processedContent += `<li class="text-slate-700 flex items-start gap-3"><span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">${number}</span><span>${text}</span></li>\n`;
            return;
        }

        // Bold text replacement
        let lineContent = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900 font-bold bg-yellow-200/40 px-1 rounded mx-0.5">$1</strong>');

        // Button Link (starts with ＞＞)
        const buttonLinkMatch = lineContent.match(/^\[＞＞\s*(.+?)\]\((.+?)\)$/);
        if (buttonLinkMatch) {
            closeListIfNeeded();
            const text = buttonLinkMatch[1];
            const url = buttonLinkMatch[2];
            processedContent += `
                <div class="my-12 text-center">
                    <a href="${url}" class="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 !text-white !no-underline font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl text-lg group">
                        ${text}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>\n`;
            return;
        }

        // Inline Links
        lineContent = lineContent.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800 transition-colors">$1</a>');

        // Paragraphs
        if (lineContent.trim() === "") {
            closeListIfNeeded();
            processedContent += "\n";
        } else {
            closeListIfNeeded(); // If we reached here, it's a paragraph
            processedContent += `<p class="mb-6 text-slate-600 leading-8 text-[1.05rem] tracking-wide">${lineContent}</p>\n`;
        }
    });

    closeListIfNeeded(); // Ensure list is closed at end

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
            <JsonLd type="article" article={article} />
            <Navbar />

            {/* Hero Header */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-12 shadow-sm">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    {/* Breadcrumbs */}
                    <div className="flex items-center text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
                        <ChevronRight className="w-3 h-3 mx-2 shrink-0" />
                        <Link href="/columns" className="hover:text-blue-600 transition-colors">コラム一覧</Link>
                        <ChevronRight className="w-3 h-3 mx-2 shrink-0" />
                        <span className="text-slate-800 font-medium truncate">{article.title}</span>
                    </div>

                    <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 px-3 py-1 text-sm font-bold">
                        {categoryLabels[article.category] || article.category}
                    </Badge>

                    {article.coverImage && (
                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-slate-100 relative w-full aspect-video">
                            <Image
                                src={article.coverImage}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.4] mb-8">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="font-medium">{article.publishedAt || "公開日未設定"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="font-medium">{article.readTime}で読めます</span>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-1 container px-4 md:px-6 mx-auto max-w-6xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {/* Lead Text (Simple Paragraph) - Match Reference: leading-loose */}
                        <div className="mb-12">
                            <p className="text-lg md:text-xl text-slate-700 leading-loose">
                                {article.excerpt}
                            </p>
                        </div>

                        {/* Article Body */}
                        <div
                            className="prose prose-slate prose-lg md:prose-xl max-w-none 
              prose-headings:scroll-mt-32 
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:font-bold prose-strong:text-slate-900
              prose-li:marker:text-blue-400
              [&>ul]:list-none [&>ul]:pl-0"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* CTA Section */}
                        <div className="mt-20 my-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 border-none pl-0">
                                    一人で悩まず、プロに相談しませんか？
                                </h3>
                                <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                                    退職代行を使えば、嫌な上司と顔を合わせることなく、<br className="hidden md:block" />
                                    即日でストレスから開放されます。
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-14 px-8 rounded-full shadow-lg shadow-blue-900/50 transition-all hover:scale-105" asChild>
                                        <Link href="/compare">
                                            <CheckCircle2 className="mr-2 w-5 h-5" />
                                            おすすめ業者を見る
                                        </Link>
                                    </Button>
                                    <Button size="lg" className="bg-transparent border border-white/50 text-white hover:bg-white/10 hover:text-white h-14 px-8 rounded-full transition-colors" asChild>
                                        <Link href="/#diagnosis">
                                            自分に合う業者を診断
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24 space-y-8">

                            {/* Author Profile */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                                <div className="w-20 h-20 mx-auto mb-4 relative">
                                    <Image
                                        src="/images/exit_hack_editor.png"
                                        alt="EXIT HACK編集部"
                                        fill
                                        className="rounded-full object-cover border border-slate-100"
                                    />
                                </div>
                                <div className="font-bold text-slate-900 text-lg">EXIT HACK編集部</div>
                                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                    「辞めたいけど言えない」あなたのために、正しい退職の知識と安全なサービス情報を発信しています。
                                </p>
                            </div>

                            {/* Sidebar CTA (Recommended Service) */}
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-1 shadow-lg text-white text-center">
                                <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                    <h4 className="font-bold text-lg mb-1 border-none">迷ったらまずは相談</h4>
                                    <p className="text-xs text-blue-100 mb-4">安全性と料金のバランスが好評</p>

                                    <div className="bg-white text-slate-900 rounded-lg p-3 mb-4 shadow-sm text-left">
                                        <div className="text-xs font-bold text-blue-600 mb-1">退職代行Jobs</div>
                                        <div className="font-bold text-xl">¥24,000</div>
                                        <div className="text-[10px] text-slate-500 mt-1">弁護士監修 × 労働組合提携</div>
                                    </div>

                                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-md transform transition hover:-translate-y-0.5" size="sm" asChild>
                                        <Link href="/compare">詳細を見る</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
}
