// Importar express e handlebars
import express from "express";
import { engine } from "express-handlebars";

// App
const app = express();

// Template
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Rotas
app.get("/", (req, res) => {
    res.render("begin");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000);
