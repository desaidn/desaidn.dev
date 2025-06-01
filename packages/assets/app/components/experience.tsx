import { useState } from "react";
import type { ReactElement } from "react";

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface Education {
  institution: string;
  degree: string;
  duration: string;
}

interface Award {
  title: string;
  year: string;
}

const EXPERIENCES: Experience[] = [
  {
    id: "aws",
    company: "Amazon Web Services (AWS)",
    role: "Software Development Engineer",
    duration: "July 2022 - Present (3 years)",
    location: "New York, New York, United States",
    description:
      "Working on developing scalable service-oriented and event-driven architectures for billing and procurement systems. My role involves building highly available Java microservices, accessible UIs with TypeScript and React, and reusable Python utilities to process millions of billing artifacts. I leverage AWS technologies (Lambda, Fargate, S3, DynamoDB, Kinesis, etc) to design and implement robust, distributed systems that handle large volumes of data across multiple regions.",
    technologies: [
      "Java",
      "TypeScript",
      "React",
      "Python",
      "AWS Lambda",
      "Fargate",
      "S3",
      "DynamoDB",
      "Kinesis",
    ],
    highlights: [
      "Developing and optimizing RESTful APIs for quick and fault tolerant data processing, often for customer facing interactions",
      "Implementing data ingestion pipelines to ensure continuous and reliable flow of billing data",
      "Collaborating cross-functionally to deliver customer-centric features and improve system efficiency",
      "Monitoring service performance and contributing to the team's on-call rotation",
    ],
  },
  {
    id: "backbar-engineer",
    company: "Backbar",
    role: "Full Stack Engineer",
    duration: "June 2021 - July 2022 (1 year 2 months)",
    location: "Chicago, Illinois, United States",
    description:
      "Web and mobile application software development. Frontend web development primarily using JavaScript, VueJS, HTML, and CSS. Frontend mobile development for iOS and Android primarily using React Native. Backend development primarily using NodeJS, Express, Redis, MySQL, Ansible, Docker and AWS (S3, Fargate, Lambda, EC2).",
    technologies: [
      "JavaScript",
      "VueJS",
      "React Native",
      "NodeJS",
      "Express",
      "Redis",
      "MySQL",
      "Ansible",
      "Docker",
      "AWS",
    ],
    highlights: [
      "Notable work: designed, developed, and deployed an early Point-of-Sale integration service for 10,000+ venues across the globe to ingest item data in real-time and help automate inventory management for customers",
    ],
  },
  {
    id: "backbar-intern",
    company: "Backbar",
    role: "Software Engineering Intern",
    duration: "May 2020 - May 2021 (1 year 1 month)",
    location: "Chicago, Illinois, United States",
    description:
      "Web application software development. Specific skills and technologies that will be used and learned during the internship include: frontend web development primarily using JavaScript, VueJS, HTML, and CSS; and backend development primarily using NodeJS, Express, and MySQL.",
    technologies: [
      "JavaScript",
      "VueJS",
      "HTML",
      "CSS",
      "NodeJS",
      "Express",
      "MySQL",
    ],
    highlights: [
      "Notable work: QR code menu system, flexible inventory session system, PDF / HTML menu parsing tool, real-time bar inventory collaboration enhancements, usage and FIFO cost prediction system",
    ],
  },
  {
    id: "elemica",
    company: "Elemica",
    role: "Supply Chain Intern",
    duration: "June 2019 - August 2019 (3 months)",
    location: "Atlanta, Georgia, United States",
    description:
      "Summer supply chain intern for Elemica Inc. working closely with Elemica's product management and product development teams in order to learn and progress their supply chain network initiatives. These initiative broadly fall under the following categories: (1) Supply Chain Visibility, (2) Supply Chain Network Interoperability, (3) Applicability of Blockchain Technology.",
    technologies: ["Blockchain Technology", "Supply Chain Analytics"],
    highlights: [
      "Supply Chain Visibility initiatives",
      "Supply Chain Network Interoperability projects",
      "Research on Applicability of Blockchain Technology",
    ],
  },
];

const EDUCATION: Education = {
  institution: "Miami University",
  degree: "Bachelor's degree, Computer Science",
  duration: "August 2017 - May 2021",
};

const AWARDS: Award[] = [
  {
    title:
      "First Place Among College Teams at Blockland Blockchain Hack-a-thon",
    year: "2021",
  },
  {
    title: "Dean's List Second Semester",
    year: "2020-2021",
  },
];

const SKILLS = {
  technical: ["Large Scale Systems", "Distributed Systems", "Reliability"],
  languages: ["Hindi (Native)", "Gujarati (Native)", "English (Native)"],
};

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
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-200">
              Experience
            </h1>
          </header>
        </div>

        {/* Experience Section */}
        <section className="mb-8">
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-black/80 border border-gray-700/50 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-200"
              >
                <button
                  onClick={() => handleExperienceClick(exp.id)}
                  className="w-full p-6 text-left hover:bg-gray-900/30 transition-colors duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-200 mb-1 hover:text-green-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-green-400 mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        {exp.location}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <span className="inline-block px-3 py-1 bg-gray-900/50 text-green-400 text-sm rounded-full border border-gray-700/50">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </button>

                {selectedExperience === exp.id && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-green-400 mb-2">
                        Key Highlights:
                      </h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {exp.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1.5 w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-green-400 mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-900/50 text-gray-300 text-xs rounded border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Education
            </h2>
            <div className="bg-black/50 border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-1">
                {EDUCATION.institution}
              </h3>
              <p className="text-emerald-400 mb-2">{EDUCATION.degree}</p>
              <p className="text-gray-400 text-sm">{EDUCATION.duration}</p>
            </div>
          </section>

          {/* Skills */}
          {/* <section>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Skills & Languages
            </h2>
            <div className="bg-black/50 border border-gray-700/50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.languages.map((language) => (
                    <span
                      key={language}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section> */}
        </div>

        {/* Awards Section */}
        <section>
          <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Honors & Awards
          </h2>
          <div className="space-y-3">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-700/50 rounded-lg p-4 flex items-center justify-between"
              >
                <span className="text-white">{award.title}</span>
                <span className="text-emerald-400 text-sm">{award.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
