import { MapPin } from 'lucide-react';

export function MapPlaceholder() {
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-grey-50 sm:aspect-auto sm:h-full"
      style={{
        backgroundImage:
          'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
      role="img"
      aria-label="Map showing the RSKOBI INTERNATIONAL showroom location"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-full bg-grey-900 text-white shadow-lg">
          <MapPin className="size-6" />
        </span>
        <p className="rounded-full bg-white px-4 py-2 text-sm font-medium text-grey-900 shadow-sm">
          123 Foundry Lane, Auckland
        </p>
      </div>
    </div>
  );
}
