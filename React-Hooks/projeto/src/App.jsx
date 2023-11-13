import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
    const [btnRegister, setBtnRegister] = useState(true);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    return (
        <>
            <Form
                isRegister={btnRegister}
                setName={setName}
                setAge={setAge}
                setCity={setCity}
            />
            <Table />
        </>
    );
}

export default App;