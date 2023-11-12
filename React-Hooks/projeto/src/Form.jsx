function Form() {
    return (
        <form>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                className="form-control"
            />
            <input
                type="number"
                name="idade"
                placeholder="Idade"
                className="form-control"
            />
            <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                className="form-control"
            />

            <div className="btn-flux">
                <input
                    type="button"
                    value="Cadastrar"
                    className="btn btn-primary"
                />
                <input
                    type="button"
                    value="Alterar"
                    className="btn btn-secondary"
                />
                <input
                    type="button"
                    value="Excluir"
                    className="btn btn-danger"
                />
                <input
                    type="button"
                    value="Cancelar"
                    className="btn btn-warning"
                />
            </div>
        </form>
    );
}

export default Form;
