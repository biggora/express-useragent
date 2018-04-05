var UA = require('./../');

var ua1 = UA.parse('Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)');
console.log('UA 1: ' + ua1.Browser);

var ua2 = UA.parse('Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3');
console.log('UA 2: ' + ua2.Browser);

var ua3 = UA.parse('Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)');
console.log('UA 3: ' + ua3.Browser);

var ua4 = UA.parse('"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19');
console.log('UA 4: ' + ua4.Browser);

console.log('UA 1 is Safari? ' + ua1.isSafari);
console.log('UA 2 is Safari? ' + ua2.isSafari);
console.log('UA 3 is Safari? ' + ua3.isSafari);
console.log('UA 4 is Safari? ' + ua4.isSafari);

/*
 * Results
 * UA 1: Firefox
 * UA 2: Safari
 * UA 3: Firefox
 * UA 4: Chrome
 * UA 1 is Safari? false
 * UA 2 is Safari? true
 * UA 3 is Safari? false
 * UA 4 is Safari? false
 */
