import { cp, mkdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const docsDir = path.join(repoRoot, 'docs');
const docsIndex = path.join(docsDir, 'index.html');
const browserBundle = path.join(
  repoRoot,
  'dist',
  'browser',
  'express-useragent.global.min.js',
);
const siteDir = path.join(repoRoot, '_site');
const siteAssetsDir = path.join(siteDir, 'assets');
const siteBundle = path.join(siteAssetsDir, 'express-useragent.global.min.js');

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return false;
    }

    throw error;
  }
}

async function assertFileExists(filePath, message) {
  const stats = await stat(filePath).catch((error) => {
    if (error?.code === 'ENOENT') {
      throw new Error(message);
    }

    throw error;
  });

  if (!stats.isFile()) {
    throw new Error(message);
  }
}

function assertSafeSitePath() {
  if (path.dirname(siteDir) !== repoRoot || path.basename(siteDir) !== '_site') {
    throw new Error(`Refusing to remove unexpected site directory: ${siteDir}`);
  }
}

async function buildPages() {
  await assertFileExists(
    docsIndex,
    'Cannot build GitHub Pages: docs/index.html is missing.',
  );
  await assertFileExists(
    browserBundle,
    'Cannot build GitHub Pages: dist/browser/express-useragent.global.min.js is missing. Run npm run build first.',
  );

  assertSafeSitePath();

  await rm(siteDir, { force: true, recursive: true });
  await mkdir(siteDir, { recursive: true });
  await cp(docsDir, siteDir, { recursive: true });
  await mkdir(siteAssetsDir, { recursive: true });
  await cp(browserBundle, siteBundle);

  const hasIndex = await pathExists(path.join(siteDir, 'index.html'));
  if (!hasIndex) {
    throw new Error('Cannot build GitHub Pages: _site/index.html was not created.');
  }

  console.log('Built GitHub Pages site in _site/.');
}

buildPages().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
