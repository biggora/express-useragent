const path = require('path');

const distPath = path.resolve(__dirname, '..', 'dist');
try {
  const dist = require(distPath);
  const runtime = dist && dist.default ? dist.default : dist;
  module.exports = runtime;
  module.exports.useragent = runtime;
  if (dist.UserAgent) {
    module.exports.UserAgent = dist.UserAgent;
  }
  if (dist.express) {
    module.exports.express = dist.express;
  }
} catch (error) {
  module.exports = require(path.resolve(__dirname, '..'));
}
