import { faqs } from "@/lib/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
    return (
        <section id="faq" className="relative py-20 md:py-28">
            <div className=" absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[48px_48px] -z-10" />
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mb-3 flex items-center justify-center gap-2.5">
                        <div
                            className="mb-3 h-1 w-8 rounded-full"
                            style={{ backgroundColor: "var(--fto-red)" }}
                        />
                    </div>

                    <h2
                        className="leading-tight text-foreground"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                            textTransform: "uppercase",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        FAQ
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        Kumpulan pertanyaan yang paling sering diajukan seputar layanan dan
                        pengalaman perjalanan FTO.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border-border/70"
                            >
                                <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline md:text-base">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}