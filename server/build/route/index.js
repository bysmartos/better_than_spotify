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
exports.reservasRoute = exports.userRoute = exports.experienciasRoute = void 0;
var experienciasRoute_1 = require("./experienciasRoute");
__createBinding(exports, experienciasRoute_1, "default", "experienciasRoute");
var userRoute_1 = require("./userRoute");
__createBinding(exports, userRoute_1, "default", "userRoute");
var reservasRoute_1 = require("./reservasRoute");
__createBinding(exports, reservasRoute_1, "default", "reservasRoute");
