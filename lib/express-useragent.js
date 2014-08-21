/**
 *
 * @revision    $Id: express-useragent.js 2012-03-24 16:21:10 Aleksey $
 * @created     2011-12-10 17:19:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     0.0.9
 * @copyright   Copyright (c) 2009-2011 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */

var UserAgent = function() {
    this.version = '0.0.9';
    this._Versions = {
        Firefox: /firefox\/([\d\w\.\-]+)/i,
        IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;\s+[rv:]+(\d+\.\d)/i,
        Chrome: /chrome\/([\d\w\.\-]+)/i,
        Chromium: /crios\/([\d\w\.\-]+)/i,
        Safari: /version\/([\d\w\.\-]+)/i,
        Opera: /version\/([\d\w\.\-]+)/i,
        Ps3: /([\d\w\.\-]+)\)\s*$/i,
        Psp: /([\d\w\.\-]+)\)?\s*$/i,
        Amaya: /amaya\/([\d\w\.\-]+)/i,
        SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
        OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
        Flock: /flock\/([\d\w\.\-]+)/i,
        Epiphany: /epiphany\/([\d\w\.\-]+)/i,
        WinJs: /msapphost\/([\d\w\.\-]+)/i
    };
    this._Browsers = {
        Amaya: /amaya/i,
        Konqueror: /konqueror/i,
        Epiphany: /epiphany/i,
        SeaMonkey: /seamonkey/i,
        Flock: /flock/i,
        OmniWeb: /omniweb/i,
        Chromium: /(chromium)|(crios)/i,
        Chrome: /chrome/i,
        Safari: /safari/i,
        IE: /msie|trident/i,
        Opera: /opera/i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        Firefox: /firefox/i,
        WinJs: /msapphost/i
    };
    this._OS = {
        Windows81: /windows nt 6\.3/i,
        Windows8: /windows nt 6\.2/i,
        Windows7: /windows nt 6\.1/i,
        UnknownWindows: /windows nt 6\.\d+/i,
        WindowsVista: /windows nt 6\.0/i,
        Windows2003: /windows nt 5\.2/i,
        WindowsXP: /windows nt 5\.1/i,
        Windows2000: /windows nt 5\.0/i,
        WindowsPhone8: /windows phone 8\./,
        OSX: /os x (\d+)[._](\d+)/i,
        Mac: /os x/i,
        Linux: /linux/i,
        Linux64: /linux x86\_64/i,
        Wii: /wii/i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        iPad: /\(iPad.*os (\d+)[._](\d+)/i,
        iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
        Bada: /Bada\/(\d+)\.(\d+)/i,
        Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i
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
        Curl: /curl/i
    };
    this.Agent = {};
    this.DefaultAgent = {
        isMobile: false,
        isiPad: false,
        isiPod: false,
        isiPhone: false,
        isAndroid: false,
        isBlackberry: false,
        isOpera: false,
        isIE: false,
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
        isEpiphany: false,
        isDesktop: false,
        isWindows: false,
        isLinux: false,
        isLinux64: false,
        isMac: false,
        isBada: false,
        isSamsung: false,
        isRaspberry: false,
        isBot: false,
        isCurl: false,
        isAndroidTablet: false,
        isWinJs: false,
        isKindleFire: false,
        isSilk: false,
        SilkAccelerated: false,
        Browser: 'unknown',
        Version: 'unknown',
        OS: 'unknown',
        Platform: 'unknown',
        GeoIP: {},
        source: ''
    };

    this.getBrowser = function(string) {
        switch (true) {
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
            case this._Browsers.Chromium.test(string):
                this.Agent.isChrome = true;
                return 'Chromium';
            case this._Browsers.Chrome.test(string):
                this.Agent.isChrome = true;
                return 'Chrome';
            case this._Browsers.Safari.test(string):
                this.Agent.isSafari = true;
                return 'Safari';
            case this._Browsers.WinJs.test(string):
                this.Agent.isWinJs = true;
                return 'WinJs';
            case this._Browsers.IE.test(string):
                this.Agent.isIE = true;
                return 'IE';
            case this._Browsers.Opera.test(string):
                this.Agent.isOpera = true;
                return 'Opera';
            case this._Browsers.PS3.test(string):
                return 'ps3';
            case this._Browsers.PSP.test(string):
                return 'psp';
            case this._Browsers.Firefox.test(string):
                this.Agent.isFirefox = true;
                return 'Firefox';
            default:
                return 'unknown';
        }
    };
    this.getBrowserVersion = function(string) {
        var regex;
        switch (this.Agent.Browser) {
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
                    return RegExp.$1;
                }
                break;
            case 'Opera':
                if (this._Versions.Opera.test(string)) {
                    return RegExp.$1;
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
            default:
                regex = /#{name}[\/ ]([\d\w\.\-]+)/i;
                if (regex.test(string)) {
                    return RegExp.$1;
                }
        }
    };

    this.getOS = function(string) {
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
            case this._OS.Windows2003.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2003';
            case this._OS.WindowsXP.test(string):
                this.Agent.isWindows = true;
                return 'Windows XP';
            case this._OS.Windows2000.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2000';
            case this._OS.WindowsPhone8.test(string):
                return 'Windows Phone 8';
            case this._OS.Linux64.test(string):
                this.Agent.isLinux = true;
                this.Agent.isLinux64 = true;
                return 'Linux 64';
            case this._OS.Linux.test(string):
                this.Agent.isLinux = true;
                return 'Linux';
            case this._OS.Wii.test(string):
                return 'Wii';
            case this._OS.PS3.test(string):
                return 'Playstation';
            case this._OS.PSP.test(string):
                return 'Playstation';
            case this._OS.Mac.test(string):
                this.Agent.isMac = true;
                return 'OS X';
            case this._OS.OSX.test(string):
                this.Agent.isMac = true;
                return string.match(this._OS.OSX)[0].replace('_', '.');
            case this._OS.iPad.test(string):
                this.Agent.isiPad = true;
                return string.match(this._OS.iPad)[0].replace('_', '.');
            case this._OS.iPhone.test(string):
                this.Agent.isiPhone = true;
                return string.match(this._OS.iPhone)[0].replace('_', '.');
            case this._OS.Bada.test(string):
                this.Agent.isBada = true;
                return 'Bada';
            case this._OS.Curl.test(string):
                this.Agent.isCurl = true;
                return 'Curl';
            default:
                return 'unknown';
        }
    };

    this.getPlatform = function(string) {
        switch (true) {
            case this._Platform.Windows.test(string):
                return "Microsoft Windows";
            case this._Platform.WindowsPhone.test(string):
                this.Agent.isWindowsPhone = true;
                return "Microsoft Windows Phone";
            case this._Platform.Mac.test(string):
                return "Apple Mac";
            case this._Platform.Curl.test(string):
                return "Curl";
            case this._Platform.Android.test(string):
                this.Agent.isAndroid = true;
                return "Android";
            case this._Platform.Blackberry.test(string):
                this.Agent.isBlackberry = true;
                return "Blackberry";
            case this._Platform.Linux.test(string):
                return "Linux";
            case this._Platform.Wii.test(string):
                return "Wii";
            case this._Platform.Playstation.test(string):
                return "Playstation";
            case this._Platform.iPad.test(string):
                this.Agent.isiPad = true;
                return "iPad";
            case this._Platform.iPod.test(string):
                this.Agent.isiPod = true;
                return "iPod";
            case this._Platform.iPhone.test(string):
                this.Agent.isiPhone = true;
                return "iPhone";
            case this._Platform.Samsung.test(string):
                this.Agent.isiSamsung = true;
                return "Samsung";
            default:
                return 'unknown';
        }
    };

    this.testCompatibilityMode = function() {
        var ua = this;
        if (this.Agent.isIE) {
            if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                var tridentVersion = parseInt(RegExp.$1, 10);
                var version = parseInt(ua.Agent.Version, 10);
                if (version === 7 && tridentVersion === 6) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.Version = 10.0;
                }

                if (version === 7 && tridentVersion === 5) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.Version = 9.0;
                }

                if (version === 7 && tridentVersion === 4) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.Version = 8.0;
                }
            }
        }
    };

    this.testSilk = function() {
        var ua = this;
        switch (true) {
            case new RegExp('silk', 'gi').test(ua.Agent.source):
                this.Agent.isSilk = true;
            default:
        }

        if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
            this.Agent.SilkAccelerated = true;
        }
        return this.Agent.isSilk ? 'Silk' : false;
    };

    this.testKindleFire = function() {
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
                ua.Agent.isDesktop = true;
                break;
            case ua.Agent.isAndroid:
            case ua.Agent.isSamsung:
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
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
        if (/mobile/i.test(ua.Agent.source)) {
            ua.Agent.isMobile = true;
            ua.Agent.isDesktop = false;
        }
    };

    this.testNginxGeoIP = function testNginxGeoIP(headers) {
        var ua = this;
        Object.keys(headers).forEach(function(key) {
            if (/^GEOIP/i.test(key)) {
                ua.Agent.GeoIP[key] = headers[key];
            }
        });
    };

    this.testBot = function testBot() {
        var ua = this;
        if (/googlebot|gurujibot|twitterbot|yandexbot|slurp|msnbot|bingbot|facebookexternalhit/i.test(ua.Agent.source)) {
            ua.Agent.isBot = true;
        }
    };

    this.testAndriodTablet = function testAndriodTablet() {
        var ua = this;
        if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
            ua.Agent.isAndroidTablet = true;
        }
    };

    this.parse = function parse(source) {
        var ua = new UserAgent();
        ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
        ua.Agent.OS = ua.getOS(ua.Agent.source);
        ua.Agent.Platform = ua.getPlatform(ua.Agent.source);
        ua.Agent.Browser = ua.getBrowser(ua.Agent.source);
        ua.Agent.Version = ua.getBrowserVersion(ua.Agent.source);
        ua.testBot();
        ua.testMobile();
        ua.testAndriodTablet();
        ua.testCompatibilityMode();
        ua.testSilk();
        ua.testKindleFire();
        return ua.Agent;
    };

    this.express = function() {
        return function(req, res, next) {
            var source = req.headers['user-agent'] || '',
                    ua = new UserAgent();
            if (typeof source === 'undefined') {
                source = "unknown";
            }
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.OS = ua.getOS(ua.Agent.source);
            ua.Agent.Platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.Browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.Version = ua.getBrowserVersion(ua.Agent.source);
            ua.testNginxGeoIP(req.headers);
            ua.testBot();
            ua.testMobile();
            ua.testAndriodTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            req.useragent = ua.Agent;
            if ('function' === typeof res.locals) {
                res.locals({useragent: ua.Agent});
            } else {
                res.locals.useragent = ua.Agent;
            }
            next();
        };
    };

    this.Agent = this.DefaultAgent;
};

exports = module.exports = new UserAgent();
