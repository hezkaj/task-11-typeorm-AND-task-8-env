"use strict";
var typeorm_1 = require("typeorm");
var users_1 = require("./users");
var env = require("./config");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    entities: [users_1.Users]
});
dataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
module.exports = dataSource;
