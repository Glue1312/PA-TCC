import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://library-app-uur6ah7xfq-et.a.run.app/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteBook = (id) => {
        axios.delete(`https://library-app-uur6ah7xfq-et.a.run.app/api/books/${id}`)
            .then(() => {
                setBooks(books.filter(book => book._id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        {book.title} by {book.author}
                        <Link to={`/edit-book/${book._id}`}>Edit</Link>
                        <button onClick={() => deleteBook(book._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
