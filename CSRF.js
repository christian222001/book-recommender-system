const express = require('express');
const router = express.Router();

// Route to render a form with CSRF token
router.get('/form', (req, res) => {
  res.send(`
    <form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission
router.post('/process', (req, res) => {
  res.send('Form data processed');
});

module.exports = router;
