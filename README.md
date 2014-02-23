[![build status](https://secure.travis-ci.org/biggora/express-useragent.png)](http://travis-ci.org/biggora/express-useragent)
[![NPM version](https://badge.fury.io/js/express-useragent.png)](http://badge.fury.io/js/express-useragent)
# Fast Middleware exposing user-agent for [NodeJS](http://nodejs.org/)

express-useragent is a simple ExpressJS user-agent middleware exposing user-agent details to your application and views.

## Installation

Installation is done using the Node Package Manager (npm). If you don't have npm installed on your system you can download it from [npmjs.org](http://npmjs.org/)
To install express-useragent:

    $ npm install -g express-useragent

## Usage overview

### Simple

```js
var http = require('http')
  , useragent = require('express-useragent');

var srv = http.createServer(function (req, res) {
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(ua));
});

srv.listen(3000);
```

### for [TrinteJS](http://www.trintejs.com/)

is permanently included

#### manual setup in project config/middleware.js

```js
var useragent = require('express-useragent');

module.exports = function (app, express) {
    app.configure(function () {
        app.use(useragent.express());
    });
};
```

### for [ExpressJS](http://expressjs.com/)

```js
var express = require('express')
  , app = express.createServer()
  , useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent);
});
app.listen(3000);
```

### for [CompoundJS](http://compoundjs.com)

    $ compound install https://github.com/biggora/express-useragent.git

#### or manual setup in project config/environment.js

```js
var useragent = require('express-useragent');

app.configure(function () {

   // init useragent
   app.use(useragent.express());

   app.use(app.router);
});
```

module provides details such as the following:

```js
{
  "isMobile":false,
  "isDesktop":true,
  "isBot":false,
  .....
  "Browser":"Chrome",
  "Version":"17.0.963.79",
  "OS":"Windows 7",
  "Platform":"Microsoft Windows",
  "source":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11"
}

```

## Accessing the User-Agent

If you are using `express` or `connect`, then `express-useragent`
provides an easy way to access the user-agent as:

- `req.useragent` from your app server
- `useragent` helper accessible from your `express` views.


## In the Wild

The following projects use express-useragent.

If you are using express-useragent in a project, app, or module, get on the list below
by getting in touch or submitting a pull request with changes to the README.

### Recommend extensions

- [Bootstrap Fancy File Plugin](http://biggora.github.io/bootstrap-fancyfile/)
- [Bootstrap Ajax Typeahead Plugin](https://github.com/biggora/bootstrap-ajax-typeahead)
- [TrinteJS - Javascrpt MVC Framework for Node.JS](http://www.trintejs.com/)
- [CaminteJS - Cross-db ORM for NodeJS](http://www.camintejs.com/)
- [MongoDB Session Storage for ExpressJS](https://github.com/biggora/express-mongodb)
- [2CO NodeJS adapter for 2checkout API payment gateway](https://github.com/biggora/2co)

### Startups & Apps

- [TViMama](http://tvimama.com/)
- [GorkaTV](https://gorkatv.com/)
- [TrinteJS](http://www.trintejs.com/)
- [CaminteJS](http://www.camintejs.com/)

## Author

Aleksej Gordejev (aleksej@gordejev.lv).


## License

(The MIT License)

Copyright (c) 2012 Aleksej Gordejev <aleksej@gordejev.lv>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Resources

- Visit the [author website](http://www.gordejev.lv).
- Follow [@biggora](https://twitter.com/#!/biggora) on Twitter for updates.
- Report issues on the [github issues](https://github.com/biggora/express-useragent/issues) page.

[![Analytics](https://ga-beacon.appspot.com/UA-22788134-5/express-useragent/readme)](https://github.com/igrigorik/ga-beacon)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/biggora/express-useragent/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

