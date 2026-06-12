'use client';

import { useState, useEffect, useCallback } from 'react';
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
  const [activeSection, setActiveSection] = useState('#hero');
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const sections = navLinks
      .map((l) => document.getElementById(l.target.slice(1)))
      .filter(Boolean);

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((target: string) => {
    setMobileOpen(false);
    scrollTo(target);
  }, [scrollTo]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050816]/85 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo size="md" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <motion.button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-white/20 transition-all duration-300 group-hover:w-3/4" />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.button
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-full bg-gold/90 hover:bg-gold px-6 py-2.5 text-sm font-semibold text-background transition-all duration-300 md:block"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,163,0,0.3)' }}
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
            className="h-[2px] w-6 bg-white rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-6 bg-white rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white rounded-full"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 border-b border-white/[0.04] bg-[#050816]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <motion.button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    activeSection === link.target
                      ? 'text-white bg-white/[0.04]'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.02]'
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 rounded-full bg-gold/90 px-6 py-3 text-center text-sm font-semibold text-background"
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
