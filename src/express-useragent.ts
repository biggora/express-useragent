import type { IncomingHttpHeaders } from 'http';

const BOTS = [
  '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
  'ad\\smonitoring',
  'adsbot',
  'apex',
  'applebot',
  'archive.org_bot',
  'baiduspider',
  'bingbot',
  'chromeheadless',
  'cloudflare',
  'cloudinary',
  'crawler',
  'curl',
  'discordbot',
  'duckduckbot',
  'embedly',
  'exabot',
  'facebookexternalhit',
  'facebot',
  'flipboard',
  'google',
  'googlebot',
  'gsa-crawler',
  'gurujibot',
  'guzzlehttp',
  'heritrix',
  'ia_archiver',
  'insights',
  'linkedinbot',
  'ltx71',
  'mediapartners',
  'msnbot',
  'odklbot',
  'phantom\\.js',
  'phantomjs',
  'pingdom',
  'pinterest',
  'python',
  'rtlnieuws',
  'skypeuripreview',
  'slackbot',
  'slurp',
  'spbot',
  'telegrambot',
  'test\\scertificate',
  'testing',
  'tiabot',
  'tumblr ',
  'twitterbot',
  'vkshare',
  'web\\sscraper',
  'wget',
  'yandexbot',
  'whatsapp',
  'orangebot',
  'smtbot',
  'qwantify',
  'mj12bot',
  'ahrefsbot',
  'seznambot',
  'panscient\\.com',
  'duckduckgo-favicons-bot',
  'uptimerobot',
  'semrushbot',
  'postman',
  'dotbot',
  'zoominfobot',
  'ifttt',
  'sogou',
  'ru_bot',
  'researchscan',
  'nimbostratus-bot',
  'slack-imgproxy',
  'node-superagent',
  'go-http-client',
  'jersey',
  'dataprovider.com',
  'github-camo',
  'dispatch',
  'checkmarknetwork',
  'screaming frog',
  'whatweb',
  'daum',
  'netcraftsurveyagent',
  'mojeekbot',
  'surdotlybot',
  'springbot',
] as const;

const IS_BOT_REGEXP = new RegExp(`^.*(${BOTS.join('|')}).*$`, 'i');
const SILK_REGEXP = /silk/i;
const SILK_ACCELERATED_REGEXP = /Silk-Accelerated=true/i;
const SMART_TV_REGEXP = /smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv/i;
const ANDROID_TABLET_REGEXP = /mobile/i;
const MOBILE_REGEXP = /mobile|^ios-/i;
const DALVIK_REGEXP = /dalvik/i;
const IOS_SCALE_REGEXP = /scale/i;
const OKHTTP_REGEXP = /okhttp/i;
const WEBKIT_REGEXP = /applewebkit/i;
const WECHAT_REGEXP = /micromessenger/i;

export interface AgentDetails extends Record<string, unknown> {
  isYaBrowser: boolean;
  isAuthoritative: boolean;
  isMobile: boolean;
  isMobileNative: boolean;
  isTablet: boolean;
  isiPad: boolean;
  isiPod: boolean;
  isiPhone: boolean;
  isiPhoneNative: boolean;
  isAndroid: boolean;
  isAndroidNative: boolean;
  isBlackberry: boolean;
  isOpera: boolean;
  isIE: boolean;
  isEdge: boolean;
  isIECompatibilityMode: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isWebkit: boolean;
  isChrome: boolean;
  isKonqueror: boolean;
  isOmniWeb: boolean;
  isSeaMonkey: boolean;
  isFlock: boolean;
  isAmaya: boolean;
  isPhantomJS: boolean;
  isEpiphany: boolean;
  isDesktop: boolean;
  isWindows: boolean;
  isLinux: boolean;
  isLinux64: boolean;
  isMac: boolean;
  isChromeOS: boolean;
  isBada: boolean;
  isSamsung: boolean;
  isRaspberry: boolean;
  isBot: boolean;
  botName: string;
  isCurl: boolean;
  isAndroidTablet: boolean;
  isWinJs: boolean;
  isKindleFire: boolean;
  isSilk: boolean;
  isCaptive: boolean;
  isSmartTV: boolean;
  isUC: boolean;
  isFacebook: boolean;
  isAlamoFire: boolean;
  isElectron: boolean;
  silkAccelerated: boolean;
  browser: string;
  version: string | number;
  os: string;
  platform: string;
  geoIp: Record<string, string | string[]>;
  source: string;
  isWechat: boolean;
  isWindowsPhone: boolean;
  electronVersion: string;
  SilkAccelerated?: boolean;
}

