// routes.mjs
import { Book, User, author, category, publisher } from "../../sequelize/sequelize.mjs"
import {success} from "../helper.mjs";
import express from 'express';

import { auth } from "../auth/auth.mjs";

const bookRouter = express();

// Route de get
bookRouter.get('/', (req, res) => {
 return Book.findAll({
  include: [category, author, publisher, User]
 })    
 .then((Book) => {
    const message = "La liste des livres a bien été récupérée.";
    res.status(200).json(Book);
  })
  .catch((error) => {
    const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
    res.status(500).json(success(message, error));
  });
});

// Route GET avec id
bookRouter.get('/:id', auth, (req, res) => {
    const Id = req.params.id;
    return Book.findByPk(Id,{
      include: [category, author, publisher, User]
    })    
    .then((Book) => {
       const message = `Le livre dont le livre vaut ${Id}`;
       res.status(200).json(success(Book, message));
     })
     .catch((error) => {
       const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
       res.status(500).json(success(message, error));
    });
});

// Route de post
bookRouter.post('/', auth, (req, res) => {
    return Book.create(req.body)
    .then((Book) => {
        const message = `Le livre à bien été créé`;
        res.status(200).json({message, data: Book});
      })
      .catch((error) => {
        const message = `Le livre n'à pas bien été créé Error: ${error}`;
        res.status(500).json({message, error});
     });
});

// Route de update avec id
bookRouter.put('/:id', auth, (req, res) => {
    const Id = req.params.id;

    return Book.findByPk(Id).then((Book) => {
        return Book.update(req.body)
        .then((Book) => {
            const message = `Le livre à bien été modifié`;
            res.status(200).json({message, data:Book});
          })
          .catch((error) => {
            const message = `Le livre n'à pas bien été modifié Error: ${error}`;
            res.status(500).json(success(message, error));
         });
    }).catch((error) => {
        const message = `L'id ${Id} n'a pas été trouvé`;
        res.status(400).json(success(message, error));
     });
});

// Route de delete
bookRouter.delete('/:id', auth, (req, res) => {
    const Id = req.params.id;

    return Book.findByPk(Id).then((Book) => {
        return Book.destroy()
        .then((Book) => {
            const message = `Le livre avec l'id ${Id} à bien été supprimé`;
            res.status(200).json({message, data:Book});
          })
        .catch((error) => {
            const message = `Le livre n'à pas bien été supprimé Error: ${error}`;
            res.status(500).json(success(message, error));
        });
    }).catch((error) => {
        const message = `le livre avec l'id ${Id} n'a pas été trouvé`;
        res.status(400).json(success(message, error));
    });
});


// Exporter le routeur
export { bookRouter };
