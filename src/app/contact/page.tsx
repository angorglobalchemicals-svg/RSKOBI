import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { ShowroomMap } from '@/components/sections/ShowroomMap';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Contact — RSKOBI INTERNATIONAL',
  description: 'Get in touch with the RSKOBI INTERNATIONAL team for samples, quotes and showroom visits.',
};

const details = [
  { icon: Mail, label: 'Email', value: 'rskobi@rskobiinternational.com' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-1234' },
  { icon: MapPin, label: 'Address', value: '6 Obi Ln, GRA, Onitsha 434106, Anambra, Nigeria' },
  { icon: Clock, label: 'Showroom hours', value: 'Mon–Fri, 9am–5:30pm' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come see the materials in person."
        description="Request samples, ask a specification question, or book a showroom visit — our team replies within one business day."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6">
              <ContactForm />
            </Reveal>

            <div className="flex flex-col gap-10 lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <ShowroomMap />
              </Reveal>

              <Reveal delay={0.15} className="flex flex-col gap-6 border-t border-grey-100 pt-8">
                {details.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <detail.icon className="mt-0.5 size-5 shrink-0 text-grey-900" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-medium tracking-[0.15em] text-grey-400 uppercase">
                        {detail.label}
                      </p>
                      <p className="font-medium text-grey-900">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
