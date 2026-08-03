import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProductCard } from './ProductCard';
import type { Collection } from '@/data/collections';
import type { Product } from '@/data/products';

export function CollectionDetail({ collection, items }: { collection: Collection; items: Product[] }) {
  return (
    <div className="pt-32 sm:pt-40">
      <Container>
        <nav className="mb-10 flex items-center gap-2 text-sm text-grey-400">
          <Link href="/collections" className="hover:text-grey-900">
            Collections
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-grey-900">{collection.name}</span>
        </nav>

        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
              {collection.tagline}
            </p>
            <h1 className="max-w-3xl text-balance text-5xl leading-[1.02] font-extrabold tracking-tight text-grey-900 sm:text-7xl">
              {collection.name}
            </h1>
          </div>
          <p className="max-w-sm text-balance text-grey-400">{collection.description}</p>
        </div>

        <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl bg-grey-100">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mb-10 border-t border-grey-100 pt-10">
          <h2 className="text-2xl font-bold tracking-tight text-grey-900">
            {items.length} {items.length === 1 ? 'design' : 'designs'} in this collection
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 pb-24 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4 lg:pb-32">
          {items.map((product, i) => (
            <Reveal key={product.slug} delay={Math.min(i * 0.03, 0.3)}>
              <ProductCard product={product} priority={i < 4} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
