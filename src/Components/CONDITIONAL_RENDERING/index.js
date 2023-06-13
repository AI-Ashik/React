import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        const { isLoggedIn } = this.state;

        //     if (isLoggedIn) {
        //         element = <HomePage />;
        //     } else {
        //         element = <LoginPage />;
        //     }
        return <>{isLoggedIn ? <HomePage /> : <LoginPage />}</>;
    }
}

export default CONDITIONAL_RENDERING;
