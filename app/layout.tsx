// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const robotoSlabHeading = Roboto_Slab({ subsets: ['latin'], variable: '--font-heading' });

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fromtheorigin.id"),
  title: {
    default: "From The Origin (FTO) | Sport Tourism & Travel Experience Management",
    template: "%s | From The Origin (FTO)",
  },
  description:
    "From The Origin (FTO) adalah perusahaan sport tourism dan travel experience management berbasis di Indonesia yang menghadirkan perjalanan personal, curated, dan end-to-end untuk individu, komunitas, dan perusahaan.",
  keywords: [
    "From The Origin",
    "FTO",
    "sport tourism",
    "travel experience management",
    "travel Indonesia",
    "tailor-made travel",
    "corporate travel",
    "community travel",
    "leisure travel",
    "private journey",
    "travel booking",
    "accommodation services",
    "wellness travel",
    "training camp",
    "event travel",
  ],
  authors: [{ name: "From The Origin (FTO)" }],
  creator: "From The Origin (FTO)",
  publisher: "From The Origin (FTO)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fromtheorigin.id",
    siteName: "From The Origin (FTO)",
    title: "From The Origin (FTO) | Sport Tourism & Travel Experience Management",
    description:
      "Curating seamless sport, travel & leisure experiences worldwide.",
    images: [
      {
        url: "/images/logo-fto.png",
        width: 1200,
        height: 630,
        alt: "From The Origin (FTO)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From The Origin (FTO)",
    description:
      "Sport tourism dan travel experience management untuk perjalanan yang curated, personal, dan bernilai tinggi.",
    images: ["/images/logo-fto.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://fromtheorigin.id",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "From The Origin",
  alternateName: "FTO",
  url: "https://fto.id",
  logo: "https://fto.id/logo-fto.png",
  description:
    "Sport Tourism & Travel Experience Management company based in Indonesia.",
  slogan:
    "Curating Seamless Sport, Travel & Leisure Experiences Worldwide",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: [
    "https://instagram.com/youraccount",
    "https://facebook.com/youraccount",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "scroll-smooth", geistSans.variable, geistMono.variable, "font-sans", roboto.variable, robotoSlabHeading.variable)}
    >
      <body className="min-h-full flex flex-col">

        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
