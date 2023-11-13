function Form({ register }) {
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
                name="age"
                placeholder="Idade"
                className="form-control"
            />
            <input
                type="text"
                name="city"
                placeholder="Cidade"
                className="form-control"
            />

            <div className="btn-flux">
                {register ? (
                    <input
                        type="button"
                        value="Register"
                        className="btn btn-primary"
                    />
                ) : (
                    <div>
                        <input
                            type="button"
                            value="Modify"
                            className="btn btn-secondary"
                        />
                        <input
                            type="button"
                            value="Delete"
                            className="btn btn-danger"
                        />
                        <input
                            type="button"
                            value="Cancel"
                            className="btn btn-warning"
                        />
                    </div>
                )}
            </div>
        </form>
    );
}

export default Form;
