import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactTostify = () => {
    const handleAddNewTodo = () => {
        toast('New Todo Is Added');
    };

    const handleDeleteNewTodo = () => {
        toast('The Todo Is Deleted');
    };

    return (
        <div>
            <h2>Todo App</h2>
            <button onClick={handleAddNewTodo}>Add New Todo</button>
            <button onClick={handleDeleteNewTodo}>Delete Todo</button>
            <ToastContainer />
        </div>
    );
};

export default ReactTostify;
