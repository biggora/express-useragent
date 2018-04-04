var ua = require('../');

/* MAC */
exports['Opera 31 macOS 10.10.3'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2376.0 Safari/537.36 OPR/31.0.1857.0';
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
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '31.0.1857.0');
  test.equal(agent.osversion, '10.10.3');
  test.done();
};

/* WINDOWS */
exports['Opera 32 Windows NT 6.1'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 OPR/32.0.1948.25';
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
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '32.0.1948.25');
  test.equal(agent.osversion, '6.1');
  test.done();
};

/* LINUX */
exports['Opera 47 Linux'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3095.5 Safari/537.36 OPR/47.0.2615.0';
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
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '47.0.2615.0');
  test.equal(agent.osversion, '0');
  test.done();
};

/* ANDROID */
exports['Opera 27 Android 6.0.1 Tablet'] = function (test) {

  var useragent = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/JDQ39) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.123 Safari/537.22 OPR/27.0.1025.52315';
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
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '27.0.1025.52315');
  test.equal(agent.osversion, '6.0.1');
  test.done();
};

/* IOS */
exports['Opera 8 iOS 9 iPhone'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(agent.isiOS, 'iOS');
  test.ok(!agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '8.0.0.78129');
  test.equal(agent.osversion, '9.1.1');
  test.done();
};
