'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { collections } from '@/data/collections';

const spans = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
];

export function FeaturedCollections() {
  const featured = collections.slice(0, 6);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="Six material families, one architectural standard."
          description="Every collection is engineered for a different structural and aesthetic brief — browse our material to find your specification."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[280px]">
          {featured.map((collection, i) => (
            <Reveal key={collection.slug} delay={i * 0.08} className={spans[i]}>
              <Link
                href={`/collections/${collection.slug}`}
                className="group relative flex h-full min-h-[320px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-grey-900"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-80 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="relative z-10 flex items-end justify-between gap-4 p-7">
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-[0.2em] text-grey-100 uppercase">
                      {collection.tagline}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {collection.name}
                    </h3>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors duration-300 group-hover:bg-white group-hover:text-grey-900">
                    <ArrowUpRight className="size-5 text-white transition-colors group-hover:text-grey-900" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
