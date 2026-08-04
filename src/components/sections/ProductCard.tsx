import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link href={`/collections/${product.slug}`} className="group block">
      <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl bg-grey-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex size-11 items-center justify-center rounded-full bg-white text-grey-900">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </div>
      <div>
        <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">{product.collection}</p>
        <h3 className="text-lg font-semibold tracking-tight text-grey-900">{product.name}</h3>
      </div>
    </Link>
  );
}
