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
    res.render("begin", {
        value: false,
        helpers: {
            testFunc() {
                return "test.";
            },
        },
    });
});

app.get("/about", (req, res) => {
    const pessoas = [
        { nome: "Carlos", idade: 30 },
        { nome: "Antonio", idade: 24 },
        { nome: "Rogerio", idade: 32 },
    ];

    res.render("about", { dados: pessoas });
});

app.listen(3000);
