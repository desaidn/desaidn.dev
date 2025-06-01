import { useState } from "react";
import type { ReactElement } from "react";
import EXPERIENCES from "~/constants/experiences";
import ExperienceItem from "./ExperienceItem";

export default function Experience(): ReactElement {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );

  const handleExperienceClick = (experienceId: string): void => {
    setSelectedExperience(
      selectedExperience === experienceId ? null : experienceId
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white 0 mb-4 flex items-center gap-2">
            Experience
          </h2>
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
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
    </div>
  );
}
