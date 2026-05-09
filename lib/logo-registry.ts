import type { Product } from "@/data/products";

export type LogoBucket = "ai" | "dev" | "design" | "productivity" | "finance";

export type LogoRegistryEntry = {
  logo: string;
  /** Optional path tuned for dark / tinted surfaces */
  logoDark?: string;
  glow: string;
  accent: string;
  bucket: LogoBucket;
};

export const logoRegistry: Record<string, LogoRegistryEntry> = {
  notion: {
    logo: "/logos/productivity/notion.svg",
    glow: "rgba(99,102,241,0.2)",
    accent: "#6366F1",
    bucket: "productivity",
  },
  grammarly: {
    logo: "/logos/ai/grammarly.svg",
    glow: "rgba(59,130,246,0.2)",
    accent: "#3B82F6",
    bucket: "ai",
  },
  chatgpt: {
    logo: "/logos/ai/openai.svg",
    glow: "rgba(16,185,129,0.22)",
    accent: "#10B981",
    bucket: "ai",
  },
  dalle: {
    logo: "/logos/ai/openai.svg",
    glow: "rgba(16,185,129,0.18)",
    accent: "#10B981",
    bucket: "ai",
  },
  perplexity: {
    logo: "/logos/ai/perplexity.svg",
    glow: "rgba(99,102,241,0.22)",
    accent: "#6366F1",
    bucket: "ai",
  },
  elicit: {
    logo: "/logos/ai/elicit.svg",
    glow: "rgba(37,99,235,0.2)",
    accent: "#2563EB",
    bucket: "ai",
  },
  midjourney: {
    logo: "/logos/ai/midjourney.svg",
    glow: "rgba(79,70,229,0.22)",
    accent: "#4F46E5",
    bucket: "ai",
  },
  runway: {
    logo: "/logos/ai/runway.svg",
    glow: "rgba(16,185,129,0.22)",
    accent: "#00D390",
    bucket: "ai",
  },
  pika: {
    logo: "/logos/ai/pika.svg",
    glow: "rgba(251,191,36,0.28)",
    accent: "#FBBF24",
    bucket: "ai",
  },
  elevenlabs: {
    logo: "/logos/ai/elevenlabs.svg",
    glow: "rgba(244,63,94,0.18)",
    accent: "#F43F5E",
    bucket: "ai",
  },
  zapier: {
    logo: "/logos/ai/zapier.svg",
    glow: "rgba(234,179,8,0.22)",
    accent: "#EAB308",
    bucket: "ai",
  },
  make: {
    logo: "/logos/ai/make.svg",
    glow: "rgba(56,189,248,0.2)",
    accent: "#38BDF8",
    bucket: "ai",
  },
  gemini: {
    logo: "/logos/ai/googlegemini.svg",
    glow: "rgba(59,130,246,0.24)",
    accent: "#3B82F6",
    bucket: "ai",
  },
  netflix: {
    logo: "/logos/productivity/netflix.svg",
    glow: "rgba(239,68,68,0.22)",
    accent: "#EF4444",
    bucket: "productivity",
  },
  amazonprime: {
    logo: "/logos/productivity/amazonprime.svg",
    glow: "rgba(14,165,233,0.2)",
    accent: "#0EA5E9",
    bucket: "productivity",
  },
  jiohotstar: {
    logo: "/logos/productivity/jiohotstar.svg",
    glow: "rgba(249,115,22,0.24)",
    accent: "#F97316",
    bucket: "productivity",
  },
  disneyplus: {
    logo: "/logos/productivity/disneyplus.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#2563EB",
    bucket: "productivity",
  },
  sonyliv: {
    logo: "/logos/productivity/sonyliv.svg",
    glow: "rgba(239,68,68,0.2)",
    accent: "#E31E24",
    bucket: "productivity",
  },
  zee5: {
    logo: "/logos/productivity/zee5.svg",
    glow: "rgba(139,92,246,0.22)",
    accent: "#8B5CF6",
    bucket: "productivity",
  },
  appletv: {
    logo: "/logos/productivity/appletv.svg",
    glow: "rgba(148,163,184,0.25)",
    accent: "#94A3B8",
    bucket: "productivity",
  },
  youtube: {
    logo: "/logos/productivity/youtube.svg",
    glow: "rgba(239,68,68,0.2)",
    accent: "#EF4444",
    bucket: "productivity",
  },
  spotify: {
    logo: "/logos/productivity/spotify.svg",
    glow: "rgba(34,197,94,0.22)",
    accent: "#22C55E",
    bucket: "productivity",
  },
  audible: {
    logo: "/logos/productivity/audible.svg",
    glow: "rgba(249,115,22,0.18)",
    accent: "#F97316",
    bucket: "productivity",
  },
  vscode: {
    logo: "/logos/dev/vscode.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#3B82F6",
    bucket: "dev",
  },
  cursor: {
    logo: "/logos/dev/cursor.svg",
    glow: "rgba(15,23,42,0.18)",
    accent: "#0F172A",
    bucket: "dev",
  },
  github: {
    logo: "/logos/dev/github.svg",
    glow: "rgba(100,116,139,0.22)",
    accent: "#64748B",
    bucket: "dev",
  },
  gitlab: {
    logo: "/logos/dev/gitlab.svg",
    glow: "rgba(249,115,22,0.2)",
    accent: "#F97316",
    bucket: "dev",
  },
  copilot: {
    logo: "/logos/dev/githubcopilot.svg",
    glow: "rgba(99,102,241,0.22)",
    accent: "#6366F1",
    bucket: "dev",
  },
  codeium: {
    logo: "/logos/dev/codeium.svg",
    glow: "rgba(56,189,248,0.2)",
    accent: "#38BDF8",
    bucket: "dev",
  },
  postman: {
    logo: "/logos/dev/postman.svg",
    glow: "rgba(249,115,22,0.22)",
    accent: "#F97316",
    bucket: "dev",
  },
  insomnia: {
    logo: "/logos/dev/insomnia.svg",
    glow: "rgba(168,85,247,0.2)",
    accent: "#A855F7",
    bucket: "dev",
  },
  jest: {
    logo: "/logos/dev/jest.svg",
    glow: "rgba(220,38,127,0.18)",
    accent: "#DC267F",
    bucket: "dev",
  },
  cypress: {
    logo: "/logos/dev/cypress.svg",
    glow: "rgba(52,211,153,0.2)",
    accent: "#34D399",
    bucket: "dev",
  },
  aws: {
    logo: "/logos/dev/aws.svg",
    glow: "rgba(251,191,36,0.22)",
    accent: "#F59E0B",
    bucket: "dev",
  },
  googlecloud: {
    logo: "/logos/dev/googlecloud.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#4285F4",
    bucket: "dev",
  },
  microsoftazure: {
    logo: "/logos/dev/microsoftazure.svg",
    glow: "rgba(14,165,233,0.22)",
    accent: "#0EA5E9",
    bucket: "dev",
  },
  vercel: {
    logo: "/logos/dev/vercel.svg",
    glow: "rgba(15,23,42,0.16)",
    accent: "#0F172A",
    bucket: "dev",
  },
  netlify: {
    logo: "/logos/dev/netlify.svg",
    glow: "rgba(45,212,191,0.22)",
    accent: "#2DD4BF",
    bucket: "dev",
  },
  firebase: {
    logo: "/logos/dev/firebase.svg",
    glow: "rgba(251,191,36,0.22)",
    accent: "#FBBF24",
    bucket: "dev",
  },
  digitalocean: {
    logo: "/logos/dev/digitalocean.svg",
    glow: "rgba(56,189,248,0.22)",
    accent: "#38BDF8",
    bucket: "dev",
  },
  kubernetes: {
    logo: "/logos/dev/kubernetes.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#326CE5",
    bucket: "dev",
  },
  mailchimp: {
    logo: "/logos/productivity/mailchimp.svg",
    glow: "rgba(253,224,71,0.28)",
    accent: "#FDE047",
    bucket: "productivity",
  },
  hubspot: {
    logo: "/logos/productivity/hubspot.svg",
    glow: "rgba(249,115,22,0.2)",
    accent: "#F97316",
    bucket: "productivity",
  },
  ahrefs: {
    logo: "/logos/productivity/ahrefs.svg",
    glow: "rgba(249,115,22,0.22)",
    accent: "#F97316",
    bucket: "productivity",
  },
  meta: {
    logo: "/logos/productivity/meta.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#3B82F6",
    bucket: "productivity",
  },
  googleads: {
    logo: "/logos/productivity/googleads.svg",
    glow: "rgba(250,204,21,0.22)",
    accent: "#FACC15",
    bucket: "productivity",
  },
  figma: {
    logo: "/logos/design/figma.svg",
    glow: "rgba(168,85,247,0.16)",
    accent: "#A855F7",
    bucket: "design",
  },
  canva: {
    logo: "/logos/design/canva.svg",
    glow: "rgba(56,189,248,0.2)",
    accent: "#38BDF8",
    bucket: "design",
  },
  adobe: {
    logo: "/logos/design/adobe.svg",
    glow: "rgba(239,68,68,0.18)",
    accent: "#EF4444",
    bucket: "design",
  },
  framer: {
    logo: "/logos/design/framer.svg",
    glow: "rgba(99,102,241,0.22)",
    accent: "#6366F1",
    bucket: "design",
  },
  webflow: {
    logo: "/logos/design/webflow.svg",
    glow: "rgba(56,189,248,0.2)",
    accent: "#38BDF8",
    bucket: "design",
  },
  slack: {
    logo: "/logos/productivity/slack.svg",
    glow: "rgba(236,72,153,0.14)",
    accent: "#EC4899",
    bucket: "productivity",
  },
  zoom: {
    logo: "/logos/productivity/zoom.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#3B82F6",
    bucket: "productivity",
  },
  discord: {
    logo: "/logos/productivity/discord.svg",
    glow: "rgba(129,140,248,0.22)",
    accent: "#818CF8",
    bucket: "productivity",
  },
  stripe: {
    logo: "/logos/finance/stripe.svg",
    glow: "rgba(99,102,241,0.22)",
    accent: "#635BFF",
    bucket: "finance",
  },
  razorpay: {
    logo: "/logos/finance/razorpay.svg",
    glow: "rgba(59,130,246,0.22)",
    accent: "#2563EB",
    bucket: "finance",
  },
  intuit: {
    logo: "/logos/finance/intuit.svg",
    glow: "rgba(14,165,233,0.18)",
    accent: "#0EA5E9",
    bucket: "finance",
  },
  mongodb: {
    logo: "/logos/dev/mongodb.svg",
    glow: "rgba(16,185,129,0.22)",
    accent: "#10B981",
    bucket: "dev",
  },
  coursera: {
    logo: "/logos/productivity/coursera.svg",
    glow: "rgba(37,99,235,0.18)",
    accent: "#2563EB",
    bucket: "productivity",
  },
  jetbrains: {
    logo: "/logos/dev/jetbrains.svg",
    glow: "rgba(249,115,22,0.18)",
    accent: "#F97316",
    bucket: "dev",
  },
  flutter: {
    logo: "/logos/dev/flutter.svg",
    glow: "rgba(56,189,248,0.2)",
    accent: "#38BDF8",
    bucket: "dev",
  },
  bubble: {
    logo: "/logos/dev/bubble.svg",
    glow: "rgba(139,92,246,0.22)",
    accent: "#8B5CF6",
    bucket: "dev",
  },
  firecrawl: {
    logo: "/logos/dev/firecrawl.svg",
    glow: "rgba(249,115,22,0.22)",
    accent: "#F97316",
    bucket: "dev",
  },
  linear: {
    logo: "/logos/dev/linear.svg",
    glow: "rgba(99,102,241,0.22)",
    accent: "#5E6AD2",
    bucket: "dev",
  },
  supabase: {
    logo: "/logos/dev/supabase.svg",
    glow: "rgba(52,211,153,0.22)",
    accent: "#34D399",
    bucket: "dev",
  },
  replit: {
    logo: "/logos/dev/replit.svg",
    glow: "rgba(248,113,113,0.18)",
    accent: "#F97316",
    bucket: "dev",
  },
  v0: {
    logo: "/logos/dev/v0.svg",
    glow: "rgba(15,23,42,0.14)",
    accent: "#0F172A",
    bucket: "dev",
  },
  loom: {
    logo: "/logos/productivity/loom.svg",
    glow: "rgba(99,102,241,0.18)",
    accent: "#6366F1",
    bucket: "productivity",
  },
  tinder: {
    logo: "/logos/productivity/tinder.svg",
    glow: "rgba(244,63,94,0.18)",
    accent: "#FD297B",
    bucket: "productivity",
  },
};

