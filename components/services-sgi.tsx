"use client";

import { useState, useRef, useEffect } from "react";
import {
    Trophy, Plane, Building2, BookMarked,
    Crown, ShoppingBag, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

const CX = 280, CY = 280, R = 200;

const angles = Array.from({ length: 6 }, (_, i) =>
    -Math.PI / 2 + i * ((2 * Math.PI) / 6)
);

const positions = angles.map((a) => ({
    x: CX + R * Math.cos(a),
    y: CY + R * Math.sin(a),
}));

export function ServicesSGI() {
    const [active, setActive] = useState<number | null>(null);
    const detailRef = useRef<HTMLDivElement>(null);

    const handleSelect = (i: number) => {
        setActive((prev) => (prev === i ? null : i));
    };

    // Scroll detail panel into view on mobile saat node dipilih
    useEffect(() => {
        if (active !== null && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [active]);

    const selected = active !== null ? services[active] : null;

    return (
        <section id="services" className="border-t border-border bg-background py-24">
            <div className="mx-auto max-w-6xl px-8">

                {/* ── Header ── */}
                <div className="mb-14">
                    <p
                        className="mb-3 text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--fto-red)" }}
                    >
                        Apa yang kami lakukan
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
                        Layanan FTO
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-muted-foreground">
                        Satu ekosistem layanan perjalanan — dari olahraga, leisure,
                        korporasi, hingga kebutuhan personal paling spesifik sekalipun.
                    </p>
                </div>

                {/* ── Molecule layout (desktop only) ── */}
                <div className="hidden lg:flex flex-col items-center">
                    <div className="relative" style={{ width: 560, height: 560 }}>

                        {/* SVG connector lines */}
                        <svg
                            className="absolute inset-0 pointer-events-none overflow-visible"
                            viewBox="0 0 560 560"
                            aria-hidden="true"
                        >
                            {services.map((_, i) => (
                                <line
                                    key={i}
                                    x1={CX} y1={CY}
                                    x2={positions[i].x} y2={positions[i].y}
                                    strokeWidth={active === i ? 1.5 : 1}
                                    className="transition-all duration-200"
                                    style={{
                                        stroke: active === i
                                            ? "var(--fto-red)"
                                            : "hsl(var(--border))",
                                    }}
                                />
                            ))}
                        </svg>

                        {/* Center node — logo */}
                        <button
                            onClick={() => setActive(null)}
                            className="absolute z-10 flex items-center justify-center rounded-full border border-border bg-background transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2"
                            style={{
                                width: 110, height: 110,
                                top: "50%", left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                            aria-label="Reset pilihan layanan"
                        >
                            {/* FTO mark — ganti dengan <Image> jika ada file logo */}
                            <span
                                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                                style={{ backgroundColor: "var(--fto-red)" }}
                            >
                                FTO
                            </span>
                        </button>

                        {/* Service nodes */}
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            const isActive = active === i;
                            return (
                                <button
                                    key={s.category}
                                    onClick={() => handleSelect(i)}
                                    className="absolute z-10 flex flex-col items-center justify-center gap-1 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{
                                        width: 90, height: 90,
                                        top: positions[i].y,
                                        left: positions[i].x,
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: isActive ? "var(--fto-red)" : "hsl(var(--background))",
                                        borderColor: isActive ? "var(--fto-red)" : "hsl(var(--border))",
                                        scale: isActive ? "1.08" : "1",
                                    }}
                                    aria-pressed={isActive}
                                    aria-label={s.category}
                                >
                                    <Icon
                                        className="h-5 w-5 transition-colors duration-200"
                                        style={{ color: isActive ? "#fff" : "hsl(var(--muted-foreground))" }}
                                    />
                                    <span
                                        className="text-center text-[10px] font-medium leading-tight transition-colors duration-200 px-1"
                                        style={{ color: isActive ? "#fff" : "hsl(var(--muted-foreground))" }}
                                    >
                                        {s.category}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail panel — muncul di bawah molekul */}
                    <div
                        ref={detailRef}
                        className="w-full max-w-lg overflow-hidden transition-all duration-350"
                        style={{
                            maxHeight: selected ? 320 : 0,
                            opacity: selected ? 1 : 0,
                        }}
                    >
                        {selected && (
                            <div className="mt-4 rounded-2xl border border-border bg-background p-6">
                                <p
                                    className="mb-1 text-[10px] font-semibold uppercase tracking-widest"
                                    style={{ color: "var(--fto-red)" }}
                                >
                                    {selected.category}
                                </p>
                                <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">
                                    {selected.title}
                                </h3>
                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                    {selected.description}
                                </p>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {selected.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="link"
                                    className="h-auto p-0 text-sm font-medium"
                                    style={{ color: "var(--fto-red)" }}
                                >
                                    {selected.cta}
                                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Grid card fallback (mobile & tablet) ── */}
                <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.category}
                                className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                                        style={{ backgroundColor: "var(--fto-red)" }}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs font-medium">
                                        {s.category}
                                    </Badge>
                                </div>
                                <h3 className="mb-1.5 text-base font-semibold leading-snug text-foreground">
                                    {s.title}
                                </h3>
                                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                                    {s.description}
                                </p>
                                <div className="mb-4 flex flex-wrap gap-1.5">
                                    {s.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="link"
                                    className="mt-auto h-auto p-0 text-sm font-medium"
                                    style={{ color: "var(--fto-red)" }}
                                >
                                    {s.cta}
                                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}