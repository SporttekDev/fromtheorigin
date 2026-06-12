"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
    IconBrandTiktok,
    IconBrandInstagram,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface FooterLogo {
    url: string;
    src: string;
    alt: string;
    title: string;
}

interface FooterContact {
    address?: string;
    phone?: string;
    email?: string;
}

interface FooterSocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

interface FooterProps {
    logo?: FooterLogo;
    logoText?: string;
    contact?: FooterContact;
    sections?: FooterSection[];
    copyright?: string;
    watermarkText?: string;
    className?: string;
}

type Props = Partial<FooterProps>;

const defaultProps: FooterProps = {
    logo: {
        url: "#hero",
        src: "/images/logo-fto.png",
        alt: "FTO logo",
        title: "From The Origin",
    },
    logoText: "FROM THE ORIGIN",
    contact: {
        address: "PT. Sport Teknologi Indonesia, Jl. Raya Perjuangan, RT.002/RW.002, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17124",
        phone: "+62 821-1389-162",
        email: "rekreasiolahragaindonesia@gmail.com",
    },
    sections: [
        {
            title: "Navigasi",
            links: [
                { name: "Beranda", href: "#hero" },
                { name: "Tentang FTO", href: "#about" },
                { name: "Layanan", href: "#services" },
                { name: "Destinasi", href: "#featured" },
                { name: "FAQ", href: "#faq" },
                { name: "Kontak", href: "#contact" },
            ],
        },
        {
            title: "Layanan Utama",
            links: [
                { name: "Sport Tourism", href: "#services" },
                { name: "Leisure Trip", href: "#services" },
                { name: "Corporate Travel", href: "#services" },
                { name: "Travel Accommodations", href: "#services" },
                { name: "Transport Services", href: "#services" },
            ],
        },
        {
            title: "Pengalaman",
            links: [
                { name: "Sport Events", href: "#featured" },
                { name: "International Trips", href: "#featured" },
                { name: "Group Tours", href: "#featured" },
                { name: "Custom Journey", href: "#featured" },
            ],
        },
    ],
    copyright: "© 2026 From The Origin. All rights reserved.",
    watermarkText: "FROM THE ORIGIN",
};

export default function Footer(props: Props) {
    const { logo, logoText, contact, sections, copyright, watermarkText, className } = {
        ...defaultProps,
        ...props,
    };

    const visibleSections = sections ?? [];

    const socialLinks: FooterSocialLink[] = [
        {
            icon: <IconBrandInstagram className="size-4" stroke={1.8} />,
            href: "https://www.instagram.com/from.theorigin/",
            label: "Instagram",
        },
        {
            icon: <IconBrandTiktok className="size-4" stroke={1.8} />,
            href: "https://www.tiktok.com/@from.the.origin",
            label: "Tiktok",
        },
    ];

    return (
        <footer
            className={cn("relative isolate overflow-hidden bg-background", className)}
        >
            <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <div className="mb-3 flex items-center gap-2.5">
                            <span
                                className="block h-0.5 w-7 shrink-0"
                                style={{ backgroundColor: "var(--fto-red)" }}
                            />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                                Footer
                            </span>
                        </div>

                        <h2
                            className="text-foreground"
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 700,
                                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                                lineHeight: 1,
                                textTransform: "uppercase",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Mulai Perjalanan
                            <br />
                            <span style={{ color: "var(--fto-red)" }}>Bersama FTO</span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-right">
                        Dari sport tourism, leisure trip, hingga kebutuhan perjalanan
                        korporasi, FTO merancang pengalaman yang fleksibel, personal, dan
                        terkurasi.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <Link href={logo?.url ?? "#hero"} className="flex w-fit items-center gap-2.5">
                            {logo?.src && (
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={120}
                                    className="size-20 object-contain"
                                />
                            )}

                            {logoText && (
                                <span
                                    className="text-xl font-semibold tracking-tight text-foreground"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {logoText}
                                </span>
                            )}
                        </Link>

                        {contact && (
                            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                                {contact.address && (
                                    <div className="flex items-start gap-2">
                                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                        <span className="leading-relaxed">{contact.address}</span>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-x-5 gap-y-2">
                                    {contact.phone && (
                                        <a
                                            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                                            className="flex items-center gap-2 transition-colors hover:text-foreground"
                                        >
                                            <Phone className="size-3.5 shrink-0 text-primary" />
                                            <span>{contact.phone}</span>
                                        </a>
                                    )}

                                    {contact.email && (
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="flex items-center gap-2 transition-colors hover:text-foreground"
                                        >
                                            <Mail className="size-3.5 shrink-0 text-primary" />
                                            <span>{contact.email}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-3 pt-1">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
                        {visibleSections.map((section, sectionIdx) => (
                            <div key={`${section.title}-${sectionIdx}`}>
                                <h3 className="mb-4 text-sm font-semibold tracking-tight text-foreground">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={`${link.name}-${linkIdx}`}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">{copyright}</p>
                </div>
            </div>

            {watermarkText && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden"
                >
                    <p
                        className="
        translate-y-1/4
        text-center
        font-heading
        font-black
        uppercase
        leading-none
        tracking-[-0.04em]
        text-foreground/5
      "
                    >
                        <span className="block lg:hidden text-[clamp(5rem,30vw,8rem)]">
                            FTO
                        </span>

                        <span className="hidden lg:block text-[clamp(5rem,10.5vw,9rem)]">
                            FROM THE ORIGIN
                        </span>
                    </p>
                </div>
            )}
        </footer>
    );
}