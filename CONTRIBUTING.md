# Contributing to express-useragent

Thank you for your interest in contributing to express-useragent! This document provides guidelines and instructions for contributing to the project.

## How to Update the Bot List

The bot list is maintained in the source code and **sending a PR is the best way** to update it. Here's a step-by-step guide:

### Step 1: Locate the Bot List

The bot patterns are defined in `src/express-useragent.ts` in the `BOTS` array (around line 3-91):

```typescript
const BOTS = [
  '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
  'ad\\smonitoring',
  'adsbot',
  // ... more patterns
] as const;
```

### Step 2: Add Your Bot Pattern

Add the new bot pattern to the `BOTS` array. Follow these best practices:

- **Use regex patterns**, not exact matches (e.g., use `'google'` instead of `'Googlebot'`)
- **Handle variations** - include common variations (e.g., both `'phantom\\.js'` and `'phantomjs'`)
- **Escape special characters** properly (dots, spaces, etc.)
- **Keep patterns simple** - avoid overly complex regex that might miss variations
- **Use lowercase patterns** - matching is case-insensitive

Example:

```typescript
const BOTS = [
  // ... existing patterns
  'mynewbot',           // Simple pattern
  'anotherbot\\/2\\.0', // Escaped dots for version
  // ... more patterns
] as const;
```

### Step 3: Add Tests

Add test cases in `tests/bots.test.ts` to verify the bot is detected correctly:

```typescript
describe('MyNewBot', () => {
  it('should detect MyNewBot', () => {
    const source = 'MyNewBot/1.0 (+http://example.com/bot)';
    const ua = new UserAgent().hydrate(source);
    expect(ua.Agent.isBot).toBe(true);
    expect(ua.Agent.botName).toBe('mynewbot');
  });
});
```

Also verify that legitimate user agents aren't falsely flagged:

```typescript
it('should not flag MyNewBrowser as a bot', () => {
  const source = 'MyNewBrowser/1.0 (Windows NT 10.0)';
  const ua = new UserAgent().hydrate(source);
  expect(ua.Agent.isBot).toBe(false);
  expect(ua.Agent.botName).toBe('');
});
```

### Step 4: Test Your Changes

Run the test suite to ensure everything works:

```bash
npm test
```

Run the linter to ensure code style:

```bash
npm run lint
```

Run TypeScript type checking:

```bash
npm run typecheck
```

### Step 5: Submit a PR

Create a pull request with:

- A clear title describing the bot being added
- A description that includes:
  - The bot name and what it does
  - A sample user agent string that matches your pattern
  - Any relevant documentation about the bot
  - Confirmation that tests pass

### Step 6: Code Review

Maintainers will review your PR for:

- Correct regex pattern syntax
- No false positives with similar legitimate user agents
- Test coverage for the new bot
- Consistency with existing patterns

## Handling False Positives

Some user agents contain bot-like strings but are legitimate browsers. The code handles this in the `testBot()` method. For example, TikTok WebView contains "googleplay" but isn't a bot.

If you encounter a false positive:

1. Document the user agent string that's being incorrectly flagged
2. Explain why it's not a bot
3. The pattern can be added to the false positive handling logic in `testBot()`

## General Contribution Guidelines

### Bug Reports

When reporting bugs, please include:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- User agent strings that demonstrate the issue
- Node.js version and OS

### Feature Requests

For feature requests:

- Describe the use case clearly
- Provide examples of how the feature would be used
- Consider if it fits the project's scope

### Code Style

- Use **2-space indentation**
- Follow TypeScript best practices
- Ensure all tests pass
- Add tests for new functionality
- Run `npm run lint` before submitting

### Testing

The project uses Vitest for testing. Tests are located in the `tests/` directory:

- `tests/bots.test.ts` - Bot detection tests
- `tests/browsers.test.ts` - Browser detection tests
- `tests/oss.test.ts` - Operating system detection tests
- `tests/devices.test.ts` - Device detection tests
- `tests/general.test.ts` - General parsing tests

When adding new parsing logic, add corresponding tests to verify behavior.

## Development Workflow

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Type check
npm run typecheck

# Build distribution files
npm run build
```

## Questions?

If you have questions about contributing that aren't covered here, feel free to open an issue with your question. We're happy to help!
