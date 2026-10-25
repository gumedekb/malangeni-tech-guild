import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Geist, Instrument_Serif } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { site } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Malangeni Tech Guild | Websites and apps for small South African businesses";
const description =
  "Registered, online and found on Google — from R1,300. Websites, online stores and apps built by two developers in Umzinto, KZN. B-BBEE Level 1.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Malangeni Tech Guild" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}.wordmark text{stroke-dasharray:none!important}`}</style>
        </noscript>
        <Navbar />
        {/* Route changes update the content inside, which plays the "page" crossfade from globals.css */}
        <ViewTransition update="page" default="none">
          <main className="flex-1">{children}</main>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
