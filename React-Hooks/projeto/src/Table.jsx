// Componente
function Table({ users, select }) {
    return (
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
                {users.map((user, indice) => (
                    <tr key={indice}>
                        <td>{indice + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>
                            <button className="btn btn-success" onClick={() => select(indice)}>
                                Selecionar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
