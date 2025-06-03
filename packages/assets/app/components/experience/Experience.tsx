import { useState } from "react";
import { useNavigate } from "react-router";
import type { ReactElement } from "react";
import EXPERIENCES from "~/constants/experiences";
import ExperienceItem from "./ExperienceItem";

export default function Experience(): ReactElement {
  const navigate = useNavigate();
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );

  const handleExperienceClick = (experienceId: string): void => {
    setSelectedExperience(
      selectedExperience === experienceId ? null : experienceId
    );
  };

  const handleBackClick = (): void => {
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={handleBackClick}
          className="group mb-6 flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 ease-out hover:translate-x-[-2px] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2 -ml-2"
          aria-label="Go back to home page"
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-[-2px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
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
