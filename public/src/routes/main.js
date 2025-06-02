var express = require("express");
var router = express.Router();

var mainController = require("../controllers/mainController");

router.get("/playlist", function (req, res) {
    mainController.playlist(req, res);
});

router.get("/list", function (req, res) {
    mainController.list(req, res);
});

module.exports = router;