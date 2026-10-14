import { Newspaper, Mail, Palette, CalendarCheck, QrCode } from "lucide-astro";

/** 2750 -> "$2,750" */
export const formatPrice = (amount: number) => `$${amount.toLocaleString("en-US")}`;

/** Fees mentioned across plans and FAQs */
export const fees = {
  extraPage: 100,
  carePlan: 45,
  earlyBuyout: 3000,
  domainPerYear: 11
};

// ── Plans ──

export type Plan = {
  name: string;
  price: number;
  unit: "/month" | "";
  note: string;
  bestFor: string;
  /** The first feature is what sets the plan apart, so it is shown in bold */
  features: string[];
  addOns: string[];
  highlighted: boolean;
};

export const pricingPlans: Plan[] = [
  {
    name: "The Beacon",
    price: 68,
    unit: "/month",
    note: "$0 down",
    bestFor: "For new businesses that need to get online fast.",
    features: [
      "Custom one-page website",
      "Unlimited minor content edits",
      "Hosting & SSL included",
      "Search engine optimization (SEO)",
      "Contact form",
      "Live in about 1 week"
    ],
    addOns: [],
    highlighted: false
  },
  {
    name: "The Navigator",
    price: 155,
    unit: "/month",
    note: "$0 down",
    bestFor: "For growing businesses that need room to show everything they do.",
    features: [
      "Custom website, up to 6 pages",
      "Unlimited minor content edits",
      "Hosting & SSL included",
      "Search engine optimization (SEO)",
      "Contact form",
      "Live in 2–3 weeks"
    ],
    addOns: [`Extra pages, ${formatPrice(fees.extraPage)} each (one-time)`],
    highlighted: true
  },
  {
    name: "The Vessel",
    price: 2750,
    unit: "",
    note: "One-time",
    bestFor: "For established businesses that would rather own their site outright.",
    features: [
      "Custom website, up to 6 pages",
      "Full ownership of all assets",
      "Search engine optimization (SEO)",
      "Live in 2–3 weeks"
    ],
    addOns: [
      `Care plan, ${formatPrice(fees.carePlan)}/month (hosting, domain, SSL & unlimited edits)`,
      `Extra pages, ${formatPrice(fees.extraPage)} each (one-time)`
    ],
    highlighted: false
  }
];

/** The cheapest monthly plan, e.g. "$68" for "As low as $0 down and $68/month" */
export const startingMonthlyPrice = formatPrice(
  Math.min(...pricingPlans.filter(plan => plan.unit === "/month").map(plan => plan.price))
);

// ── Add-ons (pricing page) ──

export const googleBusinessProfile = {
  setup: 150,
  monthly: 25,
  /** Monthly rate for Dockside website clients */
  clientMonthly: 15
};

export type AddOnService = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  features: string[];
  icon: typeof Newspaper;
};

/** Shown as cards under the featured Google Business Profile card */
export const addOnServices: AddOnService[] = [
  {
    name: "Blog Management",
    tagline: "Share news and tips with customers, without touching the website.",
    price: "$20",
    unit: "/month",
    features: [
      "Blog built right into your site",
      "Up to 5 posts published per month",
      "You send the title & text, we handle the rest",
      "Each post set up so Google can find it"
    ],
    icon: Newspaper
  },
  {
    name: "Professional Email",
    tagline: "Look established with an email address that matches your website.",
    price: "$125",
    unit: "one-time",
    features: [
      "you@yourbusiness.com on your own domain",
      "Set up on Google Workspace, so it works like Gmail",
      "Works on your phone & computer",
      "Settings handled so your emails land in inboxes, not spam"
    ],
    icon: Mail
  }
];

/** Smaller one-time extras */
export const addOnExtras = [
  { name: "Logo & brand kit", detail: "Logo, colors & fonts, ready for signs and trucks", price: "From $350", icon: Palette },
  { name: "Online booking", detail: "We set up a booking tool like Calendly or Square and link it to your site", price: "$250", icon: CalendarCheck },
  { name: "Review kit", detail: "A direct link to your Google review form, a printable QR code & templates for asking", price: "$75", icon: QrCode }
];
