var federator = require('ewd-federator');

var params = {
  //FEDERATOR
  restPort: 8081,
  poolSize: 2,
  traceLevel: 3,
      database: {
        type: 'cache',
        //path:"c:\\InterSystems\\Cache\\Mgr",
        path:"/srv/mgr",
        username: "_SYSTEM",
        password: "innovate",
        //namespace: "EDU"
        namespace: "VISTA"
      },
  server: {

    EwdVista: {
      host: '127.0.0.1',  // if federator installed on same physical machine as EWD.js / VistA
	  //EWDVISTA
      port: 8082,
      ssl: false,
      ewdjs: true,
      accessId: 'ewdfederator',  // change as needed
      secretKey: '$keepSecret!'  // change as needed
    }
  },

  service: {
    pseudovet: {
      module: 'pseudovet',
      service: 'parse',
      contentType: 'application/json'
    }
  }

};

federator.start(params);