import React, { useState } from 'react';

import { UserContext } from './UserContext';

import Component4 from './Component4';

const data = {
    id: 101,
    name: 'Ashik'
};

const Component1 = () => {
    const [user, setUser] = useState(data);

    return (
        <UserContext.Provider value={user}>
            <Component4 />
        </UserContext.Provider>
    );
};

export default Component1;
