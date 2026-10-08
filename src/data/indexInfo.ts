import { Smartphone, Eye, Rabbit, Coffee, Zap, Gauge, ShieldCheck } from "lucide-astro";

export const services = [
  {
    icon: Rabbit,
    title: "Lightning-Fast Performance",
    subtitle: "Speed keeps people on your site",
    desc: "A fast website feels more professional and keeps customers from leaving. We optimize performance so pages load fast and respond instantly.",
    href: "/web-design/",
    bullets: [
      "Faster load times (so people don't leave)",
      "Smooth scrolling and quick page changes",
      "Optimized images so your site stays sharp and speedy"
    ]
  },
  {
    icon: Coffee,
    title: "Hands-Off Hosting & Updates",
    subtitle: "You run your business, we run the site",
    desc: "We handle hosting, security, and minor changes so your website stays online, current, and worry-free.",
    href: "/hosting-and-support/",
    bullets: [
      "Unlimited minor content updates (text, photos, hours, pricing)",
      "Security patches and routine maintenance handled for you",
      "Managed domains and hosting, with renewals covered"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly Design",
    subtitle: "Most customers will visit from their phone",
    desc: "Your site looks sharp and works perfectly on any screen; phone, tablet, or desktop.",
    href: "/web-design/",
    bullets: [
      "Pages that feel smooth and quick, even on the go",
      "Text that's easy to read on small screens",
      "Fast loading on cellular networks"
    ]
  },
  {
    icon: Eye,
    title: "SEO That Brings Customers In",
    subtitle: "Search Engine Optimization built to be found in local search",
    desc: "We structure your pages so Google knows exactly what you do and who you serve. Giving you a solid foundation to rank for the searches that matter.",
    href: "/seo/",
    bullets: [
      "Location & service targeting so you show up for the right searches",
      "Page structure optimized for both Google and real visitors",
      "A clean technical foundation built for long-term visibility"
    ]
  }
];

export const benefits = [
  {
    title: "Custom Designed",
    desc: "Our designs are made by an in-house team, tailored specifically to your brand and business goals."
  },
  {
    title: "Ongoing Support",
    desc: "Call or text us anytime. When you reach out, you get the owner and developer directly."
  },
  {
    title: "SEO Optimized",
    desc: "We explain SEO clearly, how it works, and what we can do to get you ranking on Google."
  },
  {
    title: "Mobile Ready",
    desc: "Every website works perfectly on phones and tablets because that's where your customers are."
  },
  {
    title: "Secure by Design",
    desc: "No databases, no login portals, no backend servers. Less surface area means less risk."
  },
  {
    title: "Satisfaction Guarantee",
    desc: "If you're not happy with the final design, we'll keep refining until you are with no extra charge."
  }
];

export const lighthouseScores = [
  { label: "Speed", score: 99 },
  { label: "SEO", score: 98 },
  { label: "Best Practices", score: 100 },
  { label: "Accessibility", score: 100 }
];

export const lighthouseChecks = [
  { label: "Loads in under a second", value: "✓" },
  { label: "Works on any device", value: "✓" },
  { label: "No layout jumps or flicker", value: "✓" },
  { label: "Secure connection (HTTPS)", value: "✓" }
];

export const performanceMinis = [
  { label: "Loads quickly", sub: "Visitors don't wait", icon: Zap },
  { label: "Ranks higher", sub: "Google rewards speed", icon: Gauge },
  { label: "Works on mobile", sub: "Any screen, any device", icon: Smartphone },
  { label: "Secure & safe", sub: "Protected from day one", icon: ShieldCheck }
];
