var http = require('http');
var useragent = require('../');
var app = http.createServer(function (req, res) {
    var source = req.headers['user-agent'];
    var ua = useragent.parse(source);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(ua));
});

app.listen(3000);
console.log('STARTED! Check on http://localhost:3000');
