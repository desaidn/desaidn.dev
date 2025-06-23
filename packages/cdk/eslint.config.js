import baseConfig from '../../eslint.config.base.js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Extend base configuration
  ...baseConfig,

  {
    // Ignore generated files and build artifacts
    ignores: [
      'lib/**/*.js',
      'lib/**/*.d.ts', 
      'bin/**/*.js',
      'bin/**/*.d.ts',
      'test/**/*.js',
      'test/**/*.d.ts',
    ],
  },

  // CDK-specific configuration for source files
  {
    files: ['**/*.ts'],
    rules: {
      // Allow console.log in CDK/Node.js code
      'no-console': 'off',
      
      // CDK-specific patterns
      '@typescript-eslint/no-empty-function': 'off', // CDK constructors can be empty
      
      // AWS CDK commonly uses any types for AWS SDK responses
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Jest test files
  {
    files: ['**/*.test.ts', '**/__tests__/**/*.ts'],
    languageOptions: {
      globals: {
        // Jest globals
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        it: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      // Test files can have more relaxed rules
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // CDK TypeScript project-specific configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // Disable conflicting rules with Prettier (must be last)
  eslintConfigPrettier
);