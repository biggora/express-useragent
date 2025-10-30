import { describe, it, expect } from 'vitest';
import useragent from '../src/index';
import { expectAgentFlags } from './helpers';

describe('Android detection', () => {
  it('detects Android phone flags', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SAMSUNG-SGH-I777 Build/JZO54K) ' +
      'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

    const agent = useragent.parse(source);

    expectAgentFlags(agent, {
      isMobile: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: true,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: true,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isEpiphany: false,
      isDesktop: false,
      isWindows: false,
      isLinux: true,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isBot: false,
      isAndroidTablet: false,
    });

    expect(agent.browser).toBe('Safari');
    expect(agent.os).toBe('Linux');
    expect(agent.platform).toBe('Android');
    expect(agent.version).toBe('4.0');
  });

  it('detects Samsung Android UA', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) AppleWebKit/533.1 ' +
      '(KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

    const agent = useragent.parse(source);

    expectAgentFlags(agent, {
      isAuthoritative: true,
      isMobile: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: true,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: true,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isDesktop: false,
      isWindows: false,
      isLinux: true,
      isMac: false,
      isWindowsPhone: false,
    });
    expect(agent.version).toBe('4.0');
  });

  it('detects Android tablet UA', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 4.0.4; en-us; SAMSUNG-SGH-I957 Build/IMM76D) ' +
      'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30';

    const agent = useragent.parse(source);

    expectAgentFlags(agent, {
      isMobile: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: true,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: true,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isEpiphany: false,
      isDesktop: false,
      isWindows: false,
      isLinux: true,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isBot: false,
      isAndroidTablet: true,
    });

    expect(agent.browser).toBe('Safari');
    expect(agent.os).toBe('Linux');
    expect(agent.platform).toBe('Android');
    expect(agent.version).toBe('4.0');
  });

  it('detects Xoom Android tablet UA', () => {
    const source =
      'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 ' +
      '(KHTML, like Gecko) Version/4.0 Safari/534.13';

    const agent = useragent.parse(source);

    expectAgentFlags(agent, {
      isAuthoritative: true,
      isMobile: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: true,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: true,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isDesktop: false,
      isWindows: false,
      isLinux: true,
      isMac: false,
      isWindowsPhone: false,
      isFacebook: false,
    });
    expect(agent.version).toBe('4.0');
  });
});
