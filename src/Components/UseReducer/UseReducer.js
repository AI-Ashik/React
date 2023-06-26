/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './Reducer';

const booksData = [];

const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
};

const initialState = {
    books: booksData,
    isModalOpen: false,
    modalText: ''
};

const UseReducer = () => {
    const [booksState, dispatch] = useReducer(reducer, initialState);

    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: uuidv4(), name: bookName };
        dispatch({ type: 'ADD', payload: newBook });
        setBookName('');
    };

    const removeBook = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    return (
        <div>
            <h3>Book List</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => {
                        setBookName(e.target.value);
                    }}
                />
                <button type="submit">Add</button>
            </form>

            {booksState.isModalOpen && <Modal modalText={booksState.modalText} />}

            {booksState.books.map((book) => {
                const { id, name } = book;
                return (
                    <li key={id}>
                        {name}{' '}
                        <button
                            onClick={() => {
                                removeBook(id);
                            }}>
                            Remove
                        </button>
                    </li>
                );
            })}
        </div>
    );
};

export default UseReducer;
