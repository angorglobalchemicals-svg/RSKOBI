const items = ['SL SPHERA', 'Marble', 'Mosaic', 'Terrazzo', 'Ceramic', 'Large Format Stone'];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-grey-100 bg-white py-6">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-2xl font-bold tracking-tight text-grey-900 sm:text-3xl">
              {item}
            </span>
            <span className="text-2xl text-grey-200 sm:text-3xl" aria-hidden>
              —
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
