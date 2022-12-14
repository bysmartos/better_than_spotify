"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var route_1 = require("./route");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(route_1.loginRoute);
app.use(route_1.refreskTokenRoute);
app.use(route_1.lyricsRoute);
app.get('/', function (req, res) {
    res.json('hello world');
});
exports["default"] = app;
