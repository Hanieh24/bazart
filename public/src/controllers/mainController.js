var mainModel = require("../models/mainModel");

function playlist(req, res){
    var idUsuario = req.query.idUsuario;
    mainModel.playlist(idUsuario).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ error: "Nenhuma musica encontrada" });
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json({ error: "Erro ao buscar musica" });
        }
    )
}

function list(req, res){
    var idUsuario = req.query.idUsuario;
    mainModel.list(idUsuario).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ error: "Nenhuma art encontrada" });
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json({ error: "Erro ao buscar art" });
        }
    )
}

module.exports = {
    playlist,
    list

}