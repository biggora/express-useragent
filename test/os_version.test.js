/**
 * @author Juan Lago <juanparati@gmail.com>
 *
 * User-agents samples extracted from https://developers.whatismybrowser.com
 **/

var ua = require("..");

var VERSIONS_SAMPLES = [
    // iOS for iPad
    {    
        source: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        expected: '12.2'
    },

    // iOS for iPhone
    {
        source: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1',
        expected: '13.3.1'
    },

    // Android
    {
        source: 'Mozilla/5.0 (Linux; Android 7.1.2; AFTMM Build/NS6265; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36',
        expected: '7.1.2'
    },

    // Chrome OS
    {
        source: 'Mozilla/5.0 (X11; CrOS x86_64 12871.102.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.141 Safari/537.36',
        expected: '12871.102.0'
    },
    {
        source: 'Mozilla/5.0 (X11; CrOS x86_64 12739.111.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
        expected: '12739.111.0'
    },
    {
        source: 'Mozilla/5.0 (X11; CrOS armv7l 11647.104.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.88 Safari/537.36',
        expected: '11647.104.0'
    },

    // OS X
    {
        source: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
        expected: '10.9.3'
    },
    {
        source: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:16.0) Gecko/20100101 Firefox/16.0',
        expected: '10.6'
    },

    // Windows
    {
        source: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
        expected: '10.0'
    },
    {
        source: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
        expected: '5.1'
    },
    {
        source: '  Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko)',
        expected: '6.1'
    },
  
    // Windows Mobile    
    {
        source: 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; Microsoft; Lumia 435) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
        expected: '8.1'
    }
]



exports["OS Versions"] = function (test) {
    VERSIONS_SAMPLES.forEach(function (eTest) {
        var userAgent = ua.parse(eTest.source);    
        test.equal(userAgent.osVersion, eTest.expected);
    });

    test.done();
}
