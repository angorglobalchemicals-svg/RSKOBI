'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { collections } from '@/data/collections';
import { products } from '@/data/products';

export function ProductsGrid() {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all' ? products : products.filter((p) => p.collectionSlug === active);

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="mb-14 flex flex-wrap gap-3 border-b border-grey-100 pb-10">
          <button
            onClick={() => setActive('all')}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
              active === 'all' ? 'bg-grey-900 text-white' : 'bg-grey-50 text-grey-600 hover:bg-grey-100',
            )}
          >
            All ({products.length})
          </button>
          {collections.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                active === c.slug ? 'bg-grey-900 text-white' : 'bg-grey-50 text-grey-600 hover:bg-grey-100',
              )}
            >
              {c.name} ({products.filter((p) => p.collectionSlug === c.slug).length})
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/collections/${product.slug}`} className="group block">
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl bg-grey-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex size-11 items-center justify-center rounded-full bg-white text-grey-900">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                        {product.collection}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight text-grey-900">{product.name}</h3>
                    </div>
                    <span className="shrink-0 text-sm text-grey-400">{product.priceFrom}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
