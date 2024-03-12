// routes.mjs
import { User, Book } from "../../sequelize/sequelize.mjs"

import express from 'express';

const UserRouter = express();

// Route de get
UserRouter.get('/', (req, res) => {
 return User.findAll()    
 .then((User) => {
    const message = "La liste des livres a bien été récupérée.";
    res.status(200).json(User);
  })
  .catch((error) => {
    const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
    res.status(500).json(message);
  });
});

// Route GET avec id
UserRouter.get('/:id', (req, res) => {
    const Id = req.params.id;
    return User.findByPk(Id)    
    .then((User) => {
       const message = `Le livre dont le livre vaut ${Id}`;
       res.status(200).json(User);
     })
     .catch((error) => {
       const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
       res.status(500).json(message);
    });
});

// obtenir tout les livres selon l'utilisateur
UserRouter.get("/:id/books", (req, res) => {
  const UserId = req.params.id;
  let firstName_User;

  User
    .findByPk(UserId)
    .then((User) => {
      firstName_User = `${User.username_user}`;
      return Book.findAll({
        where: {
          fk_User: UserId,
        },
      }).then((books) => {
        const message = `La liste des livres de L'utilisateur ${firstName_User}`;
        res.status(200).json({ message, data: books });
      })
      .catch((error) => {
        const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
        res.status(400).json({ message, error });
      });
    })
    .catch((error) => {
      const message = `L'utilisateur ${UserId} n'existe pas`;
      return res.status(400).json({ message, error });
    });
});


// Route de post
UserRouter.post('/', (req, res) => {
    const title_book = req.body.title_book;
    return User.create({
        title_book: title_book
    })
    .then((User) => {
        const message = `Le livre à bien été créé`;
        res.status(200).json(User);
      })
      .catch((error) => {
        const message = `Le livre n'à pas bien été créé Error: ${error}`;
        res.status(500).json(message);
     });
});

// Route de update avec id
UserRouter.put('/:id', (req, res) => {
    const Id = req.params.id;
    const title_book = req.body.title_book;

    return User.findByPk(Id).then((User) => {
        return User.update({
            title_book: title_book
        })
        .then((User) => {
            const message = `Le livre à bien été créé`;
            res.status(200).json(User);
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
UserRouter.delete('/:id', (req, res) => {
    const Id = req.params.id;

    return User.findByPk(Id).then((User) => {
        return User.destroy()
        .then((User) => {
            const message = `Le livre à bien été supprimé avec l'id`;
            res.status(200).json(User);
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
export { UserRouter };
