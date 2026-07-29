export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The material knowledge on the other end of the phone is what kept us coming back — every spec question got a straight answer.',
    author: 'Mara Voss',
    role: 'Principal, Voss Architecture',
  },
  {
    quote:
      'We re-floored an entire hotel lobby without a single batch mismatch. That kind of consistency is rare at this scale.',
    author: 'Daniel Reyes',
    role: 'Project Director, The Alden Hotel',
  },
  {
    quote:
      'Samples arrived within two days, full pallets within two weeks. For a residential build on a tight timeline, that mattered.',
    author: 'Priya Nathan',
    role: 'Interior Designer, Nathan & Co.',
  },
  {
    quote:
      'Their terrazzo held up to eighteen months of retail foot traffic without a visible change in finish.',
    author: 'Tom Fairweather',
    role: 'Facilities Lead, Birchwood Market',
  },
];

export const clients = [
  'Voss Architecture',
  'The Alden Hotel',
  'Nathan & Co.',
  'Birchwood Market',
  'North End Studio',
  'Saltwater Baths',
];
