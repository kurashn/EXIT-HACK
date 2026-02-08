import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 flex items-center justify-center py-32 px-4">
                <div className="text-center max-w-lg">
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <span className="text-[10rem] font-extrabold leading-none text-slate-100 select-none">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Search className="w-16 h-16 text-blue-600/60" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-4">
                        ページが見つかりません
                    </h1>
                    <p className="text-slate-500 mb-10 leading-relaxed">
                        お探しのページは移動・削除されたか、<br className="hidden sm:inline" />
                        URLが間違っている可能性があります。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 font-bold" asChild>
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                トップページへ
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 border-slate-300" asChild>
                            <Link href="/columns">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                コラム一覧へ
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
