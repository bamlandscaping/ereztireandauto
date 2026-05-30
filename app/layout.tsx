import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CallButton } from "@/components/call-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ereztireandauto.com"),
  title: "Erez Tire and Auto | #1 Tire Shop & Auto Repair in Arvada, CO",
  description: "Arvada's most trusted tire shop & auto repair. New tires, brakes, oil changes, engine diagnostics. Call (720) 435-8409. 5250 W 53rd Pl, Arvada CO.",
  keywords: "tire shop arvada co, auto repair arvada, brake repair arvada, oil change arvada co, mechanic arvada colorado, tire installation near me",
  openGraph: {
    title: "Erez Tire and Auto | Premium Auto Care",
    description: "Expert diagnostics, meticulous repairs, and top-tier tire solutions in Arvada, CO.",
    url: "https://ereztireandauto.com",
    siteName: "Erez Tire and Auto",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Erez Tire and Auto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair", "TireShop"],
  "name": "Erez Tire and Auto",
  "image": "https://ereztireandauto.com/logo.png",
  "@id": "https://ereztireandauto.com",
  "url": "https://ereztireandauto.com",
  "telephone": "+17204358409",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5250 W 53rd Pl",
    "addressLocality": "Arvada",
    "addressRegion": "CO",
    "postalCode": "80002",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7875501,
    "longitude": -105.0560738
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
