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

exports['Pingdom Bot'] = function (test) {

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

exports['Google Bot'] = function (test) {

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
exports['BLEX Bot'] = function (test) {

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

exports['Orange Bot'] = function (test) {

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

exports['SMT Bot'] = function (test) {

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

exports['Qwantify Bot'] = function (test) {

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

exports['MJ12 Bot'] = function (test) {

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

exports['Ahrefs Bot'] = function (test) {

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

exports['Panscient Bot'] = function (test) {

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

exports['Seznam Bot'] = function (test) {

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

exports['DuckDuckGo Favicons Bot'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; DuckDuckGo-Favicons-Bot/1.0; +http://duckduckgo.com)'

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

exports['UptimeRobot'] = function (test) {
    var source = 'Mozilla/5.0+(compatible; UptimeRobot/2.0; http://www.uptimerobot.com/)'

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

exports['SEMrushBot'] = function (test) {
    var source = 'SEMrushBot'

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

exports['DotBot'] = function (test) {
    var source = 'DotBot'

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

exports['Nimbostratus-Bot'] = function (test) {
    var source = 'Nimbostratus-Bot'

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

exports['Zoominfo Bot'] = function (test) {
    var source = 'ZoominfoBot (zoominfobot at zoominfo dot com)'

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

exports['IFTTT'] = function (test) {
    var source = 'IFTTT production'

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

exports['Sogou spider'] = function (test) {
    var source = 'Sogou web spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)'

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

exports['Mail.ru Bot'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/2.0; +http://go.mail.ru/help/robots)'

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
    test.ok(!userAgent.isWindows, 'Windows');
    test.ok(userAgent.isLinux, 'Linux');
    test.ok(!userAgent.isMac, 'Mac');
    test.ok(!userAgent.isBada, 'Bada');
    test.ok(!userAgent.isSamsung, 'Samsung');
    test.ok(!userAgent.isRaspberry, 'Raspberry');
    test.ok(userAgent.isBot, 'Bot');
    test.ok(!userAgent.isAndroidTablet, 'AndroidTablet');

    test.done();
};

exports['Researchscan'] = function (test) {
    var source = 'Mozilla/5.0 zgrab/0.x (compatible; Researchscan/t12sns; +http://researchscan.comsys.rwth-aachen.de'

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

exports['Slack-ImgProxy'] = function (test) {
    var source = 'Slack-ImgProxy (+https://api.slack.com/robots)'

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

exports['node-superagent'] = function (test) {
    var source = 'node-superagent/4.1.0'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['Go-http-client'] = function (test) {
    var source = 'Go-http-client/1.1'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['Jersey'] = function (test) {
    var source = 'Jersey/2.25.1 (HttpUrlConnection 1.8.0_141)'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['Dataprovider.com'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; Dataprovider.com)'

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

exports['github-camo'] = function (test) {
    var source = 'github-camo (f55913b5)'

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

exports['Dispatch'] = function (test) {
    var source = 'Dispatch/0.11.3'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['CheckMarkNetwork'] = function (test) {
    var source = 'CheckMarkNetwork/1.0 (+http://www.checkmarknetwork.com/spider.html)'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['Screaming Frog SEO Spider'] = function (test) {
    var source = 'Screaming Frog SEO Spider/9.4'

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

exports['WhatWeb'] = function (test) {
    var source = 'WhatWeb/0.4.8-dev'

    var userAgent = ua.parse(source);

    test.ok(!userAgent.isAuthoritative, 'Authoritative');
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

exports['Daum'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; Daum/4.1; +http://cs.daum.net/faq/15/4118.html?faqId=28966)'

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

exports['NetcraftSurveyAgent'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)'

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

exports['MojeekBot'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; MojeekBot/0.6; +https://www.mojeek.com/bot.html)'

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

exports['SurdotlyBot'] = function (test) {
    var source = 'Mozilla/5.0 (compatible; SurdotlyBot/1.0; +http://sur.ly/bot.html)'

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

exports['SpringBot'] = function (test) {
    var source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) ShopSpring SpringBot Safari/538.1'

    var userAgent = ua.parse(source);

    test.ok(userAgent.isAuthoritative, 'Authoritative');
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
