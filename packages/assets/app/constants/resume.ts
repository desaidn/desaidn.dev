import type { Resume } from 'types';

export const RESUME = {
  name: 'Dhairya Desai',
  headline:
    'Software Engineer | Distributed Systems, Programming Systems & Human–Agent–Computer Interaction',
  contacts: [
    { label: 'Brooklyn, NY' },
    { label: 'desaidn.dev', href: 'https://desaidn.dev' },
    { label: 'me@desaidn.dev', href: 'mailto:me@desaidn.dev' },
    { label: 'github.com/desaidn', href: 'https://github.com/desaidn' },
    {
      label: 'linkedin.com/in/dhairya-n-desai',
      href: 'https://linkedin.com/in/dhairya-n-desai',
    },
  ],
  summary:
    'Software engineer with 6+ years of experience building distributed systems, developer platforms, and interfaces for technical users. Owned a startup’s product platform end to end as one of two engineers through acquisition, then led the design, launch, and scaling of a greenfield AWS Billing platform. Now building managed agents at Amazon Bedrock AgentCore.',
  experiences: [
    {
      company: 'Amazon Web Services (AWS)',
      role: 'Software Development Engineer, Amazon Bedrock AgentCore',
      dates: 'November 2026 - Present',
      location: 'Manhattan, NY',
      description: 'Building managed agents.',
      highlights: [],
    },
    {
      company: 'Amazon Web Services (AWS)',
      role: 'Software Development Engineer, AWS Billing',
      dates: 'July 2022 - November 2026',
      location: 'Manhattan, NY',
      description:
        'Led the design, launch and scaling of a greenfield AWS Billing platform that represents negotiated pricing contracts as machine-readable rules used by global billing and auditing systems. Set architectural direction and mentored junior engineers and interns.',
      highlights: [
        'Designed a domain-specific language, a rule management control plane, and a query engine data plane for evaluating pricing rules against the AWS product catalog. Built Kotlin and Java client libraries for high-volume networked and offline access.',
        'Designed Smithy APIs and data models to generate SDKs in multiple languages, along with MCP clients for developers and agents. CI/CD runs unit, property, integration, end-to-end, and compatibility tests before publishing versioned libraries and propagating updates to downstream bill-computation systems.',
        'Built data infrastructure to ingest, store, and query billions of AWS product SKUs using S3, Parquet, and DuckDB, supporting reproducible bill computation and large-scale auditing.',
        'Built AI agents that translate signed legal contracts into executable pricing models, with customer-level bill simulation, drift detection, contract-variant detection, and approval gates to verify changes before release.',
        'Built a React/TypeScript structured rule editor alongside Python CLI and library workflows for AWS Billing developers, applied scientists, and financial analysts.',
      ],
    },
    {
      company: 'Backbar (Acquired by Vermont Information Processing)',
      role: 'Full Stack Engineer',
      dates: 'May 2020 - July 2022',
      location: 'Chicago, IL',
      description:
        'Grew from intern into one of two engineers owning the product platform end to end through acquisition, spanning APIs, data models, web and mobile interfaces, infrastructure, and real-time operator workflows.',
      highlights: [
        'Designed POS ingestion APIs that normalized transaction data from more than 10,000 venues worldwide into a unified inventory model.',
        'Built Redis and WebSocket-based inventory sessions where multiple operators coordinated stock counts through real-time Vue and React Native interfaces.',
        'Owned Node/Express APIs, MySQL schemas, deployment pipelines, subscription and payment integrations, and customer-facing workflows while rotating through support to turn operator feedback into product decisions.',
      ],
    },
  ],
  skillGroups: [
    {
      label: 'Languages',
      skills: ['Java', 'Kotlin', 'Python', 'TypeScript', 'SQL'],
    },
    {
      label: 'Data systems',
      skills: ['DuckDB', 'Parquet', 'Spark', 'DynamoDB', 'MySQL', 'Redis'],
    },
    {
      label: 'Cloud infrastructure',
      skills: ['AWS (S3, Glue, Athena, EMR)', 'AWS CDK', 'Docker'],
    },
    {
      label: 'Developer platforms and technical interfaces',
      skills: ['API and SDK design', 'MCP', 'React', 'CLI tooling'],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Miami University',
    location: 'Oxford, OH',
  },
} as const satisfies Resume;
