const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create
router.post('/', async (req, res) => {
    const book = new Book(req.body);
    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read one
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const removedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(removedBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
