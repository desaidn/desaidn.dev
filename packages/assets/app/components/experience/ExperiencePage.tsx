import type { ReactElement } from 'react';
import { useCallback, useState } from 'react';
import EXPERIENCES from '~/constants/experiences';
import { PROFESSIONAL_SUMMARY } from '~/constants/summary';
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
  const { generatePDF, isGenerating, error } = useResumePDF(EXPERIENCES);

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
            <p>{PROFESSIONAL_SUMMARY}</p>
          </div>

          <div className="space-y-4">
            {EXPERIENCES.map(exp => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                isOpen={selectedExperience === exp.id}
                onToggle={() => handleExperienceClick(exp.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
