import { describe, it, expect } from 'vitest';
import useragent from '../src/index';

/**
 * Tests for P1 bug fixes:
 * - Bug #104: isSamsung property correctly set for Samsung Android devices
 * - Bug #152: TikTok WebView not falsely flagged as bot
 * - Bug #80: Android Browser not falsely detected as Safari
 * - Bug #99: Yandex Browser (YaBrowser / Yowser) not detected as Chrome
 */

describe('Bug #104: isSamsung correctly set for Samsung devices', () => {
  it('sets isSamsung for Samsung Browser UA (SAMSUNG SM-G960U)', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G960U) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) SamsungBrowser/8.2 Chrome/63.0.3239.111 Mobile Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.isSamsung).toBe(true);
    expect(agent.isAndroid).toBe(true);
  });

  it('sets isSamsung for Samsung Galaxy S21 UA', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G991B) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) SamsungBrowser/14.0 Chrome/87.0.4280.141 Mobile Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.isSamsung).toBe(true);
    expect(agent.isAndroid).toBe(true);
  });

  it('does not set isSamsung for non-Samsung Android devices', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.isSamsung).toBe(false);
    expect(agent.isAndroid).toBe(true);
  });
});

describe('Bug #152: TikTok WebView not falsely flagged as bot', () => {
  it('does not flag TikTok/BytedanceWebview Android UA as bot', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 8.1.0; CPH1901 Build/OPM1.171019.026; wv) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 ' +
      'Mobile Safari/537.36 trill_200005 JsSdk/1.0 NetType/WIFI Channel/googleplay ' +
      'AppName/trill app_version/20.0.5 ByteLocale/id-ID ByteFullLocale/id-ID ' +
      'Region/ID BytedanceWebview/d8a21c6';

    const agent = useragent.parse(source);

    expect(agent.isBot).toBe(false);
    expect(agent.isMobile).toBe(true);
  });

  it('does not flag TikTok iPhone UA as bot', () => {
    const source =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) ' +
      'AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TikTok 26.2.0 Safari/604.1';

    const agent = useragent.parse(source);

    expect(agent.isBot).toBe(false);
  });
});

describe('Bug #80: Android Browser not falsely detected as Safari', () => {
  it('detects stock Android Browser instead of Safari (Mobile Safari UA)', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; GT-N5110 Build/JZO54K) ' +
      'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('Android Browser');
    expect(agent.isSafari).toBe(false);
    expect(agent.isAndroid).toBe(true);
    expect(agent.version).toBe('4.0');
  });

  it('detects stock Android Browser for Samsung mobile UA', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) ' +
      'AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('Android Browser');
    expect(agent.isSafari).toBe(false);
    expect(agent.isAndroid).toBe(true);
  });

  it('still detects Safari for Android tablet UA without Mobile prefix', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) ' +
      'AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('Safari');
    expect(agent.isSafari).toBe(true);
  });

  it('still detects Chrome on Android (not Android Browser)', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('Chrome');
    expect(agent.isChrome).toBe(true);
    expect(agent.isSafari).toBe(false);
  });

  it('still detects Silk browser on Android (not Android Browser)', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.0.13.81_10003810) ' +
      'AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 Silk-Accelerated=true';

    const agent = useragent.parse(source);

    expect(agent.isSilk).toBe(true);
    expect(agent.browser).not.toBe('Android Browser');
  });
});

describe('Bug #99: Yandex Browser (YaBrowser / Yowser) not detected as Chrome', () => {
  it('detects YaBrowser correctly', () => {
    const source =
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
      'Chrome/30.0.1599.12785 YaBrowser/13.12.1599.12785 Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('YaBrowser');
    expect(agent.isYaBrowser).toBe(true);
    expect(agent.isChrome).toBe(false);
  });

  it('detects Yowser UA as YaBrowser', () => {
    const source =
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
      'Chrome/46.0.2490.71 Yowser/2.5 Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('YaBrowser');
    expect(agent.isYaBrowser).toBe(true);
    expect(agent.isChrome).toBe(false);
  });

  it('still detects regular Chrome on Android', () => {
    const source =
      'Mozilla/5.0 (Linux; Android 10; SM-G975U) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('Chrome');
    expect(agent.isChrome).toBe(true);
    expect(agent.isYaBrowser).toBe(false);
  });
});
