'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenisScroll } from '@/lib/lenis-context';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', target: '#hero' },
  { label: 'Services', target: '#services' },
  { label: 'Industries', target: '#industries' },
  { label: 'About', target: '#founder' },
  { label: 'Contact', target: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    scrollTo(target);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050816]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo size="md" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <motion.button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-primary transition-all duration-300 group-hover:w-3/4" />
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => scrollTo('#contact')}
          className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110 md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <motion.button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-background"
                whileTap={{ scale: 0.97 }}
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
