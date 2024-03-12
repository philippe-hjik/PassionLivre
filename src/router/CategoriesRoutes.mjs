// routes.mjs
import { category, Book } from "../../sequelize/sequelize.mjs";
import express from "express";
import { success } from "../helper.mjs";

const categoryRouter = express();

// Route de get
categoryRouter.get("/", (req, res) => {
  return category
    .findAll()
    .then((category) => {
      const message = "La liste des livres a bien été récupérée.";
      res.status(200).json(category);
    })
    .catch((error) => {
      const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
      res.status(500).json(message);
    });
});

// Route GET avec id
categoryRouter.get("/:id", (req, res) => {
  const Id = req.params.id;
  return category
    .findByPk(Id)
    .then((category) => {
      const message = `Le livre dont le livre vaut ${Id}`;
      res.status(200).json(category);
    })
    .catch((error) => {
      const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
      res.status(500).json(message);
    });
});

// tout les livres de cette catégories
categoryRouter.get("/:id/books", (req, res) => {
  const categoryId = req.params.id;
  let categoryName;

  category
    .findByPk(categoryId)
    .then((category) => {
      categoryName = category.name_category;
      return Book.findAll({
        where: {
          fk_category: categoryId,
        },
      })
        .then((books) => {
          const message = `La liste des livres de la categorie ${categoryName}`;
          res.status(200).json({ message, data: books });
        })
        .catch((error) => {
          const message = `La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants. ${error}`;
          res.status(400).json({ message, error });
        });
    })
    .catch((error) => {
      const message = `La categorie ${categoryId} n'existe pas`;
      return res.status(400).json({ message });
    });
});

// Route de post
categoryRouter.post("/", (req, res) => {
  const title_book = req.body.title_book;
  return category
    .create({
      title_book: title_book,
    })
    .then((category) => {
      const message = `Le livre à bien été créé`;
      res.status(200).json(category);
    })
    .catch((error) => {
      const message = `Le livre n'à pas bien été créé Error: ${error}`;
      res.status(500).json(message);
    });
});

// Route de update avec id
categoryRouter.put("/:id", (req, res) => {
  const Id = req.params.id;
  const title_book = req.body.title_book;

  return category
    .findByPk(Id)
    .then((category) => {
      return category
        .update({
          title_book: title_book,
        })
        .then((category) => {
          const message = `Le livre à bien été créé`;
          res.status(200).json(category);
        })
        .catch((error) => {
          const message = `Le livre n'à pas bien été créé Error: ${error}`;
          res.status(500).json(message);
        });
    })
    .catch((error) => {
      const message = `L'id ${Id} n'a pas été trouvé`;
      res.status(500).json(message);
    });
});

// Route de delete
categoryRouter.delete("/:id", (req, res) => {
  const Id = req.params.id;

  return category
    .findByPk(Id)
    .then((category) => {
      return category
        .destroy()
        .then((category) => {
          const message = `Le livre à bien été supprimé avec l'id`;
          res.status(200).json(category);
        })
        .catch((error) => {
          const message = `Le livre n'à pas bien été supprimé Error: ${error}`;
          res.status(500).json(message);
        });
    })
    .catch((error) => {
      const message = `L'id ${Id} du livre n'a pas été trouvé`;
      res.status(500).json(message);
    });
});

// Exporter le routeur
export { categoryRouter };
