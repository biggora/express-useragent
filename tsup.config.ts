import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    splitting: false,
    clean: true,
    skipNodeModulesBundle: true,
    target: 'node18',
    outDir: 'dist',
    legacyOutput: true,
    outExtension({ format }) {
      return {
        js: format === 'esm' ? '.mjs' : '.cjs',
      };
    },
  },
  {
    entry: {
      'browser/express-useragent.global': 'src/browser.ts',
    },
    format: ['iife'],
    platform: 'browser',
    globalName: 'expressUseragent',
    sourcemap: true,
    splitting: false,
    clean: false,
    skipNodeModulesBundle: true,
    target: 'es2018',
    outDir: 'dist',
    outExtension() {
      return { js: '.js' };
    },
  },
  {
    entry: {
      'browser/express-useragent.global.min': 'src/browser.ts',
    },
    format: ['iife'],
    platform: 'browser',
    globalName: 'expressUseragent',
    sourcemap: false,
    minify: true,
    splitting: false,
    clean: false,
    skipNodeModulesBundle: true,
    target: 'es2018',
    outDir: 'dist',
    outExtension() {
      return { js: '.js' };
    },
  },
]);
