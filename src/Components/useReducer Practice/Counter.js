import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            return state;
    }
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>Count -> {count}</div>
            <button onClick={() => dispatch('increament')}>Increament</button>
            <button onClick={() => dispatch('decreament')}>Decreament</button>
        </>
    );
};

export default Counter;
