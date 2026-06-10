"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/navbar";
import { faqs, mosaicCards, testimonials } from "@/lib/data";
import { Services } from "@/components/services";

// ─── Data ────────────────────────────────────────────────────────────────────


/**
 * Hero — Mosaic layout
 *
 * Struktur grid:
 *   col-left  (w-[200px]) : 2 card stack vertikal, full height
 *   col-mid   (flex-1)    : card atas + teks overlay + card bawah
 *   col-right (w-[220px]) : card besar atas (flex-1) + card kecil bawah (h-[180px])
 *
 * Semua card menyatu tanpa gap. Teks + CTA di-overlay di atas
 * keseluruhan mosaic via absolute positioning.
 *
 * Border merah FTO (2px) memisahkan antar-card sebagai grid line.
 */
function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden h-[100dvh] lg:h-[98dvh] min-h-[620px] max-h-[960px]">
      {/* ── Global dim overlay ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at center, rgba(8,12,28,0.78) 0%, rgba(8,12,28,0.50) 40%, transparent 100%)",
        }}
      />

      {/* ── Mobile background: single full-bleed image ── */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={mosaicCards[2].src}
          alt={mosaicCards[2].alt}
          fill
          priority                      // ← LCP image, wajib priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary-foreground/50" />
      </div>

      {/* ── Tablet mosaic: 2×2 grid ── */}
      <div
        className="absolute inset-0 z-0 hidden md:grid lg:hidden gap-3 pt-16 px-3"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {[mosaicCards[0], mosaicCards[2], mosaicCards[1], mosaicCards[3]].map(
          (card) => (
            <div key={card.src} className="relative overflow-hidden rounded-xl">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-secondary-foreground/55" />
              <span className="absolute bottom-2.5 left-2.5 text-[9px] font-bold uppercase tracking-widest text-white/80">
                {card.label}
              </span>
            </div>
          )
        )}
      </div>

      {/* ── Desktop mosaic: 3-kolom asimetris ── */}
      <div
        className="absolute inset-0 z-0 hidden lg:grid gap-4 pt-20 px-4"
        style={{
          gridTemplateColumns: "minmax(220px, 280px) 1fr minmax(220px, 280px)",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {/* Kiri atas */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={mosaicCards[0].src}     // kiri atas
            alt={mosaicCards[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 220px, 280px"
            priority
          />
          <div className="absolute inset-0 bg-secondary-foreground/60" />
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
            {mosaicCards[0].label}
          </span>
        </div>

        {/* Tengah atas */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={mosaicCards[2].src}
            alt={mosaicCards[2].alt}
            fill
            className="object-cover object-[center_65%]"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) calc(100vw - 440px - 2rem), calc(1280px - 560px - 2rem)"
            priority
          />
          <div className="absolute inset-0 bg-secondary-foreground/60" />
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
            {mosaicCards[2].label}
          </span>
        </div>

        {/* Kanan — span 2 baris */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ gridColumn: "3", gridRow: "1 / 3" }}
        >
          <Image
            src={mosaicCards[4].src}
            alt={mosaicCards[4].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 220px, 280px"
            priority
          />
          <div className="absolute inset-0 bg-secondary-foreground/60" />
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
            {mosaicCards[4].label}
          </span>
        </div>

        {/* Kiri bawah */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={mosaicCards[1].src}
            alt={mosaicCards[1].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 220px, 280px"
            priority
          />
          <div className="absolute inset-0 bg-secondary-foreground/60" />
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
            {mosaicCards[1].label}
          </span>
        </div>

        {/* Tengah bawah */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={mosaicCards[3].src}
            alt={mosaicCards[3].alt}
            fill
            className="object-cover object-[center_80%]"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) calc(100vw - 440px - 2rem), calc(1280px - 560px - 2rem)"
            priority
          />
          <div className="absolute inset-0 bg-secondary-foreground/60" />
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
            {mosaicCards[3].label}
          </span>
        </div>
      </div>

      {/* ── Teks + CTA overlay ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <p className="mb-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
          Sport & Travel Experience Management
        </p>

        <h1
          className="font-heading text-[clamp(2.8rem,8vw,5rem)] 2xl:text-[7rem] font-bold uppercase leading-none tracking-[-0.01em] text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.5)]">
          <span className="block">From</span>
          <span className="block" style={{ color: "var(--fto-red)" }}>The</span>
          <span className="block">Origin</span>
        </h1>

        <div
          className="my-4 md:my-5 h-0.75 w-40 sm:w-50 md:w-70 lg:w-[320px] xl:w-100 rounded-full"
          style={{ backgroundColor: "var(--fto-red)" }}
        />

        <p className="max-w-65 text-sm leading-relaxed text-white/70 md:max-w-sm md:text-base">
          Curating seamless sport, travel & leisure experiences worldwide
        </p>

        <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="h-11 w-full sm:w-auto px-8 text-sm font-semibold"
            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
          >
            Mulai Sekarang
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 w-full sm:w-auto border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            Lihat Layanan
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto container px-4 xl:px-28 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 md:items-start">
          <div>
            <div
              className="mb-3 h-1 w-8 rounded-full"
              style={{ backgroundColor: "var(--fto-navy)" }}
            />
            <h2
              className="leading-tight text-foreground"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                textTransform: "uppercase",
              }}
            >
              Satu Ekosistem
              <br />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  textTransform: "none",
                  color: "var(--fto-red)",
                  fontSize: "0.95em",
                }}
              >
                Segala Perjalanan
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["AW", "RS", "BH", "DK"].map((initials, i) => (
                  <Avatar
                    key={initials}
                    className="h-9 w-9 border-2 border-background"
                  >
                    <AvatarFallback
                      className="text-xs font-semibold text-white"
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "var(--fto-red)" : "var(--fto-navy)",
                      }}
                    >
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  500+ perjalanan
                </p>
                <p className="text-xs text-muted-foreground">
                  dipercaya klien kami
                </p>
              </div>
            </div>
          </div>

          <div className="md:pt-3">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              <strong className="font-semibold text-foreground">
                FTO adalah perusahaan sport tourism & travel experience
                management
              </strong>{" "}
              yang berbasis di Indonesia, menggabungkan olahraga, perjalanan,
              dan gaya hidup dalam satu pengalaman yang terpadu.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Dengan pendekatan yang mengutamakan fleksibilitas dan
              personalisasi,{" "}
              <strong className="font-semibold text-foreground">
                kami tidak sekadar menjual tiket — kami merancang kenangan.
              </strong>
            </p>

            <Separator className="my-8" />

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Sport Tourism Expertise",
                "End-to-End Service",
                "Personalized Experience",
                "Trusted Partnerships",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div
                    className="h-0.75 w-4 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--fto-red)" }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-14 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--fto-red)" }}
          >
            Cerita klien kami
          </p>
          <h2
            className="leading-tight text-foreground"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,3rem)",
              textTransform: "uppercase",
            }}
          >
            Mereka Sudah Merasakannya
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col gap-4 pt-6">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback
                      className="text-xs font-semibold text-white"
                      style={{ backgroundColor: "var(--fto-red)" }}
                    >
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-3xl px-8">
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--fto-red)" }}
          >
            Pertanyaan umum
          </p>
          <h2
            className="leading-tight text-foreground"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,3rem)",
              textTransform: "uppercase",
            }}
          >
            FAQ
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--fto-navy)" }}>
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2
          className="leading-tight text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem,5vw,4rem)",
            textTransform: "uppercase",
          }}
        >
          Siap Memulai{" "}
          <span style={{ color: "var(--fto-red)" }}>Perjalanan</span> Anda?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/60">
          Ceritakan kebutuhan Anda kepada kami. Kami akan merancang perjalanan
          yang tidak hanya memenuhi ekspektasi — tapi melampauinya.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            className="h-12 px-10 text-sm font-semibold"
            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
          >
            Konsultasi Gratis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-10 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            Lihat Portfolio Trip
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--fto-red)" }}
            >
              <span className="text-[10px] font-bold text-white">FTO</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              From The Origin
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 From The Origin. Curating seamless sport, travel & leisure
            experiences worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <AboutSnippet />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}