/** Default logos when `logoKey` / mapping is missing */
export const productLogoKeyById: Record<string, string> = {
  "notion-ai": "notion",
  grammarly: "grammarly",
  chatgpt: "chatgpt",
  perplexity: "perplexity",
  elicit: "elicit",
  midjourney: "midjourney",
  dalle: "dalle",
  runway: "runway",
  pika: "pika",
  elevenlabs: "elevenlabs",
  "zapier-ai": "zapier",
  make: "make",
  netflix: "netflix",
  "amazon-prime": "amazonprime",
  jiohotstar: "jiohotstar",
  "disney-plus": "disneyplus",
  sonyliv: "sonyliv",
  zee5: "zee5",
  "apple-tv": "appletv",
  "youtube-premium": "youtube",
  spotify: "spotify",
  audible: "audible",
  vscode: "vscode",
  cursor: "cursor",
  github: "github",
  gitlab: "gitlab",
  copilot: "copilot",
  codeium: "codeium",
  postman: "postman",
  insomnia: "insomnia",
  jest: "jest",
  cypress: "cypress",
  aws: "aws",
  gcp: "googlecloud",
  azure: "microsoftazure",
  vercel: "vercel",
  netlify: "netlify",
  firebase: "firebase",
  digitalocean: "digitalocean",
  kubernetes: "kubernetes",
  mailchimp: "mailchimp",
  hubspot: "hubspot",
  ahrefs: "ahrefs",
  "meta-ads": "meta",
  "google-ads": "googleads",
  figma: "figma",
  canva: "canva",
  adobe: "adobe",
  slack: "slack",
  zoom: "zoom",
  discord: "discord",
  stripe: "stripe",
  razorpay: "razorpay",
  quickbooks: "intuit",
  framer: "framer",
  "gemini-pro": "gemini",
  "mongodb-atlas": "mongodb",
  "coursera-plus": "coursera",
  jetbrains: "jetbrains",
  webflow: "webflow",
  flutterflow: "flutter",
  "bubble-io": "bubble",
  firecrawl: "firecrawl",
  "linear-app": "linear",
  supabase: "supabase",
  replit: "replit",
  "vercel-v0": "v0",
  "loom-business": "loom",
  "tinder-premium": "tinder",
};

export const bucketAmbientGlow: Record<LogoBucket, string> = {
  ai: "rgba(139,92,246,0.14)",
  dev: "rgba(56,189,248,0.14)",
  design: "rgba(251,191,36,0.18)",
  productivity: "rgba(52,211,153,0.12)",
  finance: "rgba(212,175,55,0.14)",
};

export function resolveLogoKey(product: Pick<Product, "id" | "logoKey">): string | undefined {
  return product.logoKey ?? productLogoKeyById[product.id];
}

export function getLogoEntry(logoKey: string | undefined): LogoRegistryEntry | undefined {
  if (!logoKey) return undefined;
  return logoRegistry[logoKey];
}

export function pickLogoSrc(entry: LogoRegistryEntry | undefined, variant: "light" | "dark"): string | undefined {
  if (!entry) return undefined;
  if (variant === "dark" && entry.logoDark) return entry.logoDark;
  return entry.logo;
}
