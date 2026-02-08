import { NextResponse } from "next/server";
import { getArticles } from "@/lib/articles";

export async function GET() {
    const articles = await getArticles();

    const articleList = articles
        .map((a) => `- [${a.title}](/columns/${a.slug}): ${a.excerpt}`)
        .join("\n");

    const content = `# EXIT HACK (イグジットハック)

> 退職代行サービスの徹底比較と、自分らしくはたらくためのキャリア・リセットガイド。

## このサイトについて

EXIT HACKは、退職代行サービスに特化した日本語の比較・情報メディアです。弁護士監修・労働組合提携の信頼できるサービスだけを厳選し、利用者が安心して退職できるようサポートします。

## 主なコンテンツ

### おすすめ退職代行サービス (トップページ)
- ガーディアン: 労働組合法人が直接運営、19,800円、一律料金・追加費用なし
- 退職代行Jobs: 弁護士監修×労働組合提携、27,000円（税込）、後払い・全額返金保証あり
- 退職110番: 弁護士法人あおば運営、43,800円、損害賠償・未払い請求・訴訟対応

### 徹底比較表 (/compare)
20社以上の退職代行サービスを料金・運営元・対応範囲で徹底比較。

### お役立ちコラム (/columns)
${articleList || "記事準備中"}

## 選定基準

当サイトのランキングは以下の独自基準に基づいています:
1. 運営元の信頼性（弁護士・労働組合・民間の区分）
2. 料金の透明性（追加費用の有無）
3. 対応の即時性（即日退職対応の可否）
4. 返金保証の有無
5. 交渉力（未払い残業代・有給消化の交渉可否）

## 対象読者

- 退職を検討しているが会社に言い出せない方
- パワハラ・セクハラなど職場環境に問題を抱えている方
- 退職代行サービスの違いがわからず選べない方
- 法的リスクを回避して安全に退職したい方

## お問い合わせ

メール: shunknomad@gmail.com
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
        },
    });
}
