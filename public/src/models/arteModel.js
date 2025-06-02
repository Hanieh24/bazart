var database = require("../database/config")

function mostrar(title, img_url, descricao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", title, img_url, descricao)
    var instrucaoSql = `
        SELECT * FROM art_of_the_day ORDER BY RAND() LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvara(idUsuario, idArte) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, idArte);
    var instrucaoSql = `
        INSERT INTO usuario_art(fkusuario, fkart) VALUES (${idUsuario}, ${idArte});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrar,
    salvara
};