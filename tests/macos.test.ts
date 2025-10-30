import { describe, it, expect } from 'vitest';
import useragent from '../src';

describe('macOS detection', () => {
  it('detects macOS Big Sur from Big Sur-style user agent strings', () => {
    const source =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/14.0 Safari/605.1.15';

    const agent = useragent.parse(source);

    expect(agent.isMac).toBe(true);
    expect(agent.os).toBe('macOS Big Sur');
  });

  it('detects macOS Big Sur when UA reports Mac OS 11', () => {
    const source =
      'Mozilla/5.0 (Macintosh; Intel Mac OS 11_2) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/14.0 Safari/605.1.15';

    const agent = useragent.parse(source);

    expect(agent.isMac).toBe(true);
    expect(agent.os).toBe('macOS Big Sur');
  });
});
