import { mosaicCards } from "@/lib/data";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative isolate w-full overflow-hidden h-dvh lg:h-[98dvh] min-h-155 max-h-240">
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
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <p className="mb-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    Sport & Travel Experience Management
                </p>

                <h1
                    className="font-heading text-[clamp(2.8rem,8vw,4.5rem)] 2xl:text-[6rem] font-bold uppercase leading-none tracking-[-0.01em] text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.5)]">
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