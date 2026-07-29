'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials, clients } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="border-t border-grey-100 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Trusted by the people who spec us." className="mb-16" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08} className="flex flex-col gap-6 border-t border-grey-100 pt-6">
              <p className="text-balance text-xl leading-snug font-medium text-grey-900 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-sm text-grey-400">
                <span className="font-semibold text-grey-900">{t.author}</span> — {t.role}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-grey-100 pt-10">
          {clients.map((client) => (
            <span key={client} className="text-sm font-semibold tracking-wide text-grey-300 uppercase">
              {client}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
