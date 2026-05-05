import { Bot, Cloud, Code2, Tv } from "lucide-react";

export type MainCategory = {
  id: "ai" | "ott" | "development" | "cloud";
  title: string;
  description: string;
  icon: typeof Bot;
  tools: string[];
};

export const categories: MainCategory[] = [
  {
    id: "ai",
    title: "AI Tools",
    description: "Top AI products for productivity, assignments, research, and media generation.",
    icon: Bot,
    tools: [
      "Notion AI",
      "Perplexity",
      "Claude",
      "ChatGPT",
      "Jasper",
      "Grammarly",
      "Canva AI",
      "Runway",
      "ElevenLabs",
      "Synthesia",
    ],
  },
  {
    id: "ott",
    title: "OTT Platforms",
    description: "Most popular streaming subscriptions and entertainment bundles.",
    icon: Tv,
    tools: [
      "Netflix",
      "Amazon Prime",
      "JioHotstar",
      "Sony LIV",
      "ZEE5",
      "Disney+",
      "Apple TV+",
      "Hulu",
      "Max",
      "Crunchyroll",
    ],
  },
  {
    id: "development",
    title: "Development Tools",
    description: "Editor, AI coding, collaboration, and deployment tools for dev teams.",
    icon: Code2,
    tools: [
      "Cursor",
      "VS Code",
      "GitHub Copilot",
      "GitHub",
      "Postman",
      "Linear",
      "Figma Dev Mode",
      "Raycast",
      "Warp",
      "Docker",
    ],
  },
  {
    id: "cloud",
    title: "Cloud / Infra Tools",
    description: "Reliable cloud, hosting, backend, and observability tools for scale.",
    icon: Cloud,
    tools: [
      "AWS",
      "Vercel",
      "Firebase",
      "Cloudflare",
      "Supabase",
      "DigitalOcean",
      "MongoDB Atlas",
      "Render",
      "Railway",
      "Datadog",
    ],
  },
];
