export type ProductCategory =
  | "Romantic Gifts"
  | "Matching Accessories"
  | "Couple Home"
  | "Date Night Kits";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceUSD: number;
  category: ProductCategory;
  images: string[];
  tags: string[];
  featured?: boolean;
  createdAt: string;
};

export const products: Product[] = [
  {
    id: "ob-rose-01",
    slug: "aurora-rosebox",
    name: "Aurora Rosebox",
    description: "Preserved roses with a hidden message drawer and satin finish.",
    priceUSD: 96,
    category: "Romantic Gifts",
    images: [
      "https://picsum.photos/seed/obelva-rosebox/900/1100",
      "https://picsum.photos/seed/obelva-rosebox-2/900/1100",
      "https://picsum.photos/seed/obelva-rosebox-3/900/1100"
    ],
    tags: ["luxury", "gift", "roses"],
    featured: true,
    createdAt: "2024-08-05"
  },
  {
    id: "ob-glow-02",
    slug: "eclipse-bracelets",
    name: "Eclipse Bond Bracelets",
    description: "Magnetic onyx and gold bracelets that align when together.",
    priceUSD: 58,
    category: "Matching Accessories",
    images: [
      "https://picsum.photos/seed/obelva-bracelets/900/1100",
      "https://picsum.photos/seed/obelva-bracelets-2/900/1100"
    ],
    tags: ["matching", "onyx"],
    featured: true,
    createdAt: "2024-08-12"
  },
  {
    id: "ob-home-03",
    slug: "moonlit-scent-duo",
    name: "Moonlit Scent Duo",
    description: "Two-piece soy candle set with notes of fig, amber, and tea rose.",
    priceUSD: 42,
    category: "Couple Home",
    images: [
      "https://picsum.photos/seed/obelva-candles/900/1100",
      "https://picsum.photos/seed/obelva-candles-2/900/1100"
    ],
    tags: ["home", "scent"],
    featured: true,
    createdAt: "2024-08-21"
  },
  {
    id: "ob-date-04",
    slug: "starlight-date-kit",
    name: "Starlight Date Kit",
    description: "Curated date-night box with artisan snacks, playlist cards, and prompts.",
    priceUSD: 74,
    category: "Date Night Kits",
    images: [
      "https://picsum.photos/seed/obelva-datekit/900/1100",
      "https://picsum.photos/seed/obelva-datekit-2/900/1100"
    ],
    tags: ["date", "kit"],
    featured: true,
    createdAt: "2024-08-25"
  },
  {
    id: "ob-gift-05",
    slug: "celestial-keepsake-book",
    name: "Celestial Keepsake Book",
    description: "A linen-bound journal for shared milestones and letters.",
    priceUSD: 38,
    category: "Romantic Gifts",
    images: ["https://picsum.photos/seed/obelva-journal/900/1100"],
    tags: ["journal", "memories"],
    createdAt: "2024-09-01"
  },
  {
    id: "ob-accessory-06",
    slug: "silk-nightset",
    name: "Silk Nightset",
    description: "Matching silk eye masks with gold-embroidered initials.",
    priceUSD: 32,
    category: "Matching Accessories",
    images: ["https://picsum.photos/seed/obelva-silk/900/1100"],
    tags: ["silk", "sleep"],
    createdAt: "2024-09-03"
  },
  {
    id: "ob-home-07",
    slug: "horizon-glassware",
    name: "Horizon Glassware Pair",
    description: "Gold-rimmed crystal glasses for shared toasts.",
    priceUSD: 68,
    category: "Couple Home",
    images: ["https://picsum.photos/seed/obelva-glass/900/1100"],
    tags: ["glassware", "gold"],
    createdAt: "2024-09-05"
  },
  {
    id: "ob-date-08",
    slug: "midnight-movie-kit",
    name: "Midnight Movie Kit",
    description: "Cinema-at-home kit with velvet blanket, gourmet cocoa, and film picks.",
    priceUSD: 64,
    category: "Date Night Kits",
    images: ["https://picsum.photos/seed/obelva-movie/900/1100"],
    tags: ["movie", "cozy"],
    createdAt: "2024-09-06"
  },
  {
    id: "ob-gift-09",
    slug: "constellation-locket",
    name: "Constellation Locket",
    description: "Gold-plated locket with engraving for a shared constellation.",
    priceUSD: 88,
    category: "Romantic Gifts",
    images: ["https://picsum.photos/seed/obelva-locket/900/1100"],
    tags: ["jewelry", "engraved"],
    createdAt: "2024-09-08"
  },
  {
    id: "ob-accessory-10",
    slug: "mirage-keychain-duo",
    name: "Mirage Keychain Duo",
    description: "Leather keychains that mirror each other with matte gold hardware.",
    priceUSD: 26,
    category: "Matching Accessories",
    images: ["https://picsum.photos/seed/obelva-keychain/900/1100"],
    tags: ["leather", "gift"],
    createdAt: "2024-09-10"
  },
  {
    id: "ob-home-11",
    slug: "luna-throw",
    name: "Luna Knit Throw",
    description: "Ivory knit throw with a subtle moonphase motif.",
    priceUSD: 72,
    category: "Couple Home",
    images: ["https://picsum.photos/seed/obelva-throw/900/1100"],
    tags: ["throw", "cozy"],
    createdAt: "2024-09-11"
  },
  {
    id: "ob-date-12",
    slug: "sunset-picnic-kit",
    name: "Sunset Picnic Kit",
    description: "Packable picnic kit with linen mats, artisan snacks, and candlelight.",
    priceUSD: 82,
    category: "Date Night Kits",
    images: ["https://picsum.photos/seed/obelva-picnic/900/1100"],
    tags: ["picnic", "outdoor"],
    createdAt: "2024-09-12"
  }
];

export const featuredProducts = products.filter((product) => product.featured);

export const collectionMap = {
  "for-her": {
    name: "For Her",
    description: "Elegant gestures curated for her glow.",
    products: products.filter((product) =>
      ["Romantic Gifts", "Matching Accessories"].includes(product.category)
    )
  },
  "for-him": {
    name: "For Him",
    description: "Refined essentials and thoughtful details he will keep.",
    products: products.filter((product) =>
      ["Matching Accessories", "Date Night Kits"].includes(product.category)
    )
  },
  "date-night": {
    name: "Date Night",
    description: "Curated experiences for unforgettable evenings.",
    products: products.filter((product) => product.category === "Date Night Kits")
  }
};
