import { describe, it, expect } from 'vitest';
import { UserAgent } from '../src';

describe('DuckDuckGo Browser Detection', () => {
  describe('Client Hints detection (Chromium-based)', () => {
    it('detects DuckDuckGo via Sec-CH-UA brand', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      const headers = {
        'sec-ch-ua': '"DuckDuckGo";v="1", "Chromium";v="120", "Not A;Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      };

      ua.hydrateFromHeaders(source, headers);

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.version).toBe('1');
    });

    it('detects DuckDuckGo on Android via Client Hints', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';
      const headers = {
        'sec-ch-ua': '"DuckDuckGo";v="5.207", "Chromium";v="120", "Not_A Brand";v="8"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
      };

      ua.hydrateFromHeaders(source, headers);

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.isMobile).toBe(true);
      expect(ua.Agent.clientHints?.mobile).toBe(true);
      expect(ua.Agent.clientHints?.platform).toBe('Android');
    });

    it('extracts version from fullVersionList when available', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      const headers = {
        'sec-ch-ua': '"DuckDuckGo";v="1", "Chromium";v="120"',
        'sec-ch-ua-full-version-list': '"DuckDuckGo";v="1.2.3.456", "Chromium";v="120.0.6099.199"',
      };

      ua.hydrateFromHeaders(source, headers);

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.version).toBe('1.2.3.456');
    });

    it('detects DuckDuckGo when present only in fullVersionList', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      // DuckDuckGo only in fullVersionList, not in sec-ch-ua brands
      const headers = {
        'sec-ch-ua': '"Chromium";v="120", "Not_A Brand";v="8"',
        'sec-ch-ua-full-version-list':
          '"DuckDuckGo";v="5.207.0", "Chromium";v="120.0.6099.199", "Not_A Brand";v="8.0.0.0"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      };

      ua.hydrateFromHeaders(source, headers);

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.version).toBe('5.207.0');
      expect(ua.Agent.clientHints?.fullVersionList).toContainEqual({
        brand: 'DuckDuckGo',
        version: '5.207.0',
      });
    });
  });

  describe('WebKit UA string detection (iOS/macOS)', () => {
    it('detects DuckDuckGo on macOS via Ddg/ pattern', () => {
      const ua = new UserAgent();
      // Typical macOS DuckDuckGo UA
      const source =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 Ddg/17.0';

      ua.hydrate(source);
      ua.testDuckDuckGo();

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.version).toBe('17.0');
    });

    it('detects DuckDuckGo on iOS via Ddg/ pattern', () => {
      const ua = new UserAgent();
      // Typical iOS DuckDuckGo UA
      const source =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1 Ddg/7.92.1';

      ua.hydrate(source);
      ua.testDuckDuckGo();

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.version).toBe('7.92.1');
      expect(ua.Agent.isiPhone).toBe(true);
      expect(ua.Agent.isMobile).toBe(true);
    });

    it('detects DuckDuckGo on iPad via Ddg/ pattern', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1 Ddg/7.92.1';

      ua.hydrate(source);
      ua.testDuckDuckGo();

      expect(ua.Agent.isDuckDuckGo).toBe(true);
      expect(ua.Agent.browser).toBe('DuckDuckGo');
      expect(ua.Agent.isiPad).toBe(true);
    });
  });

  describe('Non-DuckDuckGo browsers', () => {
    it('does not detect regular Chrome as DuckDuckGo', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      const headers = {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      };

      ua.hydrateFromHeaders(source, headers);

      expect(ua.Agent.isDuckDuckGo).toBe(false);
      expect(ua.Agent.browser).toBe('Chrome');
    });

    it('does not detect regular Safari as DuckDuckGo', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';

      ua.hydrate(source);
      ua.testDuckDuckGo();

      expect(ua.Agent.isDuckDuckGo).toBe(false);
      expect(ua.Agent.browser).toBe('Safari');
    });

    it('distinguishes DuckDuckGo bot from DuckDuckGo browser', () => {
      const ua = new UserAgent();
      const source =
        'Mozilla/5.0 (compatible; DuckDuckGo-Favicons-Bot/1.0; +http://duckduckgo.com)';

      ua.hydrate(source);
      ua.testDuckDuckGo();

      // Bot detection should take precedence
      expect(ua.Agent.isBot).toBe(true);
      expect(ua.Agent.botName).toBe('duckduckgo-favicons-bot');
      // Browser detection via Ddg/ pattern shouldn't match bot UA
      expect(ua.Agent.isDuckDuckGo).toBe(false);
    });
  });

  describe('Client Hints parsing', () => {
    it('parses complete client hints headers', () => {
      const ua = new UserAgent();
      const headers = {
        'sec-ch-ua': '"DuckDuckGo";v="1", "Chromium";v="120"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-ch-ua-platform-version': '"13.0.0"',
        'sec-ch-ua-arch': '"arm"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-model': '"Pixel 7"',
        'sec-ch-ua-full-version-list': '"DuckDuckGo";v="1.2.3", "Chromium";v="120.0.6099.199"',
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(2);
      expect(hints?.brands[0]).toEqual({ brand: 'DuckDuckGo', version: '1' });
      expect(hints?.brands[1]).toEqual({ brand: 'Chromium', version: '120' });
      expect(hints?.mobile).toBe(true);
      expect(hints?.platform).toBe('Android');
      expect(hints?.platformVersion).toBe('13.0.0');
      expect(hints?.architecture).toBe('arm');
      expect(hints?.bitness).toBe('64');
      expect(hints?.model).toBe('Pixel 7');
      expect(hints?.fullVersionList).toHaveLength(2);
    });

    it('returns null when no client hints present', () => {
      const ua = new UserAgent();
      const headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).toBeNull();
    });

    it('handles case-insensitive header names', () => {
      const ua = new UserAgent();
      const headers = {
        'SEC-CH-UA': '"DuckDuckGo";v="1"',
        'Sec-Ch-Ua-Mobile': '?0',
        'SEC-CH-UA-PLATFORM': '"Windows"',
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands[0].brand).toBe('DuckDuckGo');
      expect(hints?.mobile).toBe(false);
      expect(hints?.platform).toBe('Windows');
    });
  });

  describe('Client Hints error handling', () => {
    it('returns null for null headers', () => {
      const ua = new UserAgent();
      const hints = ua.parseClientHints(null as unknown as Record<string, string>);
      expect(hints).toBeNull();
    });

    it('returns null for undefined headers', () => {
      const ua = new UserAgent();
      const hints = ua.parseClientHints(undefined as unknown as Record<string, string>);
      expect(hints).toBeNull();
    });

    it('handles non-string header values gracefully', () => {
      const ua = new UserAgent();
      const headers = {
        'sec-ch-ua': '"Brand";v="1"',
        'sec-ch-ua-mobile': 123 as unknown as string, // Invalid type
        'sec-ch-ua-platform': { nested: 'object' } as unknown as string, // Invalid type
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(1);
      expect(hints?.mobile).toBe(false); // Falls back to false
      expect(hints?.platform).toBe(''); // Falls back to empty string
    });

    it('handles array header values', () => {
      const ua = new UserAgent();
      const headers = {
        'sec-ch-ua': ['"Brand";v="1"', '"Second";v="2"'] as unknown as string,
        'sec-ch-ua-platform': ['"Windows"'] as unknown as string,
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(1);
      expect(hints?.platform).toBe('Windows');
    });

    it('truncates oversized brand names and versions', () => {
      const ua = new UserAgent();
      const longBrand = 'A'.repeat(200);
      const longVersion = 'B'.repeat(100);
      const headers = {
        'sec-ch-ua': `"${longBrand}";v="${longVersion}"`,
      };

      const hints = ua.parseClientHints(headers);

      // Regex limits brand to 128 chars, version to 64 chars - so no match
      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(0);
    });

    it('limits number of parsed brands', () => {
      const ua = new UserAgent();
      // Create header with more than MAX_BRAND_COUNT (20) brands
      const brands = Array.from({ length: 30 }, (_, i) => `"Brand${i}";v="${i}"`).join(', ');
      const headers = {
        'sec-ch-ua': brands,
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands.length).toBeLessThanOrEqual(20);
    });

    it('handles malformed brand list gracefully', () => {
      const ua = new UserAgent();
      const headers = {
        'sec-ch-ua': 'not a valid brand list {{{{',
        'sec-ch-ua-mobile': '?1',
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(0);
      expect(hints?.mobile).toBe(true);
    });

    it('handles empty string values', () => {
      const ua = new UserAgent();
      const headers = {
        'sec-ch-ua': '""',
        'sec-ch-ua-mobile': '',
        'sec-ch-ua-platform': '""',
      };

      const hints = ua.parseClientHints(headers);

      expect(hints).not.toBeNull();
      expect(hints?.brands).toHaveLength(0);
      expect(hints?.mobile).toBe(false);
      expect(hints?.platform).toBe('');
    });
  });
});
