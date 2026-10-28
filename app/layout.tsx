import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Department of Electrical & Electronics Engineering — JNTUH UCESTH",
  description:
    "Student engineering projects, formula electric racing, autonomous aerial & ground robotics, MSME research grants, and technical achievements at JNTU Hyderabad.",
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${dmMono.variable} dark scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-[100dvh] flex flex-col bg-[#090909] text-[#c4c4c4] antialiased selection:bg-[#1f3fff] selection:text-white"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
