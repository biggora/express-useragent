var express = require('express')
    , app = express()
    , useragent = require('./../');

app.use(useragent.express());
app.use(express.static(__dirname +''));

app.get('/', function (req, res) {
    res.send(req.useragent);
});
app.get('/demo', function (req, res) {
    res.sendfile('./test/client.html');
});

app.listen(3000);
console.log('STARTED! Check on http://localhost:3000');
