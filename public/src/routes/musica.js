var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/mostrar", function (req, res) {
    musicaController.mostrar(req, res);
});

router.get("/salvar", function (req, res) {
    musicaController.salvar(req, res);
});

router.post("/playlist", function (req, res) {
    musicaController.playlist(req, res);
});

module.exports = router;