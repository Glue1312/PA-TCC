import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishedDate: '',
        pages: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://library-app-uur6ah7xfq-et.a.run.app/api/books', book)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
            <input type="date" name="publishedDate" value={book.publishedDate} onChange={handleChange} required />
            <input type="number" name="pages" value={book.pages} onChange={handleChange} placeholder="Pages" required />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
