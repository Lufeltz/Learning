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

    const registerNewUser = () => {
        let newUser = { name, age, city };
        setUsers([...users, newUser]);

        setName("");
        setAge("");
        setCity("");
    };

    const select = (indice) => {
        setIndex(indice);
        setName(users[indice].name);
        setAge(users[indice].age);
        setCity(users[indice].city);
        setBtnRegister(false);
    };

    const modify = () => {
        let user = { name, age, city };
        const usersCopy = [...users];
        usersCopy[index] = user;
        setUsers(usersCopy);

        setName("");
        setAge("");
        setCity("");

        setBtnRegister(true);
    };

    const remove = () => {
        const usersCopy = [...users];
        usersCopy.splice(index, 1);
        setUsers(usersCopy);

        setName("");
        setAge("");
        setCity("");

        setBtnRegister(true);
    };

    const cancel = () => {
        setName("");
        setAge("");
        setCity("");

        setBtnRegister(true);
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
                modify={modify}
                remove={remove}
                cancel={cancel}
            />
            <Table users={users} select={select} />
        </>
    );
}

export default App;
