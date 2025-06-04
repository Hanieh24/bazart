var database = require("../database/config")

function mostrar(title, music_url, artist) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", title, music_url, artist)
    var instrucaoSql = `
        SELECT * FROM musica;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvar(idUsuario, idMusica) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): " + idUsuario + ", " + idMusica);
    var instrucaoSql = `
        INSERT INTO usuario_musica (fkusuario, fkmusica) VALUES (${idUsuario}, ${idMusica});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtidas(title) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): " + title);
    var instrucaoSql = `
        SELECT m.title, COUNT(um.fkmusica) as likes
            FROM musica m
            JOIN usuario_musica um ON m.id = um.fkmusica
            GROUP BY m.title
            ORDER BY likes DESC
            LIMIT 5;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT fkmusica FROM usuario_musica WHERE fkusuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    mostrar,
    salvar,
    curtidas,
    salvarUsuario
};