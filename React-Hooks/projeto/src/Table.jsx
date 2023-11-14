// Componente
function Table({ users }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* {users.map((user) => {
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.city}</td>
                        </tr>;
                    })} */}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
