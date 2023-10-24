// Importar módulos
import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import fetch from "node-fetch";

// App
const app = express();

// Body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Especificar arquivos estáticos
app.use(express.static("public"));

// Rotas
app.get("/", (req, res) => {
    fetch("http://localhost:3000/clientes", { method: GET })
        .then((resposta) => resposta.json())
        .then((resposta) => res.render("inicio", { dados: resposta }));
});

// Servidor
app.listen(3000);
