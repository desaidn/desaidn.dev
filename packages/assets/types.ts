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

export type ResumeContact = Readonly<{
  label: string;
  href?: string;
}>;

export type ResumeExperience = Readonly<{
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  highlights: readonly string[];
}>;

export type ResumeSkillGroup = Readonly<{
  label: string;
  skills: readonly string[];
}>;

export type ResumeEducation = Readonly<{
  degree: string;
  institution: string;
  location: string;
}>;

export type Resume = Readonly<{
  name: string;
  headline: string;
  contacts: readonly ResumeContact[];
  summary: string;
  experiences: readonly ResumeExperience[];
  skillGroups: readonly ResumeSkillGroup[];
  education: ResumeEducation;
}>;

export type TerminalCommand = {
  name: string;
  output: ReactElement[];
  typingSpeed?: number;
  waitAfter?: number;
};