export type HeadersLike = Partial<Record<string, string | string[] | undefined>>;

const DEFAULT_AGENT: AgentDetails = {
  isYaBrowser: false,
  isAuthoritative: true,
  isMobile: false,
  isMobileNative: false,
  isTablet: false,
  isiPad: false,
  isiPod: false,
  isiPhone: false,
  isiPhoneNative: false,
  isAndroid: false,
  isAndroidNative: false,
  isBlackberry: false,
  isOpera: false,
  isIE: false,
  isEdge: false,
  isIECompatibilityMode: false,
  isSafari: false,
  isFirefox: false,
  isWebkit: false,
  isChrome: false,
  isKonqueror: false,
  isOmniWeb: false,
  isSeaMonkey: false,
  isFlock: false,
  isAmaya: false,
  isPhantomJS: false,
  isEpiphany: false,
  isDesktop: false,
  isWindows: false,
  isLinux: false,
  isLinux64: false,
  isMac: false,
  isChromeOS: false,
  isBada: false,
  isSamsung: false,
  isRaspberry: false,
  isBot: false,
  botName: '',
  isCurl: false,
  isAndroidTablet: false,
  isWinJs: false,
  isKindleFire: false,
  isSilk: false,
  isCaptive: false,
  isSmartTV: false,
  isUC: false,
  isFacebook: false,
  isAlamoFire: false,
  isElectron: false,
  silkAccelerated: false,
  browser: 'unknown',
  version: 'unknown',
  os: 'unknown',
  platform: 'unknown',
  isWechat: false,
  isWindowsPhone: false,
  SilkAccelerated: false,
  geoIp: {},
  source: '',
  electronVersion: '',
};

function createDefaultAgent(): AgentDetails {
  return {
    ...DEFAULT_AGENT,
    geoIp: {},
    source: '',
    electronVersion: '',
    botName: '',
  };
}

export class UserAgent {
  private readonly versions: Record<string, RegExp> = {
    Edge: /(?:edge|edga|edgios|edg)\/([\d\w.-]+)/i,
    Firefox: /(?:firefox|fxios)\/([\d\w.-]+)/i,
    IE: /msie\s([\d.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
    Chrome: /(?:chrome|crios)\/([\d\w.-]+)/i,
    Chromium: /chromium\/([\d\w.-]+)/i,
    Safari: /(version|safari)\/([\d\w.-]+)/i,
    Opera: /version\/([\d\w.-]+)|OPR\/([\d\w.-]+)/i,
    Ps3: /([\d\w.-]+)\)\s*$/i,
    Psp: /([\d\w.-]+)\)?\s*$/i,
    Amaya: /amaya\/([\d\w.-]+)/i,
    SeaMonkey: /seamonkey\/([\d\w.-]+)/i,
    OmniWeb: /omniweb\/v([\d\w.-]+)/i,
    Flock: /flock\/([\d\w.-]+)/i,
    Epiphany: /epiphany\/([\d\w.-]+)/i,
    WinJs: /msapphost\/([\d\w.-]+)/i,
    PhantomJS: /phantomjs\/([\d\w.-]+)/i,
    AlamoFire: /alamofire\/([\d\w.-]+)/i,
    UC: /ucbrowser\/([\d\w.]+)/i,
    Facebook: /FBAV\/([\d\w.]+)/i,
    WebKit: /applewebkit\/([\d\w.]+)/i,
    Wechat: /micromessenger\/([\d\w.]+)/i,
    Electron: /Electron\/([\d\w.]+)/i,
  };

  private readonly browsers: Record<string, RegExp> = {
    YaBrowser: /yabrowser/i,
    Edge: /edge|edga|edgios|edg/i,
    Amaya: /amaya/i,
    Konqueror: /konqueror/i,
    Epiphany: /epiphany/i,
    SeaMonkey: /seamonkey/i,
    Flock: /flock/i,
    OmniWeb: /omniweb/i,
    Chromium: /chromium/i,
    Chrome: /chrome|crios/i,
    Safari: /safari/i,
    IE: /msie|trident/i,
    Opera: /opera|OPR\//i,
    PS3: /playstation 3/i,
    PSP: /playstation portable/i,
    Firefox: /firefox|fxios/i,
    WinJs: /msapphost/i,
    PhantomJS: /phantomjs/i,
    AlamoFire: /alamofire/i,
    UC: /UCBrowser/i,
    Facebook: /FBA[NV]/,
  };

  private readonly os: Record<string, RegExp> = {
    Windows11: /\bwindows(?:\s|_|)11(?:\.\d+)?/i,
    Windows10: /windows nt 10\.0/i,
    Windows81: /windows nt 6\.3/i,
    Windows8: /windows nt 6\.2/i,
    Windows7: /windows nt 6\.1/i,
    UnknownWindows: /windows nt 6\.\d+/i,
    WindowsVista: /windows nt 6\.0/i,
    Windows2003: /windows nt 5\.2/i,
    WindowsXP: /windows nt 5\.1/i,
    Windows2000: /windows nt 5\.0/i,
    WindowsPhone81: /windows phone 8\.1/i,
    WindowsPhone80: /windows phone 8\.0/i,
    OSXCheetah: /os x 10[._]0/i,
    OSXPuma: /os x 10[._]1(\D|$)/i,
    OSXJaguar: /os x 10[._]2/i,
    OSXPanther: /os x 10[._]3/i,
    OSXTiger: /os x 10[._]4/i,
    OSXLeopard: /os x 10[._]5/i,
    OSXSnowLeopard: /os x 10[._]6/i,
    OSXLion: /os x 10[._]7/i,
    OSXMountainLion: /os x 10[._]8/i,
    OSXMavericks: /os x 10[._]9/i,
    OSXYosemite: /os x 10[._]10/i,
    OSXElCapitan: /os x 10[._]11/i,
    MacOSSierra: /os x 10[._]12/i,
    MacOSHighSierra: /os x 10[._]13/i,
    MacOSMojave: /os x 10[._]14/i,
    MacOSCatalina: /os x 10[._]15/i,
    MacOSBigSur: /(mac os x 10[._]16(?:[._]\d+)?|mac os (?:x )?11[._]\d+)/i,
    MacOSMonterey: /mac os (?:x )?12[._]\d+/i,
    MacOSVentura: /mac os (?:x )?13[._]\d+/i,
    MacOSSonoma: /mac os (?:x )?14[._]\d+/i,
    MacOSSequoia: /mac os (?:x )?15[._]\d+/i,
    MacOSTahoe: /mac os (?:x )?26[._]\d+/i,
    Mac: /os x/i,
    Linux: /linux/i,
    Linux64: /linux x86_64/i,
    ChromeOS: /cros/i,
    Wii: /wii/i,
    PS3: /playstation 3/i,
    PSP: /playstation portable/i,
    iPad: /\(iPad.*os (\d+)[._](\d+)/i,
    iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
    iOS: /ios/i,
    Bada: /Bada\/(\d+)\.(\d+)/i,
    Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i,
    Electron: /Electron\/(\d+)\.(\d+)\.(\d+)/i,
  };

  private readonly platform: Record<string, RegExp> = {
    Windows: /windows nt/i,
    WindowsPhone: /windows phone/i,
    Mac: /macintosh/i,
    Linux: /linux/i,
    Wii: /wii/i,
    Playstation: /playstation/i,
    iPad: /ipad/i,
    iPod: /ipod/i,
    iPhone: /iphone/i,
    Android: /android/i,
    Blackberry: /blackberry/i,
    Samsung: /samsung/i,
    Curl: /curl/i,
    Electron: /Electron/i,
    iOS: /^ios-/i,
  };

  public Agent: AgentDetails;

  constructor() {
    this.Agent = createDefaultAgent();
  }

  public reset(): this {
    this.Agent = createDefaultAgent();
    return this;
  }

  public testNginxGeoIP(headers: HeadersLike | IncomingHttpHeaders): this {
    Object.entries(headers ?? {}).forEach(([key, value]) => {
      if (/^GEOIP/i.test(key) && value !== undefined) {
        this.Agent.geoIp[key] = Array.isArray(value) ? value.join(',') : value;
      }
    });
    return this;
  }

  public testBot(): void {
    const source = this.Agent.source.toLowerCase();
    const match = IS_BOT_REGEXP.exec(source);

    if (match) {
      const botIdentifier = match[1];

      // Handle false positives - TikTok WebView contains "googleplay" but isn't a bot
      if (
        botIdentifier === 'google' &&
        (source.includes('tiktok') || source.includes('trill') || source.includes('bytedance'))
      ) {
        this.Agent.isBot = false;
        this.Agent.botName = '';
        return;
      }

      // For all bots, return boolean true and store bot name (fixes issues #168, #138)
      this.Agent.isBot = true;
      this.Agent.botName = botIdentifier;
    } else if (!this.Agent.isAuthoritative) {
      this.Agent.isBot = /bot/i.test(this.Agent.source);
      this.Agent.botName = this.Agent.isBot ? 'bot' : '';
    } else {
      this.Agent.isBot = false;
      this.Agent.botName = '';
    }
  }

  public testSmartTV(): void {
    this.Agent.isSmartTV = SMART_TV_REGEXP.test(this.Agent.source.toLowerCase());
  }

  public testMobile(): void {
    if (this.Agent.isWindows || this.Agent.isLinux || this.Agent.isMac || this.Agent.isChromeOS) {
      this.Agent.isDesktop = true;
    } else if (this.Agent.isAndroid || this.Agent.isSamsung) {
      this.Agent.isMobile = true;
    }

    if (
      this.Agent.isiPad ||
      this.Agent.isiPod ||
      this.Agent.isiPhone ||
      this.Agent.isBada ||
      this.Agent.isBlackberry ||
      this.Agent.isAndroid ||
      this.Agent.isWindowsPhone
    ) {
      this.Agent.isMobile = true;
      this.Agent.isDesktop = false;
    }

    if (MOBILE_REGEXP.test(this.Agent.source)) {
      this.Agent.isMobile = true;
      this.Agent.isDesktop = false;
    }

    if (DALVIK_REGEXP.test(this.Agent.source)) {
      this.Agent.isAndroidNative = true;
      this.Agent.isMobileNative = true;
    }

    if (OKHTTP_REGEXP.test(this.Agent.source)) {
      this.Agent.isAndroidNative = true;
      this.Agent.isMobileNative = true;
      this.Agent.isMobile = true;
      this.Agent.isAndroid = true;
      this.Agent.isDesktop = false;
    }

    if (IOS_SCALE_REGEXP.test(this.Agent.source)) {
      this.Agent.isiPhoneNative = true;
      this.Agent.isMobileNative = true;
    }
  }

  public testAndroidTablet(): void {
    if (this.Agent.isAndroid && !ANDROID_TABLET_REGEXP.test(this.Agent.source)) {
      this.Agent.isAndroidTablet = true;
    }
  }

  public testTablet(): void {
    if (this.Agent.isiPad || this.Agent.isAndroidTablet || this.Agent.isKindleFire) {
      this.Agent.isTablet = true;
    }

    if (/tablet/i.test(this.Agent.source)) {
      this.Agent.isTablet = true;
    }
  }

  public testCompatibilityMode(): void {
    if (!this.Agent.isIE) {
      return;
    }

    const tridentMatch = /Trident\/(\d)\.0/i.exec(this.Agent.source);
    if (!tridentMatch) {
      return;
    }

    const tridentVersion = parseInt(tridentMatch[1], 10);
    const version = parseInt(String(this.Agent.version), 10);

    if (version === 7 && tridentVersion === 7) {
      this.Agent.isIECompatibilityMode = true;
      this.Agent.version = '11.0';
    }
    if (version === 7 && tridentVersion === 6) {
      this.Agent.isIECompatibilityMode = true;
      this.Agent.version = '10.0';
    }
    if (version === 7 && tridentVersion === 5) {
      this.Agent.isIECompatibilityMode = true;
      this.Agent.version = '9.0';
    }
    if (version === 7 && tridentVersion === 4) {
      this.Agent.isIECompatibilityMode = true;
      this.Agent.version = '8.0';
    }
  }

  public testSilk(): string | false {
    if (SILK_REGEXP.test(this.Agent.source)) {
      this.Agent.isSilk = true;
    }

    if (SILK_ACCELERATED_REGEXP.test(this.Agent.source)) {
      this.Agent.silkAccelerated = true;
      this.Agent.SilkAccelerated = true;
    }

    return this.Agent.isSilk ? 'Silk' : false;
  }

  public testKindleFire(): string | false {
    const { source } = this.Agent;
    if (/KFOT/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire';
    }
    if (/KFTT/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HD';
    }
    if (/KFJWI/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HD 8.9';
    }
    if (/KFJWA/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HD 8.9 4G';
    }
    if (/KFSOWI/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HD 7';
    }
    if (/KFTHWI/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HDX 7';
    }
    if (/KFTHWA/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HDX 7 4G';
    }
    if (/KFAPWI/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HDX 8.9';
    }
    if (/KFAPWA/gi.test(source)) {
      this.Agent.isKindleFire = true;
      return 'Kindle Fire HDX 8.9 4G';
    }
    return false;
  }

  public testCaptiveNetwork(): string | false {
    if (/CaptiveNetwork/gi.test(this.Agent.source)) {
      this.Agent.isCaptive = true;
      this.Agent.isMac = true;
      this.Agent.platform = 'Apple Mac';
      return 'CaptiveNetwork';
    }
    return false;
  }

  public testWebkit(): void {
    if (this.Agent.browser === 'unknown' && WEBKIT_REGEXP.test(this.Agent.source)) {
      this.Agent.browser = 'Apple WebKit';
      this.Agent.isWebkit = true;
    }
  }

  public testWechat(): void {
    if (WECHAT_REGEXP.test(this.Agent.source)) {
      this.Agent.isWechat = true;
      this.Agent.version = this.getWechatVersion(this.Agent.source);
    }
  }

  public parse(source: string): AgentDetails {
    return new UserAgent().hydrate(source).Agent;
  }

  public hydrate(source: string): this {
    this.Agent = createDefaultAgent();
    this.Agent.source = source.trim();
    this.Agent.os = this.getOS(this.Agent.source);
    this.Agent.platform = this.getPlatform(this.Agent.source);
    this.Agent.browser = this.getBrowser(this.Agent.source);
    this.Agent.version = this.getBrowserVersion(this.Agent.source);
    this.Agent.electronVersion = this.getElectronVersion(this.Agent.source);
    this.testBot();
    this.testSmartTV();
    this.testMobile();
    this.testAndroidTablet();
    this.testTablet();
    this.testCompatibilityMode();
    this.testSilk();
    this.testKindleFire();
    this.testCaptiveNetwork();
    this.testWebkit();
    this.testWechat();
    return this;
  }

  private getBrowser(string: string): string {
    const agent = this.Agent;
    if (this.browsers.YaBrowser.test(string)) {
      agent.isYaBrowser = true;
      return 'YaBrowser';
    }
    if (this.browsers.AlamoFire.test(string)) {
      agent.isAlamoFire = true;
      return 'AlamoFire';
    }
    if (this.browsers.Edge.test(string)) {
      agent.isEdge = true;
      return 'Edge';
    }
    if (this.browsers.PhantomJS.test(string)) {
      agent.isPhantomJS = true;
      return 'PhantomJS';
    }
    if (this.browsers.Konqueror.test(string)) {
      agent.isKonqueror = true;
      return 'Konqueror';
    }
    if (this.browsers.Amaya.test(string)) {
      agent.isAmaya = true;
      return 'Amaya';
    }
    if (this.browsers.Epiphany.test(string)) {
      agent.isEpiphany = true;
      return 'Epiphany';
    }
    if (this.browsers.SeaMonkey.test(string)) {
      agent.isSeaMonkey = true;
      return 'SeaMonkey';
    }
    if (this.browsers.Flock.test(string)) {
      agent.isFlock = true;
      return 'Flock';
    }
    if (this.browsers.OmniWeb.test(string)) {
      agent.isOmniWeb = true;
      return 'OmniWeb';
    }
    if (this.browsers.Opera.test(string)) {
      agent.isOpera = true;
      return 'Opera';
    }
    if (this.browsers.Chromium.test(string)) {
      agent.isChrome = true;
      return 'Chromium';
    }
    if (this.browsers.Facebook.test(string)) {
      agent.isFacebook = true;
      return 'Facebook';
    }
    if (this.browsers.Chrome.test(string)) {
      agent.isChrome = true;
      return 'Chrome';
    }
    if (this.browsers.WinJs.test(string)) {
      agent.isWinJs = true;
      return 'WinJs';
    }
    if (this.browsers.IE.test(string)) {
      agent.isIE = true;
      return 'IE';
    }
    if (this.browsers.Firefox.test(string)) {
      agent.isFirefox = true;
      return 'Firefox';
    }
    if (this.browsers.Safari.test(string)) {
      agent.isSafari = true;
      return 'Safari';
    }
    if (this.browsers.PS3.test(string)) {
      return 'ps3';
    }
    if (this.browsers.PSP.test(string)) {
      return 'psp';
    }
    if (this.browsers.UC.test(string)) {
      agent.isUC = true;
      return 'UCBrowser';
    }

    if (string.includes('Dalvik')) {
      return 'unknown';
    }

    if (!string.startsWith('Mozilla')) {
      const guess = /^([\d\w.-]+)\/[\d\w.-]+/i.exec(string);
      if (guess) {
        agent.isAuthoritative = false;
        return guess[1];
      }
    }

    return 'unknown';
  }

  private getBrowserVersion(string: string): string {
    const agent = this.Agent;
    const browser = agent.browser;

    const match = (exp: RegExp, index = 1) => {
      const result = string.match(exp);
      return result ? (result[index] ?? result[1] ?? 'unknown') : null;
    };

    switch (browser) {
      case 'Edge':
        return match(this.versions.Edge) ?? 'unknown';
      case 'PhantomJS':
        return match(this.versions.PhantomJS) ?? 'unknown';
      case 'Chrome':
        return match(this.versions.Chrome) ?? 'unknown';
      case 'Chromium':
        return match(this.versions.Chromium) ?? 'unknown';
      case 'Safari':
        return match(this.versions.Safari, 2) ?? 'unknown';
      case 'Opera': {
        const operaMatch = string.match(this.versions.Opera);
        if (operaMatch) {
          return operaMatch[1] || operaMatch[2] || 'unknown';
        }
        return 'unknown';
      }
      case 'Firefox':
        return match(this.versions.Firefox) ?? 'unknown';
      case 'WinJs':
        return match(this.versions.WinJs) ?? 'unknown';
      case 'IE': {
        const ieMatch = string.match(this.versions.IE);
        if (ieMatch) {
          return ieMatch[2] ?? ieMatch[1] ?? 'unknown';
        }
        return 'unknown';
      }
      case 'ps3':
        return match(this.versions.Ps3) ?? 'unknown';
      case 'psp':
        return match(this.versions.Psp) ?? 'unknown';
      case 'Amaya':
        return match(this.versions.Amaya) ?? 'unknown';
      case 'Epiphany':
        return match(this.versions.Epiphany) ?? 'unknown';
      case 'SeaMonkey':
        return match(this.versions.SeaMonkey) ?? 'unknown';
      case 'Flock':
        return match(this.versions.Flock) ?? 'unknown';
      case 'OmniWeb':
        return match(this.versions.OmniWeb) ?? 'unknown';
      case 'UCBrowser':
        return match(this.versions.UC) ?? 'unknown';
      case 'Facebook':
        return match(this.versions.Facebook) ?? 'unknown';
      default:
        if (browser !== 'unknown') {
          const regex = new RegExp(`${browser}[\\/ ]([\\d\\w.\\-]+)`, 'i');
          const genericMatch = string.match(regex);
          if (genericMatch) {
            return genericMatch[1];
          }
        } else {
          this.testWebkit();
          if (this.Agent.isWebkit) {
            const webkitMatch = string.match(this.versions.WebKit);
            if (webkitMatch) {
              return webkitMatch[1];
            }
          }
        }
    }

    return 'unknown';
  }

  private getWechatVersion(string: string): string {
    const match = string.match(this.versions.Wechat);
    return match ? match[1] : 'unknown';
  }

  private getElectronVersion(string: string): string {
    const match = string.match(this.versions.Electron);
    if (match) {
      this.Agent.isElectron = true;
      return match[1];
    }
    return '';
  }

  private getOS(string: string): string {
    if (this.os.WindowsVista.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows Vista';
    }
    if (this.os.Windows7.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 7';
    }
    if (this.os.Windows8.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 8';
    }
    if (this.os.Windows81.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 8.1';
    }
    if (this.os.Windows11.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 11';
    }
    if (this.os.Windows10.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 10.0';
    }
    if (this.os.Windows2003.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 2003';
    }
    if (this.os.WindowsXP.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows XP';
    }
    if (this.os.Windows2000.test(string)) {
      this.Agent.isWindows = true;
      return 'Windows 2000';
    }
    if (this.os.WindowsPhone81.test(string)) {
      this.Agent.isWindowsPhone = true;
      return 'Windows Phone 8.1';
    }
    if (this.os.WindowsPhone80.test(string)) {
      this.Agent.isWindowsPhone = true;
      return 'Windows Phone 8.0';
    }
    if (this.os.Linux64.test(string)) {
      this.Agent.isLinux = true;
      this.Agent.isLinux64 = true;
      return 'Linux 64';
    }
    if (this.os.Linux.test(string)) {
      this.Agent.isLinux = true;
      return 'Linux';
    }
    if (this.os.ChromeOS.test(string)) {
      this.Agent.isChromeOS = true;
      return 'Chrome OS';
    }
    if (this.os.Wii.test(string)) {
      return 'Wii';
    }
    if (this.os.PS3.test(string)) {
      return 'Playstation';
    }
    if (this.os.PSP.test(string)) {
      return 'Playstation';
    }
    if (this.os.OSXCheetah.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Cheetah';
    }
    if (this.os.OSXPuma.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Puma';
    }
    if (this.os.OSXJaguar.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Jaguar';
    }
    if (this.os.OSXPanther.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Panther';
    }
    if (this.os.OSXTiger.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Tiger';
    }
    if (this.os.OSXLeopard.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Leopard';
    }
    if (this.os.OSXSnowLeopard.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Snow Leopard';
    }
    if (this.os.OSXLion.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Lion';
    }
    if (this.os.OSXMountainLion.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Mountain Lion';
    }
    if (this.os.OSXMavericks.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Mavericks';
    }
    if (this.os.OSXYosemite.test(string)) {
      this.Agent.isMac = true;
      return 'OS X Yosemite';
    }
    if (this.os.OSXElCapitan.test(string)) {
      this.Agent.isMac = true;
      return 'OS X El Capitan';
    }
    if (this.os.MacOSSierra.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Sierra';
    }
    if (this.os.MacOSHighSierra.test(string)) {
      this.Agent.isMac = true;
      return 'macOS High Sierra';
    }
    if (this.os.MacOSMojave.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Mojave';
    }
    if (this.os.MacOSCatalina.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Catalina';
    }
    if (this.os.MacOSBigSur.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Big Sur';
    }
    if (this.os.MacOSMonterey.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Monterey';
    }
    if (this.os.MacOSVentura.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Ventura';
    }
    if (this.os.MacOSSonoma.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Sonoma';
    }
    if (this.os.MacOSSequoia.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Sequoia';
    }
    if (this.os.MacOSTahoe.test(string)) {
      this.Agent.isMac = true;
      return 'macOS Tahoe';
    }
    if (this.os.Mac.test(string)) {
      this.Agent.isMac = true;
      return 'OS X';
    }
    const iPadMatch = string.match(this.os.iPad);
    if (iPadMatch) {
      this.Agent.isiPad = true;
      return iPadMatch[0].replace('_', '.');
    }
    const iPhoneMatch = string.match(this.os.iPhone);
    if (iPhoneMatch) {
      this.Agent.isiPhone = true;
      return iPhoneMatch[0].replace('_', '.');
    }
    if (this.os.Bada.test(string)) {
      this.Agent.isBada = true;
      return 'Bada';
    }
    if (this.os.Curl.test(string)) {
      this.Agent.isCurl = true;
      return 'Curl';
    }
    if (this.os.iOS.test(string)) {
      this.Agent.isiPhone = true;
      return 'iOS';
    }
    if (this.os.Electron.test(string)) {
      this.Agent.isElectron = true;
      return 'Electron';
    }
    return 'unknown';
  }

  private getPlatform(string: string): string {
    if (this.platform.Windows.test(string)) {
      return 'Microsoft Windows';
    }
    if (this.platform.WindowsPhone.test(string)) {
      this.Agent.isWindowsPhone = true;
      return 'Microsoft Windows Phone';
    }
    if (this.platform.Mac.test(string)) {
      return 'Apple Mac';
    }
    if (this.platform.Curl.test(string)) {
      return 'Curl';
    }
    if (this.platform.Electron.test(string)) {
      this.Agent.isElectron = true;
      return 'Electron';
    }
    if (this.platform.Android.test(string)) {
      this.Agent.isAndroid = true;
      return 'Android';
    }
    if (this.platform.Blackberry.test(string)) {
      this.Agent.isBlackberry = true;
      return 'Blackberry';
    }
    if (this.platform.Linux.test(string)) {
      return 'Linux';
    }
    if (this.platform.Wii.test(string)) {
      return 'Wii';
    }
    if (this.platform.Playstation.test(string)) {
      return 'Playstation';
    }
    if (this.platform.iPad.test(string)) {
      this.Agent.isiPad = true;
      return 'iPad';
    }
    if (this.platform.iPod.test(string)) {
      this.Agent.isiPod = true;
      return 'iPod';
    }
    if (this.platform.iPhone.test(string)) {
      this.Agent.isiPhone = true;
      return 'iPhone';
    }
    if (this.platform.Samsung.test(string)) {
      this.Agent.isSamsung = true;
      return 'Samsung';
    }
    if (this.platform.iOS.test(string)) {
      return 'Apple iOS';
    }
    return 'unknown';
  }
}
