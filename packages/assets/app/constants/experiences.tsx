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
        Building AWS Billing systems where browser-based product surfaces, APIs,
        data models, and distributed systems have to be designed together. I
        work across public AWS Console experiences and internal expert tools,
        primarily with React/TypeScript, Kotlin/Java services, SDKs, and
        event-driven data pipelines for correctness-sensitive bill computation
        at cloud scale. Currently focused on human-in-the-loop AI systems for
        contract ingestion and analyst tooling.
      </>
    ),
    technologies: [
      'Java',
      'Kotlin',
      'JVM',
      'TypeScript',
      'React',
      'Redux',
      'CloudScape Design System',
      'Cypress',
      'Python',
      'SQL',
      'DuckDB',
      'Parquet',
      'Lambda',
      'Step Functions',
      'SNS/SQS',
      'DynamoDB',
      'Kinesis',
      'S3',
      'Athena',
      'Glue',
      'Bedrock',
      'CloudWatch',
    ],
    highlights: [
      'Owned three major AWS Billing product surfaces and their backing systems: public Billing Console features, an internal contract-to-billing-rule authoring interface, and a real-time invoice delivery operator dashboard.',
      'Built public AWS Billing Console features in React/TypeScript, Redux, and CloudScape while meeting AWS accessibility, responsive, cross-browser, canary, and high-availability standards.',
      'Automated Seller of Record launch support in the AWS Billing Console by integrating dynamic entity resolution into the React/Redux frontend, eliminating manual configuration for new region launches.',
      'Built a DSL-backed structured editor used by sales, legal, billing analysts, and applied scientists to map contract language to executable rules over millions of AWS SKUs.',
      'Designed graph-based rule editing, low-latency SKU previews, validation flows, a 10-API surface, and a DuckDB/Parquet product cache supporting online APIs and offline billing workflows.',
      'Implemented the Kotlin/Java/JVM bill-computation runtime behind the authoring interface, using typed functional design for correctness-sensitive rule evaluation.',
      'Built a React/CloudScape operator dashboard over DynamoDB and Kinesis invoice lifecycle streams, giving operators live visibility into delivery status, portal failures, and workflow progress.',
      'Designed real-time invoice lifecycle notification pipelines using DynamoDB Streams, Kinesis, Lambda, and SNS for cross-account delivery monitoring and automated failure routing.',
      'Led an event-driven Request for Payment workflow automating consolidated invoice delivery for enterprise customers including SAP, Goldman Sachs, Accenture, PayPal, and IBM.',
      'Collaborated across 4 teams to define API contracts, data models, and event schemas for enterprise invoice delivery, improving delivery from 5-10 days to same-day processing.',
      'Designed a composable delivery pipeline with independently testable collection, transformation, dispatch, retry, validation, and status-tracking.',
      'Supported large-scale contract auditing and line-item diffing workflows for applied scientists and billing analysts.',
      'Built failure-routing and retry workflows with exponential backoff, known-issue classification, and operator-actionable support notifications.',
      'Maintained production AWS Billing systems through on-call rotations, dashboards, alarms, SOPs, canaries, and operational reviews.',
      'Mentored interns and junior engineers; oversaw production projects including legal text classification and API-to-MCP client code generation.',
    ],
  },
  {
    id: 'backbar',
    company: 'Backbar (Beverage Management Platform, Acquired 2022)',
    link: 'https://www.getbackbar.com/',
    role: 'Full Stack Engineer',
    dates: 'May 2020 - July 2022',
    location: 'Chicago, IL',
    description: (
      <>
        Joined as an intern and grew into one of two developers owning the web
        platform end to end through acquisition by{' '}
        <Link
          href="https://public.vtinfo.com/"
          className="text-lg text-link hover:text-link-hover mb-2 underline underline-offset-4"
        >
          Vermont Information Processing (VIP)
        </Link>
        . Built TypeScript/Vue.js product surfaces, Node.js/MySQL APIs, AWS
        infrastructure with Fargate, Lambda, and S3, Stripe subscription/payment
        workflows, HubSpot integrations, WebSocket-based inventory sessions, POS
        integrations supporting 10K+ venues, and React Native mobile features.
      </>
    ),
    technologies: [
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'React Native',
      'Node.js',
      'Express',
      'WebSockets',
      'Redis',
      'MySQL',
      'Ansible',
      'Docker',
      'EC2',
      'Fargate',
      'Lambda',
      'SNS/SQS',
      'CloudWatch',
      'Stripe',
      'HubSpot',
      'Google Analytics',
    ],
    highlights: [
      'Owned the web platform end to end as one of two developers through acquisition: UI, API layer, database schema, deployment pipelines, and operational tooling.',
      'Designed and shipped POS ingestion services normalizing transaction data from 10K+ venues worldwide into a unified inventory model.',
      'Built WebSocket-based real-time inventory sessions where multiple operators could see live stock changes during counting workflows.',
      'Built inventory automation tools that predicted stockouts and optimized reorder timing using consumption heuristics.',
      'Shipped a QR code menu system adopted by bars and restaurants during the COVID pandemic.',
      'Contributed to the React Native iOS/Android app and rotated through customer support to feed operator feedback directly into product decisions.',
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
      'Worked across product and engineering teams to prototype supply chain integrations using Ethereum and Hyperledger smart contracts for secure cross-company data exchange.',
    technologies: [
      'Java',
      'SQL',
      'Ethereum',
      'IBM Hyperledger',
      'Supply Chain Analytics',
    ],
    highlights: [],
  },
  {
    id: 'miami',
    company: 'Miami University',
    link: 'https://miamioh.edu/',
    role: "Bachelor's Degree, Computer Science",
    highlights: [
      'First place among college teams at Blockland Blockchain Hackathon.',
      'Relevant Coursework: Compilers, Systems, Database Design, Computer Architecture, High Performance Computing.',
    ],
    location: 'Oxford, OH',
  },
] as const satisfies Experience[];
