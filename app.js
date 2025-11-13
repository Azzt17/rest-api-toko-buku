const express = require('express');
const app = express();
const port = 3000;

// middleware custom
const myLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(myLogger);

// middleware bawaan
app.use(express.static('public'));
app.use(express.json()); 

const bookRoutes = require('./routes/bookRoutes');

// rute dasar untuk pengujian
app.get('/', (req, res) => {
  res.send('Selamat Datang di API Toko Buku!');
});

app.use('/books', bookRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Terjadi kesalahan di server',
    error: err.message 
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});