import React, { Component, createRef } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef();
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.userNameRef.current.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userName"> UserName :</label>
                    <input type="text" id="userName" ref={this.userNameRef} />
                </div>
                <div>
                    <label htmlFor="password"> Password :</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">register</button>
            </form>
        );
    }
}
