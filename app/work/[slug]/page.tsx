import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientCase from "../../components/case/ClientCase";
import ProductCase from "../../components/case/ProductCase";
import { getWork, work } from "../../lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${slug}` },
    // Example case studies stay out of search results until they're real
    robots: item.example ? { index: false, follow: true } : undefined,
  };
}

export default async function WorkItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  return item.kind === "product" ? <ProductCase item={item} /> : <ClientCase item={item} />;
}
