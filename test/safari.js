var ua = require('../');

/* MAC */
exports['Safari 10 macOS 10.13'] = function (test) {

  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13) AppleWebKit/603.1.13 (KHTML, like Gecko) Version/10.1 Safari/603.1.13';
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
  test.ok(!agent.isOpera, 'Opera');
  test.ok(agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '10.1');
  test.equal(agent.osversion, '10.13');
  test.done();
};

/* IOS */
exports['Safari 10 iOS 11 iPhone'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.21 (KHTML, like Gecko) Version/10.0 Mobile/15A5278f Safari/602.1';
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
  test.ok(!agent.isOpera, 'Opera');
  test.ok(agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '10.0');
  test.equal(agent.osversion, '11.0');
  test.done();
};

exports['Safari 9 iOS 10 iPad'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPad; CPU iPad OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/9.0 Mobile/14A5297c Safari/602.1';
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
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '9.0');
  test.equal(agent.osversion, '10.0');
  test.done();
};

exports['Safari 8 iOS 9 iPod'] = function (test) {

  var useragent = 'Mozilla/5.0 (iPod; CPU iPod OS 9_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/8.0 Mobile/14A5297c Safari/602.1';
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
  test.ok(agent.isiPod, 'iPod');
  test.ok(!agent.isiPhone, 'iPhone');
  test.ok(!agent.isChrome, 'Chrome');
  test.ok(!agent.isEdge, 'Edge');
  test.ok(!agent.isFirefox, 'Firefox');
  test.ok(!agent.isIE, 'IE');
  test.ok(!agent.isOpera, 'Opera');
  test.ok(agent.isSafari, 'Safari');
  test.ok(!agent.isIECompatibilityMode);
  test.equal(agent.browserversion, '8.0');
  test.equal(agent.osversion, '9.0');
  test.done();
};
