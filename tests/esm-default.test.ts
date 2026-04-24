import { describe, expect, it } from 'vitest';
import useragent from '../src/index';

describe('ESM Default Export compatibility (issue #177)', () => {
  it('default export should have express() method', () => {
    expect(useragent.express).toBeDefined();
    expect(typeof useragent.express).toBe('function');
  });

  it('default export should have UserAgent class', () => {
    expect(useragent.UserAgent).toBeDefined();
  });
});
