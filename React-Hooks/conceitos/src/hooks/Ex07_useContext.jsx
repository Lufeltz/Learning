import React, { createContext, useContext } from "react";

const context = createContext();

function Principal() {
    let texto = "Passando a prop!";

    return (
        <context.Provider value={{ texto }}>
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
    const { texto } = useContext(context);
    return (
        <div
            style={{
                backgroundColor: "yellow",
                width: "300px",
                height: "300px",
                margin: "50px",
            }}
        >
            {texto}
        </div>
    );
}
export default Principal;
