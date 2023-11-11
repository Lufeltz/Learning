import React, { useReducer } from "react";

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 };

        case "double":
            return { count: state.count * 2 };

        case "half":
            if (state.count === 0) {
                return { count: state.count };
            }
            return { count: state.count / 2 };
        default:
            return state;
    }
};

function Ex09_useReducer() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <p>Contagem atual: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "double" })}>Double</button>
            <button onClick={() => dispatch({ type: "half" })}>Half</button>
        </div>
    );
}

export default Ex09_useReducer;
