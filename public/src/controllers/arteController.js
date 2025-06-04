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

function salvara(req, res){
    var idUsuario = req.body.idUsuario;
    var idArte = req.body.idArte;
    arteModel.salvara(idUsuario, idArte).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado[0]);
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

async function salvaraUsuario(req, res) {
    const idUsuario = req.query.idUsuario;
    try {
        const resultado = await arteModel.salvaraUsuario(idUsuario);
        res.json(resultado.map(r => r.fkart)); 
    } catch (erro) {
        res.status(500).json({ error: "Erro ao buscar músicas curtidas do usuário" });
    }
}
  
module.exports = {
    mostrar,
    salvara,
    salvaraUsuario
}