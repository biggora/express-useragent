/**
 * Created by aleksejs.gordejevs on 2/7/2018.
 */

var ua = require('../');

exports['iPad 2'] = function (test) {

    var s = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46'
        + ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
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

exports['Chrome iOS'] = function (test) {

    var s = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko)' +
        ' CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isEdge, 'Edge');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.ok(!a.isFacebook, 'Facebook');
    test.equal(a.version, '56.0.2924.75');
    test.ok(!a.isIECompatibilityMode);

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

exports['iOS AlamoFire'] = function (test) {

    var s = 'iOS-Example/1.0 (com.alamofire.iOS-Example; build:1; iOS 10.0.0) Alamofire/4.0.0';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(a.isAlamoFire, 'AlamoFire');
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
    test.equal(a.version, '4.0.0');

    test.done();
};

exports['iPhone like OS X'] = function (test) {

    var s = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) ' +
        'AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A403';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(a.isiPhone, 'iPhone');
    test.ok(!a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(a.isWebkit, 'Webkit');
    test.ok(!a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '602.1.50');

    test.done();
};

//