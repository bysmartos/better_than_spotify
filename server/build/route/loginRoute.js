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
router.post('/login', function (req, res) {
    var code = req.body.code;
    var spotifyApi = new spotify_web_api_node_1["default"]({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });
    spotifyApi
        .authorizationCodeGrant(code)
        .then(function (data) {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    })["catch"](function (err) {
        res.sendStatus(400);
    });
    console.log(res.json);
});
exports["default"] = router;
