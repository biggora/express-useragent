import { describe, it, expect } from 'vitest';
import useragent from '../src/index';
import { expectAgentFlags } from './helpers';

describe('React Native detection', () => {
  describe('OkHttp (Android)', () => {
    it('detects OkHttp/3.12.12 as mobile Android native', () => {
      const source = 'okhttp/3.12.12';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isAuthoritative: false,
        isMobile: true,
        isMobileNative: true,
        isAndroidNative: true,
        isiPad: false,
        isiPod: false,
        isiPhone: false,
        isAndroid: true,
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
        isBot: false,
      });

      expect(agent.browser).toBe('okhttp');
      expect(agent.version).toBe('3.12.12');
      expect(agent.os).toBe('unknown');
      expect(agent.platform).toBe('unknown');
    });

    it('detects OkHttp/4.9.3 as mobile Android native', () => {
      const source = 'okhttp/4.9.3';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isAuthoritative: false,
        isMobile: true,
        isMobileNative: true,
        isAndroidNative: true,
        isAndroid: true,
        isDesktop: false,
      });

      expect(agent.browser).toBe('okhttp');
      expect(agent.version).toBe('4.9.3');
    });

    it('detects OkHttp/5.0.0-alpha.11 as mobile Android native', () => {
      const source = 'okhttp/5.0.0-alpha.11';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isAuthoritative: false,
        isMobile: true,
        isMobileNative: true,
        isAndroidNative: true,
        isAndroid: true,
        isDesktop: false,
      });

      expect(agent.browser).toBe('okhttp');
      expect(agent.version).toBe('5.0.0-alpha.11');
    });
  });

  describe('React Native iOS', () => {
    it('detects React Native iOS app with CFNetwork', () => {
      const source = 'MyApp/1.0 (iPhone; iOS 15.0; Scale/3.00)';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isAuthoritative: false,
        isMobile: true,
        isMobileNative: true,
        isiPhoneNative: true,
        isiPhone: true,
        isiPad: false,
        isiPod: false,
        isAndroid: false,
        isAndroidNative: false,
        isDesktop: false,
      });

      expect(agent.browser).toBe('MyApp');
      expect(agent.version).toBe('1.0');
    });

    it('detects React Native iPad app', () => {
      const source = 'MyApp/2.1.0 (iPad; iOS 14.5; Scale/2.00)';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isAuthoritative: false,
        isMobile: true,
        isMobileNative: true,
        isTablet: true,
        isiPad: true,
        isiPhone: false,
        isAndroid: false,
        isAndroidNative: false,
        isDesktop: false,
      });

      expect(agent.browser).toBe('MyApp');
      expect(agent.version).toBe('2.1.0');
    });

    it('detects React Native iOS with CFNetwork and device identifier', () => {
      const source = 'MyApp/1.0 CFNetwork/978.5 Darwin/20.5.0 (iPhone; iOS 15.0; Scale/3.00)';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isMobile: true,
        isMobileNative: true,
        isiPhoneNative: true,
        isiPhone: true,
        isiPad: false,
        isAndroid: false,
      });

      expect(agent.browser).toBe('MyApp');
      expect(agent.version).toBe('1.0');
    });

    it('detects React Native iOS with detailed device info', () => {
      const source = 'MyApp/3.2.1 (iPhone10,3; iOS 15.2; Scale/3.00)';

      const agent = useragent.parse(source);

      expectAgentFlags(agent, {
        isMobile: true,
        isMobileNative: true,
        isiPhoneNative: true,
        isiPhone: true,
        isiPad: false,
        isAndroid: false,
        isAndroidNative: false,
      });

      expect(agent.browser).toBe('MyApp');
      expect(agent.version).toBe('3.2.1');
    });
  });

  describe('React Native with additional context', () => {
    it('detects OkHttp with app name prefix', () => {
      const source = 'MyApp/1.0.0 okhttp/3.12.12';

      const agent = useragent.parse(source);

      expect(agent.isMobile).toBe(true);
      expect(agent.isMobileNative).toBe(true);
      expect(agent.isAndroidNative).toBe(true);
      expect(agent.isAndroid).toBe(true);
      expect(agent.browser).toBe('MyApp');
    });

    it('detects case-insensitive OkHttp', () => {
      const source = 'OKHTTP/3.12.12';

      const agent = useragent.parse(source);

      expect(agent.isMobile).toBe(true);
      expect(agent.isMobileNative).toBe(true);
      expect(agent.isAndroidNative).toBe(true);
      expect(agent.isAndroid).toBe(true);
      expect(agent.browser).toBe('OKHTTP');
    });
  });
});
