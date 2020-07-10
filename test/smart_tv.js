
var ua = require('../');

exports['SmartTV SmartHub'] = function (test) {

    var s = 'Mozilla/5.0 (SmartHub; SMART-TV; U; Linux/SmartTV) AppleWebKit/531.2+ (KHTML, like Gecko) WebBrowser/1.0 SmartTV Safari/531.2+';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPod, 'iPod');
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
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.ok(a.isSmartTV, 'SmartTV');
    test.equal(a.version, '531.2');

    test.done();
};

exports['SmartTV'] = function (test) {

    var s = 'Mozilla/5.0 (SMART-TV; X11; Linux i686) AppleWebKit/535.20+ (KHTML, like Gecko) Version/5.0 Safari/535.20+';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
    test.ok(!a.isMobile, 'Mobile');
    test.ok(!a.isiPod, 'iPod');
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
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.ok(a.isSmartTV, 'SmartTV');
    test.equal(a.version, '5.0');

    test.done();
};
