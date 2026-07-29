'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export function ProjectsShowcase() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects specified from our catalogue."
            description="A small selection of the residential, hospitality and commercial work our materials have shipped for."
          />
          <Reveal delay={0.2}>
            <Button href="/projects" variant="outline">
              View all projects
            </Button>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-grey-100 lg:col-span-7 ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
                    {project.category} — {project.location}
                  </p>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-grey-900 sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-md text-grey-400">{project.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-grey-900">
                    View case study
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
