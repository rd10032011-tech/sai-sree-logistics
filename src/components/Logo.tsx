'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLenisScroll } from '@/lib/lenis-context';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
}

const sizeMap = {
  sm: { dim: 32, name: 'text-sm', sub: 'text-xs' },
  md: { dim: 40, name: 'text-lg', sub: 'text-base' },
  lg: { dim: 56, name: 'text-2xl', sub: 'text-xl' },
};

export default function Logo({ showText = true, size = 'md', clickable = true }: LogoProps) {
  const { scrollTo } = useLenisScroll();

  const s = sizeMap[size];

  const content = (
    <div className="flex items-center gap-2.5">
      <div className="relative shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/images/logo.jpeg"
          alt="Sai Sree Logistics"
          width={s.dim}
          height={s.dim}
          className="object-cover"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${s.name} font-bold leading-tight tracking-tight text-white`}>
            Sai Sree
          </span>
          <span className={`${s.sub} font-light leading-tight tracking-wide text-gold`}>
            Logistics
          </span>
        </div>
      )}
    </div>
  );

  if (!clickable) return content;

  return (
    <motion.button
      onClick={() => scrollTo('#hero')}
      className="flex items-center gap-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
