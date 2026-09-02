import type { Resume } from 'types';

export const RESUME = {
  name: 'Dhairya Desai',
  headline:
    'Software Engineer | Distributed Systems, Developer Platforms & Technical User Interfaces',
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
    'Software engineer with six years of experience building correctness-sensitive distributed platforms and developer tools. Technical lead for an AWS Billing private-pricing platform taken from greenfield design to production, spanning a domain-specific language and query engine, protocol-agnostic APIs and generated SDKs, low-latency online and offline runtimes, reliable agents, and interfaces for technical users.',
  experiences: [
    {
      company: 'Amazon Web Services (AWS)',
      role: 'Software Development Engineer',
      dates: 'July 2022 - Present',
      location: 'New York, NY',
      description:
        'Lead the source-of-truth platform that represents negotiated private-pricing contracts as machine-readable expressions for global bill computation and auditing.',
      highlights: [
        'Led greenfield design, implementation, and production rollout, replacing legacy inline rulesets with the authoritative machine-readable representation of private-pricing contract semantics.',
        'Designed a domain-specific language, query engine, and optimization passes for evaluating contract semantics against an ever-growing catalog of billions of SKUs covering how every AWS product is metered. The platform serves low-latency online queries at thousands of transactions per second and produces versioned offline clients for global bill computation.',
        'Built the Kotlin/JVM execution path and an S3-backed Parquet product cache queried through DuckDB, normalizing heterogeneous catalog data from AWS service teams around a shared product identifier for low-latency queries, reproducible bill computation, and large-scale scientific experiments.',
        'Defined protocol-agnostic APIs and data structures in Smithy and led production integration of generated Python, TypeScript, Java, Kotlin, and Scala SDKs plus MCP clients; CI/CD runs unit, property, integration, end-to-end, and compatibility tests before publishing versioned libraries and propagating updates to downstream bill-computation systems.',
        'Designed and built contract-interpretation agents orchestrated as finite-state machines that use the platform ontology, language specification, catalog data, and APIs to translate signed legal agreements into executable pricing expressions.',
        'Led the design and production integration of Change Sets, Analyzers, and Approvals that evaluate proposed interpretations through customer-level bill simulation, drift detection, and contract-variant detection; proven changes advance automatically, while capability gaps are routed to experts and become verified evidence for subsequent agent improvements.',
        'Built React/TypeScript structured-authoring and code-review-style interfaces alongside Python CLI and library workflows, enabling AWS Billing developers, applied scientists, and financial analysts to construct, preview, validate, and approve changes using the same semantics enforced by the runtime.',
        'Serve as technical lead for the platform, setting architectural direction, defining ownership boundaries, and mentoring junior engineers and interns while remaining hands-on with performance- and correctness-critical components.',
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
      label: 'Data infrastructure',
      skills: [
        'DuckDB',
        'Parquet',
        'S3',
        'AWS Glue',
        'Athena',
        'EMR',
        'Spark',
        'DynamoDB',
        'MySQL',
        'Redis',
      ],
    },
    {
      label: 'Cloud and infrastructure',
      skills: ['AWS', 'AWS CDK (Infrastructure as Code)', 'Docker'],
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
