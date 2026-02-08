import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">EXIT HACK</h3>
                        <p className="text-sm text-slate-500">
                            退職代行徹底比較メディア。
                        </p>
                        <div className="text-xs text-slate-400 space-y-2">
                            <p>当サイトはアフィリエイトプログラムを利用し、製品・サービスをご紹介しています。</p>
                            <p>ランキングは独自の調査・選定基準に基づき作成されています。</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-900">メニュー</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="hover:text-blue-600 transition-colors">
                                    トップページ
                                </Link>
                            </li>
                            <li>
                                <Link href="/compare" className="hover:text-blue-600 transition-colors">
                                    徹底比較表
                                </Link>
                            </li>
                            <li>
                                <Link href="/columns" className="hover:text-blue-600 transition-colors">
                                    お役立ちコラム
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-900">ご利用について</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                                    プライバシーポリシー
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                                    利用規約
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} EXIT HACK. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
