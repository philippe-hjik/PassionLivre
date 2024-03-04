// routes.mjs
import { Book } from "../../sequelize/sequelize.mjs"
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
    res.status(500).json(message);
  });
});

bookRouter.get('/:id', (req, res) => {
    const Id = req.params.id;
    return Book.findByPk(Id)    
    .then((Book) => {
       const message = `Le livre dont le livre vaut ${Id}`;
       res.status(200).json(Book);
     })
     .catch((error) => {
       const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
       res.status(500).json(message);
    });
});

// Route de post
bookRouter.post('/', (req, res) => {
    const title_book = req.body.title_book;
    return Book.create({
        title_book: title_book
    })
    .then((Book) => {
        const message = `Le livre à bien été créé`;
        res.status(200).json(Book);
      })
      .catch((error) => {
        const message = `Le livre n'à pas bien été créé Error: ${error}`;
        res.status(500).json(message);
     });
});

// Route de update
bookRouter.put('/:id', (req, res) => {
    const Id = req.params.id;
    const title_book = req.body.title_book;

    return Book.findByPk(Id).then((Book) => {
        return Book.update({
            title_book: title_book
        })
        .then((Book) => {
            const message = `Le livre à bien été créé`;
            res.status(200).json(Book);
          })
          .catch((error) => {
            const message = `Le livre n'à pas bien été créé Error: ${error}`;
            res.status(500).json(message);
         });
    }).catch((error) => {
        const message = `L'id ${Id} n'a pas été trouvé`;
        res.status(500).json(message);
     });
});

// Route de delete
bookRouter.delete('/:id', (req, res) => {
    const Id = req.params.id;

    return Book.findByPk(Id).then((Book) => {
        return Book.destroy()
        .then((Book) => {
            const message = `Le livre à bien été supprimé avec l'id`;
            res.status(200).json(Book);
          })
        .catch((error) => {
            const message = `Le livre n'à pas bien été supprimé Error: ${error}`;
            res.status(500).json(message);
        });
    }).catch((error) => {
        const message = `L'id ${Id} du livre n'a pas été trouvé`;
        res.status(500).json(message);
    });
});


// Exporter le routeur
export { bookRouter };
