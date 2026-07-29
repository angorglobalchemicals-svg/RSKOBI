import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const team = [
  { name: 'Elena Marsh', role: 'Co-Founder & Materials Director', image: 'https://picsum.photos/seed/team-elena/800/1000' },
  { name: 'Cole Whitfield', role: 'Co-Founder & Supply Chain', image: 'https://picsum.photos/seed/team-cole/800/1000' },
  { name: 'Amara Osei', role: 'Head of Specification', image: 'https://picsum.photos/seed/team-amara/800/1000' },
  { name: 'Ren Takahashi', role: 'Quality & Testing Lead', image: 'https://picsum.photos/seed/team-ren/800/1000' },
];

export function Team() {
  return (
    <section className="border-t border-grey-100 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="The team" title="Small studio, global reach." className="mb-16" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl bg-grey-100 grayscale transition-all duration-500 hover:grayscale-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold tracking-tight text-grey-900">{member.name}</h3>
              <p className="text-sm text-grey-400">{member.role}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
