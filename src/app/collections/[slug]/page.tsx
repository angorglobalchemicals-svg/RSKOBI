import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/sections/ProductDetail';
import { CollectionDetail } from '@/components/sections/CollectionDetail';
import { getProduct, getRelatedProducts, products } from '@/data/products';
import { getCollection, collections } from '@/data/collections';

export function generateStaticParams() {
  return [
    ...products.map((p) => ({ slug: p.slug })),
    ...collections.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = getProduct(slug);
  if (product) {
    return {
      title: `${product.name} — RSKOBI INTERNATIONAL`,
      description: product.description,
    };
  }

  const collection = getCollection(slug);
  if (collection) {
    return {
      title: `${collection.name} — RSKOBI INTERNATIONAL`,
      description: collection.description,
    };
  }

  return {};
}

export default async function CollectionsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = getProduct(slug);
  if (product) {
    const related = getRelatedProducts(product);
    return <ProductDetail product={product} related={related} />;
  }

  const collection = getCollection(slug);
  if (collection) {
    const items = products.filter((p) => p.collectionSlug === collection.slug);
    return <CollectionDetail collection={collection} items={items} />;
  }

  notFound();
}
