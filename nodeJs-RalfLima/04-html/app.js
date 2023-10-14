// Importar express
const express = require("express");

// App
const app = express();

// Rota
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pagina.html");
});

// Servidor
app.listen(3456, () => {
    console.log(`App is listening on port ${3456}`);
});
