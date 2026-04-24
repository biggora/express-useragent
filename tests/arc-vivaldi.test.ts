import { describe, it, expect } from 'vitest';
import { UserAgent } from '../src/express-useragent';

describe('Arc and Vivaldi Detection', () => {
  const ua = new UserAgent();

  it('should detect Arc browser on macOS', () => {
    const source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Arc/1.28.2';
    const s = ua.parse(source);
    expect(s.isArc).toBe(true);
    expect(s.browser).toBe('Arc');
    expect(s.version).toBe('1.28.2');
    expect(s.isChrome).toBe(false); // Should be identified as Arc specifically
  });

  it('should detect Vivaldi browser on Windows', () => {
    const source = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Vivaldi/6.6.3271.48';
    const s = ua.parse(source);
    expect(s.isVivaldi).toBe(true);
    expect(s.browser).toBe('Vivaldi');
    expect(s.version).toBe('6.6.3271.48');
    expect(s.isChrome).toBe(false); // Should be identified as Vivaldi specifically
  });
});
