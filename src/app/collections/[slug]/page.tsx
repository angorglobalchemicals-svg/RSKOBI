import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ProductGallery } from '@/components/sections/ProductGallery';
import { ProductOptions } from '@/components/sections/ProductOptions';
import { RelatedProducts } from '@/components/sections/RelatedProducts';
import { getProduct, getRelatedProducts, products } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — RSKOBI INTERNATIONAL`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <div className="pt-32 sm:pt-40">
        <Container>
          <nav className="mb-10 flex items-center gap-2 text-sm text-grey-400">
            <Link href="/collections" className="hover:text-grey-900">
              Collections
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-grey-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 pb-24 lg:grid-cols-2 lg:gap-20 lg:pb-32">
            <ProductGallery images={product.gallery} name={product.name} />

            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
                  {product.collection}
                </p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-5xl">
                  {product.name}
                </h1>
                <p className="max-w-md text-balance text-grey-400">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 border-y border-grey-100 py-6 sm:grid-cols-3">
                <div>
                  <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                    Thickness
                  </p>
                  <p className="font-semibold text-grey-900">{product.thickness}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                    From
                  </p>
                  <p className="font-semibold text-grey-900">{product.priceFrom}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                    Collection
                  </p>
                  <p className="font-semibold text-grey-900">{product.collection}</p>
                </div>
              </div>

              <ProductOptions sizes={product.sizes} finishes={product.finishes} />
            </div>
          </div>
        </Container>
      </div>

      <RelatedProducts products={related} />
    </>
  );
}
