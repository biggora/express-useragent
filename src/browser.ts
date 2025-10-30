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
};

if (typeof globalThis !== 'undefined') {
  const host = globalThis as GlobalHost;
  host.UserAgent = UserAgent;
  host.useragent = api;
}

export { UserAgent, parse, hydrate };
export default api;
