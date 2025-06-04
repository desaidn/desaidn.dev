import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Global ignores
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '.react-router/**',
      'coverage/**',
      '*.config.js',
      '*.config.ts',
    ],
  },

  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,

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

      // TypeScript Rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@/prefer-const': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
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

  // TypeScript-specific overrides
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Additional TypeScript rules for type-aware linting
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
    },
  },

  // Configuration files
  {
    files: ['**/*.config.{js,ts}', 'vite.config.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Disable conflicting rules with Prettier (must be last)
  eslintConfigPrettier
);
