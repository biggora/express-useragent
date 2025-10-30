"use strict";

function loadRuntime() {
  try {
    return require('./dist/index.cjs');
  } catch (error) {
    throw new Error(
      'express-useragent: compiled output missing. Run "npm run build" before requiring the package.'
    );
  }
}

const runtime = loadRuntime();
const exported = runtime && runtime.default ? runtime.default : runtime;

module.exports = exported;
module.exports.useragent = exported;

if (runtime) {
  if (runtime.UserAgent) {
    module.exports.UserAgent = runtime.UserAgent;
  }
  if (runtime.express) {
    module.exports.express = runtime.express;
  }
}
