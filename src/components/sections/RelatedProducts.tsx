import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import type { Product } from '@/data/products';

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-grey-100 py-24 sm:py-32">
      <Container>
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-grey-900 sm:text-3xl">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <Link href={`/collections/${product.slug}`} className="group block">
                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl bg-grey-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                  {product.collection}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-grey-900">{product.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
