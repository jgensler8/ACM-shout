var server = require('./server.js');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));
var port = (argv.port || 3000);


//start the server
console.log("Server started on port " + port);
server.listen(port);
