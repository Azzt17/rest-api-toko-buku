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

## Pengujian Postman
Berikut adalah hasil pengujian endpoint menggunakan Postman:

### GET /books
<img width="1487" height="835" alt="Screenshot 2025-11-14 075709" src="https://github.com/user-attachments/assets/74c7e0ba-c4ac-440f-a529-ac377f8f0d96" />

### POST /books (Sukses)
<img width="1487" height="798" alt="Screenshot 2025-11-14 075925" src="https://github.com/user-attachments/assets/a6efa6d0-4be4-480e-b2b4-d1d57cfc84c0" />

### POST /books (Error Validasi)
<img width="1492" height="747" alt="Screenshot 2025-11-14 080009" src="https://github.com/user-attachments/assets/afe24f20-4a3f-4a0e-af9c-090a6cc8ae41" />

### GET /books/:id
<img width="1486" height="687" alt="Screenshot 2025-11-14 080126" src="https://github.com/user-attachments/assets/3fcf6079-adb9-44a2-b09d-1192259bc90c" />

### PUT /books/:id
<img width="1488" height="726" alt="Screenshot 2025-11-14 080239" src="https://github.com/user-attachments/assets/0e69db3a-e660-4e4e-b6db-8c4a8bbc835d" />

### DELETE /books/:id
<img width="1494" height="732" alt="Screenshot 2025-11-14 080327" src="https://github.com/user-attachments/assets/d4bf7e9d-e60f-4487-a79a-b61336626648" />
