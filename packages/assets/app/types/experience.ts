import type { ReactNode } from 'react';

export interface Experience {
  id: string;
  company: string;
  link: string;
  role: string;
  dates: string;
  location: string;
  highlights: string[];
  description?: ReactNode;
  technologies?: string[];
}
