import type { IncomingHttpHeaders } from 'http';

/**
 * Represents a single brand entry from User-Agent Client Hints
 * @see https://wicg.github.io/ua-client-hints/
 */
export interface ClientHintBrand {
  brand: string;
  version: string;
}

/**
 * Parsed User-Agent Client Hints data from HTTP headers
 * Maps to the NavigatorUAData interface exposed by browsers
 */
export interface ClientHints {
  brands: ClientHintBrand[];
  mobile: boolean;
  platform: string;
  platformVersion: string;
  architecture: string;
  bitness: string;
  model: string;
  fullVersionList: ClientHintBrand[];
}

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

const IS_BOT_REGEXP = new RegExp(`(${BOTS.join('|')})`, 'i');
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
  /** DuckDuckGo browser detected via Client Hints brand or WebKit UA pattern */
  isDuckDuckGo: boolean;
  /** Parsed User-Agent Client Hints when available */
  clientHints: ClientHints | null;
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
  isDuckDuckGo: false,
  clientHints: null,
};

function createDefaultAgent(): AgentDetails {
  return {
    ...DEFAULT_AGENT,
    geoIp: {},
    source: '',
    electronVersion: '',
    botName: '',
    clientHints: null,
  };
}

interface ProductToken {
  name: string;
  version: string;
}

const isProductTokenChar = (charCode: number): boolean =>
  (charCode >= 48 && charCode <= 57) ||
  (charCode >= 65 && charCode <= 90) ||
  (charCode >= 97 && charCode <= 122) ||
  charCode === 45 ||
  charCode === 46 ||
  charCode === 95;

const isDigit = (charCode: number): boolean => charCode >= 48 && charCode <= 57;

const readProductToken = (source: string, startIndex = 0): ProductToken | null => {
  const slashIndex = source.indexOf('/', startIndex);
  if (slashIndex <= startIndex) {
    return null;
  }

  for (let index = startIndex; index < slashIndex; index += 1) {
    if (!isProductTokenChar(source.charCodeAt(index))) {
      return null;
    }
  }

  let endIndex = slashIndex + 1;
  while (endIndex < source.length && isProductTokenChar(source.charCodeAt(endIndex))) {
    endIndex += 1;
  }

  if (endIndex === slashIndex + 1) {
    return null;
  }

  return {
    name: source.slice(startIndex, slashIndex),
    version: source.slice(slashIndex + 1, endIndex),
  };
};

const readVersionAfterProduct = (source: string, productName: string): string | null => {
  const token = readProductToken(source);
  return token?.name.toLowerCase() === productName.toLowerCase() ? token.version : null;
};

const readVersionAfterKnownPrefix = (
  source: string,
  prefixes: readonly string[],
): string | null => {
  const lowerSource = source.toLowerCase();
  let bestStart = -1;
  let bestPrefix = '';

  for (const prefix of prefixes) {
    const prefixStart = lowerSource.indexOf(prefix.toLowerCase());
    if (prefixStart !== -1 && (bestStart === -1 || prefixStart < bestStart)) {
      bestStart = prefixStart;
      bestPrefix = prefix;
    }
  }

  if (bestStart === -1) {
    return null;
  }

  const versionStart = bestStart + bestPrefix.length;
  let versionEnd = versionStart;
  while (versionEnd < source.length && isProductTokenChar(source.charCodeAt(versionEnd))) {
    versionEnd += 1;
  }

  return versionEnd > versionStart ? source.slice(versionStart, versionEnd) : null;
};

const readVersionAfterKnownProduct = (
  source: string,
  productNames: readonly string[],
): string | null =>
  readVersionAfterKnownPrefix(
    source,
    productNames.map((productName) => `${productName}/`),
  );

