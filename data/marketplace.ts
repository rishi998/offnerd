import type { Product, ProductCategory } from "./products";
import { resolveLogoKey } from "@/lib/logo-registry";

/** Structured marketplace metadata — merged with catalog `Product` rows. */
export const UNIFIED_SALE_PRICE_INR = 199;

export type ProductBadgeId =
  | "LIMITED_STOCK"
  | "VERIFIED"
  | "BEST_SELLER"
  | "TRENDING"
  | "AI_TOOL"
  | "DEV_TOOL"
  | "DESIGN_TOOL"
  | "PRODUCTIVITY_TOOL";

export type StockLevel = "in_stock" | "low_stock" | "limited";

export type GradientTheme = "ai" | "dev" | "design" | "productivity" | "default";

export type MarketplaceListing = {
  displayTitle: string;
  durationLabel: string;
  planType: string;
  officialPriceDisplay: string;
  salePriceDisplay: string;
  officialPriceINR: number;
  salePriceINR: number;
  badges: ProductBadgeId[];
  features: string[];
  benefits: string[];
  activationType: string;
  warranty: string;
  stockLevel: StockLevel;
  stockLabel: string;
  deliveryBullets: string[];
  theme: GradientTheme;
  credits?: string;
  cloudStorage?: string;
  heroImage?: string;
  tagline: string;
  /** Resolved marketplace logo registry key (from product + overrides) */
  logoKey?: string;
};

export type MarketplaceView = {
  product: Product;
  listing: MarketplaceListing;
  savingsPercent: number;
};

export const BADGE_LABELS: Record<ProductBadgeId, string> = {
  LIMITED_STOCK: "Limited stock",
  VERIFIED: "Verified",
  BEST_SELLER: "Best seller",
  TRENDING: "Trending",
  AI_TOOL: "AI tool",
  DEV_TOOL: "Dev tool",
  DESIGN_TOOL: "Design tool",
  PRODUCTIVITY_TOOL: "Productivity",
};

function hashId(id: string): number {
  return id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
}

export function categoryToTheme(category: ProductCategory): GradientTheme {
  if (category === "AI Tools") return "ai";
  if (category === "Development Tools") return "dev";
  if (category === "Design") return "design";
  if (category === "Marketing" || category === "Communication") return "productivity";
  return "default";
}

function categoryBadges(category: ProductCategory): ProductBadgeId[] {
  if (category === "AI Tools") return ["AI_TOOL"];
  if (category === "Development Tools") return ["DEV_TOOL"];
  if (category === "Design") return ["DESIGN_TOOL"];
  if (category === "Marketing" || category === "Communication") return ["PRODUCTIVITY_TOOL"];
  return [];
}

function withUnifiedSalePrice(listing: MarketplaceListing): MarketplaceListing {
  return {
    ...listing,
    salePriceINR: UNIFIED_SALE_PRICE_INR,
    salePriceDisplay: `₹${UNIFIED_SALE_PRICE_INR.toLocaleString("en-IN")}`,
  };
}

function inferListing(product: Product): MarketplaceListing {
  const h = hashId(product.id);
  const official = 12000 + (h % 24000) * 50;
  const sale = UNIFIED_SALE_PRICE_INR;

  const badges: ProductBadgeId[] = ["VERIFIED", ...categoryBadges(product.category)];
  if (product.popular) badges.push("BEST_SELLER");
  if (h % 4 === 0) badges.push("TRENDING");
  if (h % 5 === 0) badges.push("LIMITED_STOCK");

  const stockLevel: StockLevel = h % 7 === 0 ? "low_stock" : h % 11 === 0 ? "limited" : "in_stock";
  const stockLabel =
    stockLevel === "low_stock" ? "Low stock" : stockLevel === "limited" ? "Limited allocation" : "In stock";

  const theme = categoryToTheme(product.category);

  return {
    displayTitle: `${product.name} — ${product.popular ? "Pro access" : "Standard access"}`,
    durationLabel:
      h % 5 === 0 ? "Lifetime access" : h % 3 === 0 ? "1 year" : h % 3 === 1 ? "6 months" : "1 month",
    planType: `${product.subcategory} · Digital delivery`,
    officialPriceDisplay: `₹${official.toLocaleString("en-IN")}+`,
    salePriceDisplay: `₹${sale.toLocaleString("en-IN")}`,
    officialPriceINR: official,
    salePriceINR: sale,
    badges: [...new Set(badges)],
    features: [
      `Full ${product.subcategory} capabilities`,
      `Cloud-backed updates & patches`,
      `${product.popular ? "Priority" : "Standard"} activation queue`,
      "Secure credential delivery",
    ],
    benefits: ["Developers", "Agencies", "Small teams", "Founders"],
    activationType: "Instant activation via secure invite / redemption",
    warranty: "30-day replacement guarantee on activation issues",
    stockLevel,
    stockLabel,
    deliveryBullets: ["Private fulfillment channel", "Email / dashboard activation where applicable", "No shared passwords on public threads"],
    theme,
    tagline: product.description,
    credits: h % 2 === 0 ? `${100 + (h % 5) * 50} bonus credits / cycle` : undefined,
    cloudStorage: theme === "ai" || theme === "productivity" ? `${250 + (h % 4) * 250} GB pooled storage` : undefined,
    heroImage:
      [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
      ][h % 4],
  };
}

