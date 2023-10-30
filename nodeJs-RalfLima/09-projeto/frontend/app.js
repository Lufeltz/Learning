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
    fetch("http://localhost:3001/clients", { method: "GET" })
        .then((response) => response.json())
        .then((response) => res.render("begin", { data: response }));
});

app.post("/register", async (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

    let newClient = { nome: nome, idade: idade };

    try {
        const response = await fetch("http://localhost:3001/clients", {
            method: "POST",
            body: JSON.stringify(newClient),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            res.redirect("/");
        } else {
            console.error("Erro ao registrar cliente.");
            res.status(500).json({ error: "Erro interno no servidor." });
        }
    } catch (error) {
        console.error("Erro de rede: ", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

app.get("/client/:id", (req, res) => {
    let id = req.params.id;

    fetch(`http://localhost:3001/client/${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((response) => res.render("client", { data: response }));
});

// Servidor
app.listen(3000);
