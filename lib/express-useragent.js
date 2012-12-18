/**
 *
 * @revision    $Id: express-useragent.js 2012-03-24 16:21:10 Aleksey $
 * @created     2011-12-10 17:19:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     0.0.7
 * @copyright   Copyright (c) 2009-2011 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */

var UserAgent = function() {
    this.version = '0.0.7';
    this._Versions = {
        Firefox: /firefox\/([\d\w\.\-]+)/i,
        IE: /msie\s([\d\.]+[\d])/i,
        Chrome: /chrome\/([\d\w\.\-]+)/i,
        Safari: /version\/([\d\w\.\-]+)/i,
        Opera: /version\/([\d\w\.\-]+)/i,
        Ps3: /([\d\w\.\-]+)\)\s*$/i,
        Psp: /([\d\w\.\-]+)\)?\s*$/i
    };
    this._Browsers = {
        Konqueror: /konqueror/i,
        Chrome: /chrome/i,
        Safari: /safari/i,
        IE: /msie/i,
        Opera: /opera/i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        Firefox: /firefox/i
    };
    this._OS = {
        WindowsVista: /windows nt 6\.0/i,
        Windows7: /windows nt 6\.\d+/i,
        Windows2003: /windows nt 5\.2/i,
        WindowsXP: /windows nt 5\.1/i,
        Windows2000: /windows nt 5\.0/i,
        OSX: /os x (\d+)[._](\d+)/i,
        Linux: /linux/i,
        Wii: /wii/i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        iPad: /\(iPad.*os (\d+)[._](\d+)/i,
        iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
        Bada: /Bada\/(\d+)\.(\d+)/i
    };
    this._Platform = {
        Windows: /windows/i,
        Mac: /macintosh/i,
        Linux: /linux/i,
        Wii: /wii/i,
        Playstation: /playstation/i,
        iPad: /ipad/i,
        iPod: /ipod/i,
        iPhone: /iphone/i,
        Android: /android/i,
        Blackberry: /blackberry/i,
        Samsung: /samsung/i
    };
    this.Agent = {};
    this.DefaultAgent = {
        isMobile : false,
        isiPad : false,
        isiPod : false,
        isiPhone : false,
        isAndroid : false,
        isBlackberry : false,
        isOpera : false,
        isIE : false,
        isSafari : false,
        isFirefox : false,
        isWebkit : false,
        isChrome : false,
        isKonqueror : false,
        isDesktop : false,
        isWindows : false,
        isLinux : false,
        isMac : false,
        isBada : false,
        isSamsung : false,
        Browser : 'unknown',
        Version : 'unknown',
        OS : 'unknown',
        Platform : 'unknown',
        source:''
    };
    this.getBrowser = function(string) {
        switch (true) {
            case this._Browsers.Konqueror.test(string):
                this.Agent.isKonqueror = true;
                return 'Konqueror';
            case this._Browsers.Chrome.test(string):
                this.Agent.isChrome = true;
                return 'Chrome';
            case this._Browsers.Safari.test(string):
                this.Agent.isSafari = true;
                return 'Safari';
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
            case 'IE':
                if (this._Versions.IE.test(string)) {
                    return RegExp.$1;
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
            case this._OS.Windows2003.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2003';
            case this._OS.WindowsXP.test(string):
                this.Agent.isWindows = true;
                return 'Windows XP';
            case this._OS.Windows2000.test(string):
                this.Agent.isWindows = true;
                return 'Windows 2000';
            case this._OS.Linux.test(string):
                this.Agent.isLinux = true;
                return 'Linux';
            case this._OS.Wii.test(string):
                return 'Wii';
            case this._OS.PS3.test(string):
                return 'Playstation';
            case this._OS.PSP.test(string):
                return 'Playstation';
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
            default:
                return 'unknown';
        }
    };
    this.getPlatform = function(string) {
        switch (true) {
            case this._Platform.Windows.test(string):
                return "Microsoft Windows";
            case this._Platform.Mac.test(string):
                return "Apple Mac";
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

    this.reset = function reset() {
        var ua = this;
        for( var key in ua.DefaultAgent) {
            ua.Agent[key] = ua.DefaultAgent[key];
        }
        return ua;
    };

    this.testMobile = function testMobile() {
        var ua = this;
        switch (true) {
            case this.Agent.isWindows:
            case this.Agent.isLinux:
            case this.Agent.isMac:
                this.Agent.isDesktop = true;
                break;
            case this.Agent.isAndroid:
            case this.Agent.isSamsung:
                this.Agent.isMobile = true;
                this.Agent.isDesktop = false;
                break;
            default:
        }
        switch (true) {
            case this.Agent.isiPad:
            case this.Agent.isiPod:
            case this.Agent.isiPhone:
            case this.Agent.isBada:
            case this.Agent.isBlackberry:
            case this.Agent.isAndroid:
                this.Agent.isMobile = true;
                this.Agent.isDesktop = false;
                break;
            default:
        }
        // console.log(this);
    };

    this.parse = function parse(source) {
        var ua = new UserAgent();
        ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
        ua.Agent.OS = ua.getOS(ua.Agent.source);
        ua.Agent.Platform = ua.getPlatform(ua.Agent.source);
        ua.Agent.Browser = ua.getBrowser(ua.Agent.source);
        ua.Agent.Version = ua.getBrowserVersion(ua.Agent.source);
        ua.testMobile();
        return ua.Agent;
    };

    this.express = function() {
        return function(req, res, next) {
            var source = req.headers['user-agent'] || '',
            ua = new UserAgent();
            if(typeof source == 'undefined') { source = "unknown"; }
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.OS = ua.getOS(ua.Agent.source);
            ua.Agent.Platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.Browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.Version = ua.getBrowserVersion(ua.Agent.source);
            ua.testMobile();
            req.useragent = ua.Agent;
            res.locals({"useragent" : ua.Agent});
            next();
        }
    };

    this.Agent = this.DefaultAgent;
};

exports = module.exports = new UserAgent();