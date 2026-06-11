"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWaLink } from "@/lib/data";

type SlideItem = {
    category: string;
    name: string;
    description: string;
    date: string;
    badge: string;
    image: string;
    href: string;
};

const slides: SlideItem[] = [
    {
        category: "Cycling Event",
        name: "Tour de France",
        description:
            "Saksikan langsung etape spektakuler di pegunungan Alpen dan jalur vinyard Prancis bersama komunitas pesepeda premium FTO.",
        date: "Jul — Agt 2025",
        badge: "Terbatas",
        image:
            "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1170&auto=format&fit=crop",
        href: "#",
    },
    {
        category: "Marathon",
        name: "Tokyo Marathon",
        description:
            "Paket eksklusif untuk pelari — race entry, hotel premium di Shinjuku, city tour, dan pendampingan penuh dari tim FTO.",
        date: "Mar 2026",
        badge: "Early Bird",
        image:
            "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1170&auto=format&fit=crop",
        href: "#",
    },
    {
        category: "Tennis · Grand Slam",
        name: "Wimbledon",
        description:
            "Rasakan pengalaman grand slam paling prestisius di dunia — Centre Court, strawberries & cream, dan hospitality eksklusif.",
        date: "Jun — Jul 2026",
        badge: "Eksklusif",
        image:
            "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1170&auto=format&fit=crop",
        href: "#",
    },
    {
        category: "Football · Premier League",
        name: "Old Trafford Experience",
        description:
            "Stadium tour, matchday package, dan hotel premium di Manchester — dirancang khusus untuk penggemar sepak bola sejati.",
        date: "Sep — Des 2025",
        badge: "Terpopuler",
        image:
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
        href: "#",
    },
    {
        category: "Tennis · Lokal",
        name: "Kula Mani Tennis Village",
        description:
            "Retreat tenis eksklusif di fasilitas premium bersama komunitas terpilih. Training camp, wellness, dan networking dalam satu ekosistem.",
        date: "Sepanjang Tahun",
        badge: "Mitra Resmi",
        image:
            "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=1170&auto=format&fit=crop",
        href: "#",
    },
];

function getBadgeClass(badge: string): string {
    const map: Record<string, string> = {
        Terbatas: "bg-[var(--fto-red)] text-white",
        "Early Bird": "bg-[var(--fto-navy)] text-white",
        Eksklusif: "bg-[var(--fto-navy-mid)] text-white",
        Terpopuler: "bg-[var(--fto-red)] text-white",
        "Mitra Resmi": "bg-[var(--fto-navy)] text-white",
    };

    return map[badge] ?? "bg-[var(--fto-red)] text-white";
}

