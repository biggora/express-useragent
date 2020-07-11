var androidPhone = require('./android_phone.test.js');
var androidTablet = require('./android_tablet.test.js');
var mobileNative = require('./mobile_native.test.js');
var bots = require('./bots.test.js');
var browsers = require('./browsers.test.js');
var smartTV = require('./smart_tv.test.js');
var silk = require('./silk.test.js');
var electron = require('./electron.test.js');
var wechat = require('./wechat.test.js');
var geoip = require('./geoip.test.js');

var tests = {};

Object.assign(
    tests,
    androidPhone,
    androidTablet,
    mobileNative,
    bots,
    browsers,
    smartTV,
    silk,
    electron,
    geoip,
    wechat
);

module.exports = tests;
