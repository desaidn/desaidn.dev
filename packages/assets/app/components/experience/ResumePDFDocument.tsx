import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import type { ResumeContact, ResumeExperience, ResumeSkillGroup } from 'types';
import { RESUME } from '~/constants/resume';

Font.registerHyphenationCallback(word => [word]);

const THEME = {
  colors: {
    text: '#111111',
    secondary: '#111111',
    rule: '#777777',
  },
  fontSizes: {
    name: 19.5,
    headline: 9.5,
    body: 9.6,
    bullet: 9.25,
    small: 8.4,
    section: 9.8,
    job: 10.5,
  },
  spacing: {
    page: 36,
    section: 8,
    item: 7,
    bullet: 2.4,
  },
} as const;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    color: THEME.colors.text,
    fontFamily: 'Helvetica',
    fontSize: THEME.fontSizes.body,
    lineHeight: 1.2,
    padding: THEME.spacing.page,
  },
  header: {
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontSize: THEME.fontSizes.name,
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: 3,
  },
  headline: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.headline,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  contactRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contactGroup: {
    flexDirection: 'row',
  },
  contact: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.small,
    textDecoration: 'none',
  },
  contactSeparator: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.small,
    marginLeft: 4,
    marginRight: 4,
  },
  summary: {
    fontSize: THEME.fontSizes.body,
    lineHeight: 1.24,
    marginBottom: THEME.spacing.section,
  },
  section: {
    marginBottom: THEME.spacing.section,
  },
  sectionTitle: {
    borderBottomColor: THEME.colors.rule,
    borderBottomWidth: 0.6,
    fontSize: THEME.fontSizes.section,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    marginBottom: 4,
    paddingBottom: 1.5,
    textTransform: 'uppercase',
  },
  experience: {
    marginBottom: THEME.spacing.item,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  jobRole: {
    fontSize: THEME.fontSizes.job,
    fontWeight: 'bold',
  },
  dates: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.small,
  },
  employerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  employer: {
    fontSize: THEME.fontSizes.body,
    fontWeight: 'bold',
  },
  location: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.small,
  },
  description: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.bullet,
    lineHeight: 1.18,
    marginBottom: 2.5,
  },
  highlights: {
    gap: THEME.spacing.bullet,
  },
  highlight: {
    flexDirection: 'row',
  },
  bulletMarker: {
    fontSize: THEME.fontSizes.bullet,
    marginRight: 4,
    width: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: THEME.fontSizes.bullet,
    lineHeight: 1.2,
  },
  skill: {
    fontSize: THEME.fontSizes.bullet,
    lineHeight: 1.22,
    marginBottom: 1,
  },
  skillLabel: {
    fontWeight: 'bold',
  },
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  educationDegree: {
    fontSize: THEME.fontSizes.body,
    fontWeight: 'bold',
  },
  educationInstitution: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.body,
    fontWeight: 'bold',
  },
  educationLocation: {
    color: THEME.colors.secondary,
    fontSize: THEME.fontSizes.small,
  },
});

function ResumeContactItem({
  contact,
  index,
}: {
  contact: ResumeContact;
  index: number;
}) {
  return (
    <View style={styles.contactGroup}>
      {index > 0 && <Text style={styles.contactSeparator}>|</Text>}
      {contact.href ? (
        <Link src={contact.href} style={styles.contact}>
          {contact.label}
        </Link>
      ) : (
        <Text style={styles.contact}>{contact.label}</Text>
      )}
    </View>
  );
}

function ResumeExperienceItem({
  experience,
}: {
  experience: ResumeExperience;
}) {
  return (
    <View style={styles.experience}>
      <View wrap={false}>
        <View style={styles.jobHeader}>
          <Text style={styles.jobRole}>{experience.role}</Text>
          <Text style={styles.dates}>{experience.dates}</Text>
        </View>
        <View style={styles.employerRow}>
          <Text style={styles.employer}>{experience.company}</Text>
          <Text style={styles.location}>{experience.location}</Text>
        </View>
        <Text style={styles.description}>{experience.description}</Text>
      </View>

      <View style={styles.highlights}>
        {experience.highlights.map(highlight => (
          <View key={highlight} style={styles.highlight}>
            <Text style={styles.bulletMarker}>-</Text>
            <Text style={styles.bulletText}>{highlight}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function ResumeSkill({ group }: { group: ResumeSkillGroup }) {
  return (
    <Text style={styles.skill}>
      <Text style={styles.skillLabel}>{group.label}: </Text>
      {group.skills.join(', ')}
    </Text>
  );
}

export default function ResumePDFDocument() {
  return (
    <Document
      author={RESUME.name}
      keywords="software engineer, distributed systems, developer platforms, query engines, APIs, SDKs"
      subject="Software engineering resume"
      title={`${RESUME.name} Resume`}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{RESUME.name}</Text>
          <Text style={styles.headline}>{RESUME.headline}</Text>
          <View style={styles.contactRow}>
            {RESUME.contacts.map((contact, index) => (
              <ResumeContactItem
                key={contact.label}
                contact={contact}
                index={index}
              />
            ))}
          </View>
        </View>

        <Text style={styles.summary}>{RESUME.summary}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {RESUME.experiences.map(experience => (
            <ResumeExperienceItem
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {RESUME.skillGroups.map(group => (
            <ResumeSkill key={group.label} group={group} />
          ))}
        </View>

        <View wrap={false}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationRow}>
            <View>
              <Text style={styles.educationDegree}>
                {RESUME.education.degree}
              </Text>
              <Text style={styles.educationInstitution}>
                {RESUME.education.institution}
              </Text>
            </View>
            <Text style={styles.educationLocation}>
              {RESUME.education.location}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
