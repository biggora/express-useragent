import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    ignores: ['dist/**', 'lib/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  },
  ...tseslintPlugin.configs['flat/recommended-type-checked'],
  prettierConfig,
  {
    files: ['{src,tests,examples}/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
  },
]);
