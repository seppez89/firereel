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
  title: "FireReel — AI Video Ad Agency for Australian Businesses",
  description:
    "Scroll-stopping, cinematically edited video ads delivered to your inbox every month. No agency fees. No filming. No back-and-forth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bebasNeue.variable} font-[family-name:var(--font-dm)]`}>
        {children}
      </body>
    </html>
  );
}
