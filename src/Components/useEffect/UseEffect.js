import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect');
    }, [count]);

    return (
        <div>
            {console.log('rendering')}
            <h1>count : {count}</h1>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                +
            </button>
        </div>
    );
};

export default UseEffect;
