import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー | EXIT HACK",
    description: "EXIT HACK（イグジットハック）のプライバシーポリシーです。個人情報の取扱いについて説明します。",
};

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 py-32 container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-12">
                        プライバシーポリシー
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">1. 個人情報の取得</h2>
                            <p>
                                当サイト「EXIT HACK」（以下「当サイト」）は、お問い合わせフォーム等を通じて、お名前、メールアドレス等の個人情報をご提供いただく場合があります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">2. 個人情報の利用目的</h2>
                            <p>取得した個人情報は、以下の目的で利用いたします。</p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>お問い合わせへの回答</li>
                                <li>サービスに関するご案内</li>
                                <li>当サイトの改善・運営に必要な分析</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">3. 個人情報の第三者提供</h2>
                            <p>
                                当サイトは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">4. アクセス解析ツール</h2>
                            <p>
                                当サイトでは、Googleアナリティクスを利用してアクセス情報を収集しています。データはCookieを使用して収集されますが、個人を特定する情報は含まれません。
                            </p>
                            <p className="mt-2">
                                詳しくは
                                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Googleのポリシーと規約
                                </a>
                                をご確認ください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">5. 広告について</h2>
                            <p>
                                当サイトは、第三者配信の広告サービス（Amazonアソシエイト、各種ASP等のアフィリエイトプログラム）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">6. 免責事項</h2>
                            <p>
                                当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いかねます。
                            </p>
                            <p className="mt-2">
                                当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">7. お問い合わせ</h2>
                            <p>
                                プライバシーポリシーに関するお問い合わせは、下記メールアドレスまでお願いいたします。
                            </p>
                            <p className="mt-3 font-medium text-slate-900">
                                メール：shunknomad@gmail.com
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
