/**
 * Created by AC3 on 2016/12/17.
 */
var http = require('http');
var Router = require('./Router');

http.createServer(function (Request, Response)
{
    Router.Handle(Request, Response);

}).listen(6324);

console.log('Server running at http://127.0.0.1:6324/');