import { describe, it, expect } from 'vitest';
import useragent from '../src/index';
import { expectAgentFlags } from './helpers';

interface BotCase {
  name: string;
  source: string;
  expected: Record<string, unknown>;
  isBot?: string | boolean;
}

const cases: BotCase[] = [
  {
    name: 'Arbitrary bot UA',
    source: 'sockbot/3.1.0-RC1 (Linux x86_64) (nodejs 5.10.1) (owner:fred user:george)',
    expected: {
      isAuthoritative: false,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isEpiphany: false,
      isDesktop: true,
      isWindows: false,
      isLinux: true,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
      browser: 'sockbot',
      version: '3.1.0-RC1',
    },
    isBot: true,
  },
  {
    name: 'Baiduspider Bot',
    source: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    expected: {
      isAuthoritative: true,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Apple Bot',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)',
    expected: {
      isAuthoritative: true,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
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
      isDesktop: true,
      isWindows: false,
      isLinux: false,
      isMac: true,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Pingdom Bot',
    source: 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)',
    expected: {
      isAuthoritative: true,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Google Bot',
    source:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/8.0 Mobile/12F70 Safari/600.1.4',
    expected: {
      isAuthoritative: true,
      isMobile: true,
      isiPad: false,
      isiPod: false,
      isiPhone: true,
      isAndroid: false,
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
      isLinux: false,
      isMac: true,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: 'insights',
  },
  {
    name: 'BLEX Bot',
    source: 'Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)',
    expected: {
      isAuthoritative: true,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Orange Bot',
    source: 'Mozilla/5.0 (compatible; OrangeBot/2.0; support.orangebot@orange.com)',
    expected: {
      isAuthoritative: true,
      isMobile: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'SMT Bot',
    source:
      'Mozilla/5.0 (Windows NT 6.1) (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)',
    expected: {
      isAuthoritative: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isEpiphany: false,
      isDesktop: true,
      isWindows: true,
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Qwantify Bot',
    source: 'Mozilla/5.0 (compatible; Qwantify/2.3w; +https://www.qwant.com/)/2.3w',
    expected: {
      isAuthoritative: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'MJ12 Bot',
    source: 'Mozilla/5.0 (compatible; MJ12bot/v1.4.5; http://www.majestic12.co.uk/bot.php?+)',
    expected: {
      isAuthoritative: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
  {
    name: 'Ahrefs Bot',
    source: 'Mozilla/5.0 (compatible; AhrefsBot/5.1; +http://ahrefs.com/robot/)',
    expected: {
      isAuthoritative: true,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isSafari: false,
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
      isLinux: false,
      isMac: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isAndroidTablet: false,
    },
    isBot: true,
  },
];

const failingCases: BotCase[] = [
  {
    name: 'Postman User Agent',
    source: 'PostmanRuntime/7.28.4',
    expected: {
      isAuthoritative: false,
      isMobile: false,
      isDesktop: false,
    },
    isBot: true, // Should return true, not a string
  },
  {
    name: 'Facebook OG Parser',
    source: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    expected: {
      isAuthoritative: false,
      isMobile: false,
      isDesktop: false,
    },
    isBot: true, // Should detect as bot
  },
  {
    name: 'TikTok WebView UA',
    source:
      'Mozilla/5.0 (Linux; Android 8.1.0; CPH1901 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36 trill_200005 JsSdk/1.0 NetType/WIFI Channel/googleplay AppName/trill app_version/20.0.5 ByteLocale/id-ID ByteFullLocale/id-ID Region/ID BytedanceWebview/d8a21c6',
    expected: {
      isAuthoritative: true,
      isMobile: true,
      isDesktop: false,
    },
    isBot: false, // Should not be detected as bot
  },
  {
    name: 'Custom Bot Update',
    source: 'CustomBot/1.0 (+http://example.com/bot)',
    expected: {
      isAuthoritative: false,
      isMobile: false,
      isDesktop: false,
    },
    isBot: true, // Should allow user-defined bots
  },
];

describe('Bot detection', () => {
  cases.forEach((testCase) => {
    const { name, source, expected, isBot: expectedIsBot } = testCase;
    it(name, () => {
      const agent = useragent.parse(source);
      expectAgentFlags(agent, expected);
      const actualIsBot = agent.isBot;
      if (expectedIsBot === undefined) {
        expect(Boolean(actualIsBot)).toBe(true);
      } else if (expectedIsBot === true) {
        expect(Boolean(actualIsBot)).toBe(true);
      } else if (expectedIsBot === false) {
        expect(Boolean(actualIsBot)).toBe(false);
      } else {
        expect(actualIsBot).toBe(expectedIsBot);
      }
    });
  });
});

describe('Failing Bot detection cases', () => {
  failingCases.forEach((testCase) => {
    const { name, source, expected, isBot: expectedIsBot } = testCase;
    it(name, () => {
      const agent = useragent.parse(source);
      expectAgentFlags(agent, expected);
      const actualIsBot = agent.isBot;
      if (expectedIsBot === undefined) {
        expect(Boolean(actualIsBot)).toBe(true);
      } else if (expectedIsBot === true) {
        expect(Boolean(actualIsBot)).toBe(true);
      } else if (expectedIsBot === false) {
        expect(Boolean(actualIsBot)).toBe(false);
      } else {
        expect(actualIsBot).toBe(expectedIsBot);
      }
    });
  });
});
