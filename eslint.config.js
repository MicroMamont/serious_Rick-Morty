import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-console': 1,
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/camelcase': 'off',
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  },
]);
