export type LandingProduct = {
  id: string;
  name: string;
  description: string;
  logo: string;
  offer: string;
};

export const landingProducts: LandingProduct[] = [
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing automation platform for campaigns, forms, and audience growth.",
    logo: "M",
    offer: "Save 25% monthly",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description: "Reliable transactional email delivery with templates, APIs, and analytics.",
    logo: "SG",
    offer: "Offer: 20% off",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Unified CRM suite for sales, marketing, service, and customer workflows.",
    logo: "H",
    offer: "Limited: 30% off",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Payments infrastructure for billing, subscriptions, and online checkout.",
    logo: "S",
    offer: "Deal: 15% off",
  },
  {
    id: "twilio",
    name: "Twilio",
    description: "Communication APIs for SMS, voice, verification, and customer engagement.",
    logo: "T",
    offer: "Bonus credits",
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "eCommerce platform to build, operate, and scale online storefronts.",
    logo: "Sh",
    offer: "Save 3 months",
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "Customer messaging and support software with live chat and AI agents.",
    logo: "I",
    offer: "Starter discount",
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for docs, project tracking, wikis, and team notes.",
    logo: "N",
    offer: "20% team plan off",
  },
];
