export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  count: number;
};

export const collections: Collection[] = [
  {
    slug: 'sl-sphera',
    name: 'SL SPHERA',
    tagline: 'Dense, durable, precise',
    description:
      'Fully vitrified porcelain bodies engineered for high-traffic interiors and exteriors, with a hardness that resists wear for decades.',
    image: '/images/collections/sl-sphera.png',
    count: 70,
  },
  {
    slug: 'marble',
    name: 'Marble',
    tagline: 'Natural veining, quarried',
    description:
      'Book-matched natural marble slabs and tiles, each piece carrying the unrepeatable geology of the quarry it came from.',
    image: 'https://picsum.photos/seed/marble-collection/1600/2000',
    count: 18,
  },
  {
    slug: 'mosaic',
    name: 'Mosaic',
    tagline: 'Composed, tactile detail',
    description:
      'Hand-set mosaic sheets in glass, stone, and metal — built for feature walls, pools, and thresholds that need texture.',
    image: 'https://picsum.photos/seed/mosaic-collection/1600/2000',
    count: 15,
  },
  {
    slug: 'terrazzo',
    name: 'Terrazzo',
    tagline: 'Aggregate, poured character',
    description:
      'Contemporary terrazzo with recycled aggregate blends, offered in large format for seamless architectural floors.',
    image: 'https://picsum.photos/seed/terrazzo-collection/1600/2000',
    count: 12,
  },
  {
    slug: 'ceramic',
    name: 'Ceramic',
    tagline: 'Warm body, glazed finish',
    description:
      'Glazed ceramic tiles balancing affordability and design range — a studio favourite for kitchens and bathrooms.',
    image: 'https://picsum.photos/seed/ceramic-collection/1600/2000',
    count: 20,
  },
  {
    slug: 'large-format-stone',
    name: 'Large Format Stone',
    tagline: 'Slab-scale, minimal joints',
    description:
      'Oversized stone-look slabs up to 1600mm, engineered to minimise grout lines and read as a single continuous surface.',
    image: 'https://picsum.photos/seed/large-format-collection/1600/2000',
    count: 10,
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
