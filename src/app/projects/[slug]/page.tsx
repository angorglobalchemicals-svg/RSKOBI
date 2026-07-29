import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CTA } from '@/components/sections/CTA';
import { getProject, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — RSKOBI INTERNATIONAL`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <div className="pt-32 sm:pt-40">
        <Container>
          <nav className="mb-10 flex items-center gap-2 text-sm text-grey-400">
            <Link href="/projects" className="hover:text-grey-900">
              Projects
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-grey-900">{project.title}</span>
          </nav>

          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
                {project.category} — {project.location}
              </p>
              <h1 className="max-w-3xl text-balance text-5xl leading-[1.02] font-extrabold tracking-tight text-grey-900 sm:text-7xl">
                {project.title}
              </h1>
            </div>
            <p className="max-w-sm text-balance text-grey-400">{project.description}</p>
          </div>

          <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl bg-grey-100">
            <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          </div>

          <div className="mb-24 grid grid-cols-1 gap-6 border-y border-grey-100 py-10 sm:grid-cols-3 sm:gap-10">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="mb-1 text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold tracking-tight text-grey-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-24 flex flex-col gap-6">
            {project.gallery.map((img, i) => (
              <Reveal key={img} delay={i * 0.08} className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-grey-100">
                <Image
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <CTA />
    </>
  );
}