/** Rich copy overrides — keyed by `product.id`. Partial merges onto inferred defaults. */
const LISTING_OVERRIDES: Partial<Record<string, Partial<MarketplaceListing>>> = {
  chatgpt: {
    displayTitle: "ChatGPT Plus — 1 Year Access",
    durationLabel: "12 months",
    planType: "Plus · Consumer workspace",
    officialPriceDisplay: "₹24,000+",
    salePriceDisplay: "₹2,499",
    officialPriceINR: 24000,
    salePriceINR: 2499,
    badges: ["VERIFIED", "AI_TOOL", "BEST_SELLER", "TRENDING"],
    features: [
      "GPT‑4 class models where eligible",
      "Faster peak-time responses",
      "Advanced data analysis & vision workflows",
      "Plugin / tool ecosystem access",
    ],
    benefits: ["Founders", "Students", "Marketing teams", "Developers"],
    activationType: "Redeem on primary email · instant uplift",
    warranty: "14-day eligibility review on failed activation",
    stockLevel: "low_stock",
    stockLabel: "Limited seats",
    cloudStorage: "History & files per OpenAI policy",
    tagline: "The flagship conversational AI workspace for teams that ship weekly.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  grammarly: {
    displayTitle: "Grammarly Premium — Annual",
    durationLabel: "1 year",
    planType: "Premium · Individual",
    officialPriceDisplay: "₹12,999+",
    salePriceDisplay: "₹899",
    officialPriceINR: 12999,
    salePriceINR: 899,
    badges: ["VERIFIED", "AI_TOOL", "BEST_SELLER"],
    features: ["Advanced clarity & tone suggestions", "Plagiarism detection", "Full-sentence rewrites", "Cross-app compatibility"],
    benefits: ["Students", "Content creators", "Marketing teams"],
    tagline: "Professional writing assistance tuned for clarity and speed.",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
  },
  cursor: {
    displayTitle: "Cursor Pro — Annual",
    durationLabel: "12 months",
    planType: "Pro · AI IDE",
    officialPriceDisplay: "₹34,999+",
    salePriceDisplay: "₹5,999",
    officialPriceINR: 34999,
    salePriceINR: 5999,
    badges: ["VERIFIED", "DEV_TOOL", "AI_TOOL", "TRENDING"],
    features: ["Unlimited tab completions (fair use)", "Premium models in-editor", "Deep codebase awareness", "Priority network routing"],
    benefits: ["Developers", "Startups", "Agencies"],
    tagline: "The AI-native editor for shipping production code faster.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  "notion-ai": {
    displayTitle: "Notion Plus / AI bundle — Annual",
    durationLabel: "1 year",
    planType: "Workspace upgrade",
    officialPriceDisplay: "₹18,000+",
    salePriceDisplay: "₹1,899",
    officialPriceINR: 18000,
    salePriceINR: 1899,
    badges: ["VERIFIED", "PRODUCTIVITY_TOOL", "AI_TOOL"],
    features: ["AI writing inside docs", "Unlimited blocks", "Version history", "SAML optional paths"],
    benefits: ["Founders", "Product teams", "Students"],
    tagline: "Docs, projects, and AI assistance in one calm workspace.",
  },
  framer: {
    displayTitle: "Framer Pro — 1 Year Access",
    durationLabel: "12 months",
    planType: "Site publishing · Pro",
    officialPriceDisplay: "₹42,000+",
    salePriceDisplay: "₹4,499",
    officialPriceINR: 42000,
    salePriceINR: 4499,
    badges: ["VERIFIED", "DESIGN_TOOL", "TRENDING"],
    features: ["Unlimited staging projects", "CMS collections", "Analytics hooks", "Custom domains"],
    benefits: ["Designers", "Agencies", "Marketing teams"],
    tagline: "Publish cinematic marketing sites without shipping a separate codebase.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  },
  "gemini-pro": {
    displayTitle: "Gemini Advanced — Annual",
    durationLabel: "12 months",
    planType: "Google AI Pro workspace",
    officialPriceDisplay: "₹28,999+",
    salePriceDisplay: "₹2,999",
    officialPriceINR: 28999,
    salePriceINR: 2999,
    badges: ["VERIFIED", "AI_TOOL", "BEST_SELLER"],
    features: ["Gemini in Gmail & Docs", "2 TB pooled Google storage", "Priority model access", "Multimodal reasoning"],
    benefits: ["Students", "Founders", "Marketing teams"],
    cloudStorage: "2 TB Google One tier path",
    tagline: "Google’s frontier models wired into the apps you already use.",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  "mongodb-atlas": {
    displayTitle: "MongoDB Atlas Credits Pack",
    durationLabel: "12 months runway",
    planType: "Cloud database · prepaid credits",
    officialPriceDisplay: "₹55,000+",
    salePriceDisplay: "₹8,999",
    officialPriceINR: 55000,
    salePriceINR: 8999,
    badges: ["VERIFIED", "DEV_TOOL"],
    features: ["Managed clusters", "Global replication options", "Queryable backups", "Charts & alerts"],
    benefits: ["Developers", "Startups", "Enterprise prototypes"],
    tagline: "Production-grade document storage without ops drag.",
    heroImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
  },
  elevenlabs: {
    displayTitle: "ElevenLabs Creator — Annual",
    durationLabel: "12 months",
    planType: "Voice synthesis · high fidelity",
    officialPriceDisplay: "₹22,000+",
    salePriceDisplay: "₹2,199",
    officialPriceINR: 22000,
    salePriceINR: 2199,
    badges: ["VERIFIED", "AI_TOOL", "TRENDING"],
    features: ["Natural prosody voices", "Projects & dubbing lanes", "API quotas", "Commercial usage tier"],
    benefits: ["Content creators", "Game studios", "Agencies"],
    credits: "≈300k characters / month equivalent",
    tagline: "Studio-grade voices for launches, ads, and interactive products.",
    heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
  },
  "linear-app": {
    displayTitle: "Linear Business — Annual",
    durationLabel: "12 months",
    planType: "Issue tracking · Business",
    officialPriceDisplay: "₹32,000+",
    salePriceDisplay: "₹4,299",
    officialPriceINR: 32000,
    salePriceINR: 4299,
    badges: ["VERIFIED", "DEV_TOOL", "BEST_SELLER"],
    features: ["Cycles & roadmap views", "Customer requests portal", "Insights dashboards", "Private teams"],
    benefits: ["Product teams", "Engineering leads", "Agencies"],
    tagline: "Issue tracking that feels fast — keyboard-first and beautifully minimal.",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  supabase: {
    displayTitle: "Supabase Pro — Annual",
    durationLabel: "12 months",
    planType: "Backend platform",
    officialPriceDisplay: "₹48,000+",
    salePriceDisplay: "₹6,499",
    officialPriceINR: 48000,
    salePriceINR: 6499,
    badges: ["VERIFIED", "DEV_TOOL", "TRENDING"],
    features: ["Managed Postgres", "Auth & RLS templates", "Realtime channels", "Edge functions quotas"],
    benefits: ["Developers", "Startups", "Agencies"],
    tagline: "Open-source Firebase alternative with SQL superpowers.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  webflow: {
    displayTitle: "Webflow Workspace — Annual",
    durationLabel: "12 months",
    planType: "Site design & CMS",
    officialPriceDisplay: "₹38,000+",
    salePriceDisplay: "₹5,499",
    officialPriceINR: 38000,
    salePriceINR: 5499,
    badges: ["VERIFIED", "DESIGN_TOOL"],
    features: ["CMS collections", "Interactions & animations", "Hosting & SSL", "Logic & memberships paths"],
    benefits: ["Designers", "Agencies", "Marketing teams"],
    tagline: "Visual development with production-ready markup.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  firecrawl: {
    displayTitle: "Firecrawl Pro — Annual",
    durationLabel: "12 months",
    planType: "Web data API",
    officialPriceDisplay: "₹19,999+",
    salePriceDisplay: "₹2,799",
    officialPriceINR: 19999,
    salePriceINR: 2799,
    badges: ["VERIFIED", "DEV_TOOL", "AI_TOOL", "TRENDING"],
    features: ["Structured crawl pipelines", "Markdown-ready output", "Stealth-friendly routing", "Batch jobs"],
    benefits: ["AI builders", "Researchers", "Growth engineers"],
    credits: "Expanded crawl credits pool",
    tagline: "Turn messy websites into LLM-ready datasets.",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  },
  vercel: {
    displayTitle: "Vercel Pro — Annual",
    durationLabel: "12 months",
    planType: "Edge hosting & previews",
    officialPriceDisplay: "₹36,000+",
    salePriceDisplay: "₹5,299",
    officialPriceINR: 36000,
    salePriceINR: 5299,
    badges: ["VERIFIED", "DEV_TOOL"],
    features: ["Team seats", "Analytics basics", "Advanced protections add-ons path", "Preview deployments"],
    benefits: ["Frontend teams", "Startups"],
    tagline: "Ship Next.js and modern frontends with instant previews.",
    heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop",
  },
  canva: {
    displayTitle: "Canva Pro — Annual",
    durationLabel: "12 months",
    planType: "Creative suite",
    officialPriceDisplay: "₹9,999+",
    salePriceDisplay: "₹799",
    officialPriceINR: 9999,
    salePriceINR: 799,
    badges: ["VERIFIED", "DESIGN_TOOL", "BEST_SELLER"],
    features: ["Brand kits", "Magic Studio AI tools", "Background remover", "Premium stock unlock"],
    benefits: ["Creators", "Marketing teams", "Students"],
    tagline: "Social and campaign assets without the bottleneck.",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
  },
  figma: {
    displayTitle: "Figma Professional — Annual",
    durationLabel: "12 months",
    planType: "Design & FigJam bundle path",
    officialPriceDisplay: "₹26,000+",
    salePriceDisplay: "₹3,499",
    officialPriceINR: 26000,
    salePriceINR: 3499,
    badges: ["VERIFIED", "DESIGN_TOOL", "TRENDING"],
    features: ["Unlimited personal files", "Dev Mode handoff", "Libraries & variables", "Plugins ecosystem"],
    benefits: ["Designers", "Product teams", "Agencies"],
    tagline: "Multiplayer design with specs developers actually use.",
    heroImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
  },
};

function mergeListing(product: Product): MarketplaceListing {
  const inferred = inferListing(product);
  const override = LISTING_OVERRIDES[product.id];
  if (!override) return inferred;
  return { ...inferred, ...override, badges: override.badges ?? inferred.badges, features: override.features ?? inferred.features, benefits: override.benefits ?? inferred.benefits, deliveryBullets: override.deliveryBullets ?? inferred.deliveryBullets };
}

export function getMarketplaceView(product: Product): MarketplaceView {
  const listing = withUnifiedSalePrice(mergeListing(product));
  const pct =
    listing.officialPriceINR > 0
      ? Math.min(99, Math.max(5, Math.round((1 - listing.salePriceINR / listing.officialPriceINR) * 100)))
      : 0;
  return {
    product,
    listing: { ...listing, logoKey: resolveLogoKey(product) },
    savingsPercent: pct,
  };
}

function compactAlphanumeric(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function marketplaceSearchBlob(product: Product): string {
  const { listing } = getMarketplaceView(product);
  return [
    product.id,
    product.name,
    product.description,
    product.category,
    product.subcategory,
    product.logo,
    listing.logoKey ?? "",
    listing.displayTitle,
    listing.planType,
    listing.durationLabel,
    listing.tagline,
    ...listing.features,
    ...listing.benefits,
    ...listing.badges.map((b) => BADGE_LABELS[b]),
    listing.activationType,
  ].join(" ");
}

/** Marketplace-wide search (catalog + structured listing fields). */
export function matchesMarketplaceSearch(product: Product, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return true;

  const haystack = compactAlphanumeric(marketplaceSearchBlob(product));

  const tokens = query
    .split(/\s+/)
    .map((t) => compactAlphanumeric(t))
    .filter(Boolean);

  if (tokens.length === 0) return true;

  return tokens.every((token) => haystack.includes(token));
}

export type QuickFilter =
  | null
  | "trending"
  | "best_sellers"
  | "ai"
  | "dev"
  | "design"
  | "lifetime"
  | "limited_stock";

export function matchesQuickFilter(product: Product, filter: QuickFilter): boolean {
  if (!filter) return true;
  const { listing } = getMarketplaceView(product);
  switch (filter) {
    case "trending":
      return listing.badges.includes("TRENDING");
    case "best_sellers":
      return listing.badges.includes("BEST_SELLER") || product.popular;
    case "ai":
      return product.category === "AI Tools" || listing.badges.includes("AI_TOOL");
    case "dev":
      return product.category === "Development Tools" || listing.badges.includes("DEV_TOOL");
    case "design":
      return product.category === "Design" || listing.badges.includes("DESIGN_TOOL");
    case "lifetime":
      return listing.durationLabel.toLowerCase().includes("lifetime") || listing.planType.toLowerCase().includes("lifetime");
    case "limited_stock":
      return listing.badges.includes("LIMITED_STOCK") || listing.stockLevel !== "in_stock";
    default:
      return true;
  }
}
