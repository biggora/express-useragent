var ua = require('../');

exports['Macintosh Silk'] = function (test) {

    var s = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) ' +
        'AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true';

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
    test.equal(a.version, '5.0');
    test.ok(a.isSilk, 'Silk');
    test.ok(a.SilkAccelerated, true);

    test.done();
};

exports['Android Silk'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.1 (KHTML, like Gecko) ' +
        'Version/4.0 Mobile Safari/533.1 Silk-Accelerated=true';

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
    test.ok(a.isSilk, 'Silk');
    test.ok(a.SilkAccelerated, true);

    test.done();
};

exports['Kindle Fire HDX 7 Tablet'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; KFTHWI Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Silk/3.22 like Chrome/34.0.1847.137 Safari/537.36';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '34.0.1847.137');
    test.ok(a.isSilk, 'Silk');
    test.ok(!a.SilkAccelerated, true);

    test.done();
};

exports['Kindle Fire Desktop'] = function (test) {

    var s = 'Mozilla/5.0 (X11; Linux x86_64; U; en-us) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Silk/3.22 like Chrome/34.0.1847.137 Safari/537.36';

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
    test.equal(a.version, '34.0.1847.137');
    test.ok(a.isSilk, 'Silk');
    test.ok(!a.SilkAccelerated, true);

    test.done();
};

exports['Kindle Fire HDX 7 Mobile'] = function (test) {

    var s = 'Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; KFTHWI Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Silk/3.22 like Chrome/34.0.1847.138 Safari/537.36';

    var a = ua.parse(s);

    test.ok(a.isMobile, 'Mobile');
    test.ok(!a.isiPad, 'iPad');
    test.ok(!a.isiPod, 'iPod');
    test.ok(!a.isiPhone, 'iPhone');
    test.ok(a.isAndroid, 'Android');
    test.ok(!a.isBlackberry, 'Blackberry');
    test.ok(!a.isOpera, 'Opera');
    test.ok(!a.isIE, 'IE');
    test.ok(!a.isSafari, 'Safari');
    test.ok(!a.isFirefox, 'Firefox');
    test.ok(!a.isWebkit, 'Webkit');
    test.ok(a.isChrome, 'Chrome');
    test.ok(!a.isKonqueror, 'Konqueror');
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(a.isLinux, 'Linux');
    test.ok(!a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '34.0.1847.138');
    test.ok(a.isSilk, 'Silk');
    test.ok(!a.SilkAccelerated, true);

    test.done();
};
