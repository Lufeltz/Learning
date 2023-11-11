import React, { useState } from "react";

function Ex10_useMemo() {
    const [counter, setCounter] = useState(0);
    const [names, setNames] = useState([
        "Carlos",
        "Maria",
        "Antonio",
        "Ricardo",
        "Juliana",
    ]);

    return (
        <div>
            <p>Contagem Inicial: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
            <ListarNomes list={names} />
        </div>
    );
}

function ListarNomes({list}) {
  console.log("Lista criada!");
  return (
      <ul>
          {list.map((name) => (
              <li key={name}>{name}</li>
          ))}
      </ul>
  );
}


export default Ex10_useMemo;
