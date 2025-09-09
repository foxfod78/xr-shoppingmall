import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "몰입형 XR 쇼핑몰 : XROO",
  description:
    "XR-Tech 기반 몰입형 쇼핑몰 솔루션 | 클릭 대신 체험으로 구매를 이끄는 실감형 커머스. 3D·AR·가상 전시로 전환율을 높이는 쇼핑몰을 제공하고 수천건의 몰입 컨설팅을 집행하며 XR분야에서 역량을 확보하여 시장을 선도하고 있습니다.",
  keywords: [
    "XR 쇼핑몰",
    "XR 팝업스토어",
    "가상현실 쇼핑몰",
    "메타버스 쇼핑",
    "몰입형 쇼핑 경험",
    "AR VR 쇼핑몰",
    "디지털 쇼핑몰",
    "가상 쇼핑몰",
    "XR 커머스 솔루션",
    "인터랙티브 쇼핑몰",
    "3D 가상 매장",
    "온라인 쇼핑몰",
    "디지털 트윈 매장",
    "실감형 커머스",
    "XROO",
    "엑스루",
  ],
  authors: [{ name: "XROO" }],
  creator: "XROO",
  publisher: "XROO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://xroo.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "몰입형 XR 쇼핑몰 : XROO",
    description:
      "XR-Tech 기반 몰입형 쇼핑몰 솔루션 | 클릭 대신 체험으로 구매를 이끄는 실감형 커머스. 3D·AR·가상 전시로 전환율을 높이는 쇼핑몰을 제공하고 수천건의 몰입 컨설팅을 집행하며 XR분야에서 역량을 확보하여 시장을 선도하고 있습니다.",
    url: "https://xroo.io",
    siteName: "XROO",
    images: [
      {
        url: "https://xroo.io/og_logo.png",
        width: 1200,
        height: 630,
        alt: "XROO - 몰입형 XR 쇼핑몰 솔루션",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "몰입형 XR 쇼핑몰 : XROO",
    description: "XR-Tech 기반 몰입형 쇼핑몰 솔루션 | 클릭 대신 체험으로 구매를 이끄는 실감형 커머스",
    images: ["https://xroo.io/og_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "odIdVSuAb6F7D_wg_EO1zL_EaeTnRXFOOLHXiIPO0Q0",
    other: {
      "naver-site-verification": "96f23544c3e481da2148ef52305da95ae2a92cd6",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CGS7LF0PFG" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CGS7LF0PFG');
        `}
      </Script>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
