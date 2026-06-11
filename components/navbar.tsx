"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getWaLink } from "@/lib/data";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Tentang FTO", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Destinasi", href: "#featured" },
    { label: "FAQ", href: "#faq" },
    // { label: "Hubungi Kami", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const textColor = "text-foreground/75";
    const textHover = "hover:text-foreground";
    const textStrong = "text-foreground";
    const textMuted = "text-muted-foreground";

    return (
        <div
            data-navbar
            className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8"
        >
            <header
                className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${scrolled
                    ? "border border-border/60 bg-background/90 shadow-lg shadow-black/5 backdrop-blur-md"
                    : "bg-transparent backdrop-blur-md"
                    }`}
            >
                <div className="flex h-14 items-center justify-between px-4 sm:px-5">
                    <Link href="#hero" className="flex shrink-0 items-center gap-2.5">
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

                    <nav className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`inline-flex h-8 items-center rounded-lg px-3.5 text-sm font-medium transition-colors duration-200 ${textColor} ${textHover}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button
                            asChild
                            size="lg"
                            className={`hidden md:inline-flex ${scrolled
                                ? ""
                                : "border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white"
                                }`}
                            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
                            variant="default"
                        >
                            <Link href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}>Hubungi Kami</Link>
                        </Button>

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

                                <SheetContent side="right" className="flex w-75 flex-col sm:w-90">
                                    <SheetHeader className="pb-2 text-left">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                                                style={{ backgroundColor: "var(--fto-red)" }}
                                            >
                                                FTO
                                            </div>
                                            <div className="leading-tight">
                                                <SheetTitle className="text-sm font-semibold">
                                                    From The Origin
                                                </SheetTitle>
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
                                                <Button
                                                    key={link.label}
                                                    asChild
                                                    variant="ghost"
                                                    className="w-full justify-start font-medium"
                                                >
                                                    <Link href={link.href}>{link.label}</Link>
                                                </Button>
                                            ))}
                                        </nav>
                                    </ScrollArea>

                                    <div className="border-t border-border p-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="w-full font-semibold"
                                            style={{ backgroundColor: "var(--fto-red)", color: "white" }}
                                        >
                                            <Link href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}>Hubungi Kami</Link>
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}