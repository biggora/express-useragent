(function(exports) {
  'use strict';

  var BOTS = [
    '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
    'ad\\smonitoring',
    'adsbot',
    'ahrefsbot',
    'apex',
    'applebot',
    'archive.org_bot',
    'baiduspider',
    'bingbot',
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
    'mj12bot',
    'msnbot',
    'odklbot',
    'orangebot',
    'panscient\.com',
    'phantom\\.js',
    'phantomjs',
    'pingdom',
    'pinterest',
    'python',
    'qwantify',
    'rtlnieuws',
    'seznambot',
    'skypeuripreview',
    'slackbot',
    'slurp',
    'smtbot',
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
    'whatsapp',
    'yandexbot'
  ];
  var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

  var UserAgent = function () {

    this.version = '1.0.0';

    this._Browsers = {
      Camino: /camino/i,
      Chrome: /chrome|crios/i,
      Chromium: /chromium/i,
      Edge: /edge|edga|edgios/i,
      Firefox: /firefox|fxios/i,
      FirefoxFocus: /focus/i,
      IE: /msie|trident/i,
      Konqueror: /konqueror/i,
      Maxthon: /maxthon/i,
      Opera: /opera|opios|OPR\//i,
      Safari: /safari/i,
      SeaMonkey: /seamonkey/i,
      UCBrowser: /ucbrowser|ubrowser/i,
      Vivaldi: /vivaldi/i
    };

    this._BrowsersVersions = {
      Chrome: /(?:chrome|crios)\/([\d\w\.\-]+)/i,
      Chromium: /chromium\/([\d\w\.\-]+)/i,
      Edge: /(?:edge|edga|edgios)\/([\d\w\.\-]+)/i,
      Firefox: /(?:firefox|fxios)\/([\d\w\.\-]+)/i,
      IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
      Opera: /(?:version|opr|opios)\/([\d\w\.\-]+)/i,
      Safari: /version\/([\d\w\.\-]+)/i
    };

    this._OS = {
      Android: /android/i,
      Bada: /Bada\/(\d+)\.(\d+)/i,
      ChromeOS: /cros/i,
      iOS: /(ios|iphone|ipad|ipod)/i,
      Linux: /linux/i,
      Mac: /macintosh/i,
      MacOSHighSierra: /os x 10[._]13/i,
      MacOSSierra: /os x 10[._]12/i,
      OSXCheetah: /os x 10[._]0/i,
      OSXElCapitan: /os x 10[._]11/i,
      OSXJaguar: /os x 10[._]2/i,
      OSXLeopard: /os x 10[._]5/i,
      OSXLion: /os x 10[._]7/i,
      OSXMavericks: /os x 10[._]9/i,
      OSXMountainLion: /os x 10[._]8/i,
      OSXPanther: /os x 10[._]3/i,
      OSXPuma: /os x 10[._]1(\D|$)/i,
      OSXSnowLeopard: /os x 10[._]6/i,
      OSXTiger: /os x 10[._]4/i,
      OSXYosemite: /os x 10[._]10/i,
      UnknownWindows: /windows nt 6\.\d+/i,
      Windows: /windows/i,
      Windows10: /windows nt 10\.0/i,
      Windows2000: /windows nt 5\.0/i,
      Windows2003: /windows nt 5\.2/i,
      Windows7: /windows nt 6\.1/i,
      Windows8: /windows nt 6\.2/i,
      Windows81: /windows nt 6\.3/i,
      WindowsPhone: /windows phone/i,
      WindowsVista: /windows nt 6\.0/i,
      WindowsXP: /windows nt 5\.1/i,
    };

    this._OSVersions = {
      Android: /android\s([\d\w\.\-]+)/i,
      iOS: /OS\s([\d\w\.\-]+)/i,
      Mac: /os\sx\s([\d\w\.\-]+)/i,
      Windows: /windows\snt\s([\d\w\.\-]+)/i,
      WindowsPhone: /windows\sphone\s([\d\w\.\-]+)/i
    };

    this._Platform = {
      Blackberry: /blackberry/i,
      iPad: /ipad/i,
      iPhone: /iphone/i,
      iPod: /ipod/i,
      Samsung: /samsung/i
    };

    this.DefaultAgent = {
      isAndroid: false,
      isAndroidTablet: false,
      isAuthoritative: true,
      isBada: false,
      isBlackBerry: false,
      isBot: false,
      isCamino: false,
      isCaptive: false,
      isChrome: false,
      isChromeOS: false,
      isChromium: false,
      isDesktop: false,
      isEdge: false,
      isFirefox: false,
      isFirefoxFocus: false,
      isIE: false,
      isIECompatibilityMode: false,
      isiOS: false,
      isiPad: false,
      isiPhone: false,
      isiPod: false,
      isKonqueror: false,
      isLinux: false,
      isMac: false,
      isMaxthon: false,
      isMobile: false,
      isOpera: false,
      isSafari: false,
      isSamsung: false,
      isSeaMonkey: false,
      isTablet: false,
      isUCBrowser: false,
      isVivaldi: false,
      isWebkit: false,
      isWindows: false,
      isWindowsPhone: false,
      browser: 'Unknown',
      browserversion: 'Unknown',
      geoIp: {},
      os: 'Unknown',
      osversion: 'Unknown',
      platform: 'Unknown',
      source: ''
    };

    this.Agent = {};

    this.getBrowser = function (string) {
      switch (true) {
        case this._Browsers.FirefoxFocus.test(string):
          this.Agent.isFirefoxFocus = true;
          return 'Firefox Focus';
        case this._Browsers.Konqueror.test(string):
          this.Agent.isKonqueror = true;
          return 'Konqueror';
        case this._Browsers.SeaMonkey.test(string):
          this.Agent.isSeaMonkey = true;
          return 'SeaMonkey';
        case this._Browsers.Maxthon.test(string):
          this.Agent.isMaxthon = true;
          return 'Maxthon';
        case this._Browsers.Vivaldi.test(string):
          this.Agent.isVivaldi = true;
          return 'Vivaldi';
        case this._Browsers.Camino.test(string):
          this.Agent.isCamino = true;
          return 'Camino';
        case this._Browsers.UCBrowser.test(string):
          this.Agent.isUCBrowser = true;
          return 'UCBrowser';
        case this._Browsers.Opera.test(string):
          this.Agent.isOpera = true;
          return 'Opera';
        case this._Browsers.Edge.test(string):
          this.Agent.isEdge = true;
          return 'Edge';
        case this._Browsers.Chromium.test(string):
          this.Agent.isChromium = true;
          return 'Chromium';
        case this._Browsers.Chrome.test(string):
          this.Agent.isChrome = true;
          return 'Chrome';
        case this._Browsers.Firefox.test(string):
          this.Agent.isFirefox = true;
          return 'Firefox';
        case this._Browsers.IE.test(string):
          this.Agent.isIE = true;
          return 'IE';
        case this._Browsers.Safari.test(string):
          this.Agent.isSafari = true;
          return 'Safari';
        default:
          if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) { // If the UA does not start with Mozilla, guess the user agent
            this.Agent.isAuthoritative = false;
            return RegExp.$1;
          }
          return 'Unknown';
      }
    };

    this.getBrowserVersion = function (string) {
      var regex;
      switch (this.Agent.browser) {
        case 'Chrome':
          if (this._BrowsersVersions.Chrome.test(string)) {
            return RegExp.$1;
          }
          break;
        case 'Chromium':
          if (this._BrowsersVersions.Chromium.test(string)) {
            return RegExp.$1;
          }
          break;
        case 'Edge':
          if (this._BrowsersVersions.Edge.test(string)) {
            return RegExp.$1;
          }
          break;
        case 'Firefox':
          if (this._BrowsersVersions.Firefox.test(string)) {
            return RegExp.$1;
          }
          break;
        case 'IE':
          if (this._BrowsersVersions.IE.test(string)) {
            return RegExp.$2 ? RegExp.$2 : RegExp.$1;
          }
          break;
        case 'Opera':
          if (this._BrowsersVersions.Opera.test(string)) {
            return RegExp.$1 ? RegExp.$1: RegExp.$2;
          }
          break;
        case 'Safari':
          if (this._BrowsersVersions.Safari.test(string)) {
            return RegExp.$1;
          }
          break;
        default:
          if (this.Agent.browser !== 'Unknown') {
            regex = new RegExp(this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
            if (regex.test(string)) {
              return RegExp.$1;
            }
          } else {
            this.testWebkit();
            if (this.Agent.isWebkit && this._BrowsersVersions.WebKit.test(string)) {
              return RegExp.$1;
            }
          }
          return '0';
      }
    };

    this.getOS = function (string) {
      switch (true) {
        case this._OS.OSXCheetah.test(string):
          this.Agent.isMac = true;
          return 'OS X Cheetah';
        case this._OS.OSXPuma.test(string):
          this.Agent.isMac = true;
          return 'OS X Puma';
        case this._OS.OSXJaguar.test(string):
          this.Agent.isMac = true;
          return 'OS X Jaguar';
        case this._OS.OSXPanther.test(string):
          this.Agent.isMac = true;
          return 'OS X Panther';
        case this._OS.OSXTiger.test(string):
          this.Agent.isMac = true;
          return 'OS X Tiger';
        case this._OS.OSXLeopard.test(string):
          this.Agent.isMac = true;
          return 'OS X Leopard';
        case this._OS.OSXSnowLeopard.test(string):
          this.Agent.isMac = true;
          return 'OS X Snow Leopard';
        case this._OS.OSXLion.test(string):
          this.Agent.isMac = true;
          return 'OS X Lion';
        case this._OS.OSXMountainLion.test(string):
          this.Agent.isMac = true;
          return 'OS X Mountain Lion';
        case this._OS.OSXMavericks.test(string):
          this.Agent.isMac = true;
          return 'OS X Mavericks';
        case this._OS.OSXYosemite.test(string):
          this.Agent.isMac = true;
          return 'OS X Yosemite';
        case this._OS.OSXElCapitan.test(string):
          this.Agent.isMac = true;
          return 'OS X El Capitan';
        case this._OS.MacOSSierra.test(string):
          this.Agent.isMac = true;
          return 'macOS Sierra';
        case this._OS.MacOSHighSierra.test(string):
          this.Agent.isMac = true;
          return 'macOS High Sierra';
        case this._OS.Mac.test(string):
          this.Agent.isMac = true;
          return 'OS X';
        case this._OS.WindowsVista.test(string):
          this.Agent.isWindows = true;
          return 'Windows Vista';
        case this._OS.Windows7.test(string):
          this.Agent.isWindows = true;
          return 'Windows 7';
        case this._OS.Windows8.test(string):
          this.Agent.isWindows = true;
          return 'Windows 8';
        case this._OS.Windows81.test(string):
          this.Agent.isWindows = true;
          return 'Windows 8.1';
        case this._OS.Windows10.test(string):
          this.Agent.isWindows = true;
          return 'Windows 10.0';
        case this._OS.Windows2003.test(string):
          this.Agent.isWindows = true;
          return 'Windows 2003';
        case this._OS.WindowsXP.test(string):
          this.Agent.isWindows = true;
          return 'Windows XP';
        case this._OS.Windows2000.test(string):
          this.Agent.isWindows = true;
          return 'Windows 2000';
        case this._OS.WindowsPhone.test(string):
          this.Agent.isWindowsPhone = true;
          return 'Windows Phone';
        case this._OS.Windows.test(string):
          this.Agent.isWindows = true;
          return 'Windows';
        case this._OS.iOS.test(string):
          this.Agent.isiOS = true;
          return 'iOS';
        case this._OS.Android.test(string):
          this.Agent.isAndroid = true;
          return 'Android';
        case this._OS.ChromeOS.test(string):
          this.Agent.isChromeOS = true;
          return 'Chrome OS';
        case this._OS.Linux.test(string):
          this.Agent.isLinux = true;
          return 'Linux';
        case this._OS.Bada.test(string):
          this.Agent.isBada = true;
          return 'Bada';
        default:
          return 'Unknown';
      }
    };

    this.getOSVersion = function (string) {
      switch (true) {
        case this.Agent.isAndroid:
          if (this._OSVersions.Android.test(string)) {
            return RegExp.$1;
          }
          break;
        case this.Agent.isiOS:
          if (this._OSVersions.iOS.test(string)) {
            return (RegExp.$1).replace(/_/g, '.');
          }
          break;
        case this.Agent.isMac:
          if (this._OSVersions.Mac.test(string)) {
            return (RegExp.$1).replace(/_/g, '.');
          }
          break;
          case this.Agent.isWindowsPhone:
            if (this._OSVersions.WindowsPhone.test(string)) {
              return RegExp.$1;
            }
            break;
        case this.Agent.isWindows:
          if (this._OSVersions.Windows.test(string)) {
            return RegExp.$1;
          }
          break;
        default:
          return '0';
      }
    };

    this.getPlatform = function (string) {
      switch (true) {
        case this._Platform.Blackberry.test(string):
          this.Agent.isBlackBerry = true;
          return 'BlackBerry';
        case this._Platform.iPad.test(string):
          this.Agent.isiPad = true;
          return 'iPad';
        case this._Platform.iPod.test(string):
          this.Agent.isiPod = true;
          return 'iPod';
        case this._Platform.iPhone.test(string):
          this.Agent.isiPhone = true;
          return 'iPhone';
        case this._Platform.Samsung.test(string):
          this.Agent.isiSamsung = true;
          return 'Samsung';
        default:
          return 'Unknown';
      }
    };

    this.testNginxGeoIP = function testNginxGeoIP(headers) {
      var ua = this;
      Object.keys(headers).forEach(function (key) {
        if (/^GEOIP/i.test(key)) {
          ua.Agent.geoIp[key] = headers[key];
        }
      });
    };

    this.testBot = function testBot() {
      var ua = this;
      var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
      if (isBot) {
        ua.Agent.isBot = isBot[1];
      } else if (!ua.Agent.isAuthoritative) {
        ua.Agent.isBot = /bot/i.test(ua.Agent.source); // Test unauthoritative parse for `bot` in UA to flag for bot
      }
    };

    this.testWebkit = function testWebkit() {
      var ua = this;
      if (ua.Agent.browser === 'Unknown' && /applewebkit/i.test(ua.Agent.source)) {
          ua.Agent.browser = 'Apple WebKit';
          ua.Agent.isWebkit = true;
      }
    };

    this.testAndroidTablet = function testAndroidTablet() {
      var ua = this;
      if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
          ua.Agent.isAndroidTablet = true;
      }
    };

    this.testTablet = function testTablet() {
      var ua = this;
      switch (true) {
        case ua.Agent.isiPad:
        case ua.Agent.isAndroidTablet:
          ua.Agent.isTablet = true;
          break;
      }
      if (/tablet/i.test(ua.Agent.source)) {
        ua.Agent.isTablet = true;
      }
    };

    this.testDevice = function testDevice() {
      var ua = this;
      switch (true) {
        case ua.Agent.isWindows:
        case ua.Agent.isLinux:
        case ua.Agent.isMac:
        case ua.Agent.isChromeOS:
          ua.Agent.isDesktop = true;
          break;
        case ua.Agent.isAndroid:
        case ua.Agent.isSamsung:
          ua.Agent.isMobile = true;
          break;
        default:
      }
      switch (true) {
        case ua.Agent.isiPad:
        case ua.Agent.isiPod:
        case ua.Agent.isiPhone:
        case ua.Agent.isBada:
        case ua.Agent.isBlackBerry:
        case ua.Agent.isAndroid:
        case ua.Agent.isiOS:
        case ua.Agent.isWindowsPhone:
          ua.Agent.isMobile = true;
          ua.Agent.isDesktop = false;
          break;
        default:
      }
      if (/mobile|^ios\-/i.test(ua.Agent.source)) {
        ua.Agent.isMobile = true;
        ua.Agent.isDesktop = false;
      }
    };

    this.testCompatibilityMode = function () {
      var ua = this;
      if (this.Agent.isIE) {
        if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
          var tridentVersion = parseInt(RegExp.$1, 10);
          var version = parseInt(ua.Agent.browserversion, 10);
          if (version === 7 && tridentVersion === 7) {
              ua.Agent.isIECompatibilityMode = true;
              ua.Agent.browserversion = 11.0;
          }
          if (version === 7 && tridentVersion === 6) {
              ua.Agent.isIECompatibilityMode = true;
              ua.Agent.browserversion = 10.0;
          }
          if (version === 7 && tridentVersion === 5) {
              ua.Agent.isIECompatibilityMode = true;
              ua.Agent.browserversion = 9.0;
          }
          if (version === 7 && tridentVersion === 4) {
              ua.Agent.isIECompatibilityMode = true;
              ua.Agent.browserversion = 8.0;
          }
        }
      }
    };

    this.testCaptiveNetwork = function () {
      var ua = this;
      switch (true) {
        case /CaptiveNetwork/gi.test(ua.Agent.source):
          ua.Agent.isCaptive = true;
          ua.Agent.isMac = true;
          ua.Agent.platform = 'Apple Mac';
          return 'CaptiveNetwork';
        default:
          return false;
      }
    };

    this.parse = function parse(source) {
      var ua = new UserAgent();
      ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
      ua.Agent.os = ua.getOS(ua.Agent.source);
      ua.Agent.osversion = ua.getOSVersion(ua.Agent.source);
      ua.Agent.platform = ua.getPlatform(ua.Agent.source);
      ua.Agent.browser = ua.getBrowser(ua.Agent.source);
      ua.Agent.browserversion = ua.getBrowserVersion(ua.Agent.source);
      ua.testBot();
      ua.testWebkit();
      ua.testDevice();
      ua.testAndroidTablet();
      ua.testTablet();
      ua.testCompatibilityMode();
      ua.testCaptiveNetwork();
      return ua.Agent;
    };

    this.reset = function reset() {
      var ua = this;
      for (var key in ua.DefaultAgent) {
        ua.Agent[key] = ua.DefaultAgent[key];
      }
      return ua;
    };

    this.Agent = this.DefaultAgent;
    return this;
  };

  exports.UserAgent = UserAgent;
  return new UserAgent();

})(this);
