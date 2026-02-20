import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exit-hack.com"),
  title: {
    default: "EXIT HACK (イグジットハック) | 今日、会社を辞める方法。",
    template: "%s | EXIT HACK",
  },
  description: "退職代行サービスの徹底比較と、自分らしくはたらくためのキャリア・リセットガイド。弁護士監修・労働組合提携の安心サービスだけを厳選。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "EXIT HACK",
    title: "EXIT HACK | 今日、会社を辞める方法。",
    description: "退職代行サービスの徹底比較と、自分らしくはたらくためのキャリア・リセットガイド。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "EXIT HACK - 今日、会社を辞める方法。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXIT HACK | 今日、会社を辞める方法。",
    description: "退職代行サービスの徹底比較と、自分らしくはたらくためのキャリア・リセットガイド。",
    images: ["/ogp.png"],
  },
  verification: {
    google: "U-eest0kNsPYHcPIdb9IPwQ8fzBDDx6tLkt2ewp8_Gc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GG4GD0H77R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GG4GD0H77R');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
