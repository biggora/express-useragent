/**
 *
 * @revision    $Id: index.js 2012-03-24 16:21:10 Aleksey $
 * @created     2012-03-24 16:21:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     0.1.8
 * @copyright   Copyright (c) 2009-2012 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */
var usrg = require('./lib/express-useragent');
var UserAgent = usrg.UserAgent;
module.exports = new UserAgent();
module.exports.UserAgent = UserAgent;
module.exports.express = function () {
    return function (req, res, next) {
        var source = req.headers['user-agent'] || '';
        if (req.headers['x-ucbrowser-ua']) {  //special case of UC Browser
            source = req.headers['x-ucbrowser-ua'];
        }
        var ua = new UserAgent();
        if (typeof source === 'undefined') {
            source = "unknown";
        }
        ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
        ua.Agent.os = ua.getOS(ua.Agent.source);
        ua.Agent.platform = ua.getPlatform(ua.Agent.source);
        ua.Agent.browser = ua.getBrowser(ua.Agent.source);
        ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
        ua.testNginxGeoIP(req.headers);
        ua.testBot();
        ua.testMobile();
        ua.testAndroidTablet();
        ua.testTablet();
        ua.testCompatibilityMode();
        ua.testSilk();
        ua.testKindleFire();
        req.useragent = ua.Agent;
        if ('function' === typeof res.locals) {
            res.locals({useragent: ua.Agent});
        } else {
            res.locals.useragent = ua.Agent;
        }
        next();
    };
};
