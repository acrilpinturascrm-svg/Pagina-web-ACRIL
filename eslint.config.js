// ESLint v9+ flat config for Vite + React + TypeScript
// Docs: https://eslint.org/docs/latest/use/configure/configuration-files-new

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore build artifacts and dependencies
  {
    ignores: ['dist/**', 'node_modules/**']
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (non type-checked for speed and simplicity)
  ...tseslint.configs.recommended,

  // Project-specific settings and plugins
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // React Hooks best practices
      ...reactHooks.configs.recommended.rules,

      // Vite React Fast Refresh hint (relaxed to warn only for .tsx below)
      'react-refresh/only-export-components': 'off',

      // Common TS hygiene
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },
  {
    files: ['**/*.tsx'],
    rules: {
      // Encourage component exports compatible with React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
];
