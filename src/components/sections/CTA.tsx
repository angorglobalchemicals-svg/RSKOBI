'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-grey-900">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/cta-tiles-monolith/2000/1200"
              alt="Close-up of a marble tile surface"
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/70 to-grey-900/40" />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-8 px-8 py-20 sm:px-14 sm:py-28">
            <Reveal>
              <h2 className="max-w-2xl text-balance text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl">
                Request samples before you specify.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-balance text-grey-300">
                We ship physical samples within 48 hours so your material decision is made in the
                room it&rsquo;s going into, not a screen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button href="/contact" variant="primary" className="bg-white text-grey-900 hover:bg-grey-100">
                Request samples
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
