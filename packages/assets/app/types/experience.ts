export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string | undefined;
  technologies: string[] | undefined;
  highlights: string[];
}
