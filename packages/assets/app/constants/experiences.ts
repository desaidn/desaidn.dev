import type { Experience } from "~/types/experience";

export const EXPERIENCES: Experience[] = [
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
  {
    id: "miami",
    company: "Miami University",
    role: "Bachelor's degree, Computer Science",
    description: undefined,
    duration: "August 2017 - May 2021",
    highlights: [
      "First Place Among College Teams at Blockland Blockchain Hack-a-thon",
      "Dean's List Second Semester",
    ],
    location: "Oxford, Ohio, United States",
    technologies: undefined,
  },
] as const;
