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

app.get("/cursos", (req, res) => {
    console.log(cursos);
    res.json(cursos);
});

app.post("/cursos", (req, res) => {
    const novoCurso = {
        nome: req.body.nome,
        valor: req.body.valor,
        id: ++nextId,
    };
    cursos.push(novoCurso);

    fs.writeFile(
        "cursos.json",
        JSON.stringify({ cursos: cursos }, null, 2),
        (err) => {
            if (err) {
                console.error("Erro ao escrever os dados no arquivo: ", err);
                return res
                    .status(500)
                    .json({ error: "Erro interno do servidor!" });
            }
            res.status(201).json(novoCurso);
        }
    );
});
