const express = require('express');
const helmet = require('helmet');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Pastikan path ini benar

const app = express();
const port = process.env.PORT || 3000; // Mengubah port ke 3000

// Use Helmet to secure HTTP headers
app.use(helmet());

// Use cookie parser
app.use(cookieParser());

// Set up body parser to parse form data
const parseForm = bodyParser.urlencoded({ extended: false });

// Set up CSRF protection
const csrfProtection = csurf({ cookie: true });

// Use CSRF protection for all routes
app.use(csrfProtection);

// Set specific security headers
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Use routes
app.use('/', routes);

// Error handling for CSRF token errors
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  // Handle CSRF token errors here
  res.status(403);
  res.send('Form tampering detected');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
