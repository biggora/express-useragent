var ua = require('../');

exports['Konqueror'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; Linux x86_64) KHTML/5.28.0 (like Gecko) Konqueror/5.28';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(agent.isDesktop, 'Desktop');
  test.ok(!agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '5.28');
  test.equal(agent.osversion, '0');
  test.done();
};

exports['SeaMonkey'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:27.0) Gecko/20100101 Firefox/27.0 SeaMonkey/2.24';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(agent.isDesktop, 'Desktop');
  test.ok(!agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '2.24');
  test.equal(agent.osversion, '10.8');
  test.done();
};

exports['Maxthon'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; Linux x86_64; Ubuntu 14.04.2 LTS) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.0 Maxthon/1.0.5.3 Safari/537.36';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(agent.isDesktop, 'Desktop');
  test.ok(!agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '1.0.5.3');
  test.equal(agent.osversion, '0');
  test.done();
};

exports['Vivaldi'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.77 Safari/537.36 Vivaldi/1.7.735.27';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(agent.isDesktop, 'Desktop');
  test.ok(!agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '1.7.735.27');
  test.equal(agent.osversion, '6.1');
  test.done();
};

exports['Camino'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; PPC Mac OS X 10.5; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(agent.isDesktop, 'Desktop');
  test.ok(!agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '2.2.1');
  test.equal(agent.osversion, '10.5');
  test.done();
};

exports['UC Browser'] = function (test) {

  var useragent = 'Mozilla/5.0 (Linux; Android 4.4.2; Q510s Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 Mobile UCBrowser/3.4.1.483';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(agent.isUCBrowser, 'UCBrowser');
  test.ok(!agent.FirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '3.4.1.483');
  test.equal(agent.osversion, '4.4.2');
  test.done();
};

exports['Firefox Focus'] = function (test) {

  var useragent = 'Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isKonqueror, 'Konqueror');
  test.ok(!agent.isSeaMonkey, 'SeaMonkey');
  test.ok(!agent.isMaxthon, 'Maxthon');
  test.ok(!agent.isVivaldi, 'Vivaldi');
  test.ok(!agent.isCamino, 'Camino');
  test.ok(!agent.isUCBrowser, 'UCBrowser');
  test.ok(agent.isFirefoxFocus, 'Firefox Focus');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '0');
  test.equal(agent.osversion, '7.0');
  test.done();
};
