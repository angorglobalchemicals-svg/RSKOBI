'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function ProductOptions({ sizes, finishes }: { sizes: string[]; finishes: string[] }) {
  const [size, setSize] = useState(sizes[0]);
  const [finish, setFinish] = useState(finishes[0]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                size === s
                  ? 'border-grey-900 bg-grey-900 text-white'
                  : 'border-grey-100 text-grey-600 hover:border-grey-300',
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-grey-400 uppercase">Finish</p>
        <div className="flex flex-wrap gap-2">
          {finishes.map((f) => (
            <button
              key={f}
              onClick={() => setFinish(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                finish === f
                  ? 'border-grey-900 bg-grey-900 text-white'
                  : 'border-grey-100 text-grey-600 hover:border-grey-300',
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button href="/contact" variant="primary">
          Request a sample
        </Button>
        <Button href="/contact" variant="outline" showArrow={false}>
          Get a quote
        </Button>
      </div>
    </div>
  );
}
