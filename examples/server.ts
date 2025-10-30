import express from 'express';
import path from 'node:path';
import { useragentMiddleware, type UserAgentAugmentedRequest } from '../src';

const staticDir = path.resolve(process.cwd(), 'examples');

const app = express();

app.use(useragentMiddleware());
app.use(express.static(staticDir));

app.get('/', (req: UserAgentAugmentedRequest, res) => {
  res.json(req.useragent ?? null);
});

app.get('/ping', (_req, res) => {
  res.send('express-useragent middleware is active');
});

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express example listening on http://localhost:${PORT}`);
});
