import { useState } from "react";

// Componente
function Table({ users, select }) {
    const [search, setSearch] = useState("");
    const filteredUsers = (name, nameSearched) =>
        name.toLocaleLowerCase().includes(nameSearched.toLocaleLowerCase());

    return (
        <div>
            <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Informe um nome"
                className="form-control search"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter((user) => filteredUsers(user.name, search))
                        .map((user, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => select(indice)}
                                    >
                                        Selecionar
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
