const express = require('express');
const fs = require('fs');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  fs.readFile(__dirname + '/../home.html', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading home page');
    }
    res.send(data);
  });
});

// Home route
router.get('/home', (req, res) => {
  fs.readFile(__dirname + '/../home.html', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading home page');
    }
    res.send(data);
  });
});

module.exports = router;
