'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden bg-grey-900">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-tiles-monolith/2400/1600"
          alt="Large-format porcelain tile floor in a minimal architectural interior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/20 to-grey-900/40" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10 pb-16 sm:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-5xl text-balance text-5xl leading-[0.98] font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Surfaces built to outlast the buildings around them.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
        >
          <p className="max-w-md text-balance text-base text-grey-100 sm:text-lg">
            Porcelain, marble, mosaic and stone — specified, supplied and delivered for architects
            who don&rsquo;t compromise on material.
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-grey-100 uppercase"
          >
            Scroll
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
