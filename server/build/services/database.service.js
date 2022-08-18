"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var config_1 = require("./config");
var connectionString = (0, config_1.config)();
console.log(connectionString);
var connection = function (str, value) {
    var pool = new pg_1.Pool({
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    });
    return pool.query(str, value);
};
exports["default"] = connection;
// CODIGO QUE FUNCIONA
// import {Pool} from 'pg';
// import {config } from './config'
// const connectionString = config()
// console.log(connectionString)
// const pool = new Pool({
//    connectionString
// })
// export default pool;
// TERMINA CODIGO QUE FUNCIONA
// import {config as dotenv} from 'dotenv';
// dotenv();
// console.log(process.env.PG_HOST)
// console.log(process.env.PG_URL)
