import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "FireReel — AI Video Ad Agency | Premium Video Ads on Subscription",
  description:
    "Scroll-stopping video ads delivered monthly on subscription. AI-powered production with human creative direction. From $590/mo. No agency fees, no filming, no lock-in contracts.",
  keywords: [
    "AI video ads", "video ad agency", "video ads subscription", "AI video production",
    "social media video ads", "TikTok ads", "Instagram Reels ads", "Facebook video ads",
    "YouTube Shorts ads", "video marketing agency", "AI ad creator", "video ad service",
    "monthly video ads", "affordable video ads", "e-commerce video ads", "real estate video ads",
    "UGC video ads", "product video ads", "video ads for small business",
  ],
  metadataBase: new URL("https://firereel.net"),
  alternates: {
    canonical: "https://firereel.net",
  },
  openGraph: {
    title: "FireReel — AI Video Ads That Actually Convert",
    description: "Premium video ads delivered monthly. AI speed, human quality. From $590/mo with no lock-in contracts.",
    url: "https://firereel.net",
    siteName: "FireReel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FireReel — AI Video Ad Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FireReel — AI Video Ads That Actually Convert",
    description: "Premium video ads delivered monthly. AI speed, human quality. From $590/mo.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JT97QP2G8C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JT97QP2G8C');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "FireReel",
              url: "https://firereel.net",
              logo: "https://firereel.net/logo.png",
              image: "https://firereel.net/og-image.png",
              description:
                "AI-powered video ad agency delivering premium video ads on monthly subscription. AI speed with human creative direction.",
              priceRange: "$590 - $2,050/mo",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Adelaide",
                addressRegion: "SA",
                addressCountry: "AU",
              },
              sameAs: [],
              offers: [
                {
                  "@type": "Offer",
                  name: "Starter Plan",
                  price: "590",
                  priceCurrency: "USD",
                  description: "2 premium video ads per month",
                },
                {
                  "@type": "Offer",
                  name: "Growth Plan",
                  price: "997",
                  priceCurrency: "USD",
                  description: "4 premium video ads per month",
                },
                {
                  "@type": "Offer",
                  name: "Brand Plan",
                  price: "2050",
                  priceCurrency: "USD",
                  description: "8 premium video ads per month",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${bebasNeue.variable} font-[family-name:var(--font-dm)]`}>
        {children}
      </body>
    </html>
  );
}
