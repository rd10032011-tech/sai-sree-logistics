'use client';

import { motion } from 'framer-motion';
import { useLenisScroll } from '@/lib/lenis-context';
import Logo from './Logo';

const footerLinks = {
  Services: [
    { label: 'Manpower Supply', target: '#services' },
    { label: 'Warehousing', target: '#services' },
    { label: 'Transportation', target: '#services' },
    { label: '3PL Solutions', target: '#services' },
  ],
  Company: [
    { label: 'About Us', target: '#founder' },
    { label: 'Our Team', target: '#founder' },
    { label: 'Careers', target: '#' },
    { label: 'Contact', target: '#contact' },
  ],
  Support: [
    { label: 'Help Center', target: '#' },
    { label: 'Privacy Policy', target: '#' },
    { label: 'Terms of Service', target: '#' },
    { label: 'FAQ', target: '#' },
  ],
};

export default function Footer() {
  const { scrollTo } = useLenisScroll();

  const handleClick = (target: string) => {
    if (target === '#') return;
    scrollTo(target);
  };

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              India&apos;s trusted workforce and 3PL infrastructure partner, delivering
              operational excellence across 20+ cities.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
            >
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => handleClick(link.target)}
                      className="text-sm text-white/40 transition-colors hover:text-gold"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sai Sree Logistics. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-xs text-white/30 transition-colors hover:text-gold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
