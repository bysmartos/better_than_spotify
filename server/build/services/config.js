"use strict";
exports.__esModule = true;
exports.secret = exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.PG_URL);
var config = function () {
    var uri = process.env.PG_URL;
    console.log(uri);
    return uri;
};
exports.config = config;
exports.secret = process.env.SECRET || '';
