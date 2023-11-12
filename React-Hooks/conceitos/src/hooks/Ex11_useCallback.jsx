import React, { useCallback, useEffect, useState } from "react";

function Ex11_useCallback() {
    const [color, setColor] = useState("pink");
    const [number, setNumber] = useState(0);

    const changeColor = () => {
        setColor((prevColor) => (prevColor === "pink" ? "gray" : "pink"));
    };

    const listNumbers = useCallback(() => {
        return [number - 1, number, number + 1];
    }, [number]);

    return (
        <div style={{ backgroundColor: color }}>
            <button onClick={changeColor}>Change color</button>
            <input
                type="number"
                placeholder={0}
                onChange={(e) => {
                    let value = Number(e.target.value);
                    if (!isNaN(value)) setNumber(value);
                }}
            />
            <ListNumbersComponent list={listNumbers} />
        </div>
    );
}

const ListNumbersComponent = ({ list }) => {
    const [vet, setVet] = useState([]);

    useEffect(() => {
        console.log("Componente criado!");
        setVet(list);
    }, [list]);

    return (
        <div>
            <ul>
                {vet.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ex11_useCallback;
