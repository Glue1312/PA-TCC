import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchBooks = () => API.get('/books');
export const fetchBookById = (id) => API.get(`/books/${id}`);
export const createBook = (newBook) => API.post('/books', newBook);
export const updateBook = (id, updatedBook) => API.put(`/books/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/books/${id}`);
