import React, { useEffect, useState } from 'react';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplceholder.typicode.com/todos')
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
        <div>
            <h2 style={{ textAlign: 'center', color: 'red', fontWeight: 'bolder' }}>Todo Data</h2>
            <p>{dataLoading && loadingDataMessage}</p>
            <p>{error && errorMessage}</p>
            <p>{datas}</p>
        </div>
    );
};

export default DataFetch;
