"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var reservasController_1 = __importDefault(require("../controller/reservasController"));
var jwtHandler_1 = __importDefault(require("../middleware/jwtHandler"));
var router = (0, express_1.Router)();
router.get('/reservas', reservasController_1["default"].getReservas);
router.get('/reservas/:userid', reservasController_1["default"].getReservasByUser);
router.post('/reservas/:userid', jwtHandler_1["default"].validateTokenLogin, reservasController_1["default"].postReserva);
exports["default"] = router;
