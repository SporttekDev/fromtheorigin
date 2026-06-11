import { Trophy, Plane, Building2, Crown, ShoppingBag, BookMarked } from "lucide-react";

export const testimonials = [
    {
        name: "Arief Wibowo",
        role: "CEO, PT Maju Bersama",
        initials: "AW",
        content:
            "FTO mengubah cara kami melakukan incentive trip tahunan. Semua detail tertangani dengan sempurna, tim kami pulang dengan semangat baru.",
    },
    {
        name: "Ratna Sari",
        role: "Tennis Community — Jakarta",
        initials: "RS",
        content:
            "Trip ke Melbourne untuk Australian Open adalah pengalaman terbaik komunitas kami. FTO tahu persis apa yang dibutuhkan para sports enthusiast.",
    },
    {
        name: "Budi Hartono",
        role: "Individual Traveler",
        initials: "BH",
        content:
            "Honeymoon kami di Eropa berjalan tanpa satu pun hambatan. Setiap hotel, restoran, dan aktivitas sudah perfectly curated.",
    },
];

export const faqs = [
    {
        q: "Berapa lama waktu yang dibutuhkan untuk merencanakan perjalanan bersama FTO?",
        a: "Untuk perjalanan standar, kami membutuhkan minimal 2–3 minggu untuk persiapan optimal. Perjalanan dengan kebutuhan khusus seperti visa atau event internasional disarankan direncanakan 1–2 bulan sebelumnya.",
    },
    {
        q: "Apakah FTO melayani perjalanan individu atau hanya grup?",
        a: "FTO melayani semua skala — dari perjalanan solo dan pasangan, keluarga, hingga grup korporasi ratusan orang. Setiap paket dirancang personal sesuai kebutuhan.",
    },
    {
        q: "Destinasi apa saja yang bisa ditangani FTO?",
        a: "Tidak ada batasan destinasi. Kami melayani perjalanan domestik di seluruh Indonesia maupun internasional ke mana pun Anda ingin pergi — termasuk event olahraga internasional.",
    },
    {
        q: "Apa yang membedakan FTO dari agen perjalanan biasa?",
        a: "FTO bukan sekadar agen tiket. Kami adalah experience manager — kami mengelola keseluruhan perjalanan dari awal hingga akhir, dengan spesialisasi di sport tourism yang tidak dimiliki agen travel konvensional.",
    },
];

// ─── Mosaic cards data ────────────────────────────────────────────────────────

export const mosaicCards = [
    {
        id: "sport",
        src: "/images/hero-sport-tourism.jpg",
        alt: "Tennis sport tourism",
        label: "Sport Tourism",
    },
    {
        id: "corporate",
        src: "/images/hero-coorporate-travel.jpg",
        alt: "Corporate team travel",
        label: "Corporate Travel",
    },
    {
        id: "flight",
        src: "/images/hero-travel-booking.jpg",
        alt: "Flight travel booking",
        label: "Travel Booking",
    },
    {
        id: "community",
        src: "/images/hero-community-tour.jpg",
        alt: "Community group tour",
        label: "Community Tours",
    },
    {
        id: "tailor",
        src: "/images/hero-tailor-made.jpg",
        alt: "Tailor-made luxury travel",
        label: "Tailor-Made Travel",
    },
    {
        id: "concierge",
        src: "/images/hero-coorporate-travel.jpg",
        alt: "Luxury resort concierge",
        label: "Concierge & Stay",
    },
];


export const services = [
    {
        icon: Trophy,
        category: "Sport Tourism",
        title: "Sport Tourism Programs",
        description:
            "Program perjalanan yang dirancang khusus untuk aktivitas olahraga, turnamen, training camp, sport events, wellness retreats, dan pengalaman olahraga lainnya.",
        tags: ["Tennis", "Golf", "Running", "Training Camp"],
        cta: "Explore Sport Trips",
        subServices: [
            "Tournament trips",
            "Training camps",
            "Tennis trips",
            "Golf trips",
            "Running events",
            "Wellness & active lifestyle journeys",
        ],
    },
    {
        icon: Plane,
        category: "Tailor-Made Travel",
        title: "Tailor-Made Travel Planning",
        description:
            "Perencanaan perjalanan yang sepenuhnya disesuaikan dengan kebutuhan dan preferensi klien dari nol, tanpa template.",
        tags: ["Family", "Honeymoon", "Luxury", "Group"],
        cta: "Plan Your Journey",
        subServices: [
            "Family trips",
            "Leisure travel",
            "Luxury travel",
            "Group travel",
            "Honeymoon trips",
            "Special interest journeys",
        ],
    },
    {
        icon: Building2,
        category: "Corporate & Community",
        title: "Corporate & Community Travel",
        description:
            "Program perjalanan terorganisir untuk perusahaan, organisasi, sekolah, komunitas, maupun kelompok olahraga.",
        tags: ["Incentive Trip", "Gathering", "Community Tour"],
        cta: "Talk to Our Team",
        subServices: [
            "Company outings",
            "Incentive trips",
            "Gathering events",
            "Community tours",
            "Business travel support",
        ],
    },
    {
        icon: BookMarked,
        category: "Travel Booking",
        title: "Travel Booking & Accommodation Services",
        description:
            "Layanan reservasi dan pengelolaan kebutuhan perjalanan secara menyeluruh dari transportasi, akomodasi, hingga dokumen perjalanan.",
        tags: ["Flight", "Hotel", "Visa", "Insurance"],
        cta: "Book Now",
        subServices: [
            // Transportation
            "Flight booking",
            "Train booking",
            "Bus booking",
            "Shuttle services",
            "Airport transfers",
            // Accommodation
            "Hotel booking",
            "Resort booking",
            "Villa booking",
            "Extended stay accommodation",
            // Travel Support
            "Travel documents",
            "Visa assistance",
            "Travel insurance",
            "Itinerary management",
        ],
    },
    {
        icon: Crown,
        category: "Private Journeys",
        title: "Exclusive Private Journeys",
        description:
            "Perjalanan eksklusif yang dirancang secara privat untuk individu, keluarga, maupun kelompok tertentu yang menginginkan pengalaman premium dan personal.",
        tags: ["Private", "Premium", "Exclusive"],
        cta: "Request Private Trip",
        subServices: [],
    },
    {
        icon: ShoppingBag,
        category: "Concierge & JasTip",
        title: "Personal Sourcing & Concierge Services",
        description:
            "Layanan pencarian, pembelian, dan pengiriman barang dari dalam maupun luar negeri yang dilakukan secara aman dan terpercaya.",
        tags: ["JasTip", "Personal Sourcing", "Concierge"],
        cta: "Get in Touch",
        subServices: [],
    },
];

const WA_NUMBER = "628211389162";

export function getWaLink(message: string) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}