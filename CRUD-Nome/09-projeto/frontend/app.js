// Importar módulos
import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import fetch from "node-fetch";

// App
const app = express();
const PORT = 3000;

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

app.post("/edit", (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const id = req.body.id;

    try {
        const response = fetch(`http://localhost:3001/client/${id}`, {
            method: "PUT",
            body: JSON.stringify({ nome, idade }),
            headers: { "Content-Type": "application/json" },
        }).then(res.redirect("/"));

        // if (response.ok) {
        //     res.redirect("/");
        // } else {
        //     res.status(response.status).send("Erro ao atualizar o cliente.");
        // }
    } catch (error) {
        console.error("Erro durante a requisição", error);
        res.status(500).send("Erro interno no servidor");
    }
});

app.get("/remove/:id", (req, res) => {
    const id = req.params.id;

    fetch(`http://localhost:3001/client/${id}`, { method: "DELETE" }).then(
        res.redirect("/")
    );
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
