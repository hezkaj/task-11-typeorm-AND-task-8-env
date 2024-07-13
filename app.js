"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var env = require("./config");
var port = env.SERVER_PORT || 3000;
var router = require('./router');
var app = express();
app.use('/users', router);
if (app.path() != '/users?') {
    app.all('*', function (req, res) { res.end('Over page...'); });
}
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
