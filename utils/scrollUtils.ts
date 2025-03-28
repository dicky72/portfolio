import { RefObject } from 'react';

export const scrollToSection = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};