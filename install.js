var fs = require('fs')
, path = require('path')
, repl1 = "var useragent = require('express-useragent');\nvar express = require('express');"
, repl2 = "app.use(useragent.express());    app.use(app.router);";


if (path.existsSync(app.root + '/config/environment.js')) {
    var data = fs.readFileSync(app.root + '/config/environment.js', 'utf8');
    if(!/var express = require('express');/gim.test(data) && !/app.use(app.router);/gim.test(data)) {
        data.replace(/var express = require('express');/gim,repl1)
            .replace(/app.use(app.router);/gim,repl2);
        fs.writeFileSync(app.root + '/config/environment.js', data, 'utf8');
    }
}

process.exit(0);