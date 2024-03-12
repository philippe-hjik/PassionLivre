// routes.mjs
import { Book, category } from "../../sequelize/sequelize.mjs"
import {success} from "../helper.mjs";
import express from 'express';

const bookRouter = express();

// Route de get
bookRouter.get('/', (req, res) => {
 return Book.findAll()    
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
bookRouter.get('/:id', (req, res) => {
    const Id = req.params.id;
    return Book.findByPk(Id)    
    .then((Book) => {
       const message = `Le livre dont le livre vaut ${Id}`;
       res.status(200).json(success(Book, message));
     })
     .catch((error) => {
       const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
       res.status(500).json(success(message, error));
    });
});

bookRouter.get('/:id/categories', (req, res) => {
  const categorieId = req.params.id;

  return Book.findAll({
    where: {
      fk_category: categorieId
    }
  }).then((Book) => {
    const message = `Le livre dont la categories vaut ${categorieId}`;
    res.status(200).json({message, data:Book});
  })
  .catch((error) => {
    const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
    res.status(500).json(success(message, error));
 });

});

// Route de post
bookRouter.post('/', (req, res) => {
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
bookRouter.put('/:id', (req, res) => {
    const Id = req.params.id;

    return Book.findByPk(Id).then((Book) => {
        return Book.update(req.body)
        .then((Book) => {
            const message = `Le livre à bien été modifié créé`;
            res.status(200).json({message, data:Book});
          })
          .catch((error) => {
            const message = `Le livre n'à pas bien été créé Error: ${error}`;
            res.status(500).json(success(message, error));
         });
    }).catch((error) => {
        const message = `L'id ${Id} n'a pas été trouvé`;
        res.status(500).json(success(message, error));
     });
});

// Route de delete
bookRouter.delete('/:id', (req, res) => {
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
        res.status(500).json(success(message, error));
    });
});


// Exporter le routeur
export { bookRouter };
