import { describe, expect, it } from 'vitest';
import { createRequire } from 'module';
import useragent, { UserAgent, express as esmExpress } from '../src/index';

type CommonJsModule = {
  default: typeof useragent;
  useragent: typeof useragent;
  UserAgent: typeof UserAgent;
  express: typeof esmExpress;
  useragentMiddleware: typeof esmExpress;
};

const requireModule = createRequire(__filename);
const commonJsBuild = requireModule('../dist/index.cjs') as CommonJsModule;

const SAMPLE_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

describe('CommonJS build', () => {
  it('exposes the expected export surface', () => {
    expect(commonJsBuild).toBeDefined();
    expect(commonJsBuild.default).toBeDefined();
    expect(commonJsBuild.useragent).toBeDefined();
    expect(commonJsBuild.default).toBe(commonJsBuild.useragent);
    expect(typeof commonJsBuild.express).toBe('function');
    expect(typeof commonJsBuild.useragent.parse).toBe('function');
    expect(typeof commonJsBuild.UserAgent).toBe('function');
    expect(commonJsBuild.useragentMiddleware).toBe(commonJsBuild.express);
  });

  it('parses user agents identically to the ESM source', () => {
    const esmAgent = useragent.parse(SAMPLE_UA);
    const cjsAgent = commonJsBuild.useragent.parse(SAMPLE_UA);
    expect(cjsAgent).toEqual(esmAgent);
  });

  it('hydrates the same data via the UserAgent class', () => {
    const esmHydrated = new UserAgent().hydrate(SAMPLE_UA).Agent;
    const cjsHydrated = new commonJsBuild.UserAgent().hydrate(SAMPLE_UA).Agent;
    expect(cjsHydrated).toEqual(esmHydrated);
  });

  it('connect-style middleware mirrors the ESM behaviour', () => {
    const middleware = commonJsBuild.express();
    const req: Record<string, unknown> = {
      headers: {
        'user-agent': SAMPLE_UA,
      },
    };
    const res: Record<string, Record<string, unknown>> = {
      locals: {},
    };
    let nextInvocations = 0;

    middleware(
      req as unknown as Parameters<typeof middleware>[0],
      res as unknown as Parameters<typeof middleware>[1],
      () => {
        nextInvocations += 1;
      },
    );

    expect(nextInvocations).toBe(1);
    const expectedAgent = commonJsBuild.useragent.parse(SAMPLE_UA);
    expect(req.useragent).toEqual(expectedAgent);
    expect(res.locals.useragent).toBe(req.useragent);
  });
});
