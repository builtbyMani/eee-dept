import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactModal from "@/components/ui/ContactModal";

const raleway = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../public/fonts/Raleway-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const rozhaOne = localFont({
  src: "../public/fonts/RozhaOne-Regular.ttf",
  variable: "--font-rozha",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Department of Electrical & Electronics Engineering — JNTUH UCESTH",
    template: "%s | EEE JNTUH",
  },
  description:
    "Student engineering machines, electric formula racing, autonomous aerial & ground robotics, MSME research grants, and high-voltage electrical engineering at JNTU Hyderabad.",
  keywords: [
    "JNTUH EEE",
    "Department of Electrical and Electronics Engineering",
    "JNTU Hyderabad",
    "Formula Bharat EV",
    "Hexawatts Racing",
    "AETOS Autonomous Drone",
    "Autonomous Vehicle DBW",
    "Planetary Rover IRC",
    "ISRO Robotics Challenge",
    "MSME 5.0 Grant",
  ],
  authors: [{ name: "Department of EEE, JNTUH UCESTH" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/images/jntuh-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Department of Electrical & Electronics Engineering — JNTUH UCESTH",
    description:
      "Student engineering machines, electric formula racing, autonomous aerial & ground robotics, and research grants at JNTU Hyderabad.",
    url: "https://eee-dept-jntuh.ac.in",
    siteName: "EEE Department — JNTUH",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EBD0",
  colorScheme: "light",
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
      className={`${raleway.variable} ${dmMono.variable} ${rozhaOne.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-[100dvh] flex flex-col bg-[#F5EBD0] text-[#181113] antialiased selection:bg-[#7F011F] selection:text-white max-w-[100vw] overflow-x-hidden font-sans"
      >
        <Navbar />
        <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
