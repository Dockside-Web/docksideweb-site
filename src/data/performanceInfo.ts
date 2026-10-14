import { Smartphone, Zap, Gauge, ShieldCheck } from "lucide-astro";

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
