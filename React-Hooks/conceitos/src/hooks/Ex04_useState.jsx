// Importar módulos
import React, { useState } from "react";

// Função
function Ex04_useState() {
    // modelo JSON
    const modelo = {
        nome: "",
        email: "",
        cidade: "",
    };

    const evento = (e) => {
        let nome = e.target.name;
        let valor = e.target.value;

        setFormulario({ ...formulario, [nome]: valor });
    };

    const [formulario, setFormulario] = useState(modelo);

    // Retorno
    return (
        <div>
            <input
                type="text"
                name="nome"
                placeholder="Informe o nome"
                onChange={evento}
            />
            <input
                type="text"
                name="email"
                placeholder="Informe o e-mail"
                onChange={evento}
            />
            <input
                type="text"
                name="cidade"
                placeholder="Informe a cidade"
                onChange={evento}
            />

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>

            <p>{JSON.stringify(formulario)}</p>
        </div>
    );
}

// Exportar
export default Ex04_useState;
