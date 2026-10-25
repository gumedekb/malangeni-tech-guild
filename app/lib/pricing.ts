// Published prices (REDESIGN-BRIEF.md §05–06). Change a number here and every page updates.

export const combos = [
  {
    name: "Registration + Starter site",
    price: "R1,300",
    saving: "R100",
    note: "Company registered, one-page site live, Google profile set up.",
    featured: true,
  },
  {
    name: "Registration + Business site",
    price: "R2,200",
    saving: "R150",
    note: "Company registered, 5-page site, your own domain and email.",
  },
  {
    name: "Registration + Online store",
    price: "R3,800",
    saving: "R150",
    note: "Company registered and selling online from day one.",
  },
];

export const builds = [
  { name: "Company registration", price: "R450", detail: "CIPC name reservation and incorporation. Documents by email." },
  { name: "Starter site — 1 page", price: "R950", detail: "Up to 6 sections, WhatsApp button, Google Business Profile set up free." },
  {
    name: "Business site — up to 5 pages",
    price: "R1,900",
    detail: "Home, About, Services, Gallery, Contact. Enquiry form, Google profile, domain and business email — first year included.",
  },
  { name: "Online store", price: "R3,500", detail: "Up to 30 products, PayFast or Yoco checkout, delivery, stock, and training for you." },
  { name: "Google Business Profile setup", price: "R350", detail: "Profile, verification, hours, photos and your first 3 posts." },
  { name: "Domain + business email", price: "R350", suffix: "first year", detail: "Your .co.za name, DNS, and a mailbox on your own domain." },
  { name: "Site rescue", price: "R750", detail: "Already have a site? We fix speed, mobile layout, broken links and SSL." },
];

// Monthly running costs for automations stay "quoted" until WhatsApp API and AI costs are verified.
export const devWork = [
  { name: "WhatsApp enquiry & booking bot", price: "R2,500", ongoing: "setup · monthly fee quoted" },
  { name: "Quote & invoice automation", price: "R1,800", ongoing: "+ monthly fee, quoted" },
  { name: "Booking & appointment system", price: "R2,800", ongoing: "+ monthly fee, quoted" },
  { name: "Stock & sales tracker", price: "R3,200", ongoing: "+ monthly fee, quoted" },
  { name: "AI automation audit", price: "R950", ongoing: "once-off" },
  { name: "Custom web app or portal", price: "from R8,000", ongoing: "quoted per project" },
  { name: "Android app on the Play Store", price: "from R6,500", ongoing: "quoted · + R450 Google fee, paid by you" },
  { name: "White-label development for agencies", price: "R350", ongoing: "per hour" },
];

export type PlanValue = boolean | string;

export const plans = [
  { name: "Lite", price: "R150", blurb: "Keep it online and safe." },
  { name: "Standard", price: "R350", blurb: "For most small businesses.", featured: true },
  { name: "Growth", price: "R750", blurb: "For businesses that want to be found." },
];

export const planRows: { label: string; values: [PlanValue, PlanValue, PlanValue] }[] = [
  { label: "Hosting, SSL, backups, monitoring and security updates", values: [true, true, true] },
  { label: "Content changes per month", values: ["1", "3", "Unlimited*"] },
  { label: "Domain renewal + business email", values: [false, true, true] },
  { label: "Google profile posts per month", values: [false, "1", "4"] },
  { label: "Monthly visitor report", values: [false, true, true] },
  { label: "SEO upkeep", values: [false, false, true] },
  { label: "We respond within", values: ["5 days", "2 days", "Same day"] },
];

export const planPromises = [
  "Month to month. Cancel any time.",
  "Pay 12 months upfront, get one free.",
  "First month free with any Business site or Store build.",
];

export const faqs = [
  {
    q: "How long does it take?",
    a: "It depends on the build. A one-page Starter site is the quickest, a store takes the longest. We give you a date before you pay anything, and we stick to it.",
  },
  {
    q: "What if I need changes later?",
    a: "WhatsApp us. On a care plan, monthly changes are included — 1, 3 or unlimited depending on the plan. Without one, we quote small changes upfront.",
  },
  { q: "Do I own the site?", a: "Yes. It’s yours. We hand over the code and the logins. You’re never locked in to us." },
  { q: "Can I pay in two parts?", a: "Yes. For anything over R1,500 you pay a 50% deposit to start, and the rest when it’s done." },
  {
    q: "Do I have to take a care plan?",
    a: "No. Care plans are optional and month to month. Cancel any time. With a Business site or Store, the first month is free so you can try it.",
  },
  {
    q: "What if I already have a site?",
    a: "Our Site rescue (R750) fixes speed, mobile layout, broken links and SSL on the site you have. If it’s past saving, we’ll tell you straight and quote a rebuild.",
  },
];
