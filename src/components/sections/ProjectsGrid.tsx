'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

export function ProjectsGrid() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className={i % 3 === 0 ? 'sm:col-span-2' : ''}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div
                  className={`relative mb-6 overflow-hidden rounded-2xl bg-grey-100 ${
                    i % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[4/5]'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  <span className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-5 text-grey-900" />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
                      {project.category} — {project.location}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-grey-900">{project.title}</h3>
                  </div>
                  <span className="shrink-0 text-sm text-grey-400">{project.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
