import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  DM_Serif_Display,
  DM_Mono,
  Syne,
} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif-display",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esteban Lozada - Software Developer",
  description:
    "Welcome to my portfolio.I'm a software developer that transform concepts into digital products. Known for building scalable and maintainable SaaS solutions with modern tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} ${dmMono.variable} ${syne.variable} antialiased dark `}
      >
        <AnimatedBackground />

        {children}

        <Footer />
      </body>
    </html>
  );
}
