"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var userModel_1 = __importDefault(require("../model/userModel"));
var jwtHandler_1 = __importDefault(require("../middleware/jwtHandler"));
//import { QueryResult } from 'pg';
var userController = {
    saveUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, name_1, last_name, role, users, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = req.body, email = _a.email, password = _a.password, name_1 = _a.name, last_name = _a.last_name, role = _a.role, users = __rest(_a, ["email", "password", "name", "last_name", "role"]);
                    if (!(!email || !password || !name_1 || !last_name || !role)) return [3 /*break*/, 1];
                    res.status(400).json({ message: 'some info is missing' });
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, userModel_1["default"].saveUser(__assign({ email: email, password: password, name: name_1, last_name: last_name, role: role }, users))];
                case 2:
                    result = _b.sent();
                    result
                        ? res.status(201).json({ result: result.rows })
                        : res.status(500).send('No se pudo crear un nuevo usuario');
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    res.status(400).send(error_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    getUsers: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModel_1["default"].getUsers()];
                case 1:
                    users = _a.sent();
                    res.json(users);
                    return [2 /*return*/];
            }
        });
    }); },
    // login : async (req:Request,res:Response) =>{
    //     res.send('usuario correcto');
    // }
    login: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, jwtHandler_1["default"].generateToken(req.body.email)];
                case 1:
                    token = _a.sent();
                    console.log(token);
                    res.json({ token: token });
                    return [2 /*return*/];
            }
        });
    }); },
    // Auth: async (req: Request, res: Response) => {
    //     res.json({
    //         token: req.body
    //     })
    // }
    updateUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var param, _a, email, password, name_2, last_name, users, result, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    param = req.params['id'];
                    _a = req.body, email = _a.email, password = _a.password, name_2 = _a.name, last_name = _a.last_name, users = __rest(_a, ["email", "password", "name", "last_name"]);
                    if (!(!email || !password || !name_2 || !last_name)) return [3 /*break*/, 1];
                    res.status(400).json({ message: 'some info is missing' });
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, userModel_1["default"].updateUser(__assign({ email: email, password: password, name: name_2, last_name: last_name }, users), param)];
                case 2:
                    result = _b.sent();
                    result
                        ? res.status(201).json({ result: result.rows })
                        : res.status(500).send('No se pudo modificar  un user');
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_2 = _b.sent();
                    res.status(400).send(error_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = userController;
/*
const userController = async (req: Request, res: Response) => {

    try {
        const { email, password, ...user } = req.body as iUser;
        if (!email || !password) {
            res.status(400).send('missing some data');
        } else {
            const result:QueryResult = await userModel.saveUser({ email, password, ...user });

            result
                ? res.status(201).json({result: result.rows})
                : res.status(500).send("Failed to create a new user.");
        }
    } catch (error: any) {

        res.status(400).send(error.message);
    }
}
*/
