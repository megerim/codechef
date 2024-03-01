import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codechef. | Dijital Mutfak",
  description: "codechef.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={montserrat.className}>{children} <Analytics/> <SpeedInsights/></body>
    </html>
  );
}
