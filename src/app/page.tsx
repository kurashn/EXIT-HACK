import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Scale, HeartHandshake, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Diagnosis } from "@/components/Diagnosis";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd type="website" />
      <JsonLd
        type="faq"
        faqs={[
          { question: "退職代行とは何ですか？", answer: "退職代行とは、労働者に代わって会社に退職の意思を伝えるサービスです。弁護士や労働組合が運営するサービスでは、未払い残業代の請求や有給消化の交渉も可能です。" },
          { question: "退職代行の費用はいくらですか？", answer: "一般的な退職代行サービスの費用は2万円〜5万円程度です。労働組合運営のサービスは約2万円〜3万円、弁護士法人のサービスは約4万円〜が相場です。" },
          { question: "退職代行を使うと損害賠償されますか？", answer: "退職は労働者の権利であり、退職代行を使ったことで損害賠償を請求されるケースは極めて稀です。弁護士法人の退職代行を選べば、万が一の法的トラブルにも対応できます。" },
          { question: "退職代行で即日退職できますか？", answer: "多くの退職代行サービスでは即日退職に対応しています。有給休暇の残日数を活用して、実質的に即日で会社に行かなくて済むケースがほとんどです。" },
        ]}
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 xl:grid-cols-2 xl:items-center">
              {/* Left Content (Text) */}
              <div className="relative z-10 text-center xl:text-left">
                <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700 shadow-sm">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  <span>あなたに最適な退職代行が見つかる</span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl xl:leading-[1.1]">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    心を守るための、
                  </span>
                  <span className="whitespace-nowrap">正しい「逃げ道」を。</span>
                </h1>
                <p className="mx-auto xl:mx-0 mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
                  会社を辞めることは、逃げではありません。<br className="hidden sm:inline" />
                  あなたの人生を取り戻すための、正当な権利行使です。<br />
                  <span className="text-blue-700 font-semibold">即日対応・全額返金保証・弁護士監修</span>のサービスだけを厳選。
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row xl:justify-start">
                  <Button size="lg" className="h-14 w-full min-w-[220px] text-base font-bold shadow-lg sm:w-auto" asChild>
                    <Link href="#ranking">
                      安心できる業者を探す <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 w-full min-w-[220px] text-base sm:w-auto border-slate-300 hover:bg-slate-50" asChild>
                    <Link href="/compare">機能・価格を徹底比較</Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-4">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <Scale className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-xs">法的リスク回避</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <HeartHandshake className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-xs">円満退職</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-xs">最短10分</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-xs">秘密厳守</span>
                  </div>
                </div>
              </div>

              {/* Right Content (Image) - hidden below xl */}
              <div className="hidden xl:block relative mx-auto w-full">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 shadow-2xl ring-1 ring-slate-100 backdrop-blur-sm xl:aspect-auto xl:h-[600px]">
                  <Image
                    src="/images/hero.png"
                    alt="退職代行で自由な新生活へ"
                    width={500}
                    height={500}
                    className="h-full w-full object-contain p-8"
                    priority
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis Section (Replaces Problem Section) */}
        <Diagnosis />

        {/* Ranking Section */}
        <section id="ranking" className="py-24 relative bg-white">
          <div className="container relative px-4 md:px-6 mx-auto">
            <div className="mb-16 text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                2026年最新版
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                徹底比較で選ぶ、安心の退職代行サービス
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                数ある代行業者の中から、「労働組合運営」「弁護士監修」「実績多数」の<br className="hidden sm:inline" />
                <span className="text-slate-900 font-bold">実績・保証が明確な3社</span>を編集部が厳選しました。
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Ranking Item 1 - ガーディアン (総合おすすめ) */}
              <Card className="relative overflow-hidden border-2 border-blue-500 bg-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
                {/* Category Icon */}
                <div className="absolute -top-2 -right-2 h-16 w-16 z-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg z-10">
                  総合おすすめ
                </div>
                <CardHeader className="pb-4 mt-8">
                  <div className="mb-2 text-sm text-blue-600 font-bold">労働組合法人が直接運営</div>
                  <CardTitle className="text-3xl font-bold text-slate-900">ガーディアン</CardTitle>
                  <CardDescription className="text-slate-500">東京労働経済組合運営・メディア掲載実績多数</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                      <span>労働組合が直接運営で交渉力が強い</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                      <span>一律料金・追加費用一切なし</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                      <span>LINEで完結・即日対応</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">雇用形態問わず一律</div>
                    <p className="text-3xl font-bold text-slate-900 font-mono">19,800<span className="text-base font-sans text-slate-500 font-normal">円(税込)</span></p>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full h-12 text-base font-bold" asChild>
                    <a href="https://taisyokudaiko.jp" target="_blank" rel="nofollow noopener">
                      公式サイトで無料相談 <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Ranking Item 2 - 退職代行Jobs (コスパおすすめ) */}
              <Card className="relative overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                {/* Category Icon */}
                <div className="absolute -top-2 -right-2 h-14 w-14 z-20 bg-slate-500 rounded-full flex items-center justify-center shadow-md">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 z-10">
                  コスパ重視
                </div>
                <CardHeader className="pb-4 mt-8">
                  <div className="mb-2 text-sm text-slate-500 font-medium">弁護士監修 × 労働組合提携</div>
                  <CardTitle className="text-2xl font-bold text-slate-900">退職代行Jobs</CardTitle>
                  <CardDescription>弁護士監修 + 労働組合の安心体制（安心パック）</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                      <span>後払い・全額返金保証あり</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                      <span>無料の転職サポート付き</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                      <span>退職届テンプレート無料提供</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">安心パックプラン（労働組合加入込み）</div>
                    <p className="text-3xl font-bold text-slate-900 font-mono">27,000<span className="text-base font-sans text-slate-500 font-normal">円(税込)</span></p>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="secondary" className="w-full h-12" asChild>
                    <a href="https://jobs1.jp/" target="_blank" rel="nofollow noopener">公式サイトを見る</a>
                  </Button>
                </div>
              </Card>

              {/* Ranking Item 3 - 退職110番 (法的対応おすすめ) */}
              <Card className="relative overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                {/* Category Icon */}
                <div className="absolute -top-2 -right-2 h-14 w-14 z-20 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 z-10">
                  法的対応重視
                </div>
                <CardHeader className="pb-4 mt-8">
                  <div className="mb-2 text-sm text-slate-500 font-medium">弁護士法人</div>
                  <CardTitle className="text-2xl font-bold text-slate-900">退職110番</CardTitle>
                  <CardDescription>弁護士法人あおば運営・損害賠償対応</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>弁護士が直接対応で安心</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>金銭請求・訴訟対応が可能</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>全額返金保証付き</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4 text-center border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">雇用形態問わず一律</div>
                    <p className="text-3xl font-bold text-slate-900 font-mono">43,800<span className="text-base font-sans text-slate-500 font-normal">円(税込)</span></p>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="secondary" className="w-full h-12" asChild>
                    <a href="https://aoba.lawyer/taishoku110/" target="_blank" rel="nofollow noopener">公式サイトを見る</a>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-6">その他、安さ重視のサービスや女性特化なども比較したい方はこちら</p>
              <Button variant="outline" size="lg" className="h-12 px-8 min-w-[200px] border-slate-300" asChild>
                <Link href="/compare">サービスの徹底比較表を見る</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
