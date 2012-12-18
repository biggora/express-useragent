var fs = require('fs')
, repl1 = "var useragent = require('express-useragent');\nvar express"
, repl2 = "app.use(useragent.express());\n    app.use(app.router);"
, basepath = process.cwd();


if (fs.existsSync(basepath + '/config/environment.js')) {
    var environmentdata = fs.readFileSync(basepath + '/config/environment.js', 'utf8');
    if(!/var useragent/gim.test(environmentdata) && !/useragent\.express/gim.test(environmentdata)) {
        fs.writeFileSync(basepath + '/config/environment.js',
            environmentdata.toString()
            .replace(/var express/gim, repl1)
            .replace(/app.use\(app.router\);/gim, repl2), 'utf8');
    }
    if (fs.existsSync(basepath + '/npmfile.js')) {
        var npmfiledata = fs.readFileSync(basepath + '/npmfile.js', 'utf8');
        fs.writeFileSync(basepath + '/npmfile.js',
            npmfiledata.toString()
            .replace(/\"require\(\'express-useragent\'\)\;\"/gim, ""), 'utf8');
    }
}

process.exit(0);