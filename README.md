[![build status](https://secure.travis-ci.org/biggora/express-useragent.png)](http://travis-ci.org/biggora/express-useragent)
# Middleware exposing user-agent for [ExpressJS](http://expressjs.com/)

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

### for Express

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

module provides details such as the following:

```js
{
  "isMobile":false,
  "isDesktop":true,
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

### Startups & Apps

- [TViMama](http://tvimama.com/)
- [GorkaTV](https://gorkatv.com/)


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