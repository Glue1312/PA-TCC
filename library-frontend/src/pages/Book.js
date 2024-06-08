import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../api';

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            const { data } = await fetchBookById(id);
            setBook(data);
        };
        getBook();
    }, [id]);

    return (
        <div>
            {book ? (
                <div>
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    <p>{book.author}</p>
                    <p>{book.publishedDate}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Book;
