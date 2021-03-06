const cors_proxy = require('cors-anywhere');

// define proxy host and utilize the same pattern for exiting corsproxy
const corsProxyHost = process.env.CORSPROXY_HOST || 'localhost';

// define proxy port and utilize the same pattern for exiting corsproxy
const corsProxyPort = process.env.CORSPROXY_PORT || 1337;

cors_proxy.createServer({
  // in default the cors proxy allows any domain as origin
  originWhitelist: [],

  redirectSameOrigin: true,

  // no requirements in default
  requireHeader: [],

  // no requirements in default
  // for instance cookie could be added to ensure no cookie is shared
  removeHeaders: []
}).listen(corsProxyPort, corsProxyHost, function() {
  console.log(`[CORS Proxy] running at: http://${corsProxyHost}:${corsProxyPort}`);
});
