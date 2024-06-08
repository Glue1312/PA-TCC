import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
