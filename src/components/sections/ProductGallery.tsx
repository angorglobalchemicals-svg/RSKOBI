'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-grey-100">
        <Image
          key={active}
          src={images[active] ?? images[0] ?? ''}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={cn(
              'relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-grey-100 ring-2 ring-offset-2 transition-all',
              active === i ? 'ring-grey-900' : 'ring-transparent',
            )}
            aria-label={`View ${name} image ${i + 1}`}
          >
            <Image src={img} alt="" fill sizes="112px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
