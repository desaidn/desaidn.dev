import type { ReactElement } from 'react';
import { useCallback, useState } from 'react';
import { RESUME } from '~/constants/resume';
import AppLayout from '../common/AppLayout';
import BackButton from '../common/BackButton';
import CommandExecution from '../common/CommandExecution';
import EXPERIENCE_COMMANDS from './commands';
import ExperienceItem from './ExperienceItem';
import useResumePDF from '../../hooks/useResumePDF';

export default function ExperiencePage(): ReactElement {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );
  const { generatePDF, isGenerating, error } = useResumePDF();

  const handleExperienceClick = useCallback((experienceId: string): void => {
    setSelectedExperience(prev =>
      prev === experienceId ? null : experienceId
    );
  }, []);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-2">
          <div className="flex items-start justify-between">
            <BackButton to="/" ariaLabel="Go back to home page" />
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              className="px-4 py-2 bg-link hover:bg-link-hover disabled:bg-muted text-primary font-mono text-sm rounded border border-border/50 transition-colors duration-200 disabled:cursor-not-allowed cursor-pointer"
            >
              {isGenerating ? 'Generating...' : 'Download Resume'}
            </button>
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-500/50 rounded text-red-400 text-sm">
              Error generating PDF: {error}
            </div>
          )}

          <div className="h-20 overflow-hidden">
            <CommandExecution commands={EXPERIENCE_COMMANDS} />
          </div>
        </div>

        <section className="mb-8">
          <div className="mb-6">
            <p>{RESUME.summary}</p>
          </div>

          <div className="space-y-4">
            {RESUME.experiences.map(exp => {
              const experienceId = `${exp.company}-${exp.role}`;

              return (
                <ExperienceItem
                  key={experienceId}
                  experience={exp}
                  isOpen={selectedExperience === experienceId}
                  onToggle={() => handleExperienceClick(experienceId)}
                />
              );
            })}
          </div>
        </section>

        <section className="mb-8" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-xl font-semibold text-secondary mb-4"
          >
            Skills
          </h2>
          <div className="bg-primary/80 border border-border/50 rounded-lg p-6 space-y-4">
            {RESUME.skillGroups.map(group => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-secondary mb-1">
                  {group.label}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {group.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8" aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="text-xl font-semibold text-secondary mb-4"
          >
            Education
          </h2>
          <div className="bg-primary/80 border border-border/50 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  {RESUME.education.degree}
                </h3>
                <p className="text-link">{RESUME.education.institution}</p>
              </div>
              <p className="text-muted text-sm sm:text-right">
                {RESUME.education.location}
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
