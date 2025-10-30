import { describe, it, expect } from 'vitest';
import useragent from '../src';

describe('Windows detection', () => {
  it('detects Windows 11 when UA includes explicit Windows 11 token', () => {
    const source =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Windows 11; rv:109.0) Gecko/20100101 Firefox/117.0';

    const agent = useragent.parse(source);

    expect(agent.isWindows).toBe(true);
    expect(agent.os).toBe('Windows 11');
  });
});
