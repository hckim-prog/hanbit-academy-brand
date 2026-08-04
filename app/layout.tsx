import type { Metadata, Viewport } from "next";
import { Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanbit-academy-brand.vercel.app",
  ),
  title: {
    default: "한빛아카데미 | 내일을 준비하는 교재",
    template: "%s | 한빛아카데미",
  },
  description:
    "컴퓨터공학부터 이공계와 경제경영까지, 더 나은 가르침과 배움을 연결하는 대학교재 출판 브랜드 한빛아카데미입니다.",
  keywords: [
    "한빛아카데미",
    "대학교재",
    "IT 교재",
    "이공계 교재",
    "교수 강의자료",
  ],
  openGraph: {
    title: "한빛아카데미 | 내일을 준비하는 교재",
    description: "더 나은 가르침과 배움, 내일을 준비하는 교재",
    locale: "ko_KR",
    type: "website",
    siteName: "한빛아카데미",
  },
  twitter: {
    card: "summary_large_image",
    title: "한빛아카데미 | 내일을 준비하는 교재",
    description: "더 나은 가르침과 배움, 내일을 준비하는 교재",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f1ea",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
