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
    body: 9.2,
    small: 8.15,
    header: 14.55,
    subheader: 11.3,
    sectionTitle: 12.2,
  },
  spacing: {
    page: 16,
    section: 12,
    item: 3,
    small: 2,
    tiny: 1,
    jobSpacing: 8,
  },
};

const CONTACT_LINE =
  'Brooklyn, NY | www.desaidn.dev | me@desaidn.dev | github.com/desaidn | linkedin.com/in/dhairya-n-desai';

const createStyles = () =>
  StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: ATS_THEME.colors.primary,
      padding: ATS_THEME.spacing.page,
      fontSize: ATS_THEME.fontSizes.body,
      lineHeight: 1.24,
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
      lineHeight: 1.24,
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
    contactItem: {
      fontSize: ATS_THEME.fontSizes.small,
      color: ATS_THEME.colors.text,
      marginTop: ATS_THEME.spacing.small,
      marginBottom: ATS_THEME.spacing.small,
    },
    summary: {
      fontSize: ATS_THEME.fontSizes.body,
      color: ATS_THEME.colors.text,
      lineHeight: 1.24,
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
      lineHeight: 1.24,
    },
    bulletText: {
      marginRight: ATS_THEME.spacing.small,
    },
    technologiesSection: {
      marginTop: ATS_THEME.spacing.small,
    },
    technologiesTitle: {
      fontSize: ATS_THEME.fontSizes.body,
      fontWeight: 'bold',
      color: ATS_THEME.colors.text,
      marginBottom: ATS_THEME.spacing.tiny,
    },
    technologiesText: {
      fontSize: ATS_THEME.fontSizes.small,
      color: ATS_THEME.colors.textSecondary,
      lineHeight: 1.24,
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
    exp => exp.id === 'aws' || exp.id === 'backbar'
  );
  const secondaryExperiences = experiences.filter(exp => exp.id === 'miami');

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

          {exp.id !== 'miami' &&
            exp.highlights &&
            exp.highlights.length > 0 && (
              <View style={styles.highlightsSection}>
                <Text style={styles.highlightsTitle}>Key Highlights:</Text>
                <View style={styles.highlightsList}>
                  {exp.highlights.map((highlight, index) => (
                    <View key={index} style={styles.highlight}>
                      <Text style={styles.bulletText}>-</Text>
                      <Text style={{ flex: 1 }}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

          {exp.technologies && exp.technologies.length > 0 && (
            <View style={styles.technologiesSection}>
              <Text style={styles.technologiesTitle}>Technologies:</Text>
              <Text style={styles.technologiesText}>
                {exp.technologies.join(', ')}
              </Text>
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
            <Text style={styles.contactItem}>{CONTACT_LINE}</Text>
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
