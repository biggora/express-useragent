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
    ua.Agent.osversion = ua.getOSVersion(ua.Agent.source);
    ua.Agent.platform = ua.getPlatform(ua.Agent.source);
    ua.Agent.browser = ua.getBrowser(ua.Agent.source);
    ua.Agent.browserversion = ua.getBrowserVersion(ua.Agent.source);
    ua.testNginxGeoIP(req.headers);
    ua.testBot();
    ua.testWebkit();
    ua.testDevice();
    ua.testAndroidTablet();
    ua.testTablet();
    ua.testCompatibilityMode();
    ua.testCaptiveNetwork();
    req.useragent = ua.Agent;

    if ('function' === typeof res.locals) {
        res.locals({useragent: ua.Agent});
    } else {
        res.locals.useragent = ua.Agent;
    }
    next();
  };
};
