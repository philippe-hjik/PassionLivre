import express from "express";
import {Book} from "../../sequelize/sequelize.mjs"
import { success } from "./helper.mjs"

const booksRouter = express();

booksRouter.get("/", (req, res) => {
    if (req.query.name) {
        let limit = 3;
        if (req.query.limit) {
            limit = parseInt(req.query.limit);
        }
        return Book.findAndCountAll({
            where: { title_book: { [Op.like]: `%${req.query.name}%` } },
            limit: limit,
        }).then((book) => {
            const message = `Il y a ${book.count} produits qui correspondent au terme de la recherche`;
            console.log(book);
            res.json(success(message, book));
        });
    }
    Book.findAll({ order: ["title_book"] })
        .then((book) => {
            const message = "La liste des produits a bien été récupérée.";
            console.log(book);
            res.json(success(message, book));
        })
        .catch((error) => {
            const message =
                "La liste des produits n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

export {booksRouter};