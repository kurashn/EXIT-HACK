import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "利用規約 | EXIT HACK",
    description: "EXIT HACK（イグジットハック）の利用規約です。当サイトのご利用にあたっての注意事項をご確認ください。",
};

export default function Terms() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 py-32 container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-12">
                        利用規約
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第1条（適用範囲）</h2>
                            <p>
                                本規約は、当サイト「EXIT HACK」（以下「当サイト」）をご利用いただくすべてのユーザー（以下「利用者」）に適用されます。当サイトをご利用いただいた時点で、本規約に同意したものとみなします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第2条（情報の正確性）</h2>
                            <p>
                                当サイトに掲載されている情報は、可能な限り正確な情報を提供するよう努めておりますが、その正確性、完全性、有用性を保証するものではありません。
                            </p>
                            <p className="mt-2">
                                サービスの料金・内容等は各公式サイトの最新情報をご確認ください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第3条（アフィリエイトプログラム）</h2>
                            <p>
                                当サイトは、各種アフィリエイトプログラムに参加しており、紹介しているサービス・商品の購入等により当サイトが報酬を受け取る場合があります。
                            </p>
                            <p className="mt-2">
                                ただし、ランキングや評価は独自の調査・選定基準に基づいており、報酬の有無によって順位を変更することはありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第4条（免責事項）</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    当サイトに掲載された情報を利用したことにより生じた損害について、当サイト運営者は一切の責任を負いません。
                                </li>
                                <li>
                                    当サイトからリンクされた外部サイトの内容については、一切の責任を負いません。
                                </li>
                                <li>
                                    退職代行サービスのご利用は、各サービス提供者との間の契約に基づくものであり、当サイトは仲介・斡旋を行うものではありません。
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第5条（著作権）</h2>
                            <p>
                                当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の著作権は、当サイト運営者に帰属します。無断での複製・転載・改変等はお控えください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第6条（規約の変更）</h2>
                            <p>
                                当サイト運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点で効力を生じるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">第7条（お問い合わせ）</h2>
                            <p>
                                本規約に関するお問い合わせは、下記フォームよりお願いいたします。
                            </p>
                            <p className="mt-3">
                                <a href="https://forms.gle/zWoKorLkHMsdUCPh8" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800 underline">
                                    お問い合わせフォーム
                                </a>
                            </p>
                        </section>

                        <div className="pt-8 border-t border-slate-200 text-sm text-slate-400">
                            <p>制定日：2026年2月7日</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
