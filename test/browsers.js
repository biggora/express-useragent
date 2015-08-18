/**
 * @author Raivo Laanemets <raivo@infdot.com>
 */

var ua = require('../');

exports['iPad 2'] = function (test) {

    var s = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46'
        + ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '5.1');

    test.done();
};

exports['Linux Iceweasel'] = function (test) {

    var s = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16)'
        + ' Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '3.5.16');

    test.done();
};

exports['Linux 64 Chrome'] = function (test) {

    var s = 'User-Agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(a.isLinux64, 'Linux 64');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');

    test.done();
};

exports['Linux Firefox 11'] = function (test) {

    var s = 'Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isLinux64, 'Linux 64');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '11.0');

    test.done();
};

exports['Linux Chrome 17'] = function (test) {

    var s = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko)'
        + ' Chrome/17.0.963.56 Safari/535.11';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '17.0.963.56');

    test.done();
};

exports['Linux Chromium 39'] = function (test) {

    var s = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
        + ' Ubuntu Chromium/39.0.2171.65 Chrome/39.0.2171.65 Safari/537.36';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '39.0.2171.65');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

exports['Linux Ephiphany 2.30'] = function (test) {

    var s = 'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/531.2+ (KHTML, like Gecko)'
        + ' Version/5.0 Safari/531.2+ Debian/squeeze (2.30.6-1) Epiphany/2.30.6';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(a.isEpiphany, 'Epiphany');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '2.30.6');

    test.done();
};

exports['Windows 8 Chrome 28'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '28.0.1500.95');
    test.equal(a.os, 'Windows 8');

    test.done();
};

exports['Windows 8.1 WinJs'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MSAppHost/2.0; rv:11.0) like Gecko';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isWinJs, 'WinJs');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '2.0');
    test.equal(a.os, 'Windows 8.1');

    test.done();
};

exports['Windows 7 Firefox 23'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '23.0');
    test.equal(a.os, 'Windows 7');

    test.done();
};

exports['Windows XP IE 5.5'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '5.5');

    test.done();
};

exports['Windows XP IE 6.0'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '6.0');

    test.done();
};

exports['Windows XP IE 7.0'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '7.0');

    test.done();
};

exports['Windows XP Opera'] = function (test) {

    var s = 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.229 Version/11.62';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '11.62');

    test.done();
};

exports['Windows XP Safari'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.51.22 (KHTML, like Gecko)'
        + ' Version/5.1.1 Safari/534.51.22';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '5.1.1');

    test.done();
};

exports['Windows XP Chrome'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19'
        + ' (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '18.0.1025.162');

    test.done();
};

exports['Windows Phone 8'] = function (test) {

    var s = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; ' +
        'Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isWindowsPhone, 'Windows Phone');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.equal(a.version, '10.0');

    test.done();
};

exports['OS X OmniWeb 622'] = function (test) {

    var s = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16'
        + '(KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(a.isOmniWeb, 'OmniWeb');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '622.8.0.112941');

    test.done();
};

exports['OS X Safari 530'] = function (test) {

    var s = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-us)'
        + ' AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '4.0.2');

    test.done();
};

exports['OS X Chromium'] = function (test) {

    var s = 'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/32.0.1700.20 Mobile/11B554a Safari/9537.53';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chromium');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '32.0.1700.20');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

// Source:
// http://www.gtrifonov.com/2011/04/15/google-android-user-agent-strings-2/

exports['Android Samsung'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) AppleWebKit/533.1'
        + ' (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '4.0');

    test.done();
};

// Source:
// Chrome UA Spoofer

exports['Android Xoom'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13' +
        ' (KHTML, like Gecko) Version/4.0 Safari/534.13';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '4.0');

    test.done();
};

// Source
// Chrome UA Spoofer

exports['iPhone 4'] = function (test) {

    var s = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9' +
        ' (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '5.0.2');

    test.done();
};

// Source:
// http://java.net/jira/browse/USER_AGENT_UTILS-6

exports['Bada OS browser'] = function (test) {

    var s = 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500NEJE5; U; Bada/1.0; fr-fr) AppleWebKit/533.1' +
        ' (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 ' +
        'configuration/CLDC-1.1 OPN-B';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, undefined);

    test.done();
};


exports['America Online Browser'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 7.0;'
        + ' America Online Browser 1.1; Windows NT 5.1; (R1 1.5); .NET CLR 2.0.50727; InfoPath.1)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '7.0');

    test.done();
};

exports['Windows 7 IE 10.6'] = function (test) {

    var s = 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '10.6');

    test.done();
};

exports['Windows 7 IE 11.0'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '11.0');

    test.done();
};

exports['Windows 8.1 IE 11 Touch'] = function (test) {
    var s = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko'

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '11.0');

    test.done();
};

exports['Windows XP IE 8.0'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '8.0');

    test.done();
};

exports['Windows XP IE 8.0 - Compatibility mode'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.equal(a.version, '8.0');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.ok(a.isIECompatibilityMode);

    test.done();
};

exports['Windows XP IE 10.0'] = function (test) {

    var s = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '10.0');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

exports['Windows XP IE 10.0 - Compatibility mode'] = function (test) {

    var s = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/6.0)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '10.0');
    test.ok(a.isIECompatibilityMode);

    test.done();
};

exports['Windows XP IE 7.0 - Compatibility mode (invalid mode)'] = function (test) {

    var s = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/1.0)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '7.0');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

exports['Windows XP IE 9.0 - Compatibility mode'] = function (test) {

    var s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; ' +
        '.NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '9.0');
    test.ok(a.isIECompatibilityMode);

    test.done();
};

exports['Mac OSX Opera 30'] = function (test) {

    var s = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko)' + 
            'Chrome/43.0.2357.125 Safari/537.36 OPR/30.0.1835.88'

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '30.0.1835.88');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

exports['Microsoft Edge 12'] = function (test) {

    var s = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)' +
        ' Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    var a = ua.parse(s);

    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isEdge, 'Edge');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(a.isDesktop, 'Desktop');
    test.ok(a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '12.0');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};

exports['Microsoft Edge Mobile'] = function (test) {

    var s = 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko)' +
        ' Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isEdge, 'Edge');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '12.0');
    test.ok(!a.isIECompatibilityMode);

    test.done();
};
