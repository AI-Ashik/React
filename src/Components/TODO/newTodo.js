import React from 'react';

const NewTodo = (props) => {
    props.onHandleNewTodo({ title: 'my name is ashik' });
    return <div>newTodo</div>;
};

export default NewTodo;
