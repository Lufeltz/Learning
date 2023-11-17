import { useState } from "react";

// Componente
function Table({ users, select }) {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Informe um nome"
                className="form-control search"
            />
            <p>{search}</p>
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
                    {users.filter(user => user.name.toLowerCase().includes(search)).map((user, indice) => (
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
