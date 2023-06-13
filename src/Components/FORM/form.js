import React, { useState } from 'react';
import '../FORM/form.module.css';

const Form = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
