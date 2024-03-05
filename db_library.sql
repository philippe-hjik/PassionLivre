/*
#################### CREATION PART ####################
*/

DROP DATABASE IF EXISTS db_library;
CREATE DATABASE db_library;

USE db_library;

-- CREATE TABLE t_users(
--    id_user BIGINT AUTO_INCREMENT,
--    username_user VARCHAR(50),
--    password_user VARCHAR(50),
--    nbBooksOffer_user INT,
--    nbNote_user INT,
--    nbComment_user VARCHAR(50),
--    create_at_user DATETIME,
--    PRIMARY KEY(id_user)
-- );

-- CREATE TABLE t_authors(
--    id_author BIGINT AUTO_INCREMENT,
--    firstName_author VARCHAR(50),
--    lastName_author VARCHAR(50),
--    PRIMARY KEY(id_author)
-- );

-- CREATE TABLE t_categories(
--    id_category BIGINT AUTO_INCREMENT,
--    name_category VARCHAR(50),
--    PRIMARY KEY(id_category)
-- );

-- CREATE TABLE t_publishers(
--    id_publisher BIGINT AUTO_INCREMENT,
--    name_publisher VARCHAR(50),
--    PRIMARY KEY(id_publisher)
-- );

-- CREATE TABLE t_books(
--    id_book BIGINT AUTO_INCREMENT,
--    title_book VARCHAR(50),
--    pages_book BIGINT,
--    extract_book VARCHAR(500),
--    summary_book VARCHAR(500),
--    cover_book VARCHAR(128),
--    year_book INT,
--    average_book DECIMAL(3,2),
--    upload_book DATE,
--    fk_publisher BIGINT NOT NULL,
--    fk_author BIGINT NOT NULL,
--    fk_category BIGINT NOT NULL,
--    fk_user BIGINT NOT NULL,
--    PRIMARY KEY(id_book),
--    FOREIGN KEY(fk_publisher) REFERENCES t_publishers(id_publisher),
--    FOREIGN KEY(fk_author) REFERENCES t_authors(id_author),
--    FOREIGN KEY(fk_category) REFERENCES t_categories(id_category),
--    FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
-- );

-- CREATE TABLE t_comments(
--    id_comment BIGINT AUTO_INCREMENT,
--    note_comment INT,
--    text_comment VARCHAR(255),
--    fk_book BIGINT NOT NULL,
--    fk_user BIGINT NOT NULL,
--    PRIMARY KEY(id_comment),
--    FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
--    FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
-- );






/*
#################### User Part (db_library) ####################
*/
-- use db_library;
-- CREATE USER IF NOT EXISTS 'adminUser'@'localhost' IDENTIFIED BY 'Pwd5678Etml2024'; 'Pwd5678Etml2024';
-- CREATE ROLE IF NOT EXISTS 'AdminLibrary';
-- GRANT ALL PRIVILEGES ON *.* TO 'AdminLibrary';
-- GRANT 'AdminLibrary' TO 'adminUser'@'localhost';


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
-- Insertion 1
INSERT INTO t_books (title_book, pages_book, extract_book, summary_book, cover_book, year_book, average_book, upload_book, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('Le Seigneur des Anneaux', 1178, 'Dans les terres de la Terre du Milieu, une quête épique commence...', 'Un jeune hobbit nommé Frodo Baggins est chargé de détruire un anneau puissant pour sauver le monde du Seigneur des Ténèbres, Sauron.', 'images/lotr.jpg', 1954, 4.8, 'livres/le_seigneur_des_anneaux.pdf', 1, 1, 2, 2, NOW(), NOW());

-- Insertion 2
INSERT INTO t_books (title_book, pages_book, extract_book, summary_book, cover_book, year_book, average_book, upload_book, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('1984', 328, 'Dans un monde dystopique, la surveillance gouvernementale est omniprésente...', 'Winston Smith lutte contre un régime totalitaire dirigé par le Parti et son chef, Big Brother.', 'images/1984.jpg', 1949, 4.6, 'livres/1984.pdf', 2, 2, 3, 4, NOW(), NOW());

-- Insertion 3
INSERT INTO t_books (title_book, pages_book, extract_book, summary_book, cover_book, year_book, average_book, upload_book, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
("Harry Potter à l'école des sorciers", 332, 'Dans le monde magique, un jeune garçon découvre son héritage et son destin...', "Harry Potter apprend qu\'il est un sorcier et commence sa première année à Poudlard, une école de sorcellerie.", 'images/harry_potter.jpg', 1997, 4.7, 'livres/harry_potter_a_l_ecole_des_sorciers.pdf', 2, 2, 1, 2, NOW(), NOW());

-- Insertion 4
INSERT INTO t_books (title_book, pages_book, extract_book, summary_book, cover_book, year_book, average_book, upload_book, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('Le Petit Prince', 96, 'Un jeune prince voyage à travers les étoiles et rencontre divers personnages...', "Le Petit Prince découvre l'amour, l'amitié et la responsabilité lors de son voyage.", 'images/le_petit_prince.jpg', 1943, 4.9, 'livres/le_petit_prince.pdf', 2, 2, 2, 1, NOW(), NOW());


/*
#################### Update Part (t_comments) ####################
*/

INSERT INTO t_comments(note_comment, text_comment, createdAt, updatedAt, fk_book, fk_user)
VALUES (4, "Livre très intéressant et attractif, je recommande aux jeunes lecteurs comme au plus âgés", NOW(), NOW(), 2, 1);

INSERT INTO t_comments(note_comment, text_comment, createdAt, updatedAt, fk_book, fk_user)
VALUES (5, "Livre extraordinaire et immersif", NOW(), NOW(), 1, 2);