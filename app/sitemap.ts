import type { MetadataRoute } from "next";
import { site } from "./lib/site";
import { work } from "./lib/work";

// Static export (next.config.ts) needs this generated once at build time
export const dynamic = "force-static";

// URLs end in "/" to match trailingSlash and the canonical tags
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/pricing", "/about", "/procurement", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}/`, changeFrequency: "monthly" as const, priority: path ? 0.8 : 1 })),
    // Example case studies are left out until they're real
    ...work.filter((w) => !w.example).map((w) => ({ url: `${site.url}/work/${w.slug}/`, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${site.url}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
