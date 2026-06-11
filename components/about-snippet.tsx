import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

export default function AboutSnippet() {
    return (
        <section id="about" className="bg-background">
            <div className="mx-auto container sm:px-6 lg:px-8 py-20 md:py-28">
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

                        {/* <div className="mt-8 flex items-center gap-3">
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
                        </div> */}
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
