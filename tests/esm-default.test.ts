import { describe, expect, it } from 'vitest';
import useragent from '../src/index';

describe('ESM Default Export compatibility (issue #177)', () => {
  it('default export should have express() method', () => {
    // @ts-expect-error - testing for existence of express method on default export
    expect(useragent.express).toBeDefined();
    // @ts-expect-error - testing for type of express method on default export
    expect(typeof useragent.express).toBe('function');
  });

  it('default export should have UserAgent class', () => {
    // @ts-expect-error - testing for existence of UserAgent class on default export
    expect(useragent.UserAgent).toBeDefined();
  });
});
