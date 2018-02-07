/**
 * @author Luiz Freneda <lfreneda@gmail.com>
 */

var ua = require('../');


exports['Arbitrary bot UA'] = function (test) {

    var source = 'sockbot/3.1.0-RC1 (Linux x86_64) (nodejs 5.10.1) (owner:fred user:george)';

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');
    test.equal(userAgent.browser, 'sockbot');
    test.equal(userAgent.version, '3.1.0-RC1');
    test.done();
};

exports['Baiduspider Bot'] = function (test) {

    var source = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();
};

exports['Apple Bot'] = function (test) {

    var source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();
};

exports['Pingdom Bot'] = function(test) {

    var source = 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

}

exports['Google Bot'] = function(test) {

    var source = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/8.0 Mobile/12F70 Safari/600.1.4';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(userAgent.isMobile, 'Mobile');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

}

/** new bot's **/
exports['BLEX Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['Orange Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; OrangeBot/2.0; support.orangebot@orange.com)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['SMT Bot'] = function(test) {

    var source = 'Mozilla/5.0 (Windows NT 6.1) (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(userAgent.isDesktop, 'Desktop');
    test.ok(userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['Qwantify Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; Qwantify/2.3w; +https://www.qwant.com/)/2.3w';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['MJ12 Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; MJ12bot/v1.4.5; http://www.majestic12.co.uk/bot.php?+)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['Ahrefs Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; AhrefsBot/5.1; +http://ahrefs.com/robot/)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['Panscient Bot'] = function(test) {

    var source = 'panscient.com';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};

exports['Seznam Bot'] = function(test) {

    var source = 'Mozilla/5.0 (compatible; SeznamBot/3.2; +http://napoveda.seznam.cz/en/seznambot-intro/)';

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
    test.ok(!userAgent.isiPad, 'iPad');
    test.ok(!userAgent.isiPod, 'iPod');
    test.ok(!userAgent.isiPhone, 'iPhone');
    test.ok(!userAgent.isAndroid, 'Android');
    test.ok(!userAgent.isBlackberry, 'Blackberry');
    test.ok(!userAgent.isOpera, 'Opera');
    test.ok(!userAgent.isIE, 'IE');
    test.ok(!userAgent.isSafari, 'Safari');
    test.ok(!userAgent.isFirefox, 'Firefox');
    test.ok(!userAgent.isWebkit, 'Webkit');
    test.ok(!userAgent.isChrome, 'Chrome');
    test.ok(!userAgent.isKonqueror, 'Konqueror');
    test.ok(!userAgent.isOmniWeb, 'OmniWeb');
    test.ok(!userAgent.isSeaMonkey, 'SeaMonkey');
    test.ok(!userAgent.isFlock, 'Flock');
    test.ok(!userAgent.isAmaya, 'Amaya');
    test.ok(!userAgent.isEpiphany, 'Epiphany');
    test.ok(!userAgent.isDesktop, 'Desktop');
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(!userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();

};
