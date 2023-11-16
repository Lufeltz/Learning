import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
    const [index, setIndex] = useState("");
    const [btnRegister, setBtnRegister] = useState(true);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [users, setUsers] = useState([]);
    let user = { name, age, city };

    const select = (indice) => {
        setIndex(indice);

        setName(users[indice].name);
        setAge(users[indice].age);
        setCity(users[indice].city);

        setBtnRegister(false);
    };

    const registerNewUser = () => {
        let newUser = { name, age, city };
        setUsers([...users, newUser]);

        setName("");
        setAge("");
        setCity("");
    };

    return (
        <>
            <Form
                isRegister={btnRegister}
                setName={setName}
                setAge={setAge}
                setCity={setCity}
                register={registerNewUser}
                user={user}
            />
            <Table users={users} select={select} />
        </>
    );
}

export default App;
