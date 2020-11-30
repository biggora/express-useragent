/**
 *
 * @revision    $Id: index.js 2012-03-24 16:21:10 Aleksey $
 * @created     2012-03-24 16:21:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     1.0.15
 * @copyright   Copyright (c) 2009-2020 - All rights reserved.
 * @license     MIT License
 * @author      Aleksejs Gordejevs IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */
var UserAgent = require('./lib/express-useragent').UserAgent;

/* Fallback of previous solution. */
module.exports = new UserAgent();

/* Override of instance functions to static. */
module.exports.parse = UserAgent.parse;
module.exports.testNginxGeoIP = UserAgent.testNginxGeoIP;
module.exports.UserAgent = UserAgent;

/**
 * Middleware of express.js for parse user agent.
 *
 * @param {object} req - The request object of express.js.
 * @param {object} res - The response object of express.js.
 * @param {function} next - Callback of middleware with optional error for run follwing or error middleware.
 */
var middleware = function (req, res, next) {
    /* The 'x-ucbrowser-ua' is special case of UC Browser, the 'user-agent' for other browsers. */
    var source = req.headers['x-ucbrowser-ua'] || req.headers['user-agent'] || '';
    req.useragent = UserAgent.parse(source);

    if (typeof res.locals === 'function') {
        /*
         * Support of express.js version 2.x.
         *
         * See more: http://expressjs.com/2x/guide.html#res.locals().
         */
        res.locals({ useragent: req.useragent });
    } else {
        res.locals.useragent = req.useragent;
    }

    next();
};
module.exports.middleware = middleware;

/**
 * Getter of express.js middleware.
 *
 * @returns {function} middleware of express.js for parse user agent.
 */
module.exports.express = function () {
    return middleware;
};
