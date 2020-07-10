var Ua = require('./../');

exports['electron'] = function(test){
  var ua = Ua.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) electron-app-name/1.0.0 Chrome/59.0.3071.115 Electron/1.8.3 Safari/537.36');

  test.equal(ua.version ,'59.0.3071.115');
  test.equal(ua.electronVersion, '1.8.3');

  test.done();
};





