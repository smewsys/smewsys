import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "SMEWSYS — Technology. Systems. Solutions.",
    template: "%s | SMEWSYS",
  },
  description:
    "From idea to impact. SMEWSYS builds scalable software, high-performance web applications, enterprise automation, cloud architectures, and AI solutions.",
  icons: {
    icon: "/brand/smewsys_balck_transperent_logo.svg",
    apple: "/brand/smewsys_balck_transperent_logo.png",
  },
  openGraph: {
    title: "SMEWSYS — Technology. Systems. Solutions.",
    description:
      "From idea to impact. SMEWSYS builds scalable software, high-performance web applications, enterprise automation, cloud architectures, and AI solutions.",
    siteName: "SMEWSYS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white text-[#0B0D0E] antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

