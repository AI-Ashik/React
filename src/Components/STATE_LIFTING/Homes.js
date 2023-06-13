import React, { useState } from 'react';
import Todods from './Todods';
import NewTodod from './NewTodod';
const dummytodos = ['todo1', 'todo2'];

const Home = (props) => {
    const [todos, setTodos] = useState(dummytodos);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <NewTodod onTodo={handleNewTodo} />
            <Todods todos={todos} />
        </div>
    );
};

export default Home;
