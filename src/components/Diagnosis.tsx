"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, AlertTriangle, RefreshCcw, ShieldAlert, Zap, Scale } from "lucide-react";

export function Diagnosis() {
    const [step, setStep] = useState(1);
    const [result, setResult] = useState<string | null>(null);

    const reset = () => {
        setStep(1);
        setResult(null);
    };

    const handleAnswer = (answer: boolean) => {
        if (step === 1) {
            // Q1: Money claim?
            if (answer) {
                setResult("taishoku110");
            } else {
                setStep(2);
            }
        } else if (step === 2) {
            // Q2: Legal risk?
            if (answer) {
                setResult("taishoku110");
            } else {
                setStep(3);
            }
        } else if (step === 3) {
            // Q3: Speed/Price?
            if (answer) {
                setResult("jobs");
            } else {
                setResult("guardian");
            }
        }
    };

    return (
        <section id="diagnosis" className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                        30秒でわかる
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        あなたに最適な「辞め方」は？<br />退職リスク診断
                    </h2>
                    <p className="text-slate-500">
                        3つの質問に答えるだけで、今の状況に最適なサービスがわかります。<br />
                        <span className="text-xs text-slate-400">※個人情報は一切保存されません</span>
                    </p>
                </div>

                <Card className="bg-white shadow-xl border-slate-200 overflow-hidden relative min-h-[400px]">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

                    <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                        {!result ? (
                            <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        QUESTION {step} / 3
                                    </span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className={`h-2 w-8 rounded-full ${i <= step ? "bg-blue-500" : "bg-slate-100"}`} />
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center leading-relaxed">
                                    {step === 1 && "会社に対して、未払い残業代や慰謝料を請求したいですか？"}
                                    {step === 2 && "会社から損害賠償請求など、訴えられるリスクを感じますか？"}
                                    {step === 3 && "とにかく「安く」「今日にでも」辞めたいですか？"}
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-24 text-lg font-bold border-2 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all"
                                        onClick={() => handleAnswer(true)}
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-3xl">🙆‍♂️</span>
                                            はい
                                        </div>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-24 text-lg font-bold border-2 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all"
                                        onClick={() => handleAnswer(false)}
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-3xl">🙅‍♀️</span>
                                            いいえ
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full text-center animate-in zoom-in-95 duration-500">
                                <div className="mb-6 inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full font-bold text-sm">
                                    診断完了！あなたに最適なのは...
                                </div>

                                {result === "taishoku110" && (
                                    <div className="space-y-6">
                                        <div className="mx-auto bg-amber-50 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                                            <Scale className="w-10 h-10 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-900 mb-2">退職110番</h3>
                                            <p className="text-slate-500">金銭請求・訴訟対応なら弁護士一択です。</p>
                                        </div>
                                        <div className="bg-amber-50 p-4 rounded-lg text-left max-w-md mx-auto border border-amber-100">
                                            <p className="text-sm text-amber-900 leading-relaxed font-medium">
                                                <AlertTriangle className="inline-block w-4 h-4 mr-1 mb-1" />
                                                あなたの状況は法的交渉が必要です。
                                            </p>
                                            <p className="text-xs text-amber-800 mt-2">
                                                民間業者や労働組合では「交渉」が法律で禁止されている場合があり、リスクが高いです。弁護士法人あおばが運営する退職110番なら、確実に守ってもらえます。
                                            </p>
                                        </div>
                                        <Button size="lg" className="w-full max-w-xs h-14 text-lg font-bold bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-200" asChild>
                                            <a href="https://aoba.lawyer/taishoku110/" target="_blank" rel="nofollow noopener">
                                                退職110番に無料相談する <ArrowRight className="ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                )}

                                {result === "jobs" && (
                                    <div className="space-y-6">
                                        <div className="mx-auto bg-blue-50 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                                            <Zap className="w-10 h-10 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-900 mb-2">退職代行Jobs</h3>
                                            <p className="text-slate-500">コスパ・スピード重視。今すぐ解放されたい方へ。</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg text-left max-w-md mx-auto border border-blue-100">
                                            <p className="text-sm text-blue-900 leading-relaxed font-medium">
                                                <CheckCircle2 className="inline-block w-4 h-4 mr-1 mb-1" />
                                                法的リスクが低いので、コスパ重視でOK！
                                            </p>
                                            <p className="text-xs text-blue-800 mt-2">
                                                弁護士監修×労働組合提携で、会社との交渉も可能です。24,000円（安心パック）で後払い・全額返金保証付き。今日から会社に行かなくて済みます。
                                            </p>
                                        </div>
                                        <Button size="lg" className="w-full max-w-xs h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200" asChild>
                                            <a href="https://jobs1.jp/" target="_blank" rel="nofollow noopener">
                                                Jobsに無料相談する <ArrowRight className="ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                )}

                                {result === "guardian" && (
                                    <div className="space-y-6">
                                        <div className="mx-auto bg-emerald-50 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                                            <ShieldAlert className="w-10 h-10 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-900 mb-2">退職代行ガーディアン</h3>
                                            <p className="text-slate-500">確実性重視。老舗の労働組合でトラブル回避。</p>
                                        </div>
                                        <div className="bg-emerald-50 p-4 rounded-lg text-left max-w-md mx-auto border border-emerald-100">
                                            <p className="text-sm text-emerald-900 leading-relaxed font-medium">
                                                <CheckCircle2 className="inline-block w-4 h-4 mr-1 mb-1" />
                                                バランス重視のあなたに最適。
                                            </p>
                                            <p className="text-xs text-emerald-800 mt-2">
                                                東京都労働委員会認証の法適合組合が運営。メディア掲載実績多数で、確実性を求めるならここです。
                                            </p>
                                        </div>
                                        <Button size="lg" className="w-full max-w-xs h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200" asChild>
                                            <a href="https://taisyokudaiko.jp/" target="_blank" rel="nofollow noopener">
                                                ガーディアンに無料相談する <ArrowRight className="ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <Button variant="ghost" size="sm" onClick={reset} className="text-slate-400 hover:text-slate-600">
                                        <RefreshCcw className="w-4 h-4 mr-2" />
                                        最初からやり直す
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
