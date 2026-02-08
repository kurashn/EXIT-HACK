import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ShieldCheck, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "退職代行サービス 徹底比較表",
    description: "厳選の退職代行サービスを料金・運営元・対応範囲で徹底比較。あなたに最適なサービスが見つかります。",
};

export default function Compare() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <JsonLd type="comparison" />
            <Navbar />

            <main className="flex-1 py-32 container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                        2026年最新版
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        失敗しない退職代行の選び方<br />徹底比較表
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        「安さ」だけで選ぶと、後で損害賠償請求などのトラブルに巻き込まれるリスクがあります。<br />
                        安全に辞めるための重要ポイントを比較しました。
                    </p>
                </div>

                <div className="overflow-x-auto pb-8">
                    <div className="min-w-[1050px] pt-8">
                        <div className="grid grid-cols-6 gap-2 mb-4 items-end">
                            <div className="col-span-1"></div>
                            {/* Jobs */}
                            <div className="col-span-1 bg-white rounded-t-xl border-t-4 border-blue-500 p-3 shadow-lg relative transform -translate-y-2 z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                    コスパ◎
                                </div>
                                <div className="text-center font-bold text-lg text-slate-900 whitespace-nowrap">退職代行Jobs</div>
                                <div className="text-center text-xs text-slate-500 mt-1 whitespace-nowrap">弁護士監修×労働組合</div>
                            </div>
                            {/* Guardian */}
                            <div className="col-span-1 bg-white rounded-t-xl border-t-4 border-emerald-500 p-3 shadow-lg relative transform -translate-y-2 z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                    確実性◎
                                </div>
                                <div className="text-center font-bold text-lg text-slate-900 whitespace-nowrap">ガーディアン</div>
                                <div className="text-center text-xs text-slate-500 mt-1 whitespace-nowrap">労働組合法人</div>
                            </div>
                            {/* 退職110番 */}
                            <div className="col-span-1 bg-white rounded-t-xl border-t-4 border-amber-500 p-3 shadow-lg relative transform -translate-y-2 z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                    法的安心◎
                                </div>
                                <div className="text-center font-bold text-lg text-slate-900 whitespace-nowrap">退職110番</div>
                                <div className="text-center text-xs text-slate-500 mt-1 whitespace-nowrap">弁護士法人</div>
                            </div>
                            {/* Generic Cheap */}
                            <div className="col-span-1 p-3 text-center opacity-60">
                                <div className="font-bold text-lg text-slate-700 whitespace-nowrap">格安業者A</div>
                                <div className="text-xs text-slate-500 mt-1 whitespace-nowrap">民間企業</div>
                            </div>
                            {/* Generic Lawyer */}
                            <div className="col-span-1 p-3 text-center opacity-60">
                                <div className="font-bold text-lg text-slate-700 whitespace-nowrap">一般弁護士B</div>
                                <div className="text-xs text-slate-500 mt-1 whitespace-nowrap">個人事務所</div>
                            </div>
                        </div>

                        {/* Rows */}
                        <div className="space-y-2">
                            {/* Price Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-slate-100 p-2 rounded-lg"><HelpCircle className="w-5 h-5 text-slate-500" /></div>
                                    料金(税込)
                                </div>
                                <div className="text-center font-bold text-blue-600 text-lg">¥29,000</div>
                                <div className="text-center font-bold text-emerald-600">¥19,800</div>
                                <div className="text-center font-bold text-amber-600">¥43,800</div>
                                <div className="text-center text-slate-500">¥10,000~</div>
                                <div className="text-center text-slate-500">¥100,000~</div>
                            </div>

                            {/* Negotiation Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-blue-50 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-blue-600" /></div>
                                    会社との交渉
                                </div>
                                <div className="text-center flex justify-center"><CheckCircle2 className="w-6 h-6 text-blue-500" /></div>
                                <div className="text-center flex justify-center"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
                                <div className="text-center flex justify-center"><ShieldCheck className="w-6 h-6 text-amber-500" /></div>
                                <div className="text-center flex justify-center"><XCircle className="w-6 h-6 text-slate-300" /></div>
                                <div className="text-center flex justify-center"><ShieldCheck className="w-6 h-6 text-slate-400" /></div>
                            </div>

                            {/* Legal Risk Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-amber-50 p-2 rounded-lg"><AlertTriangle className="w-5 h-5 text-amber-600" /></div>
                                    法的トラブル
                                </div>
                                <div className="text-center text-sm font-medium text-blue-600 whitespace-nowrap">安心（弁護士監修）</div>
                                <div className="text-center text-sm font-medium text-emerald-600 whitespace-nowrap">安心（法適合）</div>
                                <div className="text-center text-sm font-bold text-amber-600 whitespace-nowrap">万全（弁護士）</div>
                                <div className="text-center text-sm text-red-500 font-bold">非弁リスク大</div>
                                <div className="text-center text-sm text-slate-500">安心</div>
                            </div>

                            {/* Speed Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-green-50 p-2 rounded-lg"><Zap className="w-5 h-5 text-green-600" /></div>
                                    即日対応
                                </div>
                                <div className="text-center font-bold text-blue-600">◎ (即日)</div>
                                <div className="text-center font-bold text-emerald-600">◯</div>
                                <div className="text-center text-slate-500">△ (営業時間)</div>
                                <div className="text-center text-slate-500">△ (連絡つかず)</div>
                                <div className="text-center text-slate-500">✕ (予約制)</div>
                            </div>

                            {/* Success Rate Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-purple-50 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-purple-600" /></div>
                                    退職成功率
                                </div>
                                <div className="text-center text-slate-700">100%</div>
                                <div className="text-center text-slate-700">100%</div>
                                <div className="text-center text-sm text-slate-500">公称データなし</div>
                                <div className="text-center text-slate-500">不明</div>
                                <div className="text-center text-slate-500">高い</div>
                            </div>
                            <div className="text-right text-xs text-slate-400 -mt-1 pr-4">※各社公式サイト掲載情報に基づく</div>

                            {/* Guarantee Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-pink-50 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-pink-600" /></div>
                                    全額返金保証
                                </div>
                                <div className="text-center font-bold text-blue-600 whitespace-nowrap">全額返金保証あり</div>
                                <div className="text-center font-bold text-emerald-600">なし</div>
                                <div className="text-center text-slate-500 whitespace-nowrap">全額返金保証あり</div>
                                <div className="text-center text-slate-500">なし</div>
                                <div className="text-center text-slate-500">なし</div>
                            </div>

                            {/* Support Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-indigo-50 p-2 rounded-lg"><HelpCircle className="w-5 h-5 text-indigo-600" /></div>
                                    転職・失業保険
                                </div>
                                <div className="text-center font-bold text-blue-600 whitespace-nowrap">無料サポート付き</div>
                                <div className="text-center text-slate-500">なし</div>
                                <div className="text-center text-slate-500">なし</div>
                                <div className="text-center text-slate-500">なし</div>
                                <div className="text-center text-slate-500">なし</div>
                            </div>

                            {/* Payment Row */}
                            <div className="grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-sm items-center hover:shadow-md transition-shadow">
                                <div className="font-bold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                                    <div className="bg-orange-50 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-orange-600" /></div>
                                    後払い
                                </div>
                                <div className="text-center font-bold text-blue-600">可能</div>
                                <div className="text-center text-slate-500">不可</div>
                                <div className="text-center text-slate-500">不可</div>
                                <div className="text-center text-slate-500">不可</div>
                                <div className="text-center text-slate-500">相談可</div>
                            </div>

                            {/* Verdict Row */}
                            <div className="grid grid-cols-6 gap-4 mt-4 items-center">
                                <div className="font-bold text-slate-900 text-lg">おすすめ度</div>
                                <div className="col-span-1 p-2">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold shadow-lg shadow-blue-200" asChild>
                                        <a href="https://jobs1.jp/" target="_blank" rel="nofollow noopener">詳細を見る</a>
                                    </Button>
                                </div>
                                <div className="col-span-1 p-2">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold shadow-lg shadow-emerald-200" asChild>
                                        <a href="https://taisyokudaiko.jp" target="_blank" rel="nofollow noopener">詳細を見る</a>
                                    </Button>
                                </div>
                                <div className="col-span-1 p-2">
                                    <Button className="w-full bg-amber-600 hover:bg-amber-700 font-bold shadow-lg shadow-amber-200" asChild>
                                        <a href="https://aoba.lawyer/taishoku110/" target="_blank" rel="nofollow noopener">詳細を見る</a>
                                    </Button>
                                </div>
                                <div className="col-span-1 text-center text-xs text-slate-400">推奨しません</div>
                                <div className="col-span-1 text-center text-xs text-slate-400">費用対効果△</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-center text-xs text-slate-400 mt-4">※退職110番は基本料金43,800円のほか、金銭請求時に成功報酬（回収額の20〜30%）が別途発生します。※退職代行Jobsの安心パックプランは29,000円（税込・退職代行27,000円＋労働組合費2,000円）です。</div>

                <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">比較のポイント解説</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-blue-700 mb-2">1. 「民間業者」は避けるべき</h3>
                            <p className="text-slate-600 leading-relaxed">
                                株式会社などが運営する「民間業者」は、法的に会社と交渉することができません（非弁行為）。会社側から「弁護士を通してください」と言われた瞬間に何もできなくなり、お金だけ払って退職できないケースが多発しています。必ず「労働組合」か「弁護士」を選びましょう。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-blue-700 mb-2">2. 「弁護士」が必要なケースとは？</h3>
                            <p className="text-slate-600 leading-relaxed">
                                未払い残業代の請求や、パワハラによる慰謝料請求、あるいは既に会社から損害賠償請求をほのめかされている場合は、弁護士一択です。そういった金銭的な争いがない場合は、労働組合（ガーディアンやJobs）で十分かつコスパが良いです。
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/">トップページに戻る</Link>
                        </Button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
