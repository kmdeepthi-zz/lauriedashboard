const fs = require('fs');
const Path = require('path');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.file(Path.resolve(__dirname, '../public/index.html'));
        }
    },
    {
        method: 'GET',
        path: '/api/movies',
        handler: function(request, reply) {
            var stream = fs.createReadStream(__dirname + '/data/payload.json');
            reply(stream);
        }
    },
    {
        method: 'GET',
        path: '/{filename}',
        handler: {
            file: function (request) {
                return Path.resolve(__dirname, '../public/', request.params.filename);
            }
        }
    }
];