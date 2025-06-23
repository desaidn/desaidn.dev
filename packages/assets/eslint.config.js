import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import baseConfig from '../../eslint.config.base.js';

export default tseslint.config(
  // Extend base configuration
  ...baseConfig,

  {
    // Additional ignores specific to React app
    ignores: ['.react-router/**'],
  },

  // React configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React Rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react/jsx-no-target-blank': 'error',
      'react/jsx-key': 'error',

      // React Hooks Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh (Vite HMR)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Stylistic Rules (minimal set to complement Prettier)
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
    },
  },

  // Additional TypeScript rules specific to React app
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // Configuration files and build tools
  {
    files: ['**/*.config.{js,ts}', 'vite.config.{js,ts}', '*Plugin.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Allow console in build tools and config files
      'no-console': 'off',
    },
  },

  // Disable conflicting rules with Prettier (must be last)
  eslintConfigPrettier
);
