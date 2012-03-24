/**
 *
 * @revision    $Id: simple.js 2012-03-24 16:21:10 Aleksey $
 * @created     2012-03-24 16:21:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     0.0.1
 * @copyright   Copyright (c) 2009-2012 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */

var http = require('http')
  , useragent = require('./../lib/express-useragent');

var srv = http.createServer(function (req, res) {
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(ua));
});
srv.listen(3000);


