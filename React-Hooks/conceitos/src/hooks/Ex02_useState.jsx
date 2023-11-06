// Importar módulos
import React, { useState } from "react";

// Função 
function Ex02_useState(){
  
  // useState
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);


  // Retorno
  return (
    <div>
      <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)}/>
      <input type="text" placeholder="Idade" onChange={e => setIdade(e.target.value)}/>

      <p>{nome}</p>
      <p>{idade}</p>
    </div>
  )
}

// Exportar
export default Ex02_useState;
