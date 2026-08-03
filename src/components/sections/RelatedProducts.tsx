import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProductCard } from './ProductCard';
import type { Product } from '@/data/products';

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-grey-100 py-24 sm:py-32">
      <Container>
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-grey-900 sm:text-3xl">
          You may also like
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
