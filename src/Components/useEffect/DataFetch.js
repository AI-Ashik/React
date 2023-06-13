import React from 'react';
import useFetchCustomHook from './useFetchCustomHook';

const DataFetch = () => {
    const { data, isLoading, error } = useFetchCustomHook('https://jsonplaceholder.typicode.com/todos');

    const loadingMessage = <p>Data Is Loading</p>;
    const errorMessage = <p>{error}</p>;

    const todosElement =
        data &&
        data.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });

    return (
        <div>
            <h1>Todos</h1>
            {isLoading && loadingMessage}
            {error && errorMessage}
            {todosElement}
        </div>
    );
};

export default DataFetch;
