import { UserAgent } from './express-useragent';

const singleton = new UserAgent();

const parse = (source: string) => new UserAgent().parse(source);
const hydrate = (source: string) => new UserAgent().hydrate(source);

type BrowserApi = UserAgent & {
  UserAgent: typeof UserAgent;
  parse: typeof parse;
  hydrate: typeof hydrate;
};

const api = Object.assign(singleton, { UserAgent, parse, hydrate }) as BrowserApi;

type GlobalHost = typeof globalThis & {
  UserAgent?: typeof UserAgent;
  useragent?: BrowserApi;
  window?: unknown;
  document?: unknown;
};

const isBrowserWindow = (host: GlobalHost): boolean =>
  typeof host.window === 'object' && host.window === host && typeof host.document === 'object';

const host = globalThis as GlobalHost;

if (isBrowserWindow(host)) {
  host.UserAgent = UserAgent;
  host.useragent = api;
}

export { UserAgent, parse, hydrate };
export default api;
