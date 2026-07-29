import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';
import { Stats } from '@/components/sections/Stats';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollections />
      <Stats />
      <ProjectsShowcase />
      <Testimonials />
      <CTA />
    </>
  );
}
