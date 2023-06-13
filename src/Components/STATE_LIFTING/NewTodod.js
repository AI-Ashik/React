import React, { useState } from 'react';

const NewTodod = (props) => {
    const [todo, setTodo] = useState('');
    const handleInputChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Todo:</label>
            <input value={todo} type="text" id="todo" onChange={handleInputChange} name="todo" />

            <button>Add Todo</button>
        </form>
    );
};

export default NewTodod;
