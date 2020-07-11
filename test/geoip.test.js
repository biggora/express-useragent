var Ua = require('./../');

exports['Nginx GeoIp'] = function (test) {
    var headers = {
        GEOIP_COUNTRY_CODE: 'LV',
        GEOIP_REGION: 'LV',
        GEOIP_CITY: 'Riga',
    };

    var ua = Ua.testNginxGeoIP(headers);

    test.equal(ua.Agent.geoIp.GEOIP_COUNTRY_CODE, 'LV');
    test.equal(ua.Agent.geoIp.GEOIP_REGION, 'LV');
    test.equal(ua.Agent.geoIp.GEOIP_CITY, 'Riga');

    test.done();
};




