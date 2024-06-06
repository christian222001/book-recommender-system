const express = require('express');
const helmet = require('helmet');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Pastikan path ini sesuai dengan struktur direktori Anda

const app = express();
const port = process.env.PORT || 3000;

// Gunakan Helmet untuk mengamankan header HTTP
app.use(helmet());

// Gunakan cookie parser
app.use(cookieParser());

// Setel body parser untuk mengurai data formulir
const parseForm = bodyParser.urlencoded({ extended: false });

// Setel perlindungan CSRF
const csrfProtection = csurf({ cookie: true });

// Gunakan perlindungan CSRF untuk semua rute
app.use(csrfProtection);

// Setel header keamanan khusus
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Gunakan routes
app.use('/', routes);

// Penanganan kesalahan untuk kesalahan token CSRF
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  // Tangani kesalahan token CSRF di sini
  res.status(403);
  res.send('Deteksi manipulasi formulir');
});

// Memulai server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
