import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function BrandStory() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="text-balance text-3xl leading-[1.2] font-bold tracking-tight text-grey-900 sm:text-4xl">
              Monolith started in a quarry office, not a showroom. That order hasn&rsquo;t changed.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-grey-600">
              We were founded in 1998 by two materials engineers who thought the tile industry had
              gotten too far from the stone itself — too many middlemen, too little accountability
              for what actually arrived on site.
            </p>
            <p className="text-lg text-grey-600">
              Today we work directly with quarries and manufacturers across three continents,
              testing every batch against our own tolerances before it reaches an architect&rsquo;s
              desk. No collection ships until someone on our team has walked on it.
            </p>
            <p className="text-lg text-grey-600">
              We&rsquo;re still a relatively small team by design — big enough to hold global supply
              relationships, small enough that the person who quotes your job is the person who
              answers when something needs to change.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mt-20 aspect-[21/9] overflow-hidden rounded-2xl bg-grey-100">
          <Image
            src="https://picsum.photos/seed/about-monolith-studio/2000/900"
            alt="Monolith Tiles studio and material library"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
