import express from "express";
import bodyParser from "body-parser";
import fs from "fs/promises";

const app = express();
const PORT = 3001;

let nextId = 1;
let clients = [];

app.use(bodyParser.json());

async function loadClientsData() {
    try {
        const data = await fs.readFile("clientes.json");
        const jsonContent = JSON.parse(data);
        clients = jsonContent.clients;
        nextId =
            clients.length > 0
                ? Math.max(...clients.map((client) => client.id))
                : nextId;
    } catch (error) {
        console.error("Erro ao ler o arquivo: ", error);
        throw error;
    }
}

loadClientsData().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });
});

// Retornar todos os clientes
app.get("/clients", (req, res) => {
    const jsonClient = JSON.stringify(clients, null, 2);
    console.log(jsonClient);
    res.status(200).send(jsonClient);
});

