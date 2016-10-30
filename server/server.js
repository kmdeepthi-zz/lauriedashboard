const Hapi = require('hapi');

const routes = require('./routes');
const plugins = require('./plugins');

var server = new Hapi.Server({
    connections:{
        routes:{
            cors: true
        }
    }
});
console.log(process.env);
server.connection({port: process.env.PORT || 3000, host: process.env.hostname || "0.0.0.0"});

//Register the plugins
server.register(plugins, function (err) {
    if (err) {
        throw err;
    }

    // Add routing
    server.route(routes);
    server.start(function(){
        console.log('Server started at: ' + server.info.uri);
    });
});

module.exports = server;