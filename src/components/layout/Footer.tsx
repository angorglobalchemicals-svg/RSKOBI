import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const columns = [
  {
    title: 'Sitemap',
    links: [
      { href: '/', label: 'Home' },
      { href: '/collections', label: 'Collections' },
      { href: '/projects', label: 'Projects' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Collections',
    links: [
      { href: '/collections/porcelain', label: 'Porcelain' },
      { href: '/collections/marble', label: 'Marble' },
      { href: '/collections/mosaic', label: 'Mosaic' },
      { href: '/collections/terrazzo', label: 'Terrazzo' },
    ],
  },
  {
    title: 'Social',
    links: [
      { href: 'https://instagram.com', label: 'Instagram' },
      { href: 'https://pinterest.com', label: 'Pinterest' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-grey-900 pt-24 pb-10 text-white">
      <Container>
        <div className="flex flex-col justify-between gap-16 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-2xl text-balance text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Let&rsquo;s build your next surface.
            </h2>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-grey-900 transition-colors hover:bg-grey-100"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-grey-200 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-grey-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Monolith Tiles. All rights reserved.</p>
          <div className="flex gap-6">
            <span>123 Foundry Lane, Auckland</span>
            <span>hello@monolithtiles.com</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
