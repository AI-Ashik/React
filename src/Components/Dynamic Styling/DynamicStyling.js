import React, { useEffect, useState } from 'react';

import './dStyle.css';

const DynamicStyling = () => {
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
        if (name.length < 2) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} className={`${validInput && 'valid'}`} />
        </div>
    );
};

export default DynamicStyling;
