'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full border-b border-grey-200 bg-transparent py-3 text-grey-900 placeholder:text-grey-300 focus:border-grey-900 focus:outline-none transition-colors';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-start justify-center gap-4"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-grey-900 text-white">
              <Check className="size-5" />
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-grey-900">Message sent.</h3>
            <p className="max-w-sm text-grey-400">
              Thanks for reaching out — a member of our specification team will reply within one
              business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-[0.15em] text-grey-400 uppercase">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Jane Cooper" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-[0.15em] text-grey-400 uppercase">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="jane@studio.com" className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="mb-2 block text-xs font-semibold tracking-[0.15em] text-grey-400 uppercase">
                Project type
              </label>
              <select id="project" name="project" className={inputClasses}>
                <option>Residential</option>
                <option>Hospitality</option>
                <option>Commercial</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-[0.15em] text-grey-400 uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project, timeline and materials of interest."
                className={inputClasses}
              />
            </div>

            <Button type="submit" variant="primary" className="self-start" showArrow={false}>
              Send message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
