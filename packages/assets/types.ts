import type { ReactElement, ReactNode } from 'react';

export type Experience = {
  id: string;
  company: string;
  link: string;
  role: string;
  location: string;
  highlights: string[];
  dates?: string;
  description?: ReactNode;
  technologies?: string[];
};

export type TerminalCommand = {
  name: string;
  output: ReactElement[];
  typingSpeed?: number;
  waitAfter?: number;
};
