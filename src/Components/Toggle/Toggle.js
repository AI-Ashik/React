import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div style={{ margin: '1rem', backgroundColor: 'pink', padding: '1rem' }}>
            {toggle && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laboriosam atque? At harum omnis culpa expedita corporis aliquid dolore amet! Totam fuga et cum at ipsum
                    enim, tempore cupiditate voluptates?
                </p>
            )}
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={() => {
                        setToggle(!toggle);
                    }}>
                    {toggle ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default Toggle;
