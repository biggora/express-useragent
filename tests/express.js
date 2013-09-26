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

var Express = require('express')
  , App = Express.createServer()
  , Useragent = require('./../lib/express-useragent');


App.use(Useragent.express());

App.get('/', function(req, res){
    res.send(req.useragent);
});

// To test it try http://localhost:3000/

App.listen(3000);
console.log('App started on port 3000');