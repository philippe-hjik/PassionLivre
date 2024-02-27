import { DataTypes, Sequelize } from "sequelize";

import { bookModel } from "../model/t_livre.mjs";
import { userModel } from "../model/t_users.mjs";

import { bookData } from "./mock-books.mjs";

import dotenv from 'dotenv';

dotenv.config();

//import { hash, bcrypt } from "bcrypt";

import * as bcrypt from "bcrypt";

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la DB qui doit exister
  process.env.DB_USER, // Nom de l'utilisateur
  process.env.DB_PASSWORD, // Mot de passe de l'utilisateur
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  }
);

const Book = bookModel(sequelize, DataTypes);
//const User = userModel(sequelize, DataTypes);

let initDb = () => {
  return sequelize
    .sync({ force: true }) //Force la syncro ecrase ce qui etait present avant
    .then((_) => {
        //importBooks();
      //importUsers();
      console.log();
    });
};

const importBooks = () => {
    bookData.map((bookData) => {
        Book.create({
            id: bookData.id,
            title: bookData.title,
            categorie: bookData.categorie,
            nbPages: bookData.nbPages,
            extrait: bookData.extrait,
            resume: bookData.resume,
            authorFirstName: bookData.authorFirstName,
            authorLastName: bookData.authorLastName,
            editorFirstName: bookData.editorFirstName,
            editorLastName: bookData.editorLastName,
            editionYear: bookData.editionYear,
            avgAppreciation: bookData.avgAppreciation,
            comments: bookData.comments,
            cover: bookData.cover
      }).then((bookData) => console.log(bookData.toJSON()));
    });
};

const importUsers = () => {
  bcrypt
    .hash("etml", 10) // temps pour hasher = du sel
    .then((hash) =>
      User.create({
        username: "etml",
        password: hash,
      })
    )
    .then((user) => console.log(user.toJSON()));
};

export { sequelize, initDb, Book};
