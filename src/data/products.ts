export type Product = {
  slug: string;
  name: string;
  collectionSlug: string;
  collection: string;
  image: string;
  gallery: string[];
  description: string;
  sizes: string[];
  finishes: string[];
  thickness: string;
  priceFrom: string;
};

export const products: Product[] = [
  {
    slug: 'onda-grigio',
    name: 'Onda Grigio',
    collectionSlug: 'sl-sphera',
    collection: 'SL SPHERA',
    image: 'https://picsum.photos/seed/onda-grigio/1400/1750',
    gallery: [
      'https://picsum.photos/seed/onda-grigio-1/1600/1200',
      'https://picsum.photos/seed/onda-grigio-2/1600/1200',
      'https://picsum.photos/seed/onda-grigio-3/1600/1200',
    ],
    description:
      'A wave-textured porcelain body in cool grey, rectified for tight joints and engineered for both floor and wall application.',
    sizes: ['600 × 600mm', '600 × 1200mm', '300 × 600mm'],
    finishes: ['Matte', 'Textured'],
    thickness: '9.5mm',
    priceFrom: '$68 / m²',
  },
  {
    slug: 'pietra-nera',
    name: 'Pietra Nera',
    collectionSlug: 'sl-sphera',
    collection: 'SL SPHERA',
    image: 'https://picsum.photos/seed/pietra-nera/1400/1750',
    gallery: [
      'https://picsum.photos/seed/pietra-nera-1/1600/1200',
      'https://picsum.photos/seed/pietra-nera-2/1600/1200',
      'https://picsum.photos/seed/pietra-nera-3/1600/1200',
    ],
    description:
      'Near-black stone-look porcelain with a honed surface, designed for architectural floors that need to disappear underfoot.',
    sizes: ['800 × 800mm', '600 × 1200mm'],
    finishes: ['Honed', 'Polished'],
    thickness: '10mm',
    priceFrom: '$74 / m²',
  },
  {
    slug: 'calacatta-oro',
    name: 'Calacatta Oro',
    collectionSlug: 'marble',
    collection: 'Marble',
    image: 'https://picsum.photos/seed/calacatta-oro/1400/1750',
    gallery: [
      'https://picsum.photos/seed/calacatta-oro-1/1600/1200',
      'https://picsum.photos/seed/calacatta-oro-2/1600/1200',
      'https://picsum.photos/seed/calacatta-oro-3/1600/1200',
    ],
    description:
      'Book-matched natural marble with soft gold veining across a bright white ground — quarried and honed in small batches.',
    sizes: ['600 × 600mm', '900 × 900mm', 'Slab'],
    finishes: ['Polished', 'Honed'],
    thickness: '12mm',
    priceFrom: '$142 / m²',
  },
  {
    slug: 'verde-alpi',
    name: 'Verde Alpi',
    collectionSlug: 'marble',
    collection: 'Marble',
    image: 'https://picsum.photos/seed/verde-alpi/1400/1750',
    gallery: [
      'https://picsum.photos/seed/verde-alpi-1/1600/1200',
      'https://picsum.photos/seed/verde-alpi-2/1600/1200',
      'https://picsum.photos/seed/verde-alpi-3/1600/1200',
    ],
    description:
      'Deep, dense marble with dramatic white fault lines — a signature stone for feature walls and vanity tops.',
    sizes: ['600 × 900mm', 'Slab'],
    finishes: ['Polished'],
    thickness: '15mm',
    priceFrom: '$198 / m²',
  },
  {
    slug: 'frammento-glass',
    name: 'Frammento Glass',
    collectionSlug: 'mosaic',
    collection: 'Mosaic',
    image: 'https://picsum.photos/seed/frammento-glass/1400/1750',
    gallery: [
      'https://picsum.photos/seed/frammento-glass-1/1600/1200',
      'https://picsum.photos/seed/frammento-glass-2/1600/1200',
      'https://picsum.photos/seed/frammento-glass-3/1600/1200',
    ],
    description:
      'Hand-cut glass mosaic sheets with a soft grey gradient, built for wet-area feature walls and pool waterlines.',
    sizes: ['300 × 300mm sheet'],
    finishes: ['Gloss'],
    thickness: '4mm',
    priceFrom: '$96 / m²',
  },
  {
    slug: 'metallo-lin',
    name: 'Metallo Lin',
    collectionSlug: 'mosaic',
    collection: 'Mosaic',
    image: 'https://picsum.photos/seed/metallo-lin/1400/1750',
    gallery: [
      'https://picsum.photos/seed/metallo-lin-1/1600/1200',
      'https://picsum.photos/seed/metallo-lin-2/1600/1200',
      'https://picsum.photos/seed/metallo-lin-3/1600/1200',
    ],
    description:
      'Brushed metal and stone blend mosaic in linen grey, sized for splashbacks and joinery reveals.',
    sizes: ['300 × 300mm sheet'],
    finishes: ['Brushed'],
    thickness: '8mm',
    priceFrom: '$118 / m²',
  },
  {
    slug: 'cemento-largo',
    name: 'Cemento Largo',
    collectionSlug: 'terrazzo',
    collection: 'Terrazzo',
    image: 'https://picsum.photos/seed/cemento-largo/1400/1750',
    gallery: [
      'https://picsum.photos/seed/cemento-largo-1/1600/1200',
      'https://picsum.photos/seed/cemento-largo-2/1600/1200',
      'https://picsum.photos/seed/cemento-largo-3/1600/1200',
    ],
    description:
      'Large-format poured terrazzo with fine aggregate, formulated for continuous architectural floors with minimal joints.',
    sizes: ['1200 × 1200mm', '1200 × 2400mm'],
    finishes: ['Matte', 'Polished'],
    thickness: '20mm',
    priceFrom: '$156 / m²',
  },
  {
    slug: 'confetti-bianco',
    name: 'Confetti Bianco',
    collectionSlug: 'terrazzo',
    collection: 'Terrazzo',
    image: 'https://picsum.photos/seed/confetti-bianco/1400/1750',
    gallery: [
      'https://picsum.photos/seed/confetti-bianco-1/1600/1200',
      'https://picsum.photos/seed/confetti-bianco-2/1600/1200',
      'https://picsum.photos/seed/confetti-bianco-3/1600/1200',
    ],
    description:
      'Bright white terrazzo base with coarse grey and black chip, a studio favourite for lobbies and retail floors.',
    sizes: ['600 × 600mm', '1200 × 1200mm'],
    finishes: ['Polished'],
    thickness: '18mm',
    priceFrom: '$134 / m²',
  },
  {
    slug: 'argilla-sabbia',
    name: 'Argilla Sabbia',
    collectionSlug: 'ceramic',
    collection: 'Ceramic',
    image: 'https://picsum.photos/seed/argilla-sabbia/1400/1750',
    gallery: [
      'https://picsum.photos/seed/argilla-sabbia-1/1600/1200',
      'https://picsum.photos/seed/argilla-sabbia-2/1600/1200',
      'https://picsum.photos/seed/argilla-sabbia-3/1600/1200',
    ],
    description:
      'Warm sand-toned glazed ceramic with a soft handmade edge, suited to kitchens, splashbacks and bathroom walls.',
    sizes: ['100 × 300mm', '200 × 200mm'],
    finishes: ['Gloss', 'Matte'],
    thickness: '8mm',
    priceFrom: '$52 / m²',
  },
  {
    slug: 'grigio-perla',
    name: 'Grigio Perla',
    collectionSlug: 'ceramic',
    collection: 'Ceramic',
    image: 'https://picsum.photos/seed/grigio-perla/1400/1750',
    gallery: [
      'https://picsum.photos/seed/grigio-perla-1/1600/1200',
      'https://picsum.photos/seed/grigio-perla-2/1600/1200',
      'https://picsum.photos/seed/grigio-perla-3/1600/1200',
    ],
    description:
      'Pearl-grey glazed ceramic with a subtle sheen, an everyday workhorse for residential wet areas.',
    sizes: ['300 × 600mm', '200 × 200mm'],
    finishes: ['Satin'],
    thickness: '8.5mm',
    priceFrom: '$46 / m²',
  },
  {
    slug: 'monolite-antracite',
    name: 'Monolite Antracite',
    collectionSlug: 'large-format-stone',
    collection: 'Large Format Stone',
    image: 'https://picsum.photos/seed/monolite-antracite/1400/1750',
    gallery: [
      'https://picsum.photos/seed/monolite-antracite-1/1600/1200',
      'https://picsum.photos/seed/monolite-antracite-2/1600/1200',
      'https://picsum.photos/seed/monolite-antracite-3/1600/1200',
    ],
    description:
      'Slab-scale anthracite stone-look surface up to 1600mm, engineered for near-seamless architectural floors and cladding.',
    sizes: ['1600 × 3200mm', '1200 × 2400mm'],
    finishes: ['Honed'],
    thickness: '12mm',
    priceFrom: '$212 / m²',
  },
  {
    slug: 'monolite-avorio',
    name: 'Monolite Avorio',
    collectionSlug: 'large-format-stone',
    collection: 'Large Format Stone',
    image: 'https://picsum.photos/seed/monolite-avorio/1400/1750',
    gallery: [
      'https://picsum.photos/seed/monolite-avorio-1/1600/1200',
      'https://picsum.photos/seed/monolite-avorio-2/1600/1200',
      'https://picsum.photos/seed/monolite-avorio-3/1600/1200',
    ],
    description:
      'Ivory slab-format surface with faint natural mineral striation, suited to expansive floors and vanity runs.',
    sizes: ['1600 × 3200mm', '1200 × 2400mm'],
    finishes: ['Polished', 'Honed'],
    thickness: '12mm',
    priceFrom: '$204 / m²',
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3) {
  return products
    .filter((p) => p.collectionSlug === product.collectionSlug && p.slug !== product.slug)
    .concat(products.filter((p) => p.slug !== product.slug))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, count);
}
