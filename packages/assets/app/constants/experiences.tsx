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
        Building a core AWS Billing platform that turns contractual language
        into executable semantics for private-pricing usage determination,
        global bill computation, and auditing. The platform spans Smithy IDL API
        modeling, generated TypeScript/Kotlin/Java/Python SDKs and client
        libraries, Smithy-to-MCP generation, a custom query language for
        contractual semantics over hundreds of millions of SKUs, low-latency JVM
        evaluation, offline clients for workflows that cannot tolerate network
        latency or transient failures, Python CLI tooling, React/TypeScript
        analyst surfaces, observability, and agentic workflows. Users include
        billing developers, financial analysts, applied scientists, legal,
        sales, and enterprise invoicing teams.
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
      'Smithy',
      'DSLs',
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
      'MCP SDK',
      'Claude API',
      'Python',
    ],
    highlights: [
      'Led a contract-semantics service that persists legal language semantics as custom DSL expressions evaluated at runtime across private-pricing usage determination, global bill computation, and SKU and line-item auditing at 300+ TPS sustained and 1,000+ TPS peaks.',
      'Designed Smithy IDL API contracts, generated TypeScript/Kotlin/Java/Python SDKs and client libraries, and the versioning / backward-compatibility strategy for a managed contract-semantics platform that replaced an error-prone legacy inline ruleset system and prevented ~$17MM/year in billing failures.',
      'Built a Smithy-to-MCP generator that creates MCP servers and clients as soon as APIs deploy, eliminating manually maintained MCP surfaces for internal agent workflows.',
      'Built API, UI, and Python CLI/library surfaces for developers, analysts, and applied scientists; partnered with product/design in twice-weekly feedback loops to improve ruleset management, query evaluation, anomaly-detection modeling, and contract-intelligence workflows.',
      'Modeled recursive legal language and referential contract expressions with a DynamoDB-backed, low-latency in-memory dependency graph that re-validates changed expressions and their full dependency closure.',
      'Engineered the query-language runtime, validation flows, low-latency SKU previews, and 10-API surface for inspecting and validating billing-impacting rule changes.',
      'Designed APIs and tools with both user-based and service-to-service authentication, plus granular resource-based authorization across human and service consumers.',
      'Implemented the Kotlin/Java/JVM evaluation runtime, DuckDB/Parquet product cache, and offline execution path for sensitive customer workflows that cannot tolerate network latency or transient failures.',
      "Led the team's Claude Code-based AI-assisted development strategy using architecture docs, type-system constraints, and layered unit, property, integration, canary, and E2E tests; agent workflows now auto-resolve 90% of issues labeled for agent handling.",
      'Developed a Bedrock and Step Functions AI agent to optimize product mapping rulesets, reducing SKU resolution latency 10x from roughly 800ms to under 100ms.',
      'Built observable invoice lifecycle dashboards and notification workflows over DynamoDB Streams, Kinesis, Lambda, and SNS, giving operators live status visibility, failure routing, and human-in-the-loop triage for high-velocity billing workflows.',
      'Led Request for Payment delivery for the largest E-Invoicing cohort, helping launch AWS E-Invoicing GA for customers including SAP, Goldman Sachs, Accenture, PayPal, and IBM; reduced Time-to-Bill by 3 days and contributed to a $40MM Free Cash Flow improvement.',
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
        Joined as an intern and grew into one of two engineers owning the
        product platform end to end through acquisition by{' '}
        <Link
          href="https://public.vtinfo.com/"
          className="text-lg text-link hover:text-link-hover mb-2 underline underline-offset-4"
        >
          Vermont Information Processing (VIP)
        </Link>
        . Shipped APIs, database models, web and mobile interfaces,
        integrations, infrastructure, and real-time operator workflows for
        inventory, purchasing, POS ingestion, payments, and distributor
        operations.
      </>
    ),
    technologies: [
      'TypeScript',
      'Vue.js',
      'React Native',
      'Node.js',
      'Express',
      'WebSockets',
      'Redis',
      'MySQL',
      'Docker',
      'Fargate',
      'Lambda',
      'SNS/SQS',
      'Stripe',
      'HubSpot',
    ],
    highlights: [
      'Owned the product platform end to end as one of two engineers through acquisition: Vue/React Native interfaces, Node/Express APIs, MySQL schema, Redis/WebSocket workflows, deployment pipelines, operational tooling, and customer-facing workflows.',
      'Designed and shipped POS ingestion APIs normalizing transaction data from 10K+ venues worldwide into a unified inventory model.',
      'Built WebSocket-based real-time inventory sessions where multiple operators coordinated stock counts with live state updates.',
      'Built inventory automation tools for stockout prediction, reorder timing, and FIFO cost calculations.',
      'Shipped Stripe subscription/payment workflows, HubSpot integrations, QR code menus, and React Native mobile features while rotating through customer support to turn operator feedback into product decisions.',
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
    location: 'Oxford, OH',
    highlights: [
      'First place among college teams at Blockland Blockchain Hackathon.',
      'Relevant Coursework: Compilers, Systems, Database Design, Computer Architecture, High Performance Computing.',
    ],
  },
] as const satisfies Experience[];
