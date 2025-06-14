import type { ReactElement } from 'react';
import { useCallback, useState } from 'react';
import EXPERIENCES from '~/constants/experiences';
import CommandExecution from '../about/CommandExecution';
import AppLayout from '../common/AppLayout';
import BackButton from '../common/BackButton';
import EXPERIENCE_COMMANDS from './commands';
import ExperienceItem from './ExperienceItem';

export default function ExperiencePage(): ReactElement {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );

  const handleExperienceClick = useCallback((experienceId: string): void => {
    setSelectedExperience(prev =>
      prev === experienceId ? null : experienceId
    );
  }, []);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-4">
            <BackButton to="/" ariaLabel="Go back to home page" />
          </div>

          <div className="h-20 overflow-hidden">
            <CommandExecution commands={EXPERIENCE_COMMANDS} />
          </div>
        </div>

        <section className="mb-8">
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
