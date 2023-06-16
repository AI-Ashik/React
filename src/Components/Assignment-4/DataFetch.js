import React, { useEffect, useState } from 'react';

import './style.css';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Fetching unseccessful');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setData(data);
                    setError(true);
                    setDataLoading(false);
                })
                .catch((err) => {
                    setDataLoading(false);
                    setError(err.message);
                });
        }, 2000);
    }, []);

    const loadingDataMessage = 'Data is Loading';
    const errorMessage = <p>{error}</p>;

    const datas =
        data &&
        data.map((todo) => {
            return <p>{todo.title}</p>;
        });

    return (
        <div className="container">
            <h2 className="title">Todo Data</h2>
            <p className="loading-message">{dataLoading && loadingDataMessage}</p>
            <p className="error-message">{error && errorMessage}</p>
            <div className="todo-items">{datas}</div>
        </div>
    );
};

export default DataFetch;
