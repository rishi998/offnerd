export type ProductType = "tool" | "course" | "service";

export type Product = {
  id: string;
  name: string;
  description: string;
  type: ProductType;
  category: "Tools" | "Courses" | "Services";
  price: number;
  validity: number;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "tool-analytics-pro",
    name: "Analytics Pro",
    description: "Track funnels, retention, and revenue metrics in one place.",
    type: "tool",
    category: "Tools",
    price: 1499,
    validity: 30,
    featured: true,
  },
  {
    id: "course-nextjs-mastery",
    name: "Next.js Mastery",
    description: "Production-grade App Router course with real project walkthroughs.",
    type: "course",
    category: "Courses",
    price: 3499,
    validity: 365,
    featured: true,
  },
  {
    id: "service-growth-audit",
    name: "Growth Audit",
    description: "Expert onboarding and conversion audit for your SaaS funnel.",
    type: "service",
    category: "Services",
    price: 4999,
    validity: 90,
    featured: false,
  },
  {
    id: "tool-seo-flow",
    name: "SEO Flow",
    description: "Automate keyword tracking and optimize pages with AI insights.",
    type: "tool",
    category: "Tools",
    price: 999,
    validity: 30,
    featured: true,
  },
  {
    id: "course-ui-systems",
    name: "UI Systems Lab",
    description: "Design systems and reusable component architecture from scratch.",
    type: "course",
    category: "Courses",
    price: 2999,
    validity: 365,
    featured: false,
  },
  {
    id: "tool-automation-studio",
    name: "Automation Studio",
    description: "Build no-code automations for marketing and customer operations.",
    type: "tool",
    category: "Tools",
    price: 1899,
    validity: 60,
    featured: true,
  },
  {
    id: "service-priority-support",
    name: "Priority Support",
    description: "Fast-track setup, migration support, and monthly strategy calls.",
    type: "service",
    category: "Services",
    price: 2599,
    validity: 30,
    featured: false,
  },
  {
    id: "course-founders-ops",
    name: "Founders Ops Sprint",
    description: "Hands-on sprint to streamline your SaaS launch operations.",
    type: "course",
    category: "Courses",
    price: 2199,
    validity: 180,
    featured: true,
  },
];

export const categories: Array<Product["category"]> = ["Tools", "Courses", "Services"];