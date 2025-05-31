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
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", title, music_url, artist)
    var instrucaoSql = `
        INSERT INTO usuario_musica (fkusuario, fkmusica) VALUES (${idUsuario}, ${idMusica});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function playlist(idUsuario, title, music_url, artist) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", title, music_url, artist)
    var instrucaoSql = `
        SELECT * FROM musica m
        JOIN usuario_musica uf ON m.id = uf.fkmusica
        WHERE uf.fkusuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrar,
    salvar,
    playlist
};