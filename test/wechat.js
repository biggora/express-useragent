/**
 * Created by jeff.tian@outlook.com on 7/17/2019.
 */

var ua = require('../');

exports['mac os wechat debugger tool'] = function (test) {

    var s = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 Safari/601.1 wechatdevtools/1.02.1904090 MicroMessenger/6.7.3 Language/zh_CN webview/15633401482656711 webdebugger port/29991';

    var a = ua.parse(s);

    test.ok(a.isAuthoritative, 'Authoritative');
    test.ok(a.isMobile, 'Mobile');
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
    test.ok(!a.isDesktop, 'Desktop');
    test.ok(!a.isWindows, 'Windows');
    test.ok(!a.isLinux, 'Linux');
    test.ok(a.isMac, 'Mac');
    test.ok(!a.isWindowsPhone, 'Windows Phone');
    test.equal(a.version, '6.7.3');

    test.done();
};

