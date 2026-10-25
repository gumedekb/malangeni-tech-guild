import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Geist, Instrument_Serif } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { founders } from "./lib/founders";
import { contacts, site } from "./lib/site";
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

// Business details for Google, on every page. Keep areaServed identical to the Google Business Profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/apple-icon.png`,
  description: "Websites, online stores and mobile apps for small South African businesses.",
  priceRange: "R350 – R8,000+",
  currenciesAccepted: "ZAR",
  telephone: `+${contacts[0].number}`,
  email: site.email,
  contactPoint: contacts.map((c) => ({
    "@type": "ContactPoint",
    telephone: `+${c.number}`,
    email: c.email,
    contactType: "customer service",
    name: c.name,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.town,
    addressRegion: site.province,
    addressCountry: "ZA",
  },
  areaServed: ["Umzinto", "Scottburgh", "Park Rynie", "Pennington", "Hibberdene", "Port Shepstone", "Amanzimtoti", "Durban"].map(
    (name) => ({ "@type": "City", name }),
  ),
  knowsAbout: ["Website design", "E-commerce", "Company registration", "Mobile app development", "Business automation"],
  founder: founders.map((f) => ({ "@type": "Person", name: f.name })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
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
