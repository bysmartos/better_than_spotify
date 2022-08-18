"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var experienciasController_1 = __importDefault(require("../controller/experienciasController"));
var router = (0, express_1.Router)();
router.get('/experiencias', experienciasController_1["default"].getExperiencias);
router.get('/experiencias/:id', experienciasController_1["default"].getOneExperiencia);
router.post('/experiencias/insert', experienciasController_1["default"].postExperiencia);
router.put('/experiencias/:id', experienciasController_1["default"].updateExperiencia);
router["delete"]('/experiencias/:id', experienciasController_1["default"].deleteExperiencia);
router.post('/experiencia/filter', experienciasController_1["default"].postExperienciaFilter);
exports["default"] = router;
