import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agash Uthayasuriyan — CTO, Researcher, Data Engineer",
  description:
    "CTO & Co-Founder building 6 products across AI and SaaS. 6 published research papers advancing ML algorithms. Northeastern Laurel & Scroll Award nominee.",
  keywords: [
    "Agash Uthayasuriyan",
    "CTO",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning",
    "Research",
    "Founder",
  ],
  authors: [{ name: "Agash Uthayasuriyan" }],
  openGraph: {
    title: "Agash Uthayasuriyan — CTO, Researcher, Data Engineer",
    description:
      "CTO & Co-Founder building 6 products across AI and SaaS. 6 published research papers. Northeastern Laurel & Scroll Award nominee.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agash Uthayasuriyan — CTO, Researcher, Data Engineer",
    description:
      "CTO & Co-Founder building 6 products across AI and SaaS. 6 published research papers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
