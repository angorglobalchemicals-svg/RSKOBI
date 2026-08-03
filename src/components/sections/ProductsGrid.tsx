'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { collections } from '@/data/collections';
import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

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
          className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4"
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
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
