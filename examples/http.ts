import http from 'node:http';
import useragent from '../src/index';

const server = http.createServer((req, res) => {
  const uaHeader = req.headers['user-agent'];
  const source = Array.isArray(uaHeader) ? uaHeader.join(' ') : (uaHeader ?? 'unknown');
  const agent = useragent.parse(source);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(agent, null, 2));
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('HTTP example available at http://localhost:3000');
});
