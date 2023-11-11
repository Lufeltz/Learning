import React, { createContext, useContext, useState } from "react";

const context = createContext();

function Principal() {
    let texto = "Passando a prop!";

    const [fundo, setFundo] = useState('yellow');

    function alterarFundo(){
      setFundo(fundo === 'yellow'? 'pink': 'yellow');
    }

    return (
        <context.Provider value={{ texto, fundo, alterarFundo }}>
            <Camada1 />
        </context.Provider>
    );
}

function Camada1() {
    return (
        <div
            style={{
                backgroundColor: "red",
                width: "500px",
                height: "500px",
                display: "inline-block",
            }}
        >
            <Camada2 />
        </div>
    );
}

function Camada2() {
    return (
        <div
            style={{
                backgroundColor: "green",
                width: "400px",
                height: "400px",
                margin: "50px",
                display: "inline-block",
            }}
        >
            <Camada3 />
        </div>
    );
}

function Camada3() {
    const { texto, fundo, alterarFundo } = useContext(context);
    return (
        <div
            style={{
                backgroundColor: fundo,
                width: "300px",
                height: "300px",
                margin: "50px",
            }}
        >
            <p>{texto}</p>

            <button onClick={alterarFundo}>Clique aqui</button>
        </div>
    );
}
export default Principal;
