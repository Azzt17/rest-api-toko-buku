const express = require('express');
const router = express.Router();
let books = require('../db.js');

// middleware validasi untuk POST /books
const validateBook = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title dan Author wajib diisi' });
  }
  next();
};

// GET /books - Mendapatkan semua buku
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books - Membuat buku baru
// menerapkan middleware validasi
router.post('/', validateBook, (req, res) => {
  const { title, author } = req.body;
  const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  const newBook = { id: newId, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// GET /books/:id - Mendapatkan satu buku
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
  res.json(book);
});

// PUT /books/:id - Memperbarui buku
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
});

// DELETE /books/:id - Menghapus buku
router.delete('/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ message: 'Buku tidak ditemukan' });

  books.splice(bookIndex, 1);
  res.status(204).send();
});

module.exports = router;