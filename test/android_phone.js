/**
 * @author Sivaprakasam Boopathy <sivaprakasam.boopathy@gmail.com>
 *
 * http://android-developers.blogspot.com/2010/12/android-browser-user-agent-issues.html
 * Based on the above post to detect the Android tablet.
 **/

var ua = require('../');

exports['Andriod Phone'] = function (test) {

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

    test.equal(userAgent.Browser, 'Safari');
    test.equal(userAgent.OS, 'Linux');
    test.equal(userAgent.Platform, 'Android');
    test.equal(0, Object.keys(userAgent.GeoIP).length);
    test.equal(userAgent.Version, '4.0');

    test.done();
};
