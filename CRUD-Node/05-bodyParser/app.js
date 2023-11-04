// Express
const express = require("express");

// App
const app = express();

// BodyParser
const bodyParser = require("body-parser");

// Configurar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});

app.post("/receive", (req, res) => {
    res.send(`Customer: ${req.body.client}`);
});

// Servidor
app.listen(1234);
