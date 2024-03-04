import express from "express";
import { initDb } from "../sequelize/sequelize.mjs";
import { sequelize } from "../sequelize/sequelize.mjs";
import { bookRouter } from "./router/BookRoutes.mjs"
import { commentRouter } from "./router/CommentRoutes.mjs"

const app = express();
const port = 3000;

//Iniatialise la db avec le json du mock
//initDb();
sequelize.authenticate().then((_) => {
  console.log("Connexion établie");
}).catch((error) => {
  console.error(`Impossible de se connecter à la base de donnée ${error}`);l
})

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

app.use("/book", bookRouter);

app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
    res.status(404).json(message);
});