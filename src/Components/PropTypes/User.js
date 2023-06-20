import Proptypes from 'prop-types';
import React from 'react';

const User = (props) => {
    const { user } = props;
    return (
        <>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
        </>
    );
};

User.propTypes = {
    user: Proptypes.shape({
        id: Proptypes.number,
        name: Proptypes.string
    })
};

// User.defaultProps = {
//     userName: 'Default Name',
//     userId: 0
// };

export default User;
