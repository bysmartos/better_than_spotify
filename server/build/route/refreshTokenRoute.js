"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var router = (0, express_1["default"])();
router.post('/refresh', function (req, res) {
    var refreshToken = req.body.refreshToken;
    var spotifyApi = new spotify_web_api_node_1["default"]({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: refreshToken
    });
    spotifyApi
        .refreshAccessToken()
        .then(function (data) {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        });
    })["catch"](function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});
exports["default"] = router;
