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

    var _Versions = {
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

    var _Browsers = {
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

    var _OS = {
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

    var _Platform = {
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

    var defaultAgent = {
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

    var UserAgent = function (source) {
        this.version = '1.0.15';
        this.Agent = {};
        /* Fill the this.Agent with default values. */
        this.reset();

        this.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
        this.Agent.os = this.getOS();
        this.Agent.platform = this.getPlatform();
        this.Agent.browser = this.getBrowser();
        this.Agent.version = this.getBrowserVersion();
        this.Agent.electronVersion = this.getElectronVersion();

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

        /* The fallback for previous, should not be be used anywhere. */
        this.DefaultAgent = {};
        this.reset("DefaultAgent");
    };

    UserAgent.prototype.getBrowser = function (string) {
        string = string || this.Agent.source;

        switch (true) {
            case _Browsers.YaBrowser.test(string):
                this.Agent.isYaBrowser = true;
                return 'YaBrowser';
            case _Browsers.AlamoFire.test(string):
                this.Agent.isAlamoFire = true;
                return 'AlamoFire';
            case _Browsers.Edge.test(string):
                this.Agent.isEdge = true;
                return 'Edge';
            case _Browsers.PhantomJS.test(string):
                this.Agent.isPhantomJS = true;
                return 'PhantomJS';
            case _Browsers.Konqueror.test(string):
                this.Agent.isKonqueror = true;
                return 'Konqueror';
            case _Browsers.Amaya.test(string):
                this.Agent.isAmaya = true;
                return 'Amaya';
            case _Browsers.Epiphany.test(string):
                this.Agent.isEpiphany = true;
                return 'Epiphany';
            case _Browsers.SeaMonkey.test(string):
                this.Agent.isSeaMonkey = true;
                return 'SeaMonkey';
            case _Browsers.Flock.test(string):
                this.Agent.isFlock = true;
                return 'Flock';
            case _Browsers.OmniWeb.test(string):
                this.Agent.isOmniWeb = true;
                return 'OmniWeb';
            case _Browsers.Opera.test(string):
                this.Agent.isOpera = true;
                return 'Opera';
            case _Browsers.Chromium.test(string):
                this.Agent.isChrome = true;
                return 'Chromium';
            case _Browsers.Facebook.test(string):
                this.Agent.isFacebook = true;
                return 'Facebook';
            case _Browsers.Chrome.test(string):
                this.Agent.isChrome = true;
                return 'Chrome';
            case _Browsers.WinJs.test(string):
                this.Agent.isWinJs = true;
                return 'WinJs';
            case _Browsers.IE.test(string):
                this.Agent.isIE = true;
                return 'IE';
            case _Browsers.Firefox.test(string):
                this.Agent.isFirefox = true;
                return 'Firefox';
            case _Browsers.Safari.test(string):
                this.Agent.isSafari = true;
                return 'Safari';
            case _Browsers.PS3.test(string):
                return 'ps3';
            case _Browsers.PSP.test(string):
                return 'psp';
            case _Browsers.UC.test(string):
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

    UserAgent.prototype.getBrowserVersion = function (string) {
        string = string || this.Agent.source;

        var regex;
        switch (this.Agent.browser) {
            case 'Edge':
                if (_Versions.Edge.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'PhantomJS':
                if (_Versions.PhantomJS.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Chrome':
                if (_Versions.Chrome.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Chromium':
                if (_Versions.Chromium.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Safari':
                if (_Versions.Safari.test(string)) {
                    return RegExp.$2;
                }
                break;
            case 'Opera':
                if (_Versions.Opera.test(string)) {
                    return RegExp.$1 ? RegExp.$1: RegExp.$2;
                }
                break;
            case 'Firefox':
                if (_Versions.Firefox.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'WinJs':
                if (_Versions.WinJs.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'IE':
                if (_Versions.IE.test(string)) {
                    return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                }
                break;
            case 'ps3':
                if (_Versions.Ps3.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'psp':
                if (_Versions.Psp.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Amaya':
                if (_Versions.Amaya.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Epiphany':
                if (_Versions.Epiphany.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'SeaMonkey':
                if (_Versions.SeaMonkey.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Flock':
                if (_Versions.Flock.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'OmniWeb':
                if (_Versions.OmniWeb.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'UCBrowser':
                if (_Versions.UC.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Facebook':
                if (_Versions.Facebook.test(string)) {
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
                    if (this.Agent.isWebkit && _Versions.WebKit.test(string)) {
                        return RegExp.$1;
                    }
                    return 'unknown';
                }
        }
    };

    UserAgent.prototype.getWechatVersion = function (string) {
        string = string || this.Agent.source;

        if (_Versions.Wechat.test(string)) {
            return RegExp.$1;
        }

        return 'unknown';
    };

    UserAgent.prototype.getElectronVersion = function (string) {
        string = string || this.Agent.source;

        if (_Versions.Electron.test(string)) {
            this.Agent.isElectron = true;
            return RegExp.$1;
        }

        return '';
    };

    UserAgent.prototype.getOS = function (string) {
        string = string || this.Agent.source;

        switch (true) {
            case _OS.WindowsVista.test(string):
                this.Agent.isWindows = true;
                return 'Windows Vista';
            case _OS.Windows7.test(string):
                this.Agent.isWindows = true;
                return 'Windows 7';
            case _OS.Windows8.test(string):
                this.Agent.isWindows = true;
                return 'Windows 8';
            case _OS.Windows81.test(string):
                this.Agent.isWindows = true;
                return 'Windows 8.1';
            case _OS.Windows10.test(string):
                this.Agent.isWindows = true;
                return 'Windows 10.0';
            case _OS.Windows2003.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2003';
            case _OS.WindowsXP.test(string):
                this.Agent.isWindows = true;
                return 'Windows XP';
            case _OS.Windows2000.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2000';
            case _OS.WindowsPhone81.test(string):
                this.Agent.isWindowsPhone = true;
                return 'Windows Phone 8.1';
            case _OS.WindowsPhone80.test(string):
                this.Agent.isWindowsPhone = true;
                return 'Windows Phone 8.0';
            case _OS.Linux64.test(string):
                this.Agent.isLinux = true;
                this.Agent.isLinux64 = true;
                return 'Linux 64';
            case _OS.Linux.test(string):
                this.Agent.isLinux = true;
                return 'Linux';
            case _OS.ChromeOS.test(string):
                this.Agent.isChromeOS = true;
                return 'Chrome OS';
            case _OS.Wii.test(string):
                return 'Wii';
            case _OS.PS3.test(string):
                return 'Playstation';
            case _OS.PSP.test(string):
                return 'Playstation';
            case _OS.OSXCheetah.test(string):
                this.Agent.isMac = true;
                return 'OS X Cheetah';
            case _OS.OSXPuma.test(string):
                this.Agent.isMac = true;
                return 'OS X Puma';
            case _OS.OSXJaguar.test(string):
                this.Agent.isMac = true;
                return 'OS X Jaguar';
            case _OS.OSXPanther.test(string):
                this.Agent.isMac = true;
                return 'OS X Panther';
            case _OS.OSXTiger.test(string):
                this.Agent.isMac = true;
                return 'OS X Tiger';
            case _OS.OSXLeopard.test(string):
                this.Agent.isMac = true;
                return 'OS X Leopard';
            case _OS.OSXSnowLeopard.test(string):
                this.Agent.isMac = true;
                return 'OS X Snow Leopard';
            case _OS.OSXLion.test(string):
                this.Agent.isMac = true;
                return 'OS X Lion';
            case _OS.OSXMountainLion.test(string):
                this.Agent.isMac = true;
                return 'OS X Mountain Lion';
            case _OS.OSXMavericks.test(string):
                this.Agent.isMac = true;
                return 'OS X Mavericks';
            case _OS.OSXYosemite.test(string):
                this.Agent.isMac = true;
                return 'OS X Yosemite';
            case _OS.OSXElCapitan.test(string):
                this.Agent.isMac = true;
                return 'OS X El Capitan';
            case _OS.MacOSSierra.test(string):
                this.Agent.isMac = true;
                return 'macOS Sierra';
            case _OS.MacOSHighSierra.test(string):
                this.Agent.isMac = true;
                return 'macOS High Sierra';
            case _OS.MacOSMojave.test(string):
                this.Agent.isMac = true;
                return 'macOS Mojave';
            case _OS.Mac.test(string):
                // !('ontouchend' in document);
                // navigator.maxTouchPoints > 1
                this.Agent.isMac = true;
                return 'OS X';
            case _OS.iPad.test(string):
                // 'ontouchend' in document;
                this.Agent.isiPad = true;
                return string.match(_OS.iPad)[0].replace('_', '.');
            case _OS.iPhone.test(string):
                //  'ontouchend' in document;
                this.Agent.isiPhone = true;
                return string.match(_OS.iPhone)[0].replace('_', '.');
            case _OS.Bada.test(string):
                this.Agent.isBada = true;
                return 'Bada';
            case _OS.Curl.test(string):
                this.Agent.isCurl = true;
                return 'Curl';
            case _OS.iOS.test(string):
                this.Agent.isiPhone = true;
                return 'iOS';
            case _OS.Electron.test(string):
                this.Agent.isElectron = true;
                return 'Electron';
            default:
                return 'unknown';
        }
    };

    UserAgent.prototype.getPlatform = function (string) {
        string = string || this.Agent.source;

        switch (true) {
            case _Platform.Windows.test(string):
                return 'Microsoft Windows';
            case _Platform.WindowsPhone.test(string):
                this.Agent.isWindowsPhone = true;
                return 'Microsoft Windows Phone';
            case _Platform.Mac.test(string):
                return 'Apple Mac';
            case _Platform.Curl.test(string):
                return 'Curl';
            case _Platform.Electron.test(string):
                this.Agent.isElectron = true;
                return 'Electron';
            case _Platform.Android.test(string):
                this.Agent.isAndroid = true;
                return 'Android';
            case _Platform.Blackberry.test(string):
                this.Agent.isBlackberry = true;
                return 'Blackberry';
            case _Platform.Linux.test(string):
                return 'Linux';
            case _Platform.Wii.test(string):
                return 'Wii';
            case _Platform.Playstation.test(string):
                return 'Playstation';
            case _Platform.iPad.test(string):
                this.Agent.isiPad = true;
                return 'iPad';
            case _Platform.iPod.test(string):
                this.Agent.isiPod = true;
                return 'iPod';
            case _Platform.iPhone.test(string):
                this.Agent.isiPhone = true;
                return 'iPhone';
            case _Platform.Samsung.test(string):
                this.Agent.isSamsung = true;
                return 'Samsung';
            case _Platform.iOS.test(string):
                return 'Apple iOS';
            default:
                return 'unknown';
        }
    };

    UserAgent.prototype.testCompatibilityMode = function () {
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

    UserAgent.prototype.testSilk = function () {
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

    UserAgent.prototype.testKindleFire = function () {
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

    UserAgent.prototype.testCaptiveNetwork = function () {
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

    /*
     * Set the default values to agent `field`.
     *
     * @param {string} [field=Agent] - Name of the field which should be reseted.
     */
    UserAgent.prototype.reset = function (field) {
        field = field || 'Agent';

        this[field][key] = {};
        for (var key in defaultAgent) {
            this[field][key] = defaultAgent[key];
        }

        return this;
    };

    UserAgent.prototype.testMobile = function () {
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

    UserAgent.prototype.testTablet = function () {
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

    UserAgent.prototype.testNginxGeoIP = function (headers) {
        var ua = this;
        Object.keys(headers).forEach(function (key) {
            if (/^GEOIP/i.test(key)) {
                ua.Agent.geoIp[key] = headers[key];
            }
        });
        return ua;
    };

    UserAgent.prototype.testBot = function () {
        var ua = this;
        var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
        if (isBot) {
            ua.Agent.isBot = isBot[1];
        } else if (!ua.Agent.isAuthoritative) {
            // Test unauthoritative parse for `bot` in UA to flag for bot
            ua.Agent.isBot = /bot/i.test(ua.Agent.source);
        }
    };

    UserAgent.prototype.testSmartTV = function () {
        var ua = this;
        ua.Agent.isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv','gi').test(ua.Agent.source.toLowerCase());
    };

    UserAgent.prototype.testAndroidTablet = function () {
        var ua = this;
        if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
            ua.Agent.isAndroidTablet = true;
        }
    };

    UserAgent.prototype.testWebkit = function () {
        var ua = this;
        if (ua.Agent.browser === 'unknown' && /applewebkit/i.test(ua.Agent.source)) {
            ua.Agent.browser = 'Apple WebKit';
            ua.Agent.isWebkit = true;
        }
    };

    UserAgent.prototype.testWechat = function () {
        var ua = this;

        if(/micromessenger/i.test(ua.Agent.source)) {
            ua.Agent.isWechat = true;
            ua.Agent.version = this.getWechatVersion(ua.Agent.source);
        }
    };

    UserAgent.prototype.parse = function (source) {
        try {
            console.warn("The `userAgentInstance.parse` method from instance is deprecated, use the static method instead: `UserAgent.parse`.");
        } catch (e) {}

        /* Fallback for previous solution. */
        return UserAgent.parse(source);
    };


    /*
     * Static method for parse the user agent.
     *
     * @param {string} source - The user agent (window.navigator.userAgent for browsers or req.headers['user-agent'] for express.js).
     *
     * @returns {UserAgent} Instance of UserAgent with parsed source.
     */
    UserAgent.parse = function (source) {
        var ua = new UserAgent();
        return ua.Agent;
    }

    exports.UserAgent = UserAgent;
})(this);
