import express from "express";
import { initDb } from "../sequelize/sequelize.mjs";

const app = express();
const port = 3000;

//Iniatialise la db avec le json du mock
initDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
    res.status(404).json(message);
});