// Importar módulo React e o hook useState
import React, { useState } from "react";

// Função

function Ex01_useState() {
    // useState
    const [text, setText] = useState("Hell World!");

    // retorno
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

// Exportar
export default Ex01_useState;
