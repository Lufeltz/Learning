import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 3001;

let nextId = 1;
let clientes = [];

app.use(bodyParser.json());

fs.readFile("clientes.json", (err, data) => {
    if (err) {
        console.error("Não foi possível ler o conteúdo do arquivo: ", err);
    }

    if (!data) {
        console.error("Conteúdo do arquivo nulo ou indefinido.");
    }

    const jsonContent = JSON.parse(data);
    clientes = jsonContent.clientes;
    nextId =
        clientes.length > 0
            ? Math.max(...clientes.map((cliente) => cliente.id))
            : nextId;

    app.listen(PORT, (req, res) => {
      console.log(`Servidor ouvindo na porta: ${PORT}`);
    })
});


// Retornar todos os clientes
app.get("/clientes", (req, res) => {
    const jsonClientes = JSON.stringify(clientes, null, 2);
    console.log(jsonClientes);
    res.status(200).send(jsonClientes);
});
