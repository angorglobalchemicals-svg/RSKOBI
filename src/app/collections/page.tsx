import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ProductsGrid } from '@/components/sections/ProductsGrid';

export const metadata: Metadata = {
  title: 'Collections — RSKOBI INTERNATIONAL',
  description: 'Browse porcelain, marble, mosaic, terrazzo, ceramic and large-format stone tile collections.',
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Every surface, catalogued by material."
        description="Filter by collection to find the porcelain, marble, mosaic, terrazzo, ceramic or large-format stone that fits your brief."
      />
      <ProductsGrid />
    </>
  );
}
