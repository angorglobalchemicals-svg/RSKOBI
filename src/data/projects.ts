export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'harbor-house',
    title: 'Harbor House',
    location: 'Auckland, NZ',
    category: 'Residential',
    year: '2025',
    image: 'https://picsum.photos/seed/harbor-house/1600/2000',
    gallery: [
      'https://picsum.photos/seed/harbor-house-1/1600/1100',
      'https://picsum.photos/seed/harbor-house-2/1600/1100',
      'https://picsum.photos/seed/harbor-house-3/1600/1100',
    ],
    description:
      'A cliffside residence using large-format porcelain across open-plan living floors, chosen to read as a single continuous plane against the harbour view.',
    stats: [
      { label: 'Area', value: '420 m²' },
      { label: 'Collection', value: 'SL SPHERA' },
      { label: 'Completed', value: '2025' },
    ],
  },
  {
    slug: 'the-alden-hotel',
    title: 'The Alden Hotel',
    location: 'Melbourne, AU',
    category: 'Hospitality',
    year: '2024',
    image: 'https://picsum.photos/seed/alden-hotel/1600/2000',
    gallery: [
      'https://picsum.photos/seed/alden-hotel-1/1600/1100',
      'https://picsum.photos/seed/alden-hotel-2/1600/1100',
      'https://picsum.photos/seed/alden-hotel-3/1600/1100',
    ],
    description:
      'A boutique hotel lobby and bar clad in book-matched marble, extended through to guest bathrooms in a quieter honed finish.',
    stats: [
      { label: 'Rooms', value: '86' },
      { label: 'Collection', value: 'Marble' },
      { label: 'Completed', value: '2024' },
    ],
  },
  {
    slug: 'north-end-studio',
    title: 'North End Studio',
    location: 'Wellington, NZ',
    category: 'Commercial',
    year: '2024',
    image: 'https://picsum.photos/seed/north-end-studio/1600/2000',
    gallery: [
      'https://picsum.photos/seed/north-end-studio-1/1600/1100',
      'https://picsum.photos/seed/north-end-studio-2/1600/1100',
      'https://picsum.photos/seed/north-end-studio-3/1600/1100',
    ],
    description:
      'A design studio fit-out where poured terrazzo floors and a mosaic-clad reception desk anchor an otherwise minimal shell.',
    stats: [
      { label: 'Area', value: '640 m²' },
      { label: 'Collection', value: 'Terrazzo' },
      { label: 'Completed', value: '2024' },
    ],
  },
  {
    slug: 'saltwater-baths',
    title: 'Saltwater Baths',
    location: 'Sydney, AU',
    category: 'Hospitality',
    year: '2023',
    image: 'https://picsum.photos/seed/saltwater-baths/1600/2000',
    gallery: [
      'https://picsum.photos/seed/saltwater-baths-1/1600/1100',
      'https://picsum.photos/seed/saltwater-baths-2/1600/1100',
      'https://picsum.photos/seed/saltwater-baths-3/1600/1100',
    ],
    description:
      'A public bathhouse using glass mosaic across pool interiors and wet walls, selected for its resistance to chlorinated water and constant use.',
    stats: [
      { label: 'Pools', value: '4' },
      { label: 'Collection', value: 'Mosaic' },
      { label: 'Completed', value: '2023' },
    ],
  },
  {
    slug: 'kessler-residence',
    title: 'Kessler Residence',
    location: 'Queenstown, NZ',
    category: 'Residential',
    year: '2023',
    image: 'https://picsum.photos/seed/kessler-residence/1600/2000',
    gallery: [
      'https://picsum.photos/seed/kessler-residence-1/1600/1100',
      'https://picsum.photos/seed/kessler-residence-2/1600/1100',
      'https://picsum.photos/seed/kessler-residence-3/1600/1100',
    ],
    description:
      'An alpine home pairing warm ceramic wall tile with slab-format stone flooring, built to hold up against snow-season traffic.',
    stats: [
      { label: 'Area', value: '310 m²' },
      { label: 'Collection', value: 'Large Format Stone' },
      { label: 'Completed', value: '2023' },
    ],
  },
  {
    slug: 'birchwood-market',
    title: 'Birchwood Market',
    location: 'Brisbane, AU',
    category: 'Commercial',
    year: '2022',
    image: 'https://picsum.photos/seed/birchwood-market/1600/2000',
    gallery: [
      'https://picsum.photos/seed/birchwood-market-1/1600/1100',
      'https://picsum.photos/seed/birchwood-market-2/1600/1100',
      'https://picsum.photos/seed/birchwood-market-3/1600/1100',
    ],
    description:
      'A food hall floored in durable ceramic across 1,200 square metres, specified for slip resistance and easy maintenance at scale.',
    stats: [
      { label: 'Area', value: '1,200 m²' },
      { label: 'Collection', value: 'Ceramic' },
      { label: 'Completed', value: '2022' },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
