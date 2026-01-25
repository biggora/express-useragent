import type { NextFunction, Request, Response } from 'express';
import type { IncomingHttpHeaders } from 'http';
import { UserAgent } from './express-useragent';
import type { AgentDetails } from './express-useragent';

export type { AgentDetails, HeadersLike } from './express-useragent';
export { UserAgent } from './express-useragent';

// Declaration merging for Express Request
// This allows TypeScript users to access req.useragent without type errors
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      useragent?: AgentDetails;
    }
  }
}

export interface UserAgentAugmentedRequest extends Request {
  useragent?: ReturnType<UserAgent['parse']>;
  headers: IncomingHttpHeaders & Record<string, string | string[] | undefined>;
}

export const useragent = new UserAgent();

export type UserAgentMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export const express = (): UserAgentMiddleware => {
  return (req: UserAgentAugmentedRequest, res: Response, next: NextFunction) => {
    const headers = req.headers || {};
    const resolveHeader = (value: string | string[] | undefined): string => {
      if (Array.isArray(value)) {
        return value.join(' ');
      }
      return value ?? '';
    };

    const uaHeader = resolveHeader(headers['user-agent']);
    const ucHeader = resolveHeader(headers['x-ucbrowser-ua']);
    const source = (ucHeader || uaHeader || 'unknown').trim() || 'unknown';

    const parser = new UserAgent().hydrate(source);
    parser.testNginxGeoIP(headers);
    // middleware duplicates tests to match legacy behaviour
    parser.testBot();
    parser.testMobile();
    parser.testAndroidTablet();
    parser.testTablet();
    parser.testCompatibilityMode();
    parser.testSilk();
    parser.testKindleFire();
    parser.testWechat();

    req.useragent = parser.Agent;
    res.locals.useragent = parser.Agent;

    next();
  };
};
export const useragentMiddleware = express;

export default useragent;
