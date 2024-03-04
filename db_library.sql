/*
#################### CREATION PART ####################
*/

DROP DATABASE IF EXISTS db_library;
CREATE DATABASE db_library;

USE db_library;

CREATE TABLE t_users(
   id_user BIGINT AUTO_INCREMENT,
   username_user VARCHAR(50),
   password_user VARCHAR(50),
   nbBooksOffer_user INT,
   nbNote_user INT,
   nbComment_book VARCHAR(50),
   create_at_user DATETIME,
   PRIMARY KEY(id_user)
);

CREATE TABLE t_authors(
   id_author BIGINT AUTO_INCREMENT,
   firstName_author VARCHAR(50),
   lastName_author VARCHAR(50),
   PRIMARY KEY(id_author)
);

CREATE TABLE t_categories(
   id_category BIGINT AUTO_INCREMENT,
   name_category VARCHAR(50),
   PRIMARY KEY(id_category)
);

CREATE TABLE t_publishers(
   id_publisher BIGINT AUTO_INCREMENT,
   name_publisher VARCHAR(50),
   PRIMARY KEY(id_publisher)
);

CREATE TABLE t_books(
   id_book BIGINT AUTO_INCREMENT,
   title_book VARCHAR(50),
   pages_book BIGINT,
   extract_book VARCHAR(500),
   summary_book VARCHAR(500),
   cover_book VARCHAR(128),
   year_book INT,
   average_book DECIMAL(3,2),
   upload_book DATE,
   fk_publisher BIGINT NOT NULL,
   fk_author BIGINT NOT NULL,
   fk_category BIGINT NOT NULL,
   fk_user BIGINT NOT NULL,
   PRIMARY KEY(id_book),
   FOREIGN KEY(fk_publisher) REFERENCES t_publishers(id_publisher),
   FOREIGN KEY(fk_author) REFERENCES t_authors(id_author),
   FOREIGN KEY(fk_category) REFERENCES t_categories(id_category),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
);

CREATE TABLE t_comments(
   id_comment BIGINT AUTO_INCREMENT,
   note_comment INT,
   text_comment VARCHAR(255),
   fk_book BIGINT NOT NULL,
   fk_user BIGINT NOT NULL,
   PRIMARY KEY(id_comment),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
);










/*
#################### Update Part (t_users) ####################
*/

INSERT INTO t_users(username_user, password_user, nbBooksOffer_user, nbNote_user, nbComment_user, created, updatedAt) 
VALUES ("alomenoud", "1234verySecuredPassword", 1, 1, 1, NOW(), NOW());

INSERT INTO t_users(username_user, password_user, nbBooksOffer_user, nbNote_user, nbComment_user, created, updatedAt) 
VALUES ("phiheijkoop", "5678notVerySecuredPassword", 1, 1, 1, NOW(), NOW());

INSERT INTO t_users(username_user, password_user, nbBooksOffer_user, nbNote_user, nbComment_user, created, updatedAt) 
VALUES ("tiasousa", "5873ETML4er", 0, 0, 0, NOW(), NOW());

INSERT INTO t_users(username_user, password_user, nbBooksOffer_user, nbNote_user, nbComment_user, created, updatedAt) 
VALUES ("eviparamanathan", "2736ETML9vg", 0, 0, 0, NOW(), NOW());

INSERT INTO t_users(username_user, password_user, nbBooksOffer_user, nbNote_user, nbComment_user, created, updatedAt) 
VALUES ("ethschafstall", "8924ETML7ap", 0, 0, 0, NOW(), NOW());

/*
#################### Update Part (t_authors) ####################
*/

INSERT INTO t_authors(firstName_author, lastName_author, createdAt, updatedAt) 
VALUES ("J. K.", "Rowling", NOW(), NOW());

INSERT INTO t_authors(firstName_author, lastName_author, createdAt, updatedAt) 
VALUES ("Tui-T", "Sutherland", NOW(), NOW());

/*
#################### Update Part (t_categories) ####################
*/

INSERT INTO t_categories(name_category, createdAt, updatedAt)
VALUES ("Fantastique", NOW(), NOW());

INSERT INTO t_categories(name_category, createdAt, updatedAt)
VALUES ("Policier", NOW(), NOW());

INSERT INTO t_categories(name_category, createdAt, updatedAt)
VALUES ("Science Fiction", NOW(), NOW());

INSERT INTO t_categories(name_category, createdAt, updatedAt)
VALUES ("Aventure", NOW(), NOW());

INSERT INTO t_categories(name_category, createdAt, updatedAt)
VALUES ("Autobiographique", NOW(), NOW());

/*
#################### Update Part (t_publishers) ####################
*/

INSERT INTO t_publishers(name_publisher, createdAt, updatedAt)
VALUES ("Folio Junior", NOW(), NOW());

INSERT INTO t_publishers(name_publisher, createdAt, updatedAt)
VALUES ("Gallimard Jeunesse", NOW(), NOW());

/*
#################### Update Part (t_books) ####################
*/

-- INSERT INTO t_books(title_book, pages_book, extract_book, summary_book, 
-- cover_book, year_book, average_book, upload_book, 
-- created, updatedAt, 
-- fk_publisher, fk_author, fk_category, fk_user)
-- VALUES ("Harry Potter à l'école des sorciers", 305, 
-- "- Vous deux vous allez être sages, cette année! Si jamais je reçois un hibou qui me dit que vous avez fait exploser les toilettes... -Faire exploser les toilettes? On n'a jamais fait ça -Mais c'est une bonne idée. Merci maman! [...] ...la petite fille se mit à pleurer. -T'en fais pas, lui dit l'un des jumeaux par la fenêtre ouverte. On t'enverra pleins de hiboux. -Et un siège de toilettes de Poudlard, ajouta son frère. -George! S'indigna sa mère. -C'était pour rire, M'man.... ",
-- "Harry Potter, un jeune orphelin, est élevé par son oncle et sa tante qui le détestent. Alors qu'il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture. Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d'un homme gigantesque se nommant Rubeus Hagrid, et celui-ci lui révèle qu'il est en fait le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs.",
-- "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/ba/d8/1d/1956026/1507-1/tsp20240104112052/Harry-Potter-a-l-ecole-des-sorciers.jpg",
-- 1999, 5, NOW(), NOW(), NOW(), 1, 1, 1, 1);

-- INSERT INTO t_books(title_book, pages_book, extract_book, summary_book, 
-- cover_book, year_book, average_book, upload_book, 
-- created, updatedAt, 
-- fk_publisher, fk_author, fk_category, fk_user)
-- VALUES ("Harry Potter et la chambre des secrets", 273, 
-- "-Alors comme ça, c'est à cause de Dobby qu'on n'a pas pu prendre le train et que tu t'es cassé le bras ? Tu sais quoi Harry ? S'il continue à vouloir te sauver la vie, il va finir par te tuer.",
-- "Alors que l'oncle Vernon, la tante Pétunia et son cousin Dudley reçoivent d'importants invités à dîner, Harry Potter est contraint de passer la soirée dans sa chambre. Dobby, un elfe, fait alors son apparition. Il lui annonce que de terribles dangers menacent l'école de Poudlard et qu'il ne doit pas y retourner en septembre. Harry refuse de le croire. Mais sitôt la rentrée des classes effectuée, ce dernier entend une voix malveillante.",
-- "https://cdn.leslibraires.fr/S5UYt42BMNT4VfvHvty_E8Pj76NrQzr_DP8vui55vFY/s:800:800/NjAxMjcyNQ.webp",
-- 1999, 4, NOW(), NOW(), NOW(), 1, 1, 1, 2);


INSERT INTO t_books(title_book, pages_book, extract_book, summary_book, 
cover_book, year_book, average_book, upload_book, 
created, updatedAt, 
fk_publisher, fk_author, fk_category, fk_user)
VALUES ("Harry Potter à l'école des sorciers", 305, 
"- Vous deux vous allez être sages, cette année! Si jamais je reçois un hibou qui me dit que vous avez fait exploser les toilettes... ",
"Harry Potter, un jeune orphelin, est élevé par son oncle et sa tante qui le détestent. Alors qu'il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture.",
"https://static.fnac-static.com/multimedia/PE/Images/FR/NR/ba/d8/1d/1956026/1507-1/tsp20240104112052/Harry-Potter-a-l-ecole-des-sorciers.jpg",
1999, 5, NOW(), NOW(), NOW(), 1, 1, 1, 1);

INSERT INTO t_books(title_book, pages_book, extract_book, summary_book, 
cover_book, year_book, average_book, upload_book, 
created, updatedAt, 
fk_publisher, fk_author, fk_category, fk_user)
VALUES ("Harry Potter et la chambre des secrets", 273, 
"-Alors comme ça, c'est à cause de Dobby qu'on n'a pas pu prendre le train et que tu t'es cassé le bras ? Tu sais quoi Harry ? S'il continue à vouloir te sauver la vie, il va finir par te tuer.",
"Alors que l'oncle Vernon, la tante Pétunia et son cousin Dudley reçoivent d'importants invités à dîner, Harry Potter est contraint de passer la soirée dans sa chambre. Dobby, un elfe, fait alors son apparition.",
"https://cdn.leslibraires.fr/S5UYt42BMNT4VfvHvty_E8Pj76NrQzr_DP8vui55vFY/s:800:800/NjAxMjcyNQ.webp",
1999, 4, NOW(), NOW(), NOW(), 1, 1, 1, 2);

/*
#################### Update Part (t_comments) ####################
*/

INSERT INTO t_comments(note_comment, text_comment, createdAt, updatedAt, fk_book, fk_user)
VALUES (4, "Livre très intéressant et attractif, je recommande aux jeunes lecteurs comme au plus âgés", NOW(), NOW(), 2, 1);

INSERT INTO t_comments(note_comment, text_comment, createdAt, updatedAt, fk_book, fk_user)
VALUES (5, "Livre extraordinaire et immersif", NOW(), NOW(), 1, 2);