export type ProductCategory =
  | "AI Tools"
  | "OTT / Entertainment"
  | "Development Tools"
  | "Cloud / DevOps"
  | "Marketing"
  | "Design"
  | "Communication"
  | "Business / Finance";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  subcategory: string;
  logo: string;
  popular: boolean;
};

export const categoryStructure: Array<{ category: ProductCategory; subcategories: string[] }> = [
  {
    category: "AI Tools",
    subcategories: ["Productivity", "Research", "Image Generation", "Video Generation", "Audio", "Automation"],
  },
  {
    category: "OTT / Entertainment",
    subcategories: ["Streaming Platforms", "Music & Audio"],
  },
  {
    category: "Development Tools",
    subcategories: ["IDEs", "Version Control", "AI Coding", "API Tools", "Testing"],
  },
  {
    category: "Cloud / DevOps",
    subcategories: ["Cloud Platforms", "Hosting", "Backend", "Kubernetes Tools"],
  },
  {
    category: "Marketing",
    subcategories: ["Email", "CRM", "SEO", "Ads"],
  },
  {
    category: "Design",
    subcategories: ["UI/UX", "Creative Suite"],
  },
  {
    category: "Communication",
    subcategories: ["Team Chat", "Meetings", "Community"],
  },
  {
    category: "Business / Finance",
    subcategories: ["Payments", "Accounting"],
  },
];

