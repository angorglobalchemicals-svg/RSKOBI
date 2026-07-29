import { Layers, ShieldCheck, Truck, Ruler } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const values = [
  {
    icon: Layers,
    title: 'Material first',
    description: 'We choose collections for structural performance before we choose them for looks.',
  },
  {
    icon: ShieldCheck,
    title: 'Batch accountability',
    description: 'Every pallet is traceable to its production run — no unexplained shade variation.',
  },
  {
    icon: Ruler,
    title: 'Precision specification',
    description: 'Full technical data sheets for every product, reviewed with your architect on request.',
  },
  {
    icon: Truck,
    title: 'Delivery you can plan around',
    description: 'Samples in 48 hours, full orders on a date we commit to in writing.',
  },
];

export function Values() {
  return (
    <section className="border-t border-grey-100 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="What we stand for" title="Four principles, no exceptions." className="mb-16" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} className="flex flex-col gap-4">
              <value.icon className="size-7 text-grey-900" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold tracking-tight text-grey-900">{value.title}</h3>
              <p className="text-sm text-grey-400">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
