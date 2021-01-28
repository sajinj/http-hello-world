const http = require('http');


http.createServer(function (request, response) {

    // root, get

    response.write("hello world");
    response.end();



}).listen(5005);

