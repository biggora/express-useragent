/**
 *
 * @revision    $Id: express.js 2012-03-24 16:21:10 Aleksey $
 * @created     2012-03-24 16:21:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     0.0.8
 * @copyright   Copyright (c) 2009-2012 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */

var express = require('express')
    , app = express()
    , useragent = require('./../');

app.use(useragent.express());
app.use(express.static(__dirname +''));

app.get('/', function (req, res) {
    res.send(req.useragent);
});
app.get('/demo', function (req, res) {
    res.sendfile('./test/client_test.html');
});
// To test it try http://localhost:3000/

app.listen(3000);
console.log('App started on port 3000');