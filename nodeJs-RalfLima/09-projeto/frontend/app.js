// Importar módulos
import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";

// App
const app = express();

// Body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Rotas
app.get("/", (req, res) => {
    res.render("begin");
});

// Servidor
app.listen(3000);
