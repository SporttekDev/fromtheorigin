"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getWaLink, services } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="relative bg-background py-20">

            <div
                className="
                    pointer-events-none absolute inset-0 opacity-[0.04]
                    bg-[repeating-linear-gradient(-45deg,#0f172a_0,#0f172a_1px,transparent_1px,transparent_28px)]
                    mask-[linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
                "
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,16,46,0.12)_0%,transparent_20%)]" />

            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                    <Card
                        className="self-start overflow-hidden border-0 shadow-none h-fit"
                        style={{ backgroundColor: "var(--fto-red)" }}
                    >
                        <CardHeader className="p-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                                Apa yang kami lakukan
                            </p>

                            <CardTitle
                                className="mt-2 leading-tight text-white"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                    textTransform: "uppercase",
                                }}
                            >
                                Layanan FTO
                            </CardTitle>

                            <CardDescription className="mt-4 text-sm leading-relaxed text-white/75">
                                Satu ekosistem layanan perjalanan dari olahraga, leisure,
                                korporasi, hingga kebutuhan personal paling spesifik sekalipun.
                            </CardDescription>
                        </CardHeader>

                        <CardFooter>
                            <Button
                                asChild
                                variant={"white"}
                            >
                                <Link
                                    href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Konsultasi Gratis
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Grid kanan */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {services.map((s) => {
                            const Icon = s.icon;

                            return (
                                <Card
                                    key={s.category}
                                    className="relative group border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <CardHeader>
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-red-50 group-hover:text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <div className="space-y-1 mt-4">
                                            <CardTitle className="text-sm font-semibold leading-snug">
                                                {s.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm leading-relaxed">
                                                {s.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="mb-16">
                                        <div className="flex flex-wrap gap-1">
                                            {s.tags.slice(0, 3).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="rounded-full px-2.5 py-0.5 text-[10px] font-normal"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="absolute bottom-4">
                                        <Button
                                            asChild
                                            variant="ghost"
                                            className="h-8 px-0 text-sm font-medium text-foreground/80 hover:bg-transparent hover:text-foreground"
                                        >
                                            <Link
                                                href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}
                                                className="inline-flex items-center gap-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tanya Layanan Ini
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}