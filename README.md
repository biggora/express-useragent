(PENDING)

[![build status](https://secure.travis-ci.org/angelcustodio/express-useragent.png)](http://travis-ci.org/angelcustodio/express-useragent)

# Fast Middleware User-Agent Exposer for [NodeJS](http://nodejs.org/)

`express-useragent-exposer` is a simple NodeJS/ExpressJS middleware user-agent exposer to your application and views created by Alexey Gordeyev and forked by Angel Custodio.

## Installation

Installation is done using the Node Package Manager (npm). If you don't have npm installed on your system you can download it from [npmjs.org](http://npmjs.org/)
To install express-useragent:
```bash
    $ npm install express-useragent-exposer --save
```

## Usage overview

### Simple Node App

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

### For [ExpressJS](http://expressjs.com/)

```js
var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent);
});
app.listen(3000);
```

Module provides details such as the following:

```js
{
  "isMobile": true,
  "isDesktop": true,
  "isBot": false,
  .....
  "browser": "Chrome",
  "browserversion": "55.0.2883.79",
  "os": "iOS",
  "osversion": "10.2",
  "source": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/55.0.2883.79"
}

```

## Accessing the user-agent

If you are using `express` or `connect`, then `express-useragent`
provides an easy way to access the user-agent as:

- `req.useragent` from your app server
- `useragent` helper accessible from your `express` views

## Client side

* Clone the repo: `git clone git://github.com/angelcustodio/express-useragent.git`
* Or install with [Bower](http://twitter.github.com/bower): `bower install express-useragent-exposer`.

The client side version of express-useragent available in the `/lib` subdirectory.

#### Include file in your HTML – the minimum required for this plugin are:
```
    <script type="text/javascript" src="express-useragent.js"></script>
```
#### Execute the plugin:
```javascript
    var userAgent = new UserAgent().parse(navigator.userAgent);
```

## Running tests

Ensure you have [nodeunit](https://github.com/caolan/nodeunit) by running ```npm install -g nodeunit```.
Then, run ```npm test```.

```bash
npm install
npm test
```

#### Run example node app

```bash
npm run-script http
```

#### Run example express app

```bash
npm run-script express
```

## Creator

Alexey Gordeyev (aleksej@gordejev.lv)

## Forker

Angel Custodio (ancude@gmail.com)

## License

(The MIT License)

Copyright (c) 2012 Alexey Gordeyev <aleksej@gordejev.lv>

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
