import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { BrandStory } from '@/components/sections/BrandStory';
import { Values } from '@/components/sections/Values';
import { Team } from '@/components/sections/Team';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About — Monolith Tiles',
  description: 'Monolith Tiles supplies porcelain, marble and stone surfaces directly from quarry to architect.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Twenty-seven years between quarry and site."
        description="We supply the materials, not the marketing. Here's who we are and why we still test every batch by hand."
      />
      <BrandStory />
      <Values />
      <Stats />
      <Team />
      <CTA />
    </>
  );
}
