import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
        </div>
    );
};

export default Component4;
