var arteModel =require("../models/arteModel");

function mostrar(req, res){
    arteModel.mostrar().then(
        function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(404).json({ error: "Nenhuma arte encontrada" });
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json({ error: "Erro ao buscar arte" });
        }
    );
}
  
module.exports = {
    mostrar
}