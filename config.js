"use strict";
var ts_dotenv_1 = require("ts-dotenv");
var env = (0, ts_dotenv_1.load)({
    SERVER_PORT: Number,
    DB_HOST: String,
    DB_PORT: Number,
    DB_NAME: String,
    DB_USER: String,
    DB_PASSWORD: String
});
module.exports = env;
