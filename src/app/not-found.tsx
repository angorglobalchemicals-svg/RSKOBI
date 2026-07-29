import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-32">
      <Container className="flex flex-col items-start gap-6">
        <p className="text-xs font-semibold tracking-[0.25em] text-grey-400 uppercase">404</p>
        <h1 className="max-w-xl text-balance text-5xl font-extrabold tracking-tight text-grey-900 sm:text-7xl">
          This surface doesn&rsquo;t exist.
        </h1>
        <p className="max-w-md text-grey-400">
          The page you&rsquo;re looking for may have moved. Head back to the homepage or browse our
          collections.
        </p>
        <div className="flex gap-4">
          <Button href="/">Back home</Button>
          <Link
            href="/collections"
            className="inline-flex items-center px-2 py-3.5 text-sm font-medium text-grey-600 hover:text-grey-900"
          >
            Browse collections
          </Link>
        </div>
      </Container>
    </section>
  );
}
