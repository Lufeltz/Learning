import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let nextId = 1;
let cursos = [];

// Faz a leitura dos dados do arquivo quando o servidor é iniciado
fs.readFile("cursos.json", (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }
    // Faz o parse dos dados do arquivo e acessa a propriedade cursos
    const jsonContent = JSON.parse(data);
    cursos = jsonContent.cursos;
    nextId =
        cursos.length > 0
            ? Math.max(...cursos.map((curso) => curso.id)) + 1
            : 1;

    // Inicia o servidor após terminar a leitura do arquivo
    app.listen(PORT, () => {
        console.log(`Servidor está rodando na porta ${PORT}`);
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
        id: nextId++,
    };
    cursos.push(novoCurso);

    // Atualiza o conteúdo do arquivo com o novo curso adicionado
    fs.writeFile("cursos.json", JSON.stringify({ cursos: cursos }, null, 2), (err) => {
        if (err) {
            console.error("Erro ao escrever no arquivo JSON:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
        res.status(201).json(novoCurso);
    });
});
