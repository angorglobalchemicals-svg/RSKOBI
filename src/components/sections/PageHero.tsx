'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-white pt-40 pb-16 sm:pt-48 sm:pb-24">
      <Container>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 block text-xs font-semibold tracking-[0.25em] text-grey-400 uppercase"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance text-5xl leading-[1.02] font-extrabold tracking-tight text-grey-900 sm:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg text-grey-400"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
