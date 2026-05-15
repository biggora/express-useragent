import { afterEach, describe, expect, it, vi } from 'vitest';

type GlobalHost = typeof globalThis & {
  UserAgent?: unknown;
  useragent?: unknown;
  window?: unknown;
  document?: unknown;
};

const globalHost = globalThis as GlobalHost;

function resetBrowserGlobals(): void {
  delete globalHost.UserAgent;
  delete globalHost.useragent;
  delete globalHost.window;
  delete globalHost.document;
}

afterEach(() => {
  resetBrowserGlobals();
});

describe('browser entry SSR guard', () => {
  it('does not attach globals when imported in a Node SSR environment', async () => {
    resetBrowserGlobals();
    vi.resetModules();

    const browserModule = await import('../src/browser.js');
    const agent = browserModule.parse(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    );

    expect(agent.browser).toBe('Chrome');
    expect(globalHost.UserAgent).toBeUndefined();
    expect(globalHost.useragent).toBeUndefined();
  });

  it('attaches browser globals when imported with a browser-like window host', async () => {
    resetBrowserGlobals();
    globalHost.window = globalHost;
    globalHost.document = {};
    vi.resetModules();

    await import('../src/browser.js');

    expect(typeof globalHost.UserAgent).toBe('function');
    expect(globalHost.useragent).toBeDefined();
    expect(typeof (globalHost.useragent as { parse?: unknown }).parse).toBe('function');
  });
});
