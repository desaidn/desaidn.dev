import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import type { Experience } from 'types';
import { extractTextFromReactNode } from '../../utils/textExtraction';
import { getStaticThemeSnapshot } from '../../utils/themeUtils';

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

const createStyles = (theme: ReturnType<typeof getStaticThemeSnapshot>) =>
  StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.lg,
      fontSize: 9,
      lineHeight: 1.2,
      fontFamily: theme.fonts.mono,
      color: theme.colors.secondary,
    },
    container: {
      maxWidth: '100%',
    },
    experienceContainer: {
      gap: 0,
    },
    experienceItem: {
      backgroundColor: theme.colors.primary,
      marginBottom: 1,
      overflow: 'hidden',
    },
    experienceButton: {
      width: '100%',
      padding: 0,
      backgroundColor: theme.colors.primary,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: theme.spacing.sm,
    },
    leftSection: {
      flex: 1,
    },
    jobTitle: {
      fontSize: 12,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.secondary,
      marginBottom: 3,
    },
    companyContainer: {
      marginBottom: 3,
    },
    company: {
      fontSize: 11,
      color: theme.colors.link,
      textDecoration: 'underline',
    },
    jobLocation: {
      fontSize: 8,
      color: theme.colors.muted,
      marginBottom: 0,
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    dates: {
      fontSize: 8,
      color: theme.colors.link,
      paddingVertical: 0,
    },
    expandedContent: {
      paddingHorizontal: 0,
      paddingBottom: 4,
    },
    expandedInner: {
      paddingTop: 2,
    },
    description: {
      fontSize: 8,
      color: theme.colors.muted,
      marginBottom: theme.spacing.sm,
      lineHeight: 1.2,
    },
    header: {
      marginBottom: theme.spacing.md,
    },
    name: {
      fontSize: 17,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.secondary,
      marginBottom: theme.spacing.lg,
    },
    contactInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    contactLeft: {
      flexDirection: 'row',
      gap: 8,
    },
    contactItem: {
      fontSize: 8,
      color: theme.colors.link,
    },
    location: {
      fontSize: 8,
      color: theme.colors.muted,
    },
    summary: {
      fontSize: 8,
      color: theme.colors.muted,
      lineHeight: 1.3,
      marginTop: theme.spacing.xs,
    },
    highlightsSection: {
      marginBottom: 0,
    },
    highlightsTitle: {
      fontSize: 8,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.secondary,
      marginBottom: theme.spacing.xs,
    },
    highlightsList: {
      gap: 0,
    },
    highlight: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 3,
      fontSize: 8,
      color: theme.colors.muted,
      lineHeight: 1.1,
    },
    bullet: {
      width: 1.5,
      height: 1.5,
      backgroundColor: theme.colors.secondary,
      borderRadius: 0.75,
      marginTop: 1.5,
      flexShrink: 0,
    },
    skillsSection: {
      marginBottom: theme.spacing.md,
    },
    skillsTitle: {
      fontSize: 10,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.secondary,
      marginBottom: theme.spacing.sm,
    },
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    skillCategory: {
      flex: 1,
      minWidth: '48%',
    },
    skillCategoryTitle: {
      fontSize: 8,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.link,
      marginBottom: 2,
    },
    skillsList: {
      fontSize: 7,
      color: theme.colors.muted,
      lineHeight: 1.2,
    },
  });

interface ResumePDFDocumentProps {
  experiences: Experience[];
}

export default function ResumePDFDocument({
  experiences,
}: ResumePDFDocumentProps) {
  const theme = getStaticThemeSnapshot();
  const styles = createStyles(theme);
  const mainExperiences = experiences.filter(
    exp => exp.id === 'aws' || exp.id === 'backbar-engineer'
  );
  const secondaryExperiences = experiences.filter(
    exp =>
      exp.id === 'backbar-intern' || exp.id === 'elemica' || exp.id === 'miami'
  );

  const renderMainExperience = (exp: (typeof experiences)[0]) => (
    <View key={exp.id} style={styles.experienceItem}>
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

      <View style={styles.expandedContent}>
        <View style={styles.expandedInner}>
          {exp.description && (
            <Text style={styles.description}>
              {extractTextFromReactNode(exp.description)}
            </Text>
          )}

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

      <View style={styles.expandedContent}>
        <View style={styles.expandedInner}>
          {exp.description && (
            <Text style={styles.description}>
              {extractTextFromReactNode(exp.description)}
            </Text>
          )}

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
          <View style={styles.header}>
            <Text style={styles.name}>Dhairya Desai</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactLeft}>
                <Text style={styles.contactItem}>www.desaidn.dev</Text>
                <Text style={styles.contactItem}>me@desaidn.dev</Text>
                <Text style={styles.contactItem}>github.com/desaidn</Text>
                <Text style={styles.contactItem}>
                  linkedin.com/in/dhairya-n-desai
                </Text>
              </View>
              <Text style={styles.location}>New York, NY</Text>
            </View>
            <Text style={styles.summary}>
              Full-stack engineer with 5+ years building scalable platforms.
              Currently developing AWS Console applications that serve millions
              of developers and billing systems processing billions in
              transactions. Passionate about crafting excellent user experiences
              and mentoring teams to ship reliable software.
            </Text>
          </View>

          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Core Technologies</Text>
            <View style={styles.skillsGrid}>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  Full-Stack Development
                </Text>
                <Text style={styles.skillsList}>
                  TypeScript & React interfaces, Java & Kotlin services, Python
                  automation, functional programming patterns
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  Developer Platforms
                </Text>
                <Text style={styles.skillsList}>
                  AWS Console applications, browser-based tools, scalable
                  architectures, API design for expert users
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>User Experience</Text>
                <Text style={styles.skillsList}>
                  Sophisticated UIs, typed functional programming, component
                  abstractions, collaborative design
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  Cloud & Operations
                </Text>
                <Text style={styles.skillsList}>
                  AWS infrastructure, distributed systems, monitoring, incident
                  response, system reliability
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>AI & Automation</Text>
                <Text style={styles.skillsList}>
                  LLM integration, AI-powered workflows, automation systems,
                  mentoring AI/ML projects
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Interests</Text>
                <Text style={styles.skillsList}>
                  GPU/CPU architecture, RISC-V, WebGL, animation libraries,
                  compilers
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.experienceContainer}>
            {mainExperiences.map(renderMainExperience)}

            {secondaryExperiences.map(renderCompactExperience)}
          </View>
        </View>
      </Page>
    </Document>
  );
}