const readInternetExplorerVersion = (source: string): string | null => {
  const lowerSource = source.toLowerCase();
  const msieIndex = lowerSource.indexOf('msie');
  if (msieIndex !== -1) {
    let versionStart = msieIndex + 4;
    while (source[versionStart] === ' ') {
      versionStart += 1;
    }

    let versionEnd = versionStart;
    while (versionEnd < source.length) {
      const charCode = source.charCodeAt(versionEnd);
      if (!isDigit(charCode) && charCode !== 46) {
        break;
      }
      versionEnd += 1;
    }

    if (versionEnd > versionStart) {
      return source.slice(versionStart, versionEnd);
    }
  }

  const tridentIndex = lowerSource.indexOf('trident/');
  if (tridentIndex === -1) {
    return null;
  }

  const rvIndex = lowerSource.indexOf('rv:', tridentIndex + 8);
  if (rvIndex === -1) {
    return null;
  }

  const versionStart = rvIndex + 3;
  let versionEnd = versionStart;
  while (versionEnd < source.length) {
    const charCode = source.charCodeAt(versionEnd);
    if (!isDigit(charCode) && charCode !== 46) {
      break;
    }
    versionEnd += 1;
  }

  return versionEnd > versionStart ? source.slice(versionStart, versionEnd) : null;
};

const readTrailingProductToken = (source: string, requireClosingParen: boolean): string | null => {
  let endIndex = source.length;
  while (endIndex > 0 && source.charCodeAt(endIndex - 1) === 32) {
    endIndex -= 1;
  }

  if (source[endIndex - 1] === ')') {
    endIndex -= 1;
  } else if (requireClosingParen) {
    return null;
  }

  let startIndex = endIndex;
  while (startIndex > 0 && isProductTokenChar(source.charCodeAt(startIndex - 1))) {
    startIndex -= 1;
  }

  return startIndex < endIndex ? source.slice(startIndex, endIndex) : null;
};

const readIOSDeviceOSMatch = (source: string, device: 'iPad' | 'iPhone'): string | null => {
  const deviceLower = device.toLowerCase();
  let searchFrom = 0;

  while (searchFrom < source.length) {
    const openIndex = source.indexOf('(', searchFrom);
    if (openIndex === -1) {
      return null;
    }

    const closeIndex = source.indexOf(')', openIndex + 1);
    const segmentEnd = closeIndex === -1 ? source.length : closeIndex;
    const segment = source.slice(openIndex + 1, segmentEnd);
    const segmentLower = segment.toLowerCase();

    if (segmentLower.startsWith(deviceLower)) {
      let osSearchFrom = 0;
      while (osSearchFrom < segmentLower.length) {
        const osIndex = segmentLower.indexOf('os ', osSearchFrom);
        if (osIndex === -1) {
          break;
        }

        let versionStart = osIndex + 3;
        while (segment[versionStart] === ' ') {
          versionStart += 1;
        }

        let majorEnd = versionStart;
        while (majorEnd < segment.length && isDigit(segment.charCodeAt(majorEnd))) {
          majorEnd += 1;
        }

        const separator = segment[majorEnd];
        if (majorEnd > versionStart && (separator === '.' || separator === '_')) {
          let minorEnd = majorEnd + 1;
          while (minorEnd < segment.length && isDigit(segment.charCodeAt(minorEnd))) {
            minorEnd += 1;
          }

          if (minorEnd > majorEnd + 1) {
            return `(${segment.slice(0, minorEnd)}`.replace('_', '.');
          }
        }

        osSearchFrom = osIndex + 3;
      }
    }

    searchFrom = segmentEnd + 1;
  }

  return null;
};

/** WebKit DuckDuckGo pattern: " Ddg/X.Y.Z" at end of UA string */
const DUCKDUCKGO_WEBKIT_REGEXP = /\sDdg\/\d+(?:\.\d+)*$/;

