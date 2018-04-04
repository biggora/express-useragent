var ua = require('../');

/* WINDOWS */
exports['Edge 15 Windows NT 10'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/15.0';
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
  test.ok(agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '15.0');
  test.equal(agent.osversion, '10.0');
  test.done();
};

/* WINDOWS PHONE */
exports['Edge 13 Windows Phone 10.0'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; HTC; 0P6B180) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586';
  var agent = ua.parse(useragent);

  test.ok(agent.isAuthoritative, 'Authoritative');
  test.ok(!agent.isDesktop, 'Desktop');
  test.ok(agent.isMobile, 'Mobile');
  test.ok(!agent.isTablet, 'Tablet');
  test.ok(!agent.isAndroid, 'Android');
  test.ok(!agent.isiOS, 'iOS');
  test.ok(agent.isWindowsPhone, 'Windows Phone');
  test.ok(!agent.isLinux, 'Linux');
  test.ok(!agent.isMac, 'Mac');
  test.ok(!agent.isWindows, 'Windows');
  test.ok(!agent.isiPad, 'iPad');
  test.ok(!agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '13.10586');
  test.equal(agent.osversion, '10.0');
  test.done();
};

/* ANDROID */
exports['Edge 41 Android 8.0.1'] = function (test) {

  var useragent = 'Mozilla/5.0 (Linux; Android 8.0; Pixel XL Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.0 Mobile Safari/537.36 EdgA/41.1.35.1';
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
  test.ok(agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '41.1.35.1');
  test.equal(agent.osversion, '8.0');
  test.done();
};

/* IOS */
exports['Edge 41 iOS 10.3.2 iPhone'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 Safari/603.2.4 EdgiOS/41.1.35.1';
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
  test.ok(agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '41.1.35.1');
  test.equal(agent.osversion, '10.3.2');
  test.done();
};
