/**
 * Reads a CSS custom property value from the document root.
 * Automatically strips quotes from CSS values to ensure compatibility with PDF generation.
 * Returns the fallback value if CSS variables are not available (e.g., server-side).
 */
function getThemeVariable(variableName: string, fallback: string): string {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return fallback;
  }

  try {
    let value = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${variableName}`)
      .trim();

    if (
      value &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }

    return value || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Static fallback values matching app.css @theme definitions.
 * Used when CSS variables are not available (e.g., server-side rendering).
 */
const FALLBACK_COLORS = {
  primary: '#1e1e1e',
  secondary: '#d4d4d4',
  muted: '#9ca3af',
  accent: '#007acc',
  border: '#6b6b6b',
  link: '#9cdcfe',
  linkHover: '#4fc1ff',
} as const;

/**
 * Design system theme colors that read from CSS custom properties.
 * Automatically stays in sync with app.css @theme definitions.
 */
export const THEME_COLORS = {
  get primary() {
    return getThemeVariable('color-primary', FALLBACK_COLORS.primary);
  },
  get secondary() {
    return getThemeVariable('color-secondary', FALLBACK_COLORS.secondary);
  },
  get muted() {
    return getThemeVariable('color-muted', FALLBACK_COLORS.muted);
  },
  get accent() {
    return getThemeVariable('color-accent', FALLBACK_COLORS.accent);
  },
  get border() {
    return getThemeVariable('color-border', FALLBACK_COLORS.border);
  },
  get link() {
    return getThemeVariable('color-link', FALLBACK_COLORS.link);
  },
  get linkHover() {
    return getThemeVariable('color-link-hover', FALLBACK_COLORS.linkHover);
  },
} as const;

/**
 * Static fallback font values matching app.css @theme definitions.
 */
const FALLBACK_FONTS = {
  mono: 'JetBrains Mono',
} as const;

/**
 * Design system theme fonts that read from CSS custom properties.
 * Automatically stays in sync with app.css @theme definitions.
 */
export const THEME_FONTS = {
  get mono() {
    return getThemeVariable('font-mono', FALLBACK_FONTS.mono);
  },
} as const;

export const FONT_WEIGHTS = {
  normal: 'normal',
  medium: 500,
  semibold: 600,
  bold: 'bold',
} as const;

export const SPACING = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 12,
  xxxl: 16,
} as const;

/**
 * Creates a static snapshot of theme values for use in contexts where
 * CSS variables might not be available (e.g., PDF generation).
 */
export function getStaticThemeSnapshot() {
  return {
    colors: {
      primary: THEME_COLORS.primary,
      secondary: THEME_COLORS.secondary,
      muted: THEME_COLORS.muted,
      accent: THEME_COLORS.accent,
      border: THEME_COLORS.border,
      link: THEME_COLORS.link,
      linkHover: THEME_COLORS.linkHover,
    },
    fonts: {
      mono: THEME_FONTS.mono,
    },
    fontWeights: FONT_WEIGHTS,
    spacing: SPACING,
  };
}
