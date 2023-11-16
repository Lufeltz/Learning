function Form({ isRegister, setName, setAge, setCity, register, user }) {
    return (
        <form>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Nome"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                name="age"
                value={user.age}
                placeholder="Idade"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                name="city"
                value={user.city}
                placeholder="Cidade"
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
            />

            <div className="btn-flux">
                {isRegister ? (
                    <input
                        type="button"
                        value="Register"
                        className="btn btn-primary"
                        onClick={register}
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
