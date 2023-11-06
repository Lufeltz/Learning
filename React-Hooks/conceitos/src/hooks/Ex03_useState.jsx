// Importar módulos
import React, { useState } from "react";

// Função
function Ex03_useState() {

    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    let media = (nota1 + nota2) / 2;

    let situacao = media >= 7 ? 'Aprovado(a)': 'Reprovado(a)';

    // Retorno
    return <div>
      <input type="number" placeholder="Nota 1" onChange={e => setNota1(parseFloat(e.target.value))} />
      <input type="number" placeholder="Nota 2" onChange={e => setNota2(parseFloat(e.target.value))} />

      {nota1 && nota2 ?<h1>{situacao} com média: {media} </h1>: ''}
    </div>;
}

export default Ex03_useState;
