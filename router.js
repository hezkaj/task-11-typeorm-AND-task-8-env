"use strict";
var create = require("./dataRoures/create");
var getAll = require("./dataRoures/getAll");
var getOne = require("./dataRoures/getOne");
var remove = require("./dataRoures/remove");
var update = require("./dataRoures/update");
var express = require("express");
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.get('/', function (req, res) {
    getAll(req, res);
});
router.post('/', function (req, res) {
    create(req, res);
});
router.get('/:id', function (req, res) {
    getOne(req, res);
});
router.put('/:id', function (req, res) {
    update(req, res);
});
router.delete('/:id', function (req, res) {
    remove(req, res);
});
module.exports = router;
