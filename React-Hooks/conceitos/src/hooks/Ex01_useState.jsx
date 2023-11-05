// Importar módulo React e o hook useState
import React, { useState } from "react";

// Função

function Ex01_useState() {
    // useState
    const [text, setText] = useState("Hell World!");

    // Evento
    const evento = (e) => {
        setText(e.target.value);
    };

    // retorno
    return (
        <div>
            <input type="text" onChange={evento} />
            <p>{text}</p>
        </div>
    );
}

// Exportar
export default Ex01_useState;
