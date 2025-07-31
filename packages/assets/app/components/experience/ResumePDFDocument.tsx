import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import type { Experience } from 'types';

// Register JetBrains Mono font
Font.register({
  family: 'JetBrains Mono',
  fonts: [
    {
      src: `${window.location.origin}/fonts/JetBrainsMono-Regular.ttf`,
      fontWeight: 'normal',
    },
    {
      src: `${window.location.origin}/fonts/JetBrainsMono-Bold.ttf`,
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#1e1e1e', // --color-primary
    padding: 12, // Increased from 10
    fontSize: 9, // Increased from 8
    lineHeight: 1.2, // Slightly increased from 1.1
    fontFamily: 'JetBrains Mono',
    color: '#d4d4d4', // --color-secondary
  },
  container: {
    maxWidth: '100%', // Use full width for single page
  },
  experienceContainer: {
    gap: 4, // Reduced from 6 to fit content
  },
  experienceItem: {
    backgroundColor: '#1e1e1e', // Same as page background
    marginBottom: 5, // Reduced from 7 to fit content
    overflow: 'hidden',
  },
  experienceButton: {
    width: '100%',
    padding: 4, // Further reduced from 6
    backgroundColor: '#1e1e1e', // Same as page background
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 4, // Reduced from 6
  },
  leftSection: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 11, // Increased from 10
    fontWeight: 'bold',
    color: '#d4d4d4', // text-secondary
    marginBottom: 1, // Reduced from 2
  },
  companyContainer: {
    marginBottom: 1, // Reduced from 2
  },
  company: {
    fontSize: 10, // Increased from 9
    color: '#9cdcfe', // text-link
    textDecoration: 'underline',
  },
  jobLocation: {
    fontSize: 8, // Increased from 7
    color: '#9ca3af', // text-muted
    marginBottom: 0, // Removed bottom margin
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  dates: {
    fontSize: 8, // Increased from 7
    color: '#9cdcfe', // text-link
    paddingVertical: 0, // Reduced from 1
  },
  expandedContent: {
    paddingHorizontal: 6, // Reduced from 8 to fit content
    paddingBottom: 6, // Reduced from 8 to fit content
  },
  expandedInner: {
    paddingTop: 4, // Reduced from 6 to fit content
  },
  description: {
    fontSize: 7, // Increased from 6
    color: '#9ca3af', // text-muted
    marginBottom: 4, // Reduced from 6 to fit content
    lineHeight: 1.2, // Slightly increased from 1.1
  },
  // Header styles
  header: {
    marginBottom: 16, // Increased from 14
    paddingBottom: 12, // Increased from 10
    borderBottom: '1pt solid #6b6b6b',
  },
  name: {
    fontSize: 17, // Increased from 16
    fontWeight: 'bold',
    color: '#d4d4d4',
    marginBottom: 12, // Increased from 10
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6, // Reduced from 8
  },
  contactLeft: {
    flexDirection: 'row',
    gap: 8, // Reduced from 12
  },
  contactItem: {
    fontSize: 8, // Increased from 7
    color: '#9cdcfe',
  },
  location: {
    fontSize: 8, // Increased from 7
    color: '#9ca3af',
  },
  summary: {
    fontSize: 8, // Increased from 7
    color: '#9ca3af',
    lineHeight: 1.3, // Increased from 1.2
    marginTop: 4, // Reduced from 6
  },
  // Single column layout for highlights
  highlightsSection: {
    marginBottom: 0, // No bottom margin
  },
  highlightsTitle: {
    fontSize: 8, // Increased from 7
    fontWeight: 'bold',
    color: '#d4d4d4', // text-secondary
    marginBottom: 2, // Reduced from 3
  },
  highlightsList: {
    gap: 0, // No gap for maximum density
  },
  highlight: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 3, // Reduced from 4
    fontSize: 7, // Increased from 6
    color: '#9ca3af', // text-muted
    lineHeight: 1.1, // Slightly increased from 1.0
  },
  bullet: {
    width: 1.5, // Reduced from 2
    height: 1.5, // Reduced from 2
    backgroundColor: '#d4d4d4', // bg-secondary
    borderRadius: 0.75,
    marginTop: 1.5, // Reduced from 2
    flexShrink: 0,
  },
  // Skills section - moved to top
  skillsSection: {
    marginBottom: 10, // Increased from 8
    paddingBottom: 10, // Increased from 8
    borderBottom: '1pt solid #6b6b6b', // Changed from borderTop
  },
  skillsTitle: {
    fontSize: 10, // Increased from 9
    fontWeight: 'bold',
    color: '#d4d4d4',
    marginBottom: 4, // Reduced from 6
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8, // Reduced from 12
  },
  skillCategory: {
    flex: 1,
    minWidth: '48%',
  },
  skillCategoryTitle: {
    fontSize: 8, // Increased from 7
    fontWeight: 'bold',
    color: '#9cdcfe',
    marginBottom: 2, // Reduced from 3
  },
  skillsList: {
    fontSize: 7, // Increased from 6
    color: '#9ca3af',
    lineHeight: 1.2, // Increased from 1.1
  },
});

interface ResumePDFDocumentProps {
  experiences: Experience[];
}

