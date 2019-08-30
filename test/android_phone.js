/**
 * @author Sivaprakasam Boopathy <sivaprakasam.boopathy@gmail.com>
 *
 * http://android-developers.blogspot.com/2010/12/android-browser-user-agent-issues.html
 * Based on the above post to detect the Android tablet.
 **/

var ua = require('../');

exports['Android Phone'] = function (test) {

    var source = '';
    source += 'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; ';
    source += 'SAMSUNG-SGH-I777 Build/JZO54K) ';
    source += 'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(!userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.equal(userAgent.browser, 'Safari');
    test.equal(userAgent.os, 'Linux');
    test.equal(userAgent.platform, 'Android');
    test.equal(userAgent.version, '4.0');

    test.done();
};

// Source:
// http://www.gtrifonov.com/2011/04/15/google-android-user-agent-strings-2/

exports['Android Samsung'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) AppleWebKit/533.1'
        + ' (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
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

    test.ok(a.isAuthoritative, 'Authoritative');
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
    test.ok(!a.isFacebook, 'Facebook');
    test.equal(a.version, '4.0');

    test.done();
};