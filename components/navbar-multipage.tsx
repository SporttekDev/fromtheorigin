"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    ArrowRight,
    MapPin,
    Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/data";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Tentang FTO", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function NavbarMultiPage() {
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Tutup mega menu saat klik di luar
    useEffect(() => {
        if (!megaOpen) return;
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest("[data-navbar]")) setMegaOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [megaOpen]);

    const textColor = "text-foreground/75";
    const textHover = "hover:text-foreground";
    const textStrong = "text-foreground";
    const textMuted = "text-muted-foreground";

    return (
        // Wrapper positioning — floating dari edge
        <div
            data-navbar
            className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3"
        >
            {/* ── Pill navbar ── */}
            <header
                className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${scrolled
                    ? "border border-border/60 bg-background/90 backdrop-blur-md shadow-lg shadow-black/5"
                    : "bg-transparent backdrop-blur-md"
                    }`}
            >
                <div className="flex h-14 items-center justify-between px-4 sm:px-5">

                    {/* Logo */}

                    <Link href="#" className="flex shrink-0 items-center gap-2.5">
                        <Image
                            src="/images/logo-fto.png"
                            alt="From The Origin"
                            width={48}
                            height={48}
                            className="h-8 w-auto"
                            priority
                        />

                        <div className="leading-tight">
                            <p
                                className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${textStrong}`}
                            >
                                From The Origin
                            </p>

                            <p
                                className={`text-[9px] uppercase tracking-widest transition-colors duration-300 ${textMuted}`}
                            >
                                Sport & Travel
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`inline-flex h-8 items-center rounded-lg px-3.5 text-sm font-medium transition-colors duration-200 ${textColor} ${textHover}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Layanan trigger */}
                        <button
                            onClick={() => setMegaOpen((o) => !o)}
                            className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3.5 text-sm font-medium transition-colors duration-200 ${megaOpen
                                ? "bg-accent text-foreground"
                                : `${textColor} ${textHover}`
                                }`}
                        >
                            Layanan
                            <ChevronDown
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                    </nav>

                    {/* CTA + mobile trigger */}
                    <div className="flex items-center gap-2">
                        <Button
                            size="lg"
                            className={`hidden md:inline-flex ${scrolled
                                ? ""
                                : "border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white"
                                }`}
                            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
                            variant={"default"}
                        >
                            Hubungi Kami
                        </Button>

                        {/* Mobile hamburger */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Buka menu navigasi"
                                        className={`h-8 w-8 transition-colors duration-300 ${scrolled
                                            ? "text-foreground hover:bg-accent"
                                            : "text-white hover:bg-white/15"
                                            }`}
                                    >
                                        <Menu className="h-4 w-4" />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="right" className="w-75 sm:w-90 flex flex-col">
                                    <SheetHeader className="text-left pb-2">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white shrink-0"
                                                style={{ backgroundColor: "var(--fto-red)" }}
                                            >
                                                FTO
                                            </div>
                                            <div className="leading-tight">
                                                <SheetTitle className="text-sm font-semibold">From The Origin</SheetTitle>
                                                <SheetDescription className="text-[10px] uppercase tracking-widest">
                                                    Sport & Travel
                                                </SheetDescription>
                                            </div>
                                        </div>
                                    </SheetHeader>

                                    <Separator />

                                    <ScrollArea className="flex-1 py-4">
                                        <nav className="space-y-1 pr-2">
                                            {navLinks.map((link) => (
                                                <Button key={link.label} asChild variant="ghost" className="w-full justify-start font-medium">
                                                    <Link href={link.href}>{link.label}</Link>
                                                </Button>
                                            ))}

                                            <div className="pt-3">
                                                <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                                    Layanan
                                                </p>
                                                <div className="space-y-0.5">
                                                    {services.map((s) => {
                                                        const Icon = s.icon;
                                                        return (
                                                            <Button
                                                                key={s.category}
                                                                asChild
                                                                variant="ghost"
                                                                className="h-auto w-full justify-start py-2.5 px-3"
                                                            >
                                                                <Link href="#services" className="flex items-center gap-3">
                                                                    <div
                                                                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white"
                                                                        style={{ backgroundColor: "var(--fto-red)" }}
                                                                    >
                                                                        <Icon className="h-4 w-4" />
                                                                    </div>
                                                                    <span className="flex min-w-0 flex-col items-start text-left">
                                                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                                                            {s.category}
                                                                        </span>
                                                                        <span className="text-sm font-medium leading-snug">{s.title}</span>
                                                                        <span className="mt-1 flex flex-wrap gap-1">
                                                                            {s.tags.slice(0, 3).map((tag) => (
                                                                                <span
                                                                                    key={tag}
                                                                                    className="rounded-full border border-border/50 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground"
                                                                                >
                                                                                    {tag}
                                                                                </span>
                                                                            ))}
                                                                        </span>
                                                                    </span>
                                                                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                                                                </Link>
                                                            </Button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </nav>
                                    </ScrollArea>

                                    <div className="p-4 border-t border-border">
                                        <Button
                                            asChild
                                            size={"lg"}
                                            className="w-full font-semibold"
                                            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
                                        >
                                            <Link href="#contact">Hubungi Kami</Link>
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mega menu panel ── */}
            {megaOpen && (
                <div className="mx-auto mt-2 max-w-7xl">
                    <div className="rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl shadow-black/10 overflow-hidden">
                        <div className="grid grid-cols-[280px_1fr] divide-x divide-border/60">

                            {/* Kolom kiri — Featured / brand panel */}
                            <div className="flex flex-col justify-between gap-6 p-6"
                                style={{ backgroundColor: "var(--fto-red)" }}
                            >
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                                        Layanan Kami
                                    </p>
                                    <h2 className="mt-2 text-xl font-bold leading-snug text-white">
                                        Semua Perjalanan,<br />Satu Tangan
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                                        FTO merancang setiap perjalanan dari nol — sport, leisure, hingga korporasi.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-white/70">
                                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                                        Melayani seluruh Indonesia & internasional
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-white/70">
                                        <Phone className="h-3.5 w-3.5 shrink-0" />
                                        Konsultasi gratis tanpa komitmen
                                    </div>
                                    <Button
                                        asChild
                                        size="sm"
                                        className="mt-3 w-full bg-white font-semibold hover:bg-white/90"
                                        style={{ color: "var(--fto-red)" }}
                                    >
                                        <Link href="#contact">
                                            Mulai Konsultasi
                                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Kolom kanan — 2×2 service grid */}
                            <div className="grid grid-cols-2 gap-px bg-border/40">
                                {services.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <Link
                                            key={s.category}
                                            href="#services"
                                            onClick={() => setMegaOpen(false)}
                                            className="group flex flex-col gap-3 bg-background p-5 transition-colors hover:bg-accent/50"
                                        >
                                            {/* Icon + category */}
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-200 group-hover:scale-105"
                                                    style={{ backgroundColor: "var(--fto-red)" }}
                                                >
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                                                        {s.category}
                                                    </p>
                                                    <p className="text-sm font-semibold leading-snug text-foreground">
                                                        {s.title}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                                {s.description}
                                            </p>

                                            {/* Tags + CTA */}
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex flex-wrap gap-1">
                                                    {s.tags.slice(0, 2).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full border border-border/60 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span
                                                    className="flex items-center gap-1 text-xs font-semibold transition-colors group-hover:underline"
                                                    style={{ color: "var(--fto-red)" }}
                                                >
                                                    {s.cta}
                                                    <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}