export class UserAgent {
  private readonly versions: Record<string, RegExp> = {
    Edge: /(?:edge|edga|edgios|edg)\/([A-Za-z0-9_.-]+)/i,
    Firefox: /(?:firefox|fxios)\/([A-Za-z0-9_.-]+)/i,
    IE: /msie\s(\d+(?:\.\d+)?)|trident\/\d+(?:\.\d+)?;[^)]*\brv:(\d+(?:\.\d+)?)/i,
    YaBrowser: /(?:yabrowser|yowser)\/([A-Za-z0-9_.-]+)/i,
    Chrome: /(?:chrome|crios)\/([A-Za-z0-9_.-]+)/i,
    Chromium: /chromium\/([A-Za-z0-9_.-]+)/i,
    Safari: /(version|safari)\/([A-Za-z0-9_.-]+)/i,
    Opera: /version\/([A-Za-z0-9_.-]+)|OPR\/([A-Za-z0-9_.-]+)/i,
    Amaya: /amaya\/([A-Za-z0-9_.-]+)/i,
    SeaMonkey: /seamonkey\/([A-Za-z0-9_.-]+)/i,
    OmniWeb: /omniweb\/v([A-Za-z0-9_.-]+)/i,
    Flock: /flock\/([A-Za-z0-9_.-]+)/i,
    Epiphany: /epiphany\/([A-Za-z0-9_.-]+)/i,
    WinJs: /msapphost\/([A-Za-z0-9_.-]+)/i,
    PhantomJS: /phantomjs\/([A-Za-z0-9_.-]+)/i,
    AlamoFire: /alamofire\/([A-Za-z0-9_.-]+)/i,
    UC: /ucbrowser\/([A-Za-z0-9_.]+)/i,
    Facebook: /FBAV\/([A-Za-z0-9_.]+)/i,
    WebKit: /applewebkit\/([A-Za-z0-9_.]+)/i,
    Wechat: /micromessenger\/([A-Za-z0-9_.]+)/i,
    Electron: /Electron\/([A-Za-z0-9_.]+)/i,
    DuckDuckGo: /\sDdg\/(\d+(?:\.\d+)*)$/i,
  };

  private readonly browsers: Record<string, RegExp> = {
    YaBrowser: /yabrowser|yowser/i,
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
    DuckDuckGo: /\sDdg\/[\d.]+$/i,
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

  /** Maximum header length to process (prevents DoS from oversized headers) */
  private static readonly MAX_HEADER_LENGTH = 2048;
  /** Maximum number of brands to parse from a brand list */
  private static readonly MAX_BRAND_COUNT = 20;

  /**
   * Parse User-Agent Client Hints from HTTP headers
   * @see https://wicg.github.io/ua-client-hints/
   */
  public parseClientHints(headers: HeadersLike | IncomingHttpHeaders): ClientHints | null {
    const resolveHeader = (value: string | string[] | undefined): string => {
      try {
        if (value === null || value === undefined) {
          return '';
        }
        if (Array.isArray(value)) {
          const first = value[0];
          if (typeof first !== 'string') {
            return '';
          }
          return first.slice(0, UserAgent.MAX_HEADER_LENGTH);
        }
        if (typeof value !== 'string') {
          return '';
        }
        return value.slice(0, UserAgent.MAX_HEADER_LENGTH);
      } catch {
        return '';
      }
    };

    // Validate headers input
    if (headers === null || headers === undefined || typeof headers !== 'object') {
      return null;
    }

    // Normalize header keys to lowercase for case-insensitive lookup
    const normalizedHeaders: Record<string, string> = {};
    try {
      let headerCount = 0;
      const maxHeaders = 50; // Limit iterations over headers object
      for (const [key, value] of Object.entries(headers)) {
        if (++headerCount > maxHeaders) break;
        if (typeof key !== 'string') continue;
        normalizedHeaders[key.toLowerCase()] = resolveHeader(value);
      }
    } catch {
      return null;
    }

    const secChUa = normalizedHeaders['sec-ch-ua'];
    // Return null if no client hints are present
    if (!secChUa) {
      return null;
    }

    const parseBrandList = (header: string): ClientHintBrand[] => {
      try {
        if (!header || typeof header !== 'string') return [];
        const brands: ClientHintBrand[] = [];
        // Match patterns like: "Brand";v="version" or "Brand"; v="version"
        const brandRegex = /"([^"]{1,128})";\s*v="([^"]{1,64})"/g;
        let match;
        let iterations = 0;
        while ((match = brandRegex.exec(header)) !== null) {
          if (++iterations > UserAgent.MAX_BRAND_COUNT) break;
          brands.push({ brand: match[1], version: match[2] });
        }
        return brands;
      } catch {
        return [];
      }
    };

    const parseMobile = (header: string): boolean => {
      try {
        // ?1 = true, ?0 or empty = false
        if (typeof header !== 'string') return false;
        return header === '?1';
      } catch {
        return false;
      }
    };

    const parseQuotedString = (header: string): string => {
      try {
        if (typeof header !== 'string') return '';
        // Limit input length before regex
        const truncated = header.slice(0, 256);
        // Remove surrounding quotes if present
        const match = /^"([^"]*)"$/.exec(truncated);
        return match ? match[1] : truncated;
      } catch {
        return '';
      }
    };

    try {
      const clientHints: ClientHints = {
        brands: parseBrandList(secChUa),
        mobile: parseMobile(normalizedHeaders['sec-ch-ua-mobile'] ?? ''),
        platform: parseQuotedString(normalizedHeaders['sec-ch-ua-platform'] ?? ''),
        platformVersion: parseQuotedString(normalizedHeaders['sec-ch-ua-platform-version'] ?? ''),
        architecture: parseQuotedString(normalizedHeaders['sec-ch-ua-arch'] ?? ''),
        bitness: parseQuotedString(normalizedHeaders['sec-ch-ua-bitness'] ?? ''),
        model: parseQuotedString(normalizedHeaders['sec-ch-ua-model'] ?? ''),
        fullVersionList: parseBrandList(normalizedHeaders['sec-ch-ua-full-version-list'] ?? ''),
      };

      this.Agent.clientHints = clientHints;
      return clientHints;
    } catch {
      return null;
    }
  }

  /**
   * Test for DuckDuckGo browser using both Client Hints and UA string patterns
   * - Chromium platforms (Android, Windows): Sec-CH-UA brand "DuckDuckGo"
   * - WebKit platforms (iOS, macOS): UA string ends with " Ddg/X.Y.Z"
   */
  public testDuckDuckGo(): void {
    // Check client hints brands first (Chromium-based DDG)
    if (this.Agent.clientHints?.brands) {
      const hasDdgBrand = this.Agent.clientHints.brands.some(
        (brand) => brand.brand === 'DuckDuckGo',
      );
      if (hasDdgBrand) {
        this.Agent.isDuckDuckGo = true;
        this.Agent.browser = 'DuckDuckGo';
        this.Agent.version = this.getDuckDuckGoVersion() ?? 'unknown';
        return;
      }
    }

    // Check full version list as well
    if (this.Agent.clientHints?.fullVersionList) {
      const hasDdgBrand = this.Agent.clientHints.fullVersionList.some(
        (brand) => brand.brand === 'DuckDuckGo',
      );
      if (hasDdgBrand) {
        this.Agent.isDuckDuckGo = true;
        this.Agent.browser = 'DuckDuckGo';
        this.Agent.version = this.getDuckDuckGoVersion() ?? 'unknown';
        return;
      }
    }

    // Fallback: check WebKit UA string pattern (iOS/macOS DDG)
    if (DUCKDUCKGO_WEBKIT_REGEXP.test(this.Agent.source)) {
      this.Agent.isDuckDuckGo = true;
      this.Agent.browser = 'DuckDuckGo';
      this.Agent.version = this.getDuckDuckGoVersion() ?? 'unknown';
    }
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

  /**
   * Hydrate agent from UA string and HTTP headers (including Client Hints)
   * This method should be preferred when headers are available as it enables
   * detection of browsers that use Client Hints (e.g., DuckDuckGo on Chromium)
   */
  public hydrateFromHeaders(source: string, headers: HeadersLike | IncomingHttpHeaders): this {
    this.hydrate(source);
    this.parseClientHints(headers);
    this.testDuckDuckGo();
    return this;
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
    // Android Browser: stock AOSP browser - has Android + Version/ + Mobile Safari/ but no Chrome or other browser tokens (Bug #80)
    if (
      /android/i.test(string) &&
      /version\//i.test(string) &&
      /mobile safari\//i.test(string) &&
      !/chrome/i.test(string) &&
      !/silk/i.test(string)
    ) {
      agent.isAndroid = true;
      return 'Android Browser';
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
      const guess = readProductToken(string);
      if (guess) {
        agent.isAuthoritative = false;
        return guess.name;
      }
    }

    return 'unknown';
  }

  private getBrowserVersion(string: string): string {
    const agent = this.Agent;
    const browser = agent.browser;

    switch (browser) {
      case 'Edge':
        return readVersionAfterKnownProduct(string, ['edge', 'edga', 'edgios', 'edg']) ?? 'unknown';
      case 'PhantomJS':
        return readVersionAfterKnownProduct(string, ['phantomjs']) ?? 'unknown';
      case 'YaBrowser':
        return readVersionAfterKnownProduct(string, ['yabrowser', 'yowser']) ?? 'unknown';
      case 'Chrome':
        return readVersionAfterKnownProduct(string, ['chrome', 'crios']) ?? 'unknown';
      case 'Chromium':
        return readVersionAfterKnownProduct(string, ['chromium']) ?? 'unknown';
      case 'Safari':
        return readVersionAfterKnownProduct(string, ['version', 'safari']) ?? 'unknown';
      case 'Opera':
        return readVersionAfterKnownProduct(string, ['version', 'OPR']) ?? 'unknown';
      case 'Firefox':
        return readVersionAfterKnownProduct(string, ['firefox', 'fxios']) ?? 'unknown';
      case 'WinJs':
        return readVersionAfterKnownProduct(string, ['msapphost']) ?? 'unknown';
      case 'IE':
        return readInternetExplorerVersion(string) ?? 'unknown';
      case 'ps3':
        return readTrailingProductToken(string, true) ?? 'unknown';
      case 'psp':
        return readTrailingProductToken(string, false) ?? 'unknown';
      case 'Amaya':
        return readVersionAfterKnownProduct(string, ['amaya']) ?? 'unknown';
      case 'Epiphany':
        return readVersionAfterKnownProduct(string, ['epiphany']) ?? 'unknown';
      case 'SeaMonkey':
        return readVersionAfterKnownProduct(string, ['seamonkey']) ?? 'unknown';
      case 'Flock':
        return readVersionAfterKnownProduct(string, ['flock']) ?? 'unknown';
      case 'OmniWeb':
        return readVersionAfterKnownPrefix(string, ['omniweb/v']) ?? 'unknown';
      case 'UCBrowser':
        return readVersionAfterKnownProduct(string, ['ucbrowser']) ?? 'unknown';
      case 'Facebook':
        return readVersionAfterKnownProduct(string, ['FBAV']) ?? 'unknown';
      case 'Android Browser':
        // Android Browser reports version via Version/X.X token (Bug #80)
        return readVersionAfterKnownProduct(string, ['version', 'safari']) ?? 'unknown';
      case 'DuckDuckGo':
        return this.getDuckDuckGoVersion() ?? 'unknown';
      default:
        if (browser !== 'unknown') {
          return readVersionAfterProduct(string, browser) ?? 'unknown';
        } else {
          this.testWebkit();
          if (this.Agent.isWebkit) {
            return readVersionAfterKnownProduct(string, ['applewebkit']) ?? 'unknown';
          }
        }
    }

    return 'unknown';
  }

  private getWechatVersion(string: string): string {
    const match = string.match(this.versions.Wechat);
    return match ? match[1] : 'unknown';
  }

  private getDuckDuckGoVersion(): string | null {
    // Try client hints first
    const hints = this.Agent.clientHints;
    if (hints) {
      // Check fullVersionList first for more precise version
      const fullBrand = hints.fullVersionList.find((b) => b.brand === 'DuckDuckGo');
      if (fullBrand) {
        return fullBrand.version;
      }
      // Fall back to brands
      const brand = hints.brands.find((b) => b.brand === 'DuckDuckGo');
      if (brand) {
        return brand.version;
      }
    }
    // Fall back to UA string pattern
    const match = this.Agent.source.match(this.versions.DuckDuckGo);
    return match ? match[1] : null;
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
    const iPadMatch = readIOSDeviceOSMatch(string, 'iPad');
    if (iPadMatch) {
      this.Agent.isiPad = true;
      return iPadMatch;
    }
    const iPhoneMatch = readIOSDeviceOSMatch(string, 'iPhone');
    if (iPhoneMatch) {
      this.Agent.isiPhone = true;
      return iPhoneMatch;
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
      // Also detect Samsung devices within Android platform (Bug #104)
      if (this.platform.Samsung.test(string)) {
        this.Agent.isSamsung = true;
      }
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
