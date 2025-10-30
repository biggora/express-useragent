import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    exclude: ['tests/legacy/**/*.js'],
    environment: 'node',
  },
});

