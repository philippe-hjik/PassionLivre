DROP DATABASE IF EXISTS db_library;
CREATE DATABASE db_library;

USE db_library;

CREATE TABLE t_users(
   id_user BIGINT,
   username_user VARCHAR(50),
   password_user VARCHAR(50),
   create_at_user DATE,
   PRIMARY KEY(id_user)
);

CREATE TABLE t_authors(
   id_author BIGINT,
   firstName_author VARCHAR(50),
   lastName_author VARCHAR(50),
   PRIMARY KEY(id_author)
);

CREATE TABLE t_categories(
   id_category BIGINT,
   name_category VARCHAR(50),
   PRIMARY KEY(id_category)
);

CREATE TABLE t_publishers(
   id_publisher BIGINT,
   name_publisher VARCHAR(50),
   PRIMARY KEY(id_publisher)
);

CREATE TABLE t_books(
   id_book BIGINT,
   title_book VARCHAR(50),
   pages_book BIGINT,
   extract_book VARCHAR(255),
   summary_book VARCHAR(255),
   cover_book VARCHAR(128),
   year_book INT,
   average_book DECIMAL(3,2),
   upload_book DATE,
   id_publisher BIGINT NOT NULL,
   id_author BIGINT NOT NULL,
   id_category BIGINT NOT NULL,
   id_user BIGINT NOT NULL,
   PRIMARY KEY(id_book),
   FOREIGN KEY(id_publisher) REFERENCES t_publishers(id_publisher),
   FOREIGN KEY(id_author) REFERENCES t_authors(id_author),
   FOREIGN KEY(id_category) REFERENCES t_categories(id_category),
   FOREIGN KEY(id_user) REFERENCES t_users(id_user)
);

CREATE TABLE t_comments(
   id_comment BIGINT,
   id_user_comment BIGINT,
   text_comment VARCHAR(255),
   id_book BIGINT NOT NULL,
   id_user BIGINT NOT NULL,
   PRIMARY KEY(id_comment),
   FOREIGN KEY(id_book) REFERENCES t_books(id_book),
   FOREIGN KEY(id_user) REFERENCES t_users(id_user)
);