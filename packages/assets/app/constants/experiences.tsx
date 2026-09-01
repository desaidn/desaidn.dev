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
        Building a core AWS Billing query engine that evaluates private-pricing
        rules for usage metering, global bill computation, and audit across
        billions of line items and SKUs. APIs, typed client libraries, CLIs, and
        React interfaces serve billing developers, applied scientists, and
        financial analysts.
      </>
    ),
    technologies: [
      'Python',
      'Java',
      'Kotlin',
      'TypeScript',
      'React',
      'Smithy',
      'MCP SDK',
      'DuckDB',
      'Parquet',
      'Step Functions',
      'CI/CD',
      'Docker',
      'ECS/Fargate',
      'DynamoDB',
      'Bedrock',
    ],
    highlights: [
      'Built the shared service agents and developer workflows use to evaluate contract and pricing rules, with generated, backward-compatible TypeScript, Kotlin, Java, and Python clients.',
      'Deprecated inline rulesets with the platform, preventing ~$17MM/year in billing failures.',
      'Built an agent in a state machine that interprets contracts and constructs product-mapping query expressions in a custom domain-specific language; automated clause-coverage checks and variant detection surface uncovered clauses for human review, bounding changes and cutting SKU-resolution latency 10x (~800ms to <100ms).',
      'Set technical direction for a team of two and mentored two interns in 2026.',
      'Built a contract-semantics DSL and compiler targeting a fast Kotlin/Java runtime with DuckDB/Parquet caching and online/offline execution.',
      'Engineered a low-latency query engine that evaluates financially material pricing rules across 2 billion SKUs.',
      'Built a Smithy-to-MCP generator that creates MCP servers and clients automatically as soon as an API deploys, eliminating manual MCP surface maintenance for internal agent workflows.',
      'Shipped APIs, React/TypeScript UI, and Python CLI/library workflows; prioritized improvements using coverage and adoption metrics alongside twice-weekly feedback sessions with billing developers, applied scientists, and financial analysts.',
      'Built one-click developer environments for local E2E tests using reproducible data replication from production snapshots.',
      'Ran a multi-region service on ECS at 300-2,000 TPS.',
      'Modeled contractual language as a clause dependency graph, revalidating each change across its full dependency closure.',
      'Built an algorithm for large-scale SKU evaluation that shows how product-catalog changes affect contractual semantics.',
      'Defined and tracked clause coverage, workflow adoption, and prevented unsafe changes to prioritize developer-tooling and release improvements.',
      'Designed a change-set mechanism for safe production changes, showing rule-expression, SKU, and affected-contract diffs before approval.',
      'Built a bill line-item diff test harness for every rule-expression change so developers can safely ship financially material changes.',
      'Led the organization’s Claude Code development strategy to safely scale agent-authored code across a financially sensitive platform, using architecture guidance, type constraints, human review, and automated unit, property, integration, canary, and E2E test gates; agents resolve 90% of selected issues.',
      'Built and maintained CI workflows using internal tools and containerized build workflows with Docker, automating test coverage and release-quality checks for package builds and production releases.',
      'Automated region expansion across the team’s product portfolio, cutting new-region support from three weeks to one day.',
      'Built invoice-lifecycle observability for live status, failure routing, and human-reviewed triage.',
      'Led release readiness across the billing pipeline and version-pinned consumers, defining compatibility, regression/smoke-test scope, and dependency-ordered deployments.',
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
