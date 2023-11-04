const express = require("express");

// Criando variável para obter acesso as funcionalidades do Express
const app = express();
const port = 3457;

//Rota
app.get("/", (req, res) => {
    res.send("Hell World!");
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
