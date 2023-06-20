import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('Constructur');

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    handleIncreament = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        // eslint-disable-next-line
        {
            console.log('render');
        }
        return (
            <div>
                Counter : {this.state.count}
                <button onClick={this.handleIncreament}>+</button>
            </div>
        );
    }
}
