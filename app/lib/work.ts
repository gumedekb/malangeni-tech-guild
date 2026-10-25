// Case studies shown on /work. Both entries below are EXAMPLES that demonstrate the two layouts:
// "product" = something we built and run ourselves (lives on its own subdomain),
// "client"  = something we built for a customer.
// Replace them with real projects before launch, and set `example: false`.

export type WorkItem = {
  slug: string;
  kind: "product" | "client";
  example: boolean;
  title: string;
  label: string;
  summary: string;
  tags: string[];
  accent: string;
};

export const work: WorkItem[] = [
  {
    slug: "isitolo",
    kind: "product",
    example: true,
    title: "Isitolo",
    label: "Our product",
    summary: "Stock and sales for spaza shops, on any Android phone. A daily report lands on WhatsApp.",
    tags: ["Android app", "Web app", "WhatsApp reports"],
    accent: "#ea7a2f",
  },
  {
    slug: "lwazis-kitchen",
    kind: "client",
    example: true,
    title: "Lwazi’s Kitchen",
    label: "Client project",
    summary: "A South Coast caterer went from a Facebook flyer to a site that brings in quote requests on WhatsApp.",
    tags: ["Business site", "Google profile", "WhatsApp ordering"],
    accent: "#b4432a",
  },
];

export function getWork(slug: string) {
  return work.find((w) => w.slug === slug);
}

export function nextWork(slug: string) {
  const i = work.findIndex((w) => w.slug === slug);
  return work[(i + 1) % work.length];
}
