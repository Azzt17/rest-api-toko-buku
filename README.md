# REST API Toko Buku

Ini adalah tugas mingguan Pemrograman Web (Minggu 10) untuk membuat REST API menggunakan Express.js.

## Fitur

* CRUD lengkap untuk `/books`
* Pemisahan rute menggunakan `express.Router`
* Middleware logging kustom
* Middleware validasi untuk `POST /books`
* Penyajian file statis dari folder `/public`
* Middleware error-handling global

## Endpoint API

* `GET /books`: Mendapatkan semua buku
* `POST /books`: Membuat buku baru (Body: `{ "title": "...", "author": "..." }`)
* `GET /books/:id`: Mendapatkan satu buku
* `PUT /books/:id`: Memperbarui buku (Body: `{ "title": "...", "author": "..." }`)
* `DELETE /books/:id`: Menghapus buku