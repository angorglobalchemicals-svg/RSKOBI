import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects — RSKOBI INTERNATIONAL',
  description: 'Residential, hospitality and commercial projects specified from the RSKOBI INTERNATIONAL catalogue.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Where our materials ended up."
        description="A selection of the residential, hospitality and commercial work our collections have shipped for."
      />
      <ProjectsGrid />
    </>
  );
}
