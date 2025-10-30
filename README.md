[![npm version](https://img.shields.io/npm/v/express-useragent.svg)](https://www.npmjs.com/package/express-useragent)
[![CI](https://img.shields.io/github/actions/workflow/status/biggora/express-useragent/ci.yml?branch=master)](https://github.com/biggora/express-useragent/actions)

# express-useragent

Fast user-agent parser with first-class Express middleware and TypeScript typings. Works server-side in Node.js and in the browser via a lightweight IIFE bundle.

> Requires Node.js 18 or newer.

## Install

```bash
npm install express-useragent
```

## Quick Start

```ts
import http from 'node:http';
import { UserAgent } from 'express-useragent';

const server = http.createServer((req, res) => {
  const source = req.headers['user-agent'] ?? 'unknown';
  const parser = new UserAgent().hydrate(source);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(parser.Agent));
});

server.listen(3000);
```

### Express Middleware

```ts
import express from 'express';
import useragent from 'express-useragent';

const app = express();

app.use(useragent.express());

app.get('/', (req, res) => {
  res.json({
    browser: req.useragent?.browser,
    os: req.useragent?.os,
  });
});

app.listen(3000);
```

## API Highlights

- `new UserAgent()` — build a fresh parser instance.
- `useragent.parse(source)` — quick parse returning the agent snapshot.
- `useragent.express()` — Express-compatible middleware that hydrates `req.useragent` and `res.locals.useragent`.
- `parser.Agent` — normalized fingerprint with convenience booleans (`isMobile`, `isBot`, etc.).

Sample payload:

```json
{
  "isMobile": false,
  "isDesktop": true,
  "isBot": false,
  "browser": "Chrome",
  "version": "118.0.0",
  "os": "macOS Sonoma",
  "platform": "Apple Mac",
  "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)..."
}
```

## Browser Usage

The build exports drop-in browser bundles under `dist/browser/`:

- `express-useragent.global.js` — readable IIFE that exposes `window.UserAgent` and `window.useragent`.
- `express-useragent.global.min.js` — minified version of the same API.

```html
<script src="/vendor/express-useragent.global.min.js"></script>
<script>
  const agent = new UserAgent().parse(navigator.userAgent);
  console.log(agent.browser, agent.version);
</script>
```

Prefer consuming the ESM/CJS entry from your bundler when possible:

```ts
import { UserAgent } from 'express-useragent';

const agent = new UserAgent().parse(navigator.userAgent);
```

## Scripts

```bash
npm install        # install dependencies
npm run lint       # lint the TypeScript sources, tests, and examples
npm run typecheck  # run the TypeScript compiler in noEmit mode
npm test           # execute Vitest (includes adapted legacy suites)
npm run build      # emit dist/ (CJS, ESM, d.ts, browser bundles)
```

Examples for manual testing:

```bash
npm run http      # raw Node HTTP sample
npm run express   # Express middleware demo
npm run simple    # CLI parsing helper
```

## Contributing

Bug reports and PRs are welcome. When submitting changes, please include:

- Updated tests under `tests/` covering new parsing behaviour.
- `npm test` and `npm run lint` output or reproduction steps.
- Notes in the changelog for breaking updates.

## License

[MIT](LICENSE) © Aleksejs Gordejevs and contributors.
