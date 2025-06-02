var express = require("express");
var router = express.Router();

var arteController = require("../controllers/arteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/mostrar", function (req, res) {
    arteController.mostrar(req, res);
});

router.post("/salvara", function (req, res) {
    arteController.salvara(req, res);
});

module.exports = router;