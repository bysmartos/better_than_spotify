"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.lyricsRoute = exports.refreskTokenRoute = exports.loginRoute = void 0;
var loginRoute_1 = require("./loginRoute");
__createBinding(exports, loginRoute_1, "default", "loginRoute");
var refreshTokenRoute_1 = require("./refreshTokenRoute");
__createBinding(exports, refreshTokenRoute_1, "default", "refreskTokenRoute");
var lyricsRoute_1 = require("./lyricsRoute");
__createBinding(exports, lyricsRoute_1, "default", "lyricsRoute");
