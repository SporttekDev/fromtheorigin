import { getWaLink } from "@/lib/data";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-secondary-foreground py-24"
        >
            {/* Backlayer logo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 -top-1/2 h-300 w-300 -translate-x-1/2">
                    <Image
                        src="/logo-fto.svg"
                        alt="Logo From The Origin"
                        aria-hidden="true"
                        fill
                        className="object-contain opacity-[0.2] blur-[0.5px]"
                    />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_55%)]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10" />
            </div>

            <div className="relative mx-auto max-w-4xl px-8 text-center">
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
                        <Link
                            href={getWaLink("Halo, saya ingin konsultasi layanan FTO.")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Konsultasi Gratis
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}