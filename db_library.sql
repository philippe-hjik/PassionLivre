/*
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `db_library` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_library`;

DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` ( `id` int PRIMARY KEY AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `nbBooksOffer` int, `nbNote` int, `nbComment` int, `created` datetime, `updatedAt` datetime );ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
*/

/*
#################### Update Part (t_users) ####################
*/

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("etml", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 0, 0, 0, NOW(), NOW());

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("alomenoud", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 1, 1, 1, NOW(), NOW());

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("phiheijkoop", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 1, 1, 1, NOW(), NOW());

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("tiasousa", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 0, 0, 0, NOW(), NOW());

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("eviparamanathan", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 0, 0, 0, NOW(), NOW());

INSERT INTO t_users(username, password, nbBooksOffer, nbNote, nbComment, created, updatedAt)
VALUES ("ethschafstall", "$2b$10$TV4DZOedGSlPJO/cj2SBieCBfoL6vlQvQHjtVIbZRot9znafxwtAW", 0, 0, 0, NOW(), NOW());

/*
#################### Update Part (t_authors) ####################
*/

INSERT INTO t_authors(firstName, lastName, createdAt, updatedAt) 
VALUES ("J. K.", "Rowling", NOW(), NOW());

INSERT INTO t_authors(firstName, lastName, createdAt, updatedAt) 
VALUES ("Tui-T", "Sutherland", NOW(), NOW());

/*
#################### Update Part (t_categories) ####################
*/

INSERT INTO t_categories(name, createdAt, updatedAt)
VALUES ("Fantastique", NOW(), NOW());

INSERT INTO t_categories(name, createdAt, updatedAt)
VALUES ("Policier", NOW(), NOW());

INSERT INTO t_categories(name, createdAt, updatedAt)
VALUES ("Science Fiction", NOW(), NOW());

INSERT INTO t_categories(name, createdAt, updatedAt)
VALUES ("Aventure", NOW(), NOW());

INSERT INTO t_categories(name, createdAt, updatedAt)
VALUES ("Autobiographique", NOW(), NOW());

/*
#################### Update Part (t_publishers) ####################
*/

INSERT INTO t_publishers(name, createdAt, updatedAt)
VALUES ("Folio Junior", NOW(), NOW());

INSERT INTO t_publishers(name, createdAt, updatedAt)
VALUES ("Gallimard Jeunesse", NOW(), NOW());

/*
#################### Update Part (t_books) ####################
*/

-- Insertion 1
INSERT INTO t_books (title, pages, extract, summary, cover, year, average, upload, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES ('Le Seigneur des Anneaux', 1178, 'Dans les terres de la Terre du Milieu, une quête épique commence...', 'Un jeune hobbit nommé Frodo Baggins est chargé de détruire un anneau puissant pour sauver le monde du Seigneur des Ténèbres, Sauron.', LOAD_FILE('C:/Users/pf25xeu/Documents/GitHub/PassionLivre/Images/anneaux.jpg'), 1954, 4.8, 'livres/le_seigneur_des_anneaux.pdf', 1, 1, 2, 2, NOW(), NOW());

-- Insertion 2
INSERT INTO t_books (title, pages, extract, summary, cover, year, average, upload, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('1984', 328, 'Dans un monde dystopique, la surveillance gouvernementale est omniprésente...', 'Winston Smith lutte contre un régime totalitaire dirigé par le Parti et son chef, Big Brother.', LOAD_FILE('C:/Users/pf25xeu/Documents/GitHub/PassionLivre/Images/anneaux.jpg'), 1949, 4.6, 'livres/1984.pdf', 2, 2, 3, 4, NOW(), NOW());

-- Insertion 3
INSERT INTO t_books (title, pages, extract, summary, cover, year, average, upload, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('Harry Potter à l\'école des sorciers', 332, 'Dans le monde magique, un jeune garçon découvre son héritage et son destin...', 'Harry Potter apprend qu\'il est un sorcier et commence sa première année à Poudlard, une école de sorcellerie.', LOAD_FILE('C:/Users/pf25xeu/Documents/GitHub/PassionLivre/Images/anneaux.jpg'), 1997, 4.7, 'livres/harry_potter_a_l_ecole_des_sorciers.pdf', 2, 2, 1, 2, NOW(), NOW());

-- Insertion 4
INSERT INTO t_books (title, pages, extract, summary, cover, year, average, upload, fk_publisher, fk_author, fk_category, fk_user, created, updatedAt)
VALUES 
('Le Petit Prince', 96, 'Un jeune prince voyage à travers les étoiles et rencontre divers personnages...', 'Le Petit Prince découvre l\'amour, l\'amitié et la responsabilité lors de son voyage.', LOAD_FILE('C:/Users/pf25xeu/Documents/GitHub/PassionLivre/Images/anneaux.jpg'), 1943, 4.9, 'livres/le_petit_prince.pdf', 2, 2, 2, 1, NOW(), NOW());

/*
#################### Update Part (t_comments) ####################
*/

INSERT INTO t_comments(note, text, createdAt, updatedAt, fk_book, fk_user)
VALUES (4, "Livre très intéressant et attractif, je recommande aux jeunes lecteurs comme au plus âgés", NOW(), NOW(), 2, 1);

INSERT INTO t_comments(note, text, createdAt, updatedAt, fk_book, fk_user)
VALUES (5, "Livre extraordinaire et immersif", NOW(), NOW(), 1, 2);