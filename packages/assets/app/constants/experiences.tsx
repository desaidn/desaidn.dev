import type { Experience } from 'types';
import Link from '../components/common/Link';

export default [
  {
    id: 'aws',
    company: 'Amazon Web Services (AWS)',
    link: 'https://aws.amazon.com/',
    role: 'Software Development Engineer',
    dates: 'July 2022 - Present',
    location: 'New York, New York, United States',
    description: (
      <>
        Developing AWS Console applications, AWS SDK APIs and internal tools
        serving millions of developers and billing systems processing billions
        annually. Leading full-stack development with Java/Kotlin backends and
        React frontends. Designing event-driven architectures for cloud usage
        metering at planet scale.
      </>
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
      'Built AWS Console features serving millions of developers with 99.99% availability',
      'Designed high TPS billing systems processing billions in annual transaction volume',
      'Architected event-driven systems for cloud usage metering at planet scale',
      'Collaborating with designers and PMs on developer experience improvements',
      'Delivered major features improving developer productivity and user experience',
      'Maintaining high availability through monitoring and incident response',
      'Mentoring early career engineers and intern projects. For example, AI co-pilot for logical expression optimization and MCP server/client implementation',
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
      <>
        Web and mobile application software development. 1 of 2 engineers on the
        team that was acquired by{' '}
        <Link
          href="https://public.vtinfo.com/"
          className="text-lg text-link hover:text-link-hover mb-2 underline underline-offset-4"
        >
          Vermont Information Processing (VIP)
        </Link>
        . Owned web platform and data ingestion pipelines. Contributed to mobile
        (iOS/Android) app.
      </>
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
      'First place among college teams at Blockland Blockchain Hackathon.',
      "Dean's list senior year.",
    ],
    location: 'Oxford, Ohio, United States',
  },
] as const satisfies Experience[];
