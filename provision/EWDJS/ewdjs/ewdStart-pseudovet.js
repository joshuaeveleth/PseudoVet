/*
Example EWD.js Startup file for use with Cache on Linux

Notes:

1) Change the database.path value as appropriate for your Cache installation.  Also change the
    password etc if required

2) IMPORTANT!: The cache.node interface module file MUST exist in the primary node_modules directory
of your EWD.js configuration

*/

var ewd = require('ewdjs');

var params = {
  logFile: '/var/log/ewd/ewdjs.log',
  poolSize: 2,
  httpPort: 8082,
  modulePath: '/opt/ewdjs/node_modules',
  webServerRootPath: '/opt/ewdjs/node_modules/ewdjs/essentials/www',  
traceLevel: 3,
  name: 'EWD.js CPM Server',
  database: {
    type: 'cache',
    //path:"/opt/cache/mgr",
    path:"/srv/mgr",
    username: "_SYSTEM",
    password: "innovate",
    //namespace: "USER"
    namespace: "VISTA"
  },
  management: {
    path: '/ewdjsMgr',
    password: 'innovate'
  }
};

ewd.start(params);
