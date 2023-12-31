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

    if (!data) {
        console.error("Conteúdo do arquivo é nulo ou indefinido!");
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

// Retornar todos os cursos
app.get("/cursos", (req, res) => {
    const jsonCursos = JSON.stringify(cursos, null, 2);
    console.log(jsonCursos);
    res.status(200).send(jsonCursos);
});

// Retornar curso por id
app.get("/cursos/:id", (req, res) => {
    const cursoId = req.params.id;
    const curso = cursos.find((curso) => curso.id === parseInt(cursoId));

    if (!curso) {
        res.status(404).send("Curso não encontrado!");
    } else {
        const jsonCurso = JSON.stringify(curso, null, 2);
        console.log(jsonCurso);
        res.status(200).send(jsonCurso);
    }
});

// Alterar um curso pelo seu id
app.put("/cursos/:id", (req, res) => {
    const cursoId = req.params.id;
    const curso = cursos.find((curso) => curso.id === parseInt(cursoId));

    if (!curso) {
        res.status(404).send("Curso não encontrado!");
    }
    curso.nome = req.body.nome;
    curso.valor = req.body.valor;

    fs.readFile("cursos.json", (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return res.status(500).json({ error: "Erro interno no servidor!" });
        }

        const jsonContent = JSON.parse(data);
        jsonContent.cursos = cursos; // Atualiza o objeto cursos no JSON

        // Escreve o arquivo novamente com a estrutura correta
        fs.writeFile(
            "cursos.json",
            JSON.stringify(jsonContent, null, 2),
            (err) => {
                if (err) {
                    console.error("Erro ao escrever os dados no arquivo:", err);
                    return res
                        .status(500)
                        .json({ error: "Erro interno no servidor!" });
                }

                res.status(200).json(curso);
            }
        );
    });
});

// Adicionar um novo curso
app.post("/cursos", (req, res) => {
    const novoCurso = {
        nome: req.body.nome,
        valor: req.body.valor,
        id: ++nextId,
    };

    fs.readFile("cursos.json", (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return res
                .status(500)
                .json({ error: "Erro na leitura do arquivo!" });
        }

        const jsonContent = JSON.parse(data);
        jsonContent.cursos.push(novoCurso);

        // Escreve o arquivo novamente com a estrutura correta
        fs.writeFile(
            "cursos.json",
            JSON.stringify(jsonContent, null, 2),
            (err) => {
                if (err) {
                    console.error("Erro ao escrever os dados no arquivo:", err);
                    return res
                        .status(500)
                        .json({ error: "Erro interno no servidor!" });
                }

                res.status(200).json(novoCurso);
            }
        );
    });
});

app.delete("/cursos/:id", (req, res) => {
    const cursoId = req.params.id;
    const cursoIndex = cursos.findIndex(
        (curso) => curso.id === parseInt(cursoId)
    );

    // Checa se o curso existe
    if (cursoIndex === -1) {
        res.status(404).json({ error: "Curso não encontrado!" });
    }

    const cursoRemovido = cursos.splice(cursoIndex, 1)[0];

    fs.readFile("cursos.json", (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return res.status(500).json({ error: "Erro interno no servidor!" });
        }

        const jsonContent = JSON.parse(data);
        jsonContent.cursos = cursos; // Atualiza o objeto cursos no JSON

        // Escreve o arquivo novamente com a estrutura correta
        fs.writeFile(
            "cursos.json",
            JSON.stringify(jsonContent, null, 2),
            (err) => {
                if (err) {
                    console.error("Erro ao escrever os dados no arquivo:", err);
                    return res
                        .status(500)
                        .json({ error: "Erro interno no servidor!" });
                }

                res.status(200).json(cursoRemovido);
            }
        );
    });
});
