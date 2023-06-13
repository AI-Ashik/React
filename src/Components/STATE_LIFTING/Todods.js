import React from 'react';
import Todod from './Todod';

const Todos = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => (
                <Todod key={index} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;