export default function FeaturedSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const orderedSlides = useMemo(() => {
        return [...slides.slice(activeIndex), ...slides.slice(0, activeIndex)];
    }, [activeIndex]);

    const activeSlide = orderedSlides[0];
    const stackSlides = orderedSlides.slice(1, 4);

    const nextSlide = () => setActiveIndex((c) => (c + 1) % slides.length);
    const prevSlide = () =>
        setActiveIndex((c) => (c - 1 + slides.length) % slides.length);

    return (
        <section id="featured" className="relative bg-background py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,16,46,0.12)_0%,transparent_20%)] pointer-events-none" />
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div
                            className="mb-3 h-1 w-8 rounded-full"
                            style={{ backgroundColor: "var(--fto-red)" }}
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
                            Destinasi &amp;
                            <br />
                            <span style={{ color: "var(--fto-red)" }}>Event Pilihan</span>
                        </h2>
                    </div>

                    {/* <Button
                        asChild
                        variant="ghost"
                        className="h-auto self-start p-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--fto-red)] hover:bg-transparent hover:text-[var(--fto-red)] md:self-end"
                    >
                        <Link href="/destinasi" className="inline-flex items-center gap-2">
                            Semua Destinasi
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button> */}
                </div>

                <Card className="relative h-[540px] overflow-hidden border-0 shadow-2xl shadow-black/15">
                    <div className="absolute inset-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide.name}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${activeSlide.image})` }}
                                initial={{ opacity: 0, scale: 1.06 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.03 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.65)_100%)]" />
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--fto-red)]" />
                    </div>

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-12">
                        <div className="grid h-full items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <motion.div
                                key={activeSlide.name + "-content"}
                                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                className="max-w-xl text-white"
                            >
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center border border-white/20 bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-white/70 backdrop-blur">
                                        {activeSlide.category}
                                    </span>
                                    <span
                                        className={`inline-flex items-center px-3 py-1 text-[9px] uppercase tracking-[0.22em] ${getBadgeClass(
                                            activeSlide.badge
                                        )}`}
                                    >
                                        {activeSlide.badge}
                                    </span>
                                </div>

                                <h3
                                    className="leading-[0.92] tracking-tight text-white"
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "clamp(2.5rem, 7vw, 5rem)",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {activeSlide.name}
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/72 md:text-[15px]">
                                    {activeSlide.description}
                                </p>

                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <Button
                                        asChild
                                        className="h-11 rounded-full bg-[var(--fto-red)] px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[var(--fto-red)]/90"
                                    >
                                        <Link href={activeSlide.href} className="inline-flex items-center">
                                            Lihat Detail
                                            <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>

                                    <div className="border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/65 backdrop-blur">
                                        {activeSlide.date}
                                    </div>

                                    <div className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-white/35 tabular-nums">
                                        {String(activeIndex + 1).padStart(2, "0")} &mdash;{" "}
                                        {String(slides.length).padStart(2, "0")}
                                    </div>
                                </div>
                            </motion.div>

                            <div className="hidden h-full items-center justify-end lg:flex">
                                <div className="relative h-[420px] w-[280px]">
                                    <AnimatePresence initial={false}>
                                        {stackSlides.map((slide, idx) => (
                                            <motion.div
                                                key={`${slide.name}-${activeIndex}-${idx}`}
                                                layout
                                                initial={{ opacity: 0, x: 60, scale: 0.92 }}
                                                animate={{
                                                    opacity: 1 - idx * 0.18,
                                                    x: idx * 20,
                                                    y: idx * 68,
                                                    scale: 1 - idx * 0.06,
                                                    rotate: idx === 0 ? 0 : -idx * 1.5,
                                                    zIndex: 30 - idx,
                                                }}
                                                exit={{ opacity: 0, x: -30, scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                                                className="absolute left-0 right-0 overflow-hidden border border-white/10 shadow-xl"
                                                style={{
                                                    height: idx === 0 ? 200 : idx === 1 ? 150 : 130,
                                                    top: idx * 16,
                                                }}
                                            >
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="280px"
                                                />
                                                <div className="absolute inset-0 bg-black/35" />

                                                <div className="absolute inset-x-0 bottom-0 p-3.5">
                                                    <p className="mb-1 text-[8px] uppercase tracking-[0.22em] text-[var(--fto-red)]">
                                                        {slide.category}
                                                    </p>
                                                    <p
                                                        className="leading-none tracking-wide text-white"
                                                        style={{
                                                            fontFamily: "var(--font-heading)",
                                                            fontWeight: 700,
                                                            fontSize: "17px",
                                                        }}
                                                    >
                                                        {slide.name}
                                                    </p>
                                                    {idx === 0 && (
                                                        <p className="mt-1 line-clamp-1 text-[11px] font-light text-white/60">
                                                            {slide.description}
                                                        </p>
                                                    )}
                                                </div>

                                                {idx === 0 && (
                                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--fto-red)]" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-1.5">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setActiveIndex(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={[
                                            "transition-all duration-300",
                                            i === activeIndex
                                                ? "h-1 w-6 bg-[var(--fto-red)]"
                                                : "h-1 w-1 bg-white/30 hover:bg-white/50",
                                        ].join(" ")}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    size="icon"
                                    onClick={prevSlide}
                                    aria-label="Previous slide"
                                    className="h-10 w-10 border-0 bg-white/90 text-foreground shadow-md hover:bg-white rounded-full"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <Button
                                    type="button"
                                    variant="secondary"
                                    size="icon"
                                    onClick={nextSlide}
                                    aria-label="Next slide"
                                    className="h-10 w-10 border-0 bg-[var(--fto-red)] text-white shadow-md hover:bg-[var(--fto-red)]/90 rounded-full"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Semua paket dapat dikustomisasi sesuai kebutuhan Anda
                    </p>

                    <Button
                        asChild
                        variant="ghost"
                        className="h-auto p-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--fto-red)] hover:bg-transparent hover:text-[var(--fto-red)]"
                    >
                        <Link
                            href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}
                            className="inline-flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Konsultasi Gratis
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}