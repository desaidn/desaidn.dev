import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Experience } from 'types';
import { PROFESSIONAL_SUMMARY } from '~/constants/summary';
import { extractTextFromReactNode } from '../../utils/textExtraction';

const ATS_THEME = {
  colors: {
    primary: '#FFFFFF',
    text: '#000000',
    textSecondary: '#333333',
  },
  fonts: {
    main: 'Helvetica',
  },
  fontSizes: {
    body: 9,
    small: 8,
    header: 14,
    subheader: 11,
    sectionTitle: 12,
  },
  spacing: {
    page: 20,
    section: 12,
    item: 3,
    small: 2,
    tiny: 1,
    jobSpacing: 8,
  },
};

const createStyles = () =>
  StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: ATS_THEME.colors.primary,
      padding: ATS_THEME.spacing.page,
      fontSize: ATS_THEME.fontSizes.body,
      lineHeight: 1.2,
      fontFamily: ATS_THEME.fonts.main,
      color: ATS_THEME.colors.text,
    },
    container: {
      maxWidth: '100%',
    },
    experienceContainer: {
      gap: 0,
    },
    experienceItem: {
      backgroundColor: ATS_THEME.colors.primary,
      marginBottom: ATS_THEME.spacing.jobSpacing,
      overflow: 'hidden',
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: ATS_THEME.spacing.small,
    },
    leftSection: {
      flex: 1,
    },
    jobTitle: {
      fontSize: ATS_THEME.fontSizes.subheader,
      fontWeight: 'bold',
      color: ATS_THEME.colors.text,
      marginBottom: ATS_THEME.spacing.small,
    },
    companyContainer: {
      marginBottom: ATS_THEME.spacing.small,
    },
    company: {
      fontSize: ATS_THEME.fontSizes.body,
      color: ATS_THEME.colors.text,
    },
    jobLocation: {
      fontSize: ATS_THEME.fontSizes.small,
      color: ATS_THEME.colors.textSecondary,
      marginBottom: 0,
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    dates: {
      fontSize: ATS_THEME.fontSizes.small,
      color: ATS_THEME.colors.textSecondary,
      paddingVertical: 0,
    },
    expandedContent: {
      paddingHorizontal: 0,
      paddingBottom: ATS_THEME.spacing.tiny,
    },
    expandedInner: {
      paddingTop: ATS_THEME.spacing.tiny,
    },
    description: {
      fontSize: ATS_THEME.fontSizes.body,
      color: ATS_THEME.colors.text,
      marginBottom: ATS_THEME.spacing.small,
      lineHeight: 1.2,
    },
    header: {
      marginBottom: ATS_THEME.spacing.jobSpacing,
    },
    name: {
      fontSize: ATS_THEME.fontSizes.header,
      fontWeight: 'bold',
      color: ATS_THEME.colors.text,
      marginBottom: ATS_THEME.spacing.small,
    },
    contactInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: ATS_THEME.spacing.small,
    },
    contactLeft: {
      flexDirection: 'row',
      gap: ATS_THEME.spacing.small,
    },
    contactItem: {
      fontSize: ATS_THEME.fontSizes.small,
      color: ATS_THEME.colors.text,
      marginTop: ATS_THEME.spacing.small,
      marginRight: ATS_THEME.spacing.item,
    },
    location: {
      fontSize: ATS_THEME.fontSizes.small,
      marginTop: ATS_THEME.spacing.small,
      color: ATS_THEME.colors.textSecondary,
    },
    summary: {
      fontSize: ATS_THEME.fontSizes.body,
      color: ATS_THEME.colors.text,
      lineHeight: 1.2,
      marginTop: ATS_THEME.spacing.small,
    },
    highlightsSection: {
      marginBottom: 0,
    },
    highlightsTitle: {
      fontSize: ATS_THEME.fontSizes.body,
      fontWeight: 'bold',
      color: ATS_THEME.colors.text,
      marginBottom: ATS_THEME.spacing.tiny,
    },
    highlightsList: {
      gap: ATS_THEME.spacing.tiny,
    },
    highlight: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: ATS_THEME.spacing.small,
      fontSize: ATS_THEME.fontSizes.body,
      color: ATS_THEME.colors.text,
      lineHeight: 1.2,
    },
    bulletText: {
      marginRight: ATS_THEME.spacing.small,
    },
  });

interface ResumePDFDocumentProps {
  experiences: Experience[];
}

export default function ResumePDFDocument({
  experiences,
}: ResumePDFDocumentProps) {
  const styles = createStyles();
  const mainExperiences = experiences.filter(
    exp => exp.id === 'aws' || exp.id === 'backbar-engineer'
  );
  const secondaryExperiences = experiences.filter(
    exp =>
      exp.id === 'backbar-intern' || exp.id === 'elemica' || exp.id === 'miami'
  );

  const renderExperience = (exp: (typeof experiences)[0]) => (
    <View key={exp.id} style={styles.experienceItem}>
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
                    <Text style={styles.bulletText}>-</Text>
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
            <Text style={styles.summary}>{PROFESSIONAL_SUMMARY}</Text>
          </View>

          <View style={styles.experienceContainer}>
            {mainExperiences.map(renderExperience)}

            {secondaryExperiences.map(renderExperience)}
          </View>
        </View>
      </Page>
    </Document>
  );
}
