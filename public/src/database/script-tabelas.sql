-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE bazart;

USE bazart;



CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table art_of_the_day (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50),
	img_url VARCHAR(1000),
	descricao VARCHAR(1000)
);

create table usuario_art(
	fkusuario INT ,
	fkart INT ,
	PRIMARY KEY(fkusuario, fkart),
  	FOREIGN KEY (fkusuario) REFERENCES usuario(id),
  	FOREIGN KEY (fkart) REFERENCES art_of_the_day(id)
);

create table musica (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50),
	music_url VARCHAR(100),
	artist VARCHAR(50)
);

create table usuario_musica(
	fkusuario INT ,
	fkmusica INT ,
	PRIMARY KEY(fkusuario, fkmusica),
  	FOREIGN KEY (fkusuario) REFERENCES usuario(id),
  	FOREIGN KEY (fkmusica) REFERENCES musica(id)
);

insert into musica(title, music_url, artist) values
('Morghhe Sahar', '/music/1.mp3', 'MohammadReza Shajarian');

insert into musica(title, music_url, artist) values
('Har Ghadam', '/music/2.mp3', 'Az Shanbeh'),
('Ageh Ye rooz', '/music/3.mp3', 'Faramarz Aslani'),
('Bad az nastaran', '/music/4.mp3', 'Farshid Amin'),
('Rotab', '/music/5.mp3', 'Hassan Shamaeizadeh'),
('Jooni Joonom', '/music/6.mp3', 'Leila Foroohar'),
('Man Bayad Miraftam', '/music/7.mp3', 'Mohsen Chavoshi'),
('Behet ghol midam', '/music/8.mp3', 'Mohsen Yeganeh'),
('Red Bull', '/music/9.mp3', 'Koorosh'),
('Anxiety', '/music/10.mp3', 'Pooobon');

insert into art_of_the_day (title, img_url, descricao)
values ('Shahnameh – O Livro dos Reis', 'https://m.media-amazon.com/images/I/717Zp6ngHjL._AC_UF894,1000_QL80_.jpg', 'Essa obra épica de Ferdowsi é uma das mais importantes da literatura persa e inspirou incontáveis obras de arte com heróis, demônios e reis lendários.'),
( 'simorgh', 'https://cdn01.eavartravel.com/2023/11/0b0abb4d-ffd8-4848-a70b-994aecd41669.jpg', 'Na mitologia persa, o Simurgh é um pássaro lendário que representa sabedoria, cura e proteção. Ele aparece em muitas miniaturas como símbolo de conexão entre o céu e a terra.'),
('A Flor de Lótus na Arte Persa', 'https://orienteantiguo.net/wp-content/uploads/impresionante-fotorealista-antiguo-mural.webp', 'A flor de lótus aparece em muitos azulejos e tecidos persas, representando pureza espiritual e renascimento, mesmo em tempos difíceis.'),
('Arabescos Infinito', 'https://static.wixstatic.com/media/d6a319_ed07d6053edf422b9a9a30c2149ccd2d~mv2_d_3648_2736_s_4_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6a319_ed07d6053edf422b9a9a30c2149ccd2d~mv2_d_3648_2736_s_4_2.jpg', 'Os padrões geométricos contínuos (arabescos) mostram a ideia do infinito e da perfeição divina, um reflexo da ordem do universo na arte islâmica persa.'),
('Miniaturas Persas', 'https://i.etsystatic.com/20005976/r/il/50396c/3916792753/il_570xN.3916792753_dm3y.jpg', 'As miniaturas persas são pinturas detalhadas que contam histórias poéticas. Apesar do tamanho pequeno, elas mostram cenas épicas, como as do Shahnameh, com grande expressividade.'),
('Caligrafia como Arte Espiritual', 'https://www.centropersepolis.com/wp-content/uploads/2022/07/16293721_xl.jpg', 'A caligrafia persa vai além da escrita: é uma forma de meditação e devoção. Muitas obras combinam poesia sufista com composições visuais elegantes.'),
('Azulejos Azuis das Mesquitas', 'https://thumbs.dreamstime.com/b/porta-de-entrada-para-mesquita-sheikh-lotfollah-com-azulejos-azuis-em-paredes-isfahan-ir%C3%A3-maio-nas-168912891.jpg', 'O azul intenso dos azulejos persas representa o céu e a paz espiritual. A técnica foi aprimorada durante o período Safávida em Isfahan.'),
('O Fogo no Zoroastrismo', 'https://www.gnosisonline.org/wp-content/uploads/2019/12/ahura-mazda2.jpg', 'O fogo é um símbolo sagrado na religião zoroastrista, uma das mais antigas da Pérsia. Representa pureza e a luz da verdade.'),
('Dança e Espiritualidade', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg17O61r7Pg3qOQChA9dzIJ55A-vbl73pMenULe-9Vip3zx-bLDdx1uxXME9BvVkbXYEeKPlZH2lJo0IPOK3nUzPbTAJZNI7tybWwLC36m1Sthe8fKGRWa-I-4kZh_mKcB3Rk524gXFTSg/s1600/UAE_Iran_Sema.jpg', 'Embora a dança seja restrita em muitos contextos, nas tradições sufis persas a dança giratória simboliza a busca pelo divino.'),
('Cavalos na Arte Persa', 'https://media.istockphoto.com/id/176061990/pt/foto/cavalo-p%C3%A9rsico-e-rider-grava%C3%A7%C3%A3o-antiga-ir%C3%A3o.jpg?s=612x612&w=0&k=20&c=kCxQQBfk7yH4T6okRFHz05m0o4_UBN1Y0P-ugg_Y2VQ=', 'Cavalos aparecem frequentemente em cenas de batalhas e caçadas, simbolizando nobreza, força e elegância — muito valorizados na cultura persa antiga.');

insert into usuario (nome, email, senha)
values ( 'hani', 'hani', 'hani'),
('mohammad', 'm', '123'),
('hani', 'hani@gmail.com', '123456'),
('zina', 'z.ashoo.1388@gmail.com', '0.zina.0'),
('teste', 'teste@email.com', 'teste1'),
('h', 'h@gmail.com', 'h123456'),
('kaua paixao', 'kauadasilvapaixao@gmail.com', '123456'),
('Isabella', 'limaisbll1601@gmail.com', 'arthurviado');

insert into usuario_musica (fkusuario, fkmusica)
values (1,1), (3,1), (4,1), (5,1), (8,1), (1,4), (1,5), (1,6), (1,7), (1,8), (1,10), (4,10), (1,11),
(4,11), (7,11), (1,12);