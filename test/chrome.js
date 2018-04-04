var ua = require('../');

/* MAC */
exports['Chrome 40 macOS 10.10.2'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.38 Safari/537.36';
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
  test.ok(agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '40.0.2214.38');
  test.equal(agent.osversion, '10.10.2');
  test.done();
};

/* WINDOWS */
exports['Chrome 62 Windows NT 6.1'] = function (test) {

  var useragent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36';
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
  test.ok(agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '62.0.3202.62');
  test.equal(agent.osversion, '6.1');
  test.done();
};

/* LINUX */
exports['Chrome 9 Linux'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/540.0 (KHTML,like Gecko) Chrome/9.1.0.0 Safari/540.0';
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
  test.ok(agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '9.1.0.0');
  test.equal(agent.osversion, '0');
  test.done();
};

/* ANDROID */
exports['Chrome 57 Android 4.1'] = function (test) {

  var useragent = 'Mozilla/5.0 (Linux; Android 4.1; Galaxy Nexus Build/JRN84D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/57.0.1025.166 Mobile Safari/535.19';
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
  test.ok(agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '57.0.1025.166');
  test.equal(agent.osversion, '4.1');
  test.done();
};

/* IOS */
exports['Chrome 55 iOS 10.2 iPad'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/55.0.2883.79 Mobile/14C92 Safari/602.1';
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
  test.ok(agent.isChrome, 'Chrome');
  test.ok(!agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '55.0.2883.79');
  test.equal(agent.osversion, '10.2');
  test.done();
};

/* OPEN SOURCE */
exports['Chromium 34 Linux'] = function (test) {

  var useragent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36';
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
  test.ok(agent.isChromium, 'Chromium');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(!agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '34.0.1847.116');
  test.equal(agent.osversion, '0');
  test.done();
};
