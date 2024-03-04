// routes.mjs
import { Book } from "../../sequelize/sequelize.mjs"
import express from 'express';

const bookRouter = express();

// Route de get
bookRouter.get('/', (req, res) => {
 return Book.findAll()    
 .then((products) => {
    const message = "La liste des produits a bien été récupérée.";
    res.status(200).json(message, products);
  })
  .catch((error) => {
    const message = `La liste des produits n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
    res.status(500).json({ message, data: error });
  });
});

// Route de post
bookRouter.post('/', (req, res) => {

});

// Route de update
bookRouter.put('/', (req, res) => {

});

// Route de delete
bookRouter.delete('/', (req, res) => {

});


// Exporter le routeur
export { bookRouter };
