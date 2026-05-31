import { CallButton } from "@/components/call-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Ares Tire and Auto | Used & New Tires + Auto Repair in Arvada, CO",
  description: "Arvada's trusted tire shop & auto repair. Used and new tires, light duty brakes, shocks, rims, and tires. Call (720) 435-8409. 5250 W 53rd Pl, Arvada CO.",
  keywords: "used tires arvada co, new tires arvada, tire shop arvada co, light duty brakes arvada, shocks arvada, rims arvada, auto repair arvada colorado, tire installation near me",
  openGraph: {
    title: "Ares Tire and Auto | Used & New Tires + Auto Repair",
    description: "Used and new tires plus light duty brakes, shocks, rims, and tires in Arvada, CO.",
    url: "https://ereztireandauto.com",
    siteName: "Ares Tire and Auto",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1024,
        height: 576,
        alt: "Ares Tire and Auto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ares Tire and Auto | Used & New Tires + Auto Repair",
    description: "Used and new tires plus light duty brakes, shocks, rims, and tires in Arvada, CO.",
    images: ["/og-image.jpeg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair", "TireShop"],
  "name": "Ares Tire and Auto",
  "image": "https://ereztireandauto.com/og-image.jpeg",
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
        <main className="grow">
          {children}
        </main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
