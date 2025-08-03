import type { Experience } from 'types';
import Link from '../components/common/Link';

export default [
  {
    id: 'aws',
    company: 'Amazon Web Services (AWS)',
    link: 'https://aws.amazon.com/',
    role: 'Software Development Engineer',
    dates: 'July 2022 - Present',
    location: 'New York, NY',
    description: (
      <>
        Developing AWS Console applications, AWS SDK APIs and internal tools
        serving millions of developers. Building highly available Java and
        Kotlin microservices, React and TypeScript UIs, and Python automation.
        Designing and implementing scalable, service-oriented and event-driven
        architectures for cloud usage metering at planet scale. Currently,
        focused on developer / analyst productivity, platform reliability, and
        AI-enhanced workflows.
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
      'Led development of high-availability Console features used by millions of developers globally, with 99.99% uptime',
      "Spearheaded the Request For Payment (RFP) E-Invoicing initiative, which was a key contributor to my organization's\n 3-day reduction in Time-to-Bill and $40MM improvement in Free Cash Flow",
      'Built fault-tolerant REST APIs powering billing data flows and SDKs, optimized for high throughput and low latency',
      'Designed scalable ingestion pipelines and state machines for accurate real-time usage metering of cloud services',
      'Shipped internal tooling improvements that reduced support overhead and boosted billing team efficiency by 25%',
      'Developed an AI-powered co-pilot using LLMs (Claude) to optimize logical expression configs in billing rules',
      'Collaborated with UX researchers and PMs to rapidly prototype and iterate on developer-facing interfaces',
      'Mentored interns and junior engineers; oversaw projects including widely used internal CLI tool & MCP server code gen',
      'Drove operational excellence through on-call rotations, system monitoring, and proactive incident response',
    ],
  },
  {
    id: 'backbar-engineer',
    company: 'Backbar (Beverage Management Platform - Acquired 2022)',
    link: 'https://www.getbackbar.com/',
    role: 'Full Stack Engineer',
    dates: 'June 2021 - July 2022',
    location: 'Chicago, IL',
    description: (
      <>
        One of two engineers at a beverage inventory startup acquired by{' '}
        <Link
          href="https://public.vtinfo.com/"
          className="text-lg text-link hover:text-link-hover mb-2 underline underline-offset-4"
        >
          Vermont Information Processing (VIP)
        </Link>
        . Owned the web platform, backend services, and ingestion pipelines.
        Contributed across web, mobile, and operational tooling.
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
      'Designed and shipped a real-time POS ingestion service for 10K+ venues worldwide',
      'Built inventory automation tools to predict stockouts and optimize reordering using usage heuristics',
      'Owned all aspects of the web platform, from UI to database schema to deployment pipelines',
      'Contributed to React Native mobile app features supporting live inventory sync and session sharing',
      'Worked closely with product and participated in support rotation to iterate quickly based on user feedback',
    ],
  },
  {
    id: 'backbar-intern',
    company: 'Backbar (Beverage Management Platform - Acquired 2022)',
    role: 'Software Engineering Intern',
    link: 'https://www.getbackbar.com/',
    dates: 'May 2020 - May 2021',
    location: 'Chicago, IL',
    description:
      'Developed web application features for internal tools and customer-facing apps. Learned and applied modern frontend/backend patterns primarily using JavaScript, VueJS, HTML/CSS, NodeJS, Express, and MySQL.',
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
      'Built a QR code menu system used by bars and restaurants during the COVID pandemic',
      'Developed a real-time collaboration feature for shared bar inventory sessions',
      'Created a PDF/HTML menu parser for automating digital menu setup',
      'Implemented a FIFO-based cost prediction system for inventory management',
    ],
  },
  {
    id: 'elemica',
    company: 'Elemica',
    link: 'https://www.elemica.com/',
    role: 'Supply Chain Intern',
    dates: 'June 2019 – August 2019',
    location: 'Atlanta, GA',
    description:
      'Worked across product and engineering teams to research blockchain-based supply chain visibility and interoperability solutions.',
    technologies: [
      'Java',
      'SQL',
      'Ethereum',
      'IBM Hyperledger',
      'Supply Chain Analytics',
    ],
    highlights: [
      'Researched blockchain applications for secure supply chain visibility',
      'Built prototype integrations using Hyperledger and Ethereum smart contracts',
      'Explored network data standards for cross-company supply chain data exchange',
    ],
  },
  {
    id: 'miami',
    company: 'Miami University',
    link: 'https://miamioh.edu/',
    role: "Bachelor's Degree, Computer Science",
    dates: 'August 2017 - May 2021',
    highlights: [
      'First place among college teams at Blockland Blockchain Hackathon',
      "Dean's List senior year",
      'Favorite Coursework: Compilers, Systems, Databases Design, Computer Architecture, High Performance Computing',
    ],
    location: 'Oxford, OH',
  },
] as const satisfies Experience[];
