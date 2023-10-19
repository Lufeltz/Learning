import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 3000;

let nextId = 1;
let cursos = [];

app.use(bodyParser.json());

fs.readFile("cursos.json", (err, data) => {
    if (err) {
        console.error("Não foi possível ler o conteúdo do arquivo:", err);
        return;
    }

    const jsonContent = JSON.parse(data);
    cursos = jsonContent.cursos;
    nextId =
        cursos.length > 0
            ? Math.max(...cursos.map((curso) => curso.id))
            : nextId;

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });
});
