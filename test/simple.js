/**
 *
 * @revision    $Id: simple.js 2012-03-24 16:21:10 Aleksey $
 * @created     2012-03-24 16:21:10
 * @category    Express Helpers
 * @package     express-useragent
 * @version     1.0.14
 * @copyright   Copyright (c) 2009-2012 - All rights reserved.
 * @license     MIT License
 * @author      Aleksejs Gordejevs IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */


var Ua = require('./../');

var ua1 = Ua.parse('Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)');
console.log('Ua 1: ' + ua1.Browser);


var ua2 = Ua.parse('Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3');
console.log('Ua 2: ' + ua2.Browser);


var ua3 = Ua.parse('Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)');
console.log('Ua 3: ' + ua3.Browser);


var ua4 = Ua.parse('"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19');
console.log('Ua 4: ' + ua4.Browser);

console.log('Ua 1 is Safari? ' + ua1.isSafari);
console.log('Ua 2 is Safari? ' + ua2.isSafari);
console.log('Ua 3 is Safari? ' + ua3.isSafari);
console.log('Ua 4 is Safari? ' + ua4.isSafari);

/*
 * Results
 * Ua 1: Firefox
 * Ua 2: Safari
 * Ua 3: Firefox
 * Ua 4: Chrome
 * Ua 1 is Safari? false
 * Ua 2 is Safari? true
 * Ua 3 is Safari? false
 * Ua 4 is Safari? false
 */




