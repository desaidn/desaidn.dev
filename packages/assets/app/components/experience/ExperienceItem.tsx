import { memo, type ReactElement } from 'react';
import type { Experience } from 'types';
import useHeightAnimation from '../../hooks/useHeightAnimation';
import Link from '../common/Link';

export interface ExperienceItemProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceItem = memo(
  ({ experience, isOpen, onToggle }: ExperienceItemProps): ReactElement => {
    const animationProps = useHeightAnimation(isOpen);

    return (
      <div
        className={`bg-primary/80 border rounded-lg overflow-hidden transition-[border-color] duration-300 ${
          isOpen
            ? 'border-link/50'
            : 'border-border/50 hover:border-link/50'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full p-6 text-left hover:bg-primary/30 transition-colors duration-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-secondary mb-2 transition-colors duration-200">
                {experience.role}
              </h3>
              <div className="mb-2">
                <Link
                  href={experience.link}
                  className="text-lg text-link hover:text-link-hover mb-2 underline underline-offset-4"
                >
                  {experience.company}
                </Link>
              </div>
              <p className="text-muted text-sm mb-2">
                {experience.location}
              </p>
            </div>
            <div className="lg:text-right flex justify-between gap-2">
              <span className="inline-block py-1 text-link text-sm">
                {experience.dates}
              </span>
              <svg
                className={`w-5 h-5 text-link transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>

        <div {...animationProps}>
          <div className="px-6 pb-6 border-t border-border/50">
            <div className="pt-4">
              {experience.description && (
                <p className="text-muted mb-4 leading-relaxed">
                  {experience.description}
                </p>
              )}

              <div className="mb-4">
                <h5 className="text-sm font-semibold text-link mb-2">
                  Key Highlights:
                </h5>
                <ul className="text-muted text-sm space-y-1">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-link mt-1.5 w-1 h-1 bg-link rounded-full flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {experience.technologies && (
                <div>
                  <h5 className="text-sm font-semibold text-link mb-2">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies?.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/50 text-muted text-xs rounded border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ExperienceItem;