export default function ResumePDFDocument({
  experiences,
}: ResumePDFDocumentProps) {
  const formatDescription = (description: unknown): string => {
    if (typeof description === 'string') {
      return description;
    }
    // Handle React elements by extracting text content
    if (
      description &&
      typeof description === 'object' &&
      'props' in description
    ) {
      const element = description as { props?: { children?: unknown } };
      if (element.props?.children) {
        const children = element.props.children;
        if (Array.isArray(children)) {
          return children
            .map(child => {
              if (typeof child === 'string') return child;
              if (child && typeof child === 'object' && 'props' in child) {
                const childElement = child as {
                  props?: { children?: unknown };
                };
                return typeof childElement.props?.children === 'string'
                  ? childElement.props.children
                  : '';
              }
              return '';
            })
            .join('');
        }
        return typeof children === 'string' ? children : '';
      }
    }
    return '';
  };

  // Separate main experiences from education and internships
  const mainExperiences = experiences.filter(
    exp => exp.id === 'aws' || exp.id === 'backbar-engineer'
  );
  const secondaryExperiences = experiences.filter(
    exp =>
      exp.id === 'backbar-intern' || exp.id === 'elemica' || exp.id === 'miami'
  );

  const renderMainExperience = (exp: (typeof experiences)[0]) => (
    <View key={exp.id} style={styles.experienceItem}>
      {/* Button section - matches ExperienceItem structure */}
      <View style={styles.experienceButton}>
        <View style={styles.experienceHeader}>
          <View style={styles.leftSection}>
            <Text style={styles.jobTitle}>{exp.role}</Text>
            <View style={styles.companyContainer}>
              <Text style={styles.company}>{exp.company}</Text>
            </View>
            <Text style={styles.jobLocation}>{exp.location}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.dates}>{exp.dates}</Text>
          </View>
        </View>
      </View>

      {/* Expanded content with two-column layout */}
      <View style={styles.expandedContent}>
        <View style={styles.expandedInner}>
          {exp.description && (
            <Text style={styles.description}>
              {formatDescription(exp.description)}
            </Text>
          )}

          {/* Single column layout for highlights only */}
          {exp.highlights && exp.highlights.length > 0 && (
            <View style={styles.highlightsSection}>
              <Text style={styles.highlightsTitle}>Key Highlights:</Text>
              <View style={styles.highlightsList}>
                {exp.highlights.map((highlight, index) => (
                  <View key={index} style={styles.highlight}>
                    <View style={styles.bullet} />
                    <Text>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  const renderCompactExperience = (exp: (typeof experiences)[0]) => (
    <View key={exp.id} style={styles.experienceItem}>
      {/* Button section - matches ExperienceItem structure */}
      <View style={styles.experienceButton}>
        <View style={styles.experienceHeader}>
          <View style={styles.leftSection}>
            <Text style={styles.jobTitle}>{exp.role}</Text>
            <View style={styles.companyContainer}>
              <Text style={styles.company}>{exp.company}</Text>
            </View>
            <Text style={styles.jobLocation}>{exp.location}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.dates}>{exp.dates}</Text>
          </View>
        </View>
      </View>

      {/* Expanded content with two-column layout */}
      <View style={styles.expandedContent}>
        <View style={styles.expandedInner}>
          {exp.description && (
            <Text style={styles.description}>
              {formatDescription(exp.description)}
            </Text>
          )}

          {/* Single column layout for highlights only */}
          {exp.highlights && exp.highlights.length > 0 && (
            <View style={styles.highlightsSection}>
              <Text style={styles.highlightsTitle}>Key Highlights:</Text>
              <View style={styles.highlightsList}>
                {exp.highlights.map((highlight, index) => (
                  <View key={index} style={styles.highlight}>
                    <View style={styles.bullet} />
                    <Text>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.name}>Dhairya Desai</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactLeft}>
                <Text style={styles.contactItem}>desaidn.dev</Text>
                <Text style={styles.contactItem}>me@desaidn.dev</Text>
                <Text style={styles.contactItem}>github.com/desaidn</Text>
                <Text style={styles.contactItem}>
                  linkedin.com/in/dhairya-n-desai
                </Text>
              </View>
              <Text style={styles.location}>New York, NY</Text>
            </View>
            <Text style={styles.summary}>
              Software Engineer with 5 years of experience in distributed
              systems, programming languages, and user interfaces. Currently
              building scalable architectures for AWS Billing systems that
              process billions in cloud transactions. Focused on clean code,
              system reliability, and mentoring developers who ship quality
              software.
            </Text>
          </View>

          {/* Skills Section - Moved to top */}
          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Core Technologies</Text>
            <View style={styles.skillsGrid}>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Backend Development</Text>
                <Text style={styles.skillsList}>
                  Java & Kotlin microservices, Python automation, NodeJS APIs with Express framework
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Frontend Development</Text>
                <Text style={styles.skillsList}>
                  TypeScript applications, React component libraries, VueJS SPAs, responsive HTML/CSS
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  Cloud & Infrastructure
                </Text>
                <Text style={styles.skillsList}>
                  AWS services (Lambda, EC2, S3, DynamoDB, SNS/SQS), Docker containers, Fargate orchestration
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Data & Analytics</Text>
                <Text style={styles.skillsList}>
                  Kinesis streaming, Athena queries, Glue ETL, MySQL databases, Redis caching, supply chain analytics
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.experienceContainer}>
            {/* Main detailed experiences */}
            {mainExperiences.map(renderMainExperience)}

            {/* Compact secondary experiences */}
            {secondaryExperiences.map(renderCompactExperience)}
          </View>
        </View>
      </Page>
    </Document>
  );
}
