import type { Experience } from "~/types/experience";
import { useHeightAnimation } from "../../hooks/useHeightAnimation";

interface ExperienceItemProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExperienceItem({
  experience,
  isOpen,
  onToggle,
}: ExperienceItemProps) {
  const animationProps = useHeightAnimation(isOpen);

  return (
    <div
      className={`bg-black/80 border rounded-lg overflow-hidden transition-[border-color] duration-300 ${
        isOpen
          ? "border-green-400/50"
          : "border-gray-700/50 hover:border-green-400/50"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-900/30 transition-colors duration-200"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-200 mb-1 hover:text-green-400 transition-colors duration-200">
              {experience.role}
            </h3>
            <h4 className="text-lg text-green-400 mb-2">
              {experience.company}
            </h4>
            <p className="text-gray-400 text-sm mb-2">{experience.location}</p>
          </div>
          <div className="lg:text-right flex justify-between gap-2">
            <span className="inline-block px-3 py-1 bg-gray-900/50 text-green-400 text-sm rounded-full border border-gray-700/50">
              {experience.dates}
            </span>
            <svg
              className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
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
        <div className="px-6 pb-6 border-t border-gray-700/50">
          <div className="pt-4">
            {experience.description && (
              <p className="text-gray-300 mb-4 leading-relaxed">
                {experience.description}
              </p>
            )}

            <div className="mb-4">
              <h5 className="text-sm font-semibold text-green-400 mb-2">
                Key Highlights:
              </h5>
              <ul className="text-gray-300 text-sm space-y-1">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {experience.technologies && (
              <div>
                <h5 className="text-sm font-semibold text-green-400 mb-2">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-900/50 text-gray-300 text-xs rounded border border-gray-700/50"
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
