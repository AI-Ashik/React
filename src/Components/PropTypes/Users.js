import React, { useState } from 'react';
import User from './User';

const Users = () => {
    const [user] = useState({
        id: 10,
        name: 'Ashik'
    });

    return (
        <>
            <User user={user} />
        </>
    );
};

export default Users;
