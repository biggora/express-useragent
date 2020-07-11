var Ua = require('./../');

exports['electron 1.8.3 Mac 10.13.3'] = function (test) {
    var ua = Ua.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) electron-app-name/1.0.0 Chrome/59.0.3071.115 Electron/1.8.3 Safari/537.36');

    test.equal(ua.version, '59.0.3071.115');
    test.equal(ua.isElectron, true);
    test.equal(ua.electronVersion, '1.8.3');

    test.done();
};

exports['electron 8.2.3 Mac 10.13.6'] = function (test) {
    var ua = Ua.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6)\n' +
        'AppleWebKit/537.36 (KHTML, like Gecko)\n' +
        'Chrome/83.0.4103.64\n' +
        'Electron/9.0.0 Safari/537.36');

    test.equal(ua.version, '83.0.4103.64');
    test.equal(ua.isElectron, true);
    test.equal(ua.electronVersion, '9.0.0');

    test.done();
};

exports['electron 8.2.3 Mac 10.14.6'] = function (test) {
    var ua = Ua.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) electron-app/0.0.1 Chrome/80.0.3987.163 Electron/8.2.3 Safari/537.3');

    test.equal(ua.version, '80.0.3987.163');
    test.equal(ua.isElectron, true);
    test.equal(ua.electronVersion, '8.2.3');

    test.done();
};



