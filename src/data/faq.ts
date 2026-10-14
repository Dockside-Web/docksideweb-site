import { Rocket, CreditCard, FileText, Wrench, Search } from "lucide-astro";
import { fees, formatPrice, pricingPlans, googleBusinessProfile, addOnExtras } from "./pricing.ts";

type FAQ = {
  category: string;
  question: string;
  answer: string;
  /** Also shown in the short FAQ list on the contact page */
  onContactPage?: boolean;
};

const buyoutFee = formatPrice(fees.earlyBuyout);
const [beacon, navigator, vessel] = pricingPlans;
const onlineBookingPrice = addOnExtras.find(extra => extra.name === "Online booking")?.price;

export const FAQs: FAQ[] = [
  // GETTING STARTED
  {
    category: "Getting Started",
    question: "How long does it take to build my website?",
    answer:
      "Most websites are ready in 2 to 3 weeks, and a one-page site takes about 1 week. The clock starts once we have what we need from you, like your logo, photos, and details about your business. If anything holds things up, we'll let you know right away.",
    onContactPage: true
  },
  {
    category: "Getting Started",
    question: "What do I need to give you to get started?",
    answer:
      "Your logo if you have one, some photos of your work, and the basics about your business: what you offer, where you work, and how customers can reach you. Don't worry if you don't have everything. We'll walk you through it, and if you already have a website, we can start from that."
  },
  {
    category: "Getting Started",
    question: "Do you work with businesses outside Charleston and Baltimore?",
    answer:
      "Yes. We work with businesses anywhere. Everything can be handled by phone, email, or video call, so it doesn't matter where you're located."
  },
  {
    category: "Getting Started",
    question: "Do you use WordPress, Wix, or Squarespace?",
    answer:
      "No. We build every website from scratch. That means it loads faster, there are no plugins or updates for you to worry about, and it's much harder to hack.",
    onContactPage: true
  },
  {
    category: "Getting Started",
    question: "Why is a custom website better than a template?",
    answer:
      "Template sites often look like thousands of others and come loaded with extras you'll never use, which slows them down. A custom site is built around your business, so it looks like you, loads quickly, and tells customers exactly what they need to know."
  },
  {
    category: "Getting Started",
    question: "Will my website work well on phones?",
    answer:
      "Yes. Most of your customers will find you on their phone, so every site we build looks great and loads quickly on any screen, even on a weak cell signal."
  },

  // PRICING & PAYMENTS
  {
    category: "Pricing & Payments",
    question: "Are there any hidden costs?",
    answer: `No. Hosting, security, and edits are all included in your monthly plan. The only separate cost is your domain name (your web address), which is about ${formatPrice(fees.domainPerYear)} a year. You buy it yourself so it's always in your name.`,
    onContactPage: true
  },
  {
    category: "Pricing & Payments",
    question: "How do I pay?",
    answer:
      "Payments are handled securely through Stripe and charged automatically each month. You can pay from your bank account with no extra fee, or with a credit or debit card, which has a 3.5% processing fee. You can see all your invoices in your client portal."
  },
  {
    category: "Pricing & Payments",
    question: "Can I add more pages later?",
    answer: `Yes. Our plans include up to 6 pages. Each extra page is a one-time ${formatPrice(fees.extraPage)}, and once it's built, it's covered by your plan like the rest of your site.`
  },
  {
    category: "Pricing & Payments",
    question: "What happens if a payment is late?",
    answer:
      "If your account is more than 30 days past due, we may need to pause your service or take your site offline until it's caught up. We'll always reach out before that happens."
  },
  {
    category: "Pricing & Payments",
    question: "Do you offer refunds?",
    answer:
      "Payments aren't refundable. Once we start, we set aside time for your project and begin building right away."
  },

  // YOUR PLAN
  {
    category: "Your Plan",
    question: "What's the difference between a monthly plan and buying my site outright?",
    answer: `With a monthly plan (${beacon.name} or ${navigator.name}), there's nothing to pay upfront, and hosting, security, and edits are all included. With ${vessel.name}, you pay ${formatPrice(vessel.price)} once and own your site. You can add a care plan for ${formatPrice(fees.carePlan)} a month if you'd like us to keep handling hosting and edits.`
  },
  {
    category: "Your Plan",
    question: "How long is the commitment on a monthly plan?",
    answer:
      "Monthly plans have a 12-month minimum. After that, your plan continues month to month, and you can cancel any time with 30 days' notice."
  },
  {
    category: "Your Plan",
    question: "What happens to my website if I cancel?",
    answer: `Your domain name, text, and photos are always yours to keep. The website itself is taken offline when your plan ends, unless you choose to buy it for a one-time ${buyoutFee}. Then we hand over all the files so you own it outright.`
  },
  {
    category: "Your Plan",
    question: "Can I cancel before the 12 months are up?",
    answer: `Yes, by paying the one-time ${buyoutFee} buyout. That ends your plan early and the website becomes yours to keep.`
  },
  {
    category: "Your Plan",
    question: "Can I switch from a monthly plan to owning my site?",
    answer: `Yes. You can pay the ${buyoutFee} buyout at any time to own your site outright. If you'd still like us to handle hosting and edits after that, you can add the ${formatPrice(fees.carePlan)}-a-month care plan.`
  },

  // AFTER LAUNCH
  {
    category: "After Launch",
    question: "How do I make changes to my website?",
    answer:
      "Just send us an email with what you'd like changed, like a new photo, updated hours, or a new service, and we'll take care of it. You never have to log in or learn how anything works."
  },
  {
    category: "After Launch",
    question: "Is there a limit on how many changes I can ask for?",
    answer: `Small changes like text, photos, hours, and prices are unlimited on monthly plans and the ${vessel.name} care plan. Bigger additions, like a whole new page, are a one-time ${formatPrice(fees.extraPage)} each.`
  },
  {
    category: "After Launch",
    question: "Do you take care of hosting and security?",
    answer:
      "Yes. Your monthly plan includes hosting, security, and keeping your site running smoothly, so you never have to think about it."
  },
  {
    category: "After Launch",
    question: "What can I do in the client portal?",
    answer:
      "Your client portal keeps everything in one place. You can see your invoices, make payments, and send us requests."
  },
  {
    category: "After Launch",
    question: "Can you add online booking to my website?",
    answer: `Yes. We can set up a trusted booking tool like Calendly or Square and connect it to your site for a one-time ${onlineBookingPrice}. Customers can then book appointments without picking up the phone.`
  },

  // GETTING FOUND ON GOOGLE
  {
    category: "Getting Found on Google",
    question: "What is SEO?",
    answer:
      "SEO stands for search engine optimization. It simply means setting up your website so Google understands what you do and where you do it, so you show up when people nearby search for your services."
  },
  {
    category: "Getting Found on Google",
    question: "Is SEO included with my website?",
    answer:
      "Yes. Every site we build is set up for Google from day one, so search engines know exactly what your business does and who you serve."
  },
  {
    category: "Getting Found on Google",
    question: "Can you help with my Google Business Profile?",
    answer: `Yes. Your Google Business Profile is the listing with your map pin, reviews, hours, and phone number that shows up when people search for your business or for something "near me." We can set it up for a one-time ${formatPrice(googleBusinessProfile.setup)}. For ${formatPrice(googleBusinessProfile.monthly)} a month (${formatPrice(googleBusinessProfile.clientMonthly)} for our website clients), we'll also reply to your reviews and keep your hours and info up to date.`
  },
  {
    category: "Getting Found on Google",
    question: "Can you guarantee I'll be on the first page of Google?",
    answer:
      "No one can honestly promise that, because Google decides the rankings. What we can promise is that your site will be built the right way to give you the best shot."
  },
  {
    category: "Getting Found on Google",
    question: "How long does it take to show up higher on Google?",
    answer:
      "It takes time. Most businesses start to see improvement within 3 to 6 months, and it keeps building from there."
  }
];

export const contactPageFAQs = FAQs.filter(faq => faq.onContactPage);

/** Categories in the order they first appear */
export const faqCategories = [...new Set(FAQs.map(faq => faq.category))];

/** One icon per category, used by the FAQ page's jump links and section headings */
export const faqCategoryIcons: Record<string, typeof Rocket> = {
  "Getting Started": Rocket,
  "Pricing & Payments": CreditCard,
  "Your Plan": FileText,
  "After Launch": Wrench,
  "Getting Found on Google": Search
};

/** "Pricing & Payments" -> "pricing-payments", for section anchors */
export const faqCategoryId = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
