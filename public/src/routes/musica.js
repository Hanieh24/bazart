var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/mostrar", function (req, res) {
    musicaController.mostrar(req, res);
});

router.post("/salvar", function (req, res) {
    console.log("req.body at top:", req.body);
    musicaController.salvar(req, res);
});

router.get("/curtidas", function(req, res){
    console.log("req.body at top:", req.body);
    musicaController.curtidas(req, res);
})

module.exports = router;