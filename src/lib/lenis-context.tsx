'use client';

import { createContext, useContext } from 'react';

interface LenisContextValue {
  scrollTo: (target: string) => void;
}

export const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
});

export function useLenisScroll() {
  return useContext(LenisContext);
}
