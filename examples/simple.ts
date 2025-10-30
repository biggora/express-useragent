import useragent from '../src/index';

const samples = [
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)',
  'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19',
];

samples.forEach((source, index) => {
  const agent = useragent.parse(source);
  console.log(`Sample ${index + 1}`);
  console.log(`  browser: ${agent.browser}`);
  console.log(`  version: ${agent.version}`);
  console.log(`  os: ${agent.os}`);
  console.log(`  isSafari: ${agent.isSafari}`);
  console.log('');
});
