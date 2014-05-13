var http    = require("http");             
var express = require("express");       

var httpApp = express();
httpApp.configure(function() {
    httpApp.use(express.static(__dirname + "/static/"));
});

var webServer = http.createServer(httpApp).listen(8080);


