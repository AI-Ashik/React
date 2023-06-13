import React, { useState } from 'react';

const HOOKS_USESTATE2 = () => {
    const [count, setCount] = useState(0);

    const handleIncr = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncr}>Increament</button>
        </div>
    );
};

export default HOOKS_USESTATE2;
