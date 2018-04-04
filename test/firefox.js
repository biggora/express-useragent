var ua = require('../');

/* MAC */
exports['Firefox 58 macOS 10.12'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0';
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
  test.ok(!agent.isEdge, 'Edge');
  test.ok(agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '58.0');
  test.equal(agent.osversion, '10.12');
  test.done();
};

/* WINDOWS */
exports['Firefox 40 Windows NT 10.0'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0';
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
  test.ok(!agent.isEdge, 'Edge');
  test.ok(agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '40.0');
  test.equal(agent.osversion, '10.0');
  test.done();
};

/* LINUX */
exports['Firefox 30 Linux'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; Linux i686; rv:30.0) Gecko/20100101 Firefox/30.0';
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
  test.ok(!agent.isEdge, 'Edge');
  test.ok(agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '30.0');
  test.equal(agent.osversion, '0');
  test.done();
};

/* ANDROID */
exports['Firefox 47 Android 4.2.2 Tablet'] = function (test) {

  var useragent = 'Mozilla/5.0 (Android 4.2.2; Tablet; rv:47.0) Gecko/47.0 Firefox/47.0';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(agent.isTablet, 'Tablet');
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
  test.ok(!agent.isEdge, 'Edge');
  test.ok(agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '47.0');
  test.equal(agent.osversion, '4.2.2');
  test.done();
};

/* IOS */
exports['Firefox 2.1 iOS 8.3 iPad'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/2.1 Mobile/12F69 Safari/600.1.4';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '2.1');
  test.equal(agent.osversion, '8.3');
  test.done();
};