export const products: Product[] = [
  { id: "notion-ai", name: "Notion AI", description: "AI writing and planning in docs and workspaces.", category: "AI Tools", subcategory: "Productivity", logo: "N", popular: true },
  { id: "grammarly", name: "Grammarly", description: "Writing assistant for grammar, tone, and clarity.", category: "AI Tools", subcategory: "Productivity", logo: "G", popular: true },
  { id: "chatgpt", name: "ChatGPT", description: "General AI assistant for brainstorming and workflows.", category: "AI Tools", subcategory: "Productivity", logo: "C", popular: true },
  { id: "perplexity", name: "Perplexity", description: "Research-focused AI search with source-backed answers.", category: "AI Tools", subcategory: "Research", logo: "P", popular: true },
  { id: "elicit", name: "Elicit", description: "AI research assistant for papers and evidence discovery.", category: "AI Tools", subcategory: "Research", logo: "E", popular: false },
  { id: "midjourney", name: "Midjourney", description: "Creative AI image generation for visuals and campaigns.", category: "AI Tools", subcategory: "Image Generation", logo: "M", popular: true },
  { id: "dalle", name: "DALL·E", description: "Generate high-quality images from text prompts.", category: "AI Tools", subcategory: "Image Generation", logo: "D", popular: false },
  { id: "runway", name: "Runway", description: "AI video editing and generation tools for creators.", category: "AI Tools", subcategory: "Video Generation", logo: "R", popular: true },
  { id: "pika", name: "Pika", description: "Text-to-video platform for short-form animated content.", category: "AI Tools", subcategory: "Video Generation", logo: "Pi", popular: false },
  { id: "elevenlabs", name: "ElevenLabs", description: "Natural AI voices and speech synthesis platform.", category: "AI Tools", subcategory: "Audio", logo: "11", popular: true },
  { id: "zapier-ai", name: "Zapier AI", description: "Workflow automation using AI-driven actions.", category: "AI Tools", subcategory: "Automation", logo: "Z", popular: true },
  { id: "make", name: "Make", description: "No-code visual automation for apps and operations.", category: "AI Tools", subcategory: "Automation", logo: "Mk", popular: false },

  { id: "netflix", name: "Netflix", description: "Global streaming platform for movies and TV.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "N", popular: true },
  { id: "amazon-prime", name: "Amazon Prime", description: "Entertainment and shopping membership bundle.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "A", popular: true },
  { id: "jiohotstar", name: "JioHotstar", description: "Sports and shows streaming with regional content.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "J", popular: true },
  { id: "disney-plus", name: "Disney+", description: "Family entertainment and franchise originals.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "D+", popular: true },
  { id: "sonyliv", name: "SonyLiv", description: "Live sports and TV shows on demand.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "SL", popular: false },
  { id: "zee5", name: "Zee5", description: "Regional shows, originals, and cinema content.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "Z5", popular: false },
  { id: "apple-tv", name: "Apple TV+", description: "Original premium streaming series and films.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "AT", popular: false },
  { id: "youtube-premium", name: "YouTube Premium", description: "Ad-free videos and offline playback access.", category: "OTT / Entertainment", subcategory: "Streaming Platforms", logo: "YT", popular: true },
  { id: "spotify", name: "Spotify", description: "Music and podcasts with curated playlists.", category: "OTT / Entertainment", subcategory: "Music & Audio", logo: "S", popular: true },
  { id: "audible", name: "Audible", description: "Audiobook library with exclusive originals.", category: "OTT / Entertainment", subcategory: "Music & Audio", logo: "Au", popular: false },

  { id: "vscode", name: "VS Code", description: "Popular code editor with vast extension ecosystem.", category: "Development Tools", subcategory: "IDEs", logo: "VS", popular: true },
  { id: "cursor", name: "Cursor", description: "AI-native IDE for faster software development.", category: "Development Tools", subcategory: "IDEs", logo: "Cu", popular: true },
  { id: "github", name: "GitHub", description: "Code hosting and collaboration for software teams.", category: "Development Tools", subcategory: "Version Control", logo: "GH", popular: true },
  { id: "gitlab", name: "GitLab", description: "DevSecOps lifecycle platform with repositories.", category: "Development Tools", subcategory: "Version Control", logo: "GL", popular: false },
  { id: "copilot", name: "GitHub Copilot", description: "AI coding assistant inside your editor.", category: "Development Tools", subcategory: "AI Coding", logo: "Co", popular: true },
  { id: "codeium", name: "Codeium", description: "Autocomplete and chat AI for developers.", category: "Development Tools", subcategory: "AI Coding", logo: "Cd", popular: false },
  { id: "postman", name: "Postman", description: "API design, testing, and collaboration platform.", category: "Development Tools", subcategory: "API Tools", logo: "Pm", popular: true },
  { id: "insomnia", name: "Insomnia", description: "Lightweight API client for GraphQL and REST.", category: "Development Tools", subcategory: "API Tools", logo: "In", popular: false },
  { id: "jest", name: "Jest", description: "JavaScript unit testing framework by Meta.", category: "Development Tools", subcategory: "Testing", logo: "J", popular: false },
  { id: "cypress", name: "Cypress", description: "End-to-end testing for modern web apps.", category: "Development Tools", subcategory: "Testing", logo: "Cy", popular: true },

  { id: "aws", name: "AWS", description: "Scalable cloud infrastructure and managed services.", category: "Cloud / DevOps", subcategory: "Cloud Platforms", logo: "AWS", popular: true },
  { id: "gcp", name: "Google Cloud", description: "Cloud services for data, AI, and compute workloads.", category: "Cloud / DevOps", subcategory: "Cloud Platforms", logo: "GC", popular: true },
  { id: "azure", name: "Azure", description: "Enterprise cloud with security and hybrid options.", category: "Cloud / DevOps", subcategory: "Cloud Platforms", logo: "Az", popular: false },
  { id: "vercel", name: "Vercel", description: "Fast frontend deployment with preview workflows.", category: "Cloud / DevOps", subcategory: "Hosting", logo: "V", popular: true },
  { id: "netlify", name: "Netlify", description: "Web deployment and serverless edge capabilities.", category: "Cloud / DevOps", subcategory: "Hosting", logo: "Nf", popular: false },
  { id: "firebase", name: "Firebase", description: "Backend services for auth, db, and hosting.", category: "Cloud / DevOps", subcategory: "Backend", logo: "Fb", popular: true },
  { id: "digitalocean", name: "DigitalOcean", description: "Simple cloud compute and managed databases.", category: "Cloud / DevOps", subcategory: "Cloud Platforms", logo: "DO", popular: false },
  { id: "kubernetes", name: "Kubernetes", description: "Container orchestration for scalable deployments.", category: "Cloud / DevOps", subcategory: "Kubernetes Tools", logo: "K8", popular: true },

  { id: "mailchimp", name: "Mailchimp", description: "Email campaigns and lifecycle automation tools.", category: "Marketing", subcategory: "Email", logo: "M", popular: true },
  { id: "hubspot", name: "HubSpot", description: "CRM platform for sales and marketing alignment.", category: "Marketing", subcategory: "CRM", logo: "Hs", popular: true },
  { id: "ahrefs", name: "Ahrefs", description: "SEO research, backlink analysis, and rank tracking.", category: "Marketing", subcategory: "SEO", logo: "Ah", popular: false },
  { id: "meta-ads", name: "Meta Ads", description: "Paid social advertising manager for Meta platforms.", category: "Marketing", subcategory: "Ads", logo: "Me", popular: false },
  { id: "google-ads", name: "Google Ads", description: "Search and display ad platform for growth.", category: "Marketing", subcategory: "Ads", logo: "GA", popular: true },

  { id: "figma", name: "Figma", description: "Collaborative product design and prototyping suite.", category: "Design", subcategory: "UI/UX", logo: "F", popular: true },
  { id: "canva", name: "Canva", description: "Easy design toolkit for social and marketing assets.", category: "Design", subcategory: "UI/UX", logo: "C", popular: true },
  { id: "adobe", name: "Adobe Suite", description: "Professional creative tools for design and media.", category: "Design", subcategory: "Creative Suite", logo: "Ad", popular: false },

  { id: "slack", name: "Slack", description: "Team communication and channel-based collaboration.", category: "Communication", subcategory: "Team Chat", logo: "S", popular: true },
  { id: "zoom", name: "Zoom", description: "Video meetings and webinar platform for teams.", category: "Communication", subcategory: "Meetings", logo: "Z", popular: true },
  { id: "discord", name: "Discord", description: "Community chat and voice channels platform.", category: "Communication", subcategory: "Community", logo: "D", popular: false },

  { id: "stripe", name: "Stripe", description: "Online payments and recurring billing APIs.", category: "Business / Finance", subcategory: "Payments", logo: "St", popular: true },
  { id: "razorpay", name: "Razorpay", description: "Payment gateway and payout solutions for India.", category: "Business / Finance", subcategory: "Payments", logo: "Rz", popular: true },
  { id: "quickbooks", name: "QuickBooks", description: "Accounting, invoicing, and bookkeeping software.", category: "Business / Finance", subcategory: "Accounting", logo: "Qb", popular: false },
];

export const categories: ProductCategory[] = categoryStructure.map((entry) => entry.category);

export const highlightTools = products.filter((product) => product.popular).slice(0, 10).map((product) => product.name);

function compactAlphanumeric(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** True if the query matches this catalog tool (id, logo, category, subcategory, name, description; punctuation-insensitive). */
export function matchesMarketplaceSearch(product: Product, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return true;

  const haystack = compactAlphanumeric(
    [product.id, product.name, product.description, product.category, product.subcategory, product.logo].join(" "),
  );

  const tokens = query
    .split(/\s+/)
    .map((t) => compactAlphanumeric(t))
    .filter(Boolean);

  if (tokens.length === 0) return true;

  return tokens.every((token) => haystack.includes(token));
}
