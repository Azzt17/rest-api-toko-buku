const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json()); 

const bookRoutes = require('./routes/bookRoutes');

// rute pengujian
app.get('/', (req, res) => {
  res.send('Selamat Datang di API Toko Buku!');
});

app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});