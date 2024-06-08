import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishedDate: '',
        pages: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://library-app-uur6ah7xfq-et.a.run.app/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://library-app-uur6ah7xfq-et.a.run.app/${id}`, book)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Book</h2>
            <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
            <input type="date" name="publishedDate" value={book.publishedDate} onChange={handleChange} required />
            <input type="number" name="pages" value={book.pages} onChange={handleChange} placeholder="Pages" required />
            <button type="submit">Edit Book</button>
        </form>
    );
};

export default EditBook;
