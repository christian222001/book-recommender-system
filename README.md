# Sistem Rekomendasi Buku

## Deskripsi
Sistem Rekomendasi Buku ini dirancang untuk membantu pengguna menemukan buku yang sesuai dengan minat mereka dengan memanfaatkan teknik collaborative filtering. Sistem ini memproses interaksi pengguna dan data buku untuk memberikan rekomendasi yang dipersonalisasi.

## Fitur
- Antarmuka yang ramah pengguna
- Algoritma collaborative filtering untuk rekomendasi
- Informasi dan rating buku yang terperinci
- Navigasi dan interaksi pengguna yang mudah

## Instalasi
Untuk memulai dengan Sistem Rekomendasi Buku, ikuti langkah-langkah berikut:

1. Clone repository:
      ```bash
             git clone https://github.com/Christian222001/book-recommender-system.git
   
2. Masuk ke direktori proyek:
      ```bash
            cd book-recommender-system
   
3. Install dependencies yang diperlukan:
      ```bash
            pip install -r requirements.txt


## Penggunaan
Untuk menjalankan aplikasi secara lokal, gunakan perintah berikut:

      python app.py

Buka browser Anda dan pergi ke http://localhost:5000 untuk mengakses aplikasi.

## Komponen Aplikasi

1. app.py
File aplikasi utama yang menginisialisasi aplikasi Flask dan mengatur routing.

2. templates/
Berisi template HTML untuk halaman web.

3. static/
Berisi file statis seperti CSS, JavaScript, dan gambar.

4. Books.csv
Dataset yang berisi informasi buku yang digunakan untuk menghasilkan rekomendasi.

5. models/
Berisi model collaborative filtering dan skrip pendukung lainnya untuk rekomendasi.

6. Collaborative_Filtering_Book_100%_ipynb
Notebook Jupyter yang mencakup implementasi dan pelatihan model collaborative filtering.

7. routes.js
Menentukan rute untuk aplikasi.

8. requirements.txt
Daftar semua dependensi Python yang diperlukan untuk menjalankan proyek.

# Penjelasan Model
## Collaborative Filtering
Model yang digunakan dalam aplikasi ini adalah model collaborative filtering. Collaborative filtering memanfaatkan interaksi masa lalu antara pengguna dan item (dalam hal ini buku) untuk membuat rekomendasi. Model ini bekerja dengan menemukan kesamaan antara pengguna berdasarkan rating dan preferensi mereka.

## Langkah-langkah:
1. Persiapan Data: Memuat dan memproses data dari Books.csv.
2. Pelatihan Model: Menggunakan algoritma collaborative filtering untuk melatih model pada dataset.
3. Prediksi: Menghasilkan rekomendasi buku berdasarkan interaksi pengguna dan preferensi pengguna serupa.
