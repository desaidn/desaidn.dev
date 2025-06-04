import type { Experience } from '~/types/experience';

export default [
  {
    id: 'aws',
    company: 'Amazon Web Services (AWS)',
    link: 'https://aws.amazon.com/',
    role: 'Software Development Engineer',
    dates: 'July 2022 - Present',
    location: 'New York, New York, United States',
    description: (
      <p>
        Working on developing scalable service-oriented and event-driven
        architectures for billing and procurement systems. My role involves
        building highly available Java / Kotlin microservices, accessible UIs
        with TypeScript and React, and reusable Python utilities to enable
        billions in cloud transactions monthly. I leverage AWS to design and
        implement robust, distributed systems that handle large volumes of data
        across multiple regions.
      </p>
    ),
    technologies: [
      'Java',
      'Kotlin',
      'TypeScript',
      'React',
      'CloudScape Design System',
      'Python',
      'Lambda',
      'SNS/SQS',
      'EC2',
      'Fargate',
      'S3',
      'DynamoDB',
      'Kinesis',
      'Athena',
      'Glue',
      'Bedrock',
      'CloudWatch',
    ],
    highlights: [
      'Developing and optimizing RESTful APIs for quick and fault tolerant data processing, often for customer facing interactions',
      'Implementing data ingestion pipelines to ensure continuous and reliable flow of billing data',
      'Collaborating cross-functionally to deliver customer-centric features and improve system efficiency',
      "Monitoring service performance and contributing to the team's on-call rotation",
    ],
  },
  {
    id: 'backbar-engineer',
    company: 'Backbar (Beverage Management Platform - Acquired 2022)',
    link: 'https://www.getbackbar.com/',
    role: 'Full Stack Engineer',
    dates: 'June 2021 - July 2022',
    location: 'Chicago, Illinois, United States',
    description: (
      <p>
        Web and mobile application software development. 1 of 2 engineers on the
        team that was acquired by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-green-400 hover:text-gray-300 mb-2 underline underline-offset-4"
          href="https://public.vtinfo.com/"
        >
          VIP
        </a>
        . Owned web platform and data ingestion pipelines. Contributed to mobile
        (iOS/Android) app.
      </p>
    ),
    technologies: [
      'TypeScript',
      'VueJS',
      'React Native',
      'NodeJS',
      'Express',
      'Redis',
      'MySQL',
      'Ansible',
      'Docker',
      'EC2',
      'Fargate',
      'Lambda',
      'SNS/SQS',
      'CloudWatch',
      'HubSpot',
      'Google Analytics',
    ],
    highlights: [
      'Designed, developed, and deployed an early Point-of-Sale integration service for 10,000+ venues across the globe to ingest item data in real-time and help automate inventory management for customers.',
    ],
  },
  {
    id: 'backbar-intern',
    company: 'Backbar (Beverage Management Platform - Acquired 2022)',
    role: 'Software Engineering Intern',
    link: 'https://www.getbackbar.com/',
    dates: 'May 2020 - May 2021',
    location: 'Chicago, Illinois, United States',
    description:
      'Web application software development. Specific skills and technologies that will be used and learned during the internship include: frontend web development primarily using JavaScript, VueJS, HTML, and CSS; and backend development primarily using NodeJS, Express, and MySQL.',
    technologies: [
      'JavaScript',
      'VueJS',
      'HTML',
      'CSS',
      'NodeJS',
      'Express',
      'MySQL',
    ],
    highlights: [
      'QR code menu system',
      'Flexible inventory session system',
      'PDF / HTML menu parsing tool',
      'Real-time bar inventory collaboration enhancements',
      'Usage and First-In, First-Out (FIFO) cost prediction system',
    ],
  },
  {
    id: 'elemica',
    company: 'Elemica',
    link: 'https://www.elemica.com/',
    role: 'Supply Chain Intern',
    dates: 'June 2019 - August 2019',
    location: 'Atlanta, Georgia, United States',
    description:
      "Summer supply chain intern for Elemica Inc. working closely with Elemica's product management and product development teams in order to learn and progress their supply chain network initiatives. These initiative broadly fall under the following categories: (1) Supply Chain Visibility, (2) Supply Chain Network Interoperability, (3) Applicability of Blockchain Technology.",
    technologies: [
      'JavaScript',
      'SQL',
      'Java',
      'Ethereum',
      'IBM Hyperledger',
      'Supply Chain Analytics',
    ],
    highlights: [
      'Supply Chain Visibility initiatives',
      'Supply Chain Network Interoperability projects',
      'Research on Applicability of Blockchain Technology',
    ],
  },
  {
    id: 'miami',
    company: 'Miami University',
    link: 'https://miamioh.edu/',
    role: "Bachelor's degree, Computer Science",
    dates: 'August 2017 - May 2021',
    highlights: [
      'First Place Among College Teams at Blockland Blockchain Hack-a-thon',
      "Dean's List Second Semester",
    ],
    location: 'Oxford, Ohio, United States',
  },
] satisfies Experience[];
