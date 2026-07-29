'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const stats = [
  { value: 27, suffix: '+', label: 'Years supplying architects & designers' },
  { value: 1200, suffix: '+', label: 'Projects completed worldwide' },
  { value: 99, suffix: '', label: 'Material collections in catalogue' },
  { value: 98, suffix: '%', label: 'Orders delivered on schedule' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)));
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-grey-900 py-24 text-white sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Monolith"
          title="Built on material honesty and delivery you can plan around."
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3">
              <p className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="max-w-[20ch] text-sm text-grey-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
