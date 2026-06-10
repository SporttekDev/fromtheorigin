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
  title: "FTO — From The Origin · Sport Tourism Indonesia",
  description:
    "From The Origin (FTO) adalah perusahaan sport tourism premium yang merancang pengalaman perjalanan olahraga yang personal, terkurasi, dan eksklusif.",
  keywords: [
    "sport tourism indonesia",
    "wisata olahraga",
    "tailor-made travel",
    "from the origin",
    "FTO",
    "Kula Mani Tennis Village",
    "premium travel",
  ],
  openGraph: {
    title: "FTO — From The Origin",
    description: "Premium Sport Tourism · Personal, Terkurasi, Eksklusif.",
    siteName: "From The Origin",
    locale: "id_ID",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable, robotoSlabHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
