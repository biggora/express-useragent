import { describe, expect, it } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { express as useragentMiddleware, AgentDetails } from '../src/index';

/**
 * Tests for TypeScript type declarations (issue #182)
 *
 * These tests verify that the Express Request type augmentation works correctly,
 * allowing users to access req.useragent without TypeScript errors.
 */

const SAMPLE_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

describe('TypeScript type declarations (issue #182)', () => {
  it('Express Request should include useragent property via declaration merging', () => {
    // This test verifies the TypeScript types compile correctly
    // The declaration merging in index.ts adds useragent to Express.Request

    const middleware = useragentMiddleware();

    const req = {
      headers: {
        'user-agent': SAMPLE_UA,
      },
    } as unknown as Request;

    const res = {
      locals: {},
    } as unknown as Response;

    let nextCalled = false;
    const next: NextFunction = () => {
      nextCalled = true;
    };

    middleware(req, res, next);

    // After middleware runs, req.useragent should be defined
    expect(nextCalled).toBe(true);
    expect(req.useragent).toBeDefined();

    // TypeScript should allow accessing useragent properties without errors
    // This is the core of issue #182 - these lines should compile without type errors
    const browser: string | undefined = req.useragent?.browser;
    const os: string | undefined = req.useragent?.os;
    const isMobile: boolean | undefined = req.useragent?.isMobile;
    const isBot: boolean | undefined = req.useragent?.isBot;

    expect(browser).toBe('Chrome');
    expect(os).toBe('Windows 10.0');
    expect(isMobile).toBe(false);
    expect(isBot).toBe(false);
  });

  it('AgentDetails type should be correctly exported and usable', () => {
    // Verify the AgentDetails type is exported and can be used for type annotations
    const mockAgent: Partial<AgentDetails> = {
      browser: 'Chrome',
      version: '120.0.0.0',
      os: 'Windows 10.0',
      platform: 'Microsoft Windows',
      isMobile: false,
      isDesktop: true,
      isBot: false,
    };

    expect(mockAgent.browser).toBe('Chrome');
    expect(mockAgent.isMobile).toBe(false);
  });

  it('useragent property on Request should be optional (undefined before middleware)', () => {
    // Before middleware runs, req.useragent should be undefined
    const req = {
      headers: {
        'user-agent': SAMPLE_UA,
      },
    } as unknown as Request;

    // This should compile without errors - useragent is optional
    expect(req.useragent).toBeUndefined();
  });
});
