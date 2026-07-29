'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || open ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between md:h-24">
            <Link href="/" className="text-lg font-bold tracking-tight text-grey-900 md:text-xl">
              MONOLITH
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide text-grey-600 transition-colors hover:text-grey-900',
                    pathname === link.href && 'text-grey-900',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-6 bg-grey-900"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-6 bg-grey-900"
              />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-grey-900"
          >
            <Container>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-4 py-3 text-5xl font-bold tracking-tight text-white sm:text-7xl"
                    >
                      <span className="text-base font-medium text-grey-400 group-hover:text-white">
                        0{i + 1}
                      </span>
                      <span className="transition-colors duration-300 group-hover:text-grey-300">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-grey-400 sm:flex-row sm:gap-10"
              >
                <a href="mailto:hello@monolithtiles.com" className="hover:text-white">
                  hello@monolithtiles.com
                </a>
                <a href="tel:+18005551234" className="hover:text-white">
                  +1 (800) 555-1234
                </a>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
