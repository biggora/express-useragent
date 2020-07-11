/*!
 * express-useragent.js v1.0.15 (https://github.com/biggora/express-useragent/)
 * Copyright 2011-2020 Aleksejs Gordejevs
 * Licensed under MIT (https://github.com/biggora/express-useragent/blob/master/README.md#license)
 */
(function(exports) {
    'use strict';

    var BOTS = [
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
        'panscient\.com',
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
        'springbot'
    ];
    var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

    var UserAgent = function () {
        this.version = '1.0.15';
        this._Versions = {
            Edge: /(?:edge|edga|edgios|edg)\/([\d\w\.\-]+)/i,
            Firefox: /(?:firefox|fxios)\/([\d\w\.\-]+)/i,
            IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
            Chrome: /(?:chrome|crios)\/([\d\w\.\-]+)/i,
            Chromium: /chromium\/([\d\w\.\-]+)/i,
            Safari: /(version|safari)\/([\d\w\.\-]+)/i,
            Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
            Ps3: /([\d\w\.\-]+)\)\s*$/i,
            Psp: /([\d\w\.\-]+)\)?\s*$/i,
            Amaya: /amaya\/([\d\w\.\-]+)/i,
            SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
            OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
            Flock: /flock\/([\d\w\.\-]+)/i,
            Epiphany: /epiphany\/([\d\w\.\-]+)/i,
            WinJs: /msapphost\/([\d\w\.\-]+)/i,
            PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
            AlamoFire: /alamofire\/([\d\w\.\-]+)/i,
            UC: /ucbrowser\/([\d\w\.]+)/i,
            Facebook: /FBAV\/([\d\w\.]+)/i,
            WebKit: /applewebkit\/([\d\w\.]+)/i,
            Wechat: /micromessenger\/([\d\w\.]+)/i,
            Electron: /Electron\/([\d\w\.]+)/i
        };
        this._Browsers = {
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
            Facebook: /FBA[NV]/
        };
        this._OS = {
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
            Mac: /os x/i,
            Linux: /linux/i,
            Linux64: /linux x86\_64/i,
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
        this._Platform = {
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
            iOS: /^ios\-/i
        };

        this.DefaultAgent = {
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
            isCurl: false,
            isAndroidTablet: false,
            isWinJs: false,
            isKindleFire: false,
            isSilk: false,
            isCaptive: false,
            isSmartTV: false,
            isUC : false,
            isFacebook : false,
            isAlamoFire: false,
            isElectron: false,
            silkAccelerated: false,
            browser: 'unknown',
            version: 'unknown',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: '',
            isWechat: false,
        };

        this.Agent = {};

        this.getBrowser = function (string) {
            switch (true) {
                case this._Browsers.YaBrowser.test(string):
                    this.Agent.isYaBrowser = true;
                    return 'YaBrowser';
                case this._Browsers.AlamoFire.test(string):
                    this.Agent.isAlamoFire = true;
                    return 'AlamoFire';
                case this._Browsers.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Browsers.PhantomJS.test(string):
                    this.Agent.isPhantomJS = true;
                    return 'PhantomJS';
                case this._Browsers.Konqueror.test(string):
                    this.Agent.isKonqueror = true;
                    return 'Konqueror';
                case this._Browsers.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Browsers.Epiphany.test(string):
                    this.Agent.isEpiphany = true;
                    return 'Epiphany';
                case this._Browsers.SeaMonkey.test(string):
                    this.Agent.isSeaMonkey = true;
                    return 'SeaMonkey';
                case this._Browsers.Flock.test(string):
                    this.Agent.isFlock = true;
                    return 'Flock';
                case this._Browsers.OmniWeb.test(string):
                    this.Agent.isOmniWeb = true;
                    return 'OmniWeb';
                case this._Browsers.Opera.test(string):
                    this.Agent.isOpera = true;
                    return 'Opera';
                case this._Browsers.Chromium.test(string):
                    this.Agent.isChrome = true;
                    return 'Chromium';
                case this._Browsers.Facebook.test(string):
                    this.Agent.isFacebook = true;
                    return 'Facebook';
                case this._Browsers.Chrome.test(string):
                    this.Agent.isChrome = true;
                    return 'Chrome';
                case this._Browsers.WinJs.test(string):
                    this.Agent.isWinJs = true;
                    return 'WinJs';
                case this._Browsers.IE.test(string):
                    this.Agent.isIE = true;
                    return 'IE';
                case this._Browsers.Firefox.test(string):
                    this.Agent.isFirefox = true;
                    return 'Firefox';
                case this._Browsers.Safari.test(string):
                    this.Agent.isSafari = true;
                    return 'Safari';
                case this._Browsers.PS3.test(string):
                    return 'ps3';
                case this._Browsers.PSP.test(string):
                    return 'psp';
                case this._Browsers.UC.test(string):
                    this.Agent.isUC = true;
                    return 'UCBrowser';
                default:
                    if (string.indexOf('Dalvik') !== -1) {
                        return 'unknown';
                    }

                    // If the UA does not start with Mozilla guess the user agent.
                    if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
                        this.Agent.isAuthoritative = false;
                        return RegExp.$1;
                    }
                    return 'unknown';
            }
        };

        this.getBrowserVersion = function (string) {
            var regex;
            switch (this.Agent.browser) {
                case 'Edge':
                    if (this._Versions.Edge.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'PhantomJS':
                    if (this._Versions.PhantomJS.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chrome':
                    if (this._Versions.Chrome.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chromium':
                    if (this._Versions.Chromium.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Safari':
                    if (this._Versions.Safari.test(string)) {
                        return RegExp.$2;
                    }
                    break;
                case 'Opera':
                    if (this._Versions.Opera.test(string)) {
                        return RegExp.$1 ? RegExp.$1: RegExp.$2;
                    }
                    break;
                case 'Firefox':
                    if (this._Versions.Firefox.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'WinJs':
                    if (this._Versions.WinJs.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'IE':
                    if (this._Versions.IE.test(string)) {
                        return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                    }
                    break;
                case 'ps3':
                    if (this._Versions.Ps3.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'psp':
                    if (this._Versions.Psp.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Amaya':
                    if (this._Versions.Amaya.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Epiphany':
                    if (this._Versions.Epiphany.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'SeaMonkey':
                    if (this._Versions.SeaMonkey.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Flock':
                    if (this._Versions.Flock.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'OmniWeb':
                    if (this._Versions.OmniWeb.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'UCBrowser':
                    if (this._Versions.UC.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Facebook':
                    if (this._Versions.Facebook.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                default:
                    if (this.Agent.browser !== 'unknown') {
                        regex = new RegExp(this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
                        if (regex.test(string)) {
                            return RegExp.$1;
                        }
                    } else {
                        this.testWebkit();
                        if (this.Agent.isWebkit && this._Versions.WebKit.test(string)) {
                            return RegExp.$1;
                        }
                        return 'unknown';
                    }
            }
        };

        this.getWechatVersion = function (string) {
            if (this._Versions.Wechat.test(string)) {
                return RegExp.$1;
            }

            return 'unknown';
        };

        this.getElectronVersion = function (string) {
            if (this._Versions.Electron.test(string)) {
                this.Agent.isElectron = true;
                return RegExp.$1;
            }

            return '';
        };

        this.getOS = function (string) {
            switch (true) {
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
                case this._OS.WindowsPhone81.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Windows Phone 8.1';
                case this._OS.WindowsPhone80.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Windows Phone 8.0';
                case this._OS.Linux64.test(string):
                    this.Agent.isLinux = true;
                    this.Agent.isLinux64 = true;
                    return 'Linux 64';
                case this._OS.Linux.test(string):
                    this.Agent.isLinux = true;
                    return 'Linux';
                case this._OS.ChromeOS.test(string):
                    this.Agent.isChromeOS = true;
                    return 'Chrome OS';
                case this._OS.Wii.test(string):
                    return 'Wii';
                case this._OS.PS3.test(string):
                    return 'Playstation';
                case this._OS.PSP.test(string):
                    return 'Playstation';
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
                case this._OS.MacOSMojave.test(string):
                    this.Agent.isMac = true;
                    return 'macOS Mojave';
                case this._OS.Mac.test(string):
                    // !('ontouchend' in document);
                    // navigator.maxTouchPoints > 1
                    this.Agent.isMac = true;
                    return 'OS X';
                case this._OS.iPad.test(string):
                    // 'ontouchend' in document;
                    this.Agent.isiPad = true;
                    return string.match(this._OS.iPad)[0].replace('_', '.');
                case this._OS.iPhone.test(string):
                    //  'ontouchend' in document;
                    this.Agent.isiPhone = true;
                    return string.match(this._OS.iPhone)[0].replace('_', '.');
                case this._OS.Bada.test(string):
                    this.Agent.isBada = true;
                    return 'Bada';
                case this._OS.Curl.test(string):
                    this.Agent.isCurl = true;
                    return 'Curl';
                case this._OS.iOS.test(string):
                    this.Agent.isiPhone = true;
                    return 'iOS';
                case this._OS.Electron.test(string):
                    this.Agent.isElectron = true;
                    return 'Electron';
                default:
                    return 'unknown';
            }
        };

        this.getPlatform = function (string) {
            switch (true) {
                case this._Platform.Windows.test(string):
                    return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Microsoft Windows Phone';
                case this._Platform.Mac.test(string):
                    return 'Apple Mac';
                case this._Platform.Curl.test(string):
                    return 'Curl';
                case this._Platform.Electron.test(string):
                    this.Agent.isElectron = true;
                    return 'Electron';
                case this._Platform.Android.test(string):
                    this.Agent.isAndroid = true;
                    return 'Android';
                case this._Platform.Blackberry.test(string):
                    this.Agent.isBlackberry = true;
                    return 'Blackberry';
                case this._Platform.Linux.test(string):
                    return 'Linux';
                case this._Platform.Wii.test(string):
                    return 'Wii';
                case this._Platform.Playstation.test(string):
                    return 'Playstation';
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
                    this.Agent.isSamsung = true;
                    return 'Samsung';
                case this._Platform.iOS.test(string):
                    return 'Apple iOS';
                default:
                    return 'unknown';
            }
        };

        this.testCompatibilityMode = function () {
            var ua = this;
            if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                    var tridentVersion = parseInt(RegExp.$1, 10);
                    var version = parseInt(ua.Agent.version, 10);
                    if (version === 7 && tridentVersion === 7) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 11.0;
                    }

                    if (version === 7 && tridentVersion === 6) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 10.0;
                    }

                    if (version === 7 && tridentVersion === 5) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 9.0;
                    }

                    if (version === 7 && tridentVersion === 4) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 8.0;
                    }
                }
            }
        };

        this.testSilk = function () {
            var ua = this;
            switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                    this.Agent.isSilk = true;
                    break;
                default:
            }

            if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
            this.Agent.SilkAccelerated = true;
            }
            return this.Agent.isSilk ? 'Silk' : false;
        };

        this.testKindleFire = function () {
            var ua = this;
            switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire';
                case /KFTT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD';
                case /KFJWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9 4G';
                case /KFSOWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9 4G';
                default:
                    return false;
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

        this.reset = function reset() {
            var ua = this;
            for (var key in ua.DefaultAgent) {
                ua.Agent[key] = ua.DefaultAgent[key];
            }
            return ua;
        };

        this.testMobile = function testMobile() {
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
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
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
            if (/dalvik/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidNative = true;
                ua.Agent.isMobileNative = true;
            }
            if (/scale/i.test(ua.Agent.source)) {
                ua.Agent.isiPhoneNative = true;
                ua.Agent.isMobileNative = true;
            }
        };

        this.testTablet = function testTablet() {
            var ua = this;
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                    ua.Agent.isTablet = true;
                    break;
            }
            if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
            }
        };

        this.testNginxGeoIP = function testNginxGeoIP(headers) {
            var ua = this;
            Object.keys(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                    ua.Agent.geoIp[key] = headers[key];
                }
            });
            return ua;
        };

        this.testBot = function testBot() {
            var ua = this;
            var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
            if (isBot) {
                ua.Agent.isBot = isBot[1];
            } else if (!ua.Agent.isAuthoritative) {
                // Test unauthoritative parse for `bot` in UA to flag for bot
                ua.Agent.isBot = /bot/i.test(ua.Agent.source);
            }
        };

        this.testSmartTV = function testBot() {
            var ua = this;
            ua.Agent.isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv','gi').test(ua.Agent.source.toLowerCase());
        };

        this.testAndroidTablet = function testAndroidTablet() {
            var ua = this;
            if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
            }
        };

        this.testWebkit = function testWebkit() {
            var ua = this;
            if (ua.Agent.browser === 'unknown' && /applewebkit/i.test(ua.Agent.source)) {
                ua.Agent.browser = 'Apple WebKit';
                ua.Agent.isWebkit = true;
            }
        };

        this.testWechat = function testWechat() {
            var ua = this;

            if(/micromessenger/i.test(ua.Agent.source)) {
                ua.Agent.isWechat = true;
                ua.Agent.version = this.getWechatVersion(ua.Agent.source);
            }
        };

        this.parse = function parse(source) {
            var ua = new UserAgent();
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.os = ua.getOS(ua.Agent.source);
            ua.Agent.platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
            ua.Agent.electronVersion = ua.getElectronVersion(ua.Agent.source);
            ua.testBot();
            ua.testSmartTV();
            ua.testMobile();
            ua.testAndroidTablet();
            ua.testTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            ua.testCaptiveNetwork();
            ua.testWebkit();
            ua.testWechat();
            return ua.Agent;
        };

        this.Agent = this.DefaultAgent;
        return this;
    };

    exports.UserAgent = UserAgent;
    return new UserAgent();

})(this);
