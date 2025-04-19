
Aplikasi ini adalah sebuah website landing page parfum yang menggunakan ReactJS untuk frontend dan React Router DOM untuk pengelolaan rute. Aplikasi ini memungkinkan pengguna untuk eksplorasi dan mengenali produk.


Home Page: Menampilkan informasi tentang toko dan produk-produk unggulan.
Product Page: Menampilkan daftar produk yang dapat dibeli oleh pengguna, termasuk gambar dan rating. Terdapat fitur filter untuk mencari parfum secara spesifik.
About Page: Menyediakan informasi tentang toko dan contact customer service


Instruksi Menjalankan Aplikasi

1. **Clone Repository**
   Jika Anda belum meng-clone repositori ini, jalankan perintah berikut untuk mengunduhnya ke komputer Anda:

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. **Masuk ke Direktori Aplikasi**
   Setelah repositori berhasil di-clone, masuk ke folder aplikasi dengan perintah:

   ```bash
   cd repository-name
   ```

3. **Install Dependencies**
   Install dependensi yang diperlukan dengan menjalankan perintah berikut:

   ```bash
   npm install
   ```

4. **Jalankan Aplikasi**
   Setelah semua dependensi terinstall, jalankan aplikasi dengan perintah:

   ```bash
   npm start
   ```

   Aplikasi akan berjalan di **localhost:5173**. Buka browser Anda dan akses `http://localhost:5173` untuk melihat aplikasi.

---

Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **React Router DOM**: Digunakan untuk manajemen routing aplikasi (halaman Home, Produk, dan Tentang Kami).
- **Tailwind CSS**: Digunakan untuk styling dan tata letak halaman aplikasi.
- **Framer Motion**: Menambahkan animasi pada halaman


## Pengaturan untuk Deployment di Netlify

1. **Buat file `_redirects`** di folder `public/` dengan aturan berikut:
   ```
   /*    /index.html   200
   ```

2. **Deploy ke Netlify**:
   - **Jika menggunakan GitHub**: Hubungkan repositori ke akun Netlify dan lakukan deploy secara otomatis setiap kali ada perubahan yang di-push.
   - **Jika tidak menggunakan GitHub**: Bangun aplikasi dengan `npm run build`, lalu seret dan lepaskan folder `build/` ke Netlify.

---

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan buat pull request untuk perubahan yang Anda buat. Pastikan untuk mengikuti gaya pengkodean yang konsisten dan menambahkan pengujian jika diperlukan.

---

