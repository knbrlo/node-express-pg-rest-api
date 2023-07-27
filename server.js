require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const pgp = require('pg-promise')();
const db = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});


// GET all books
app.get('/books', (req, res) => {
    db.any('SELECT * FROM books')
    .then(data => {
        res.json({ data });
    })
    .catch(error => {
        console.log(error);
    })
})

// GET a single book by id
app.get('/books/:id', (req, res) => {
    db.one('SELECT * FROM books WHERE id =$1', req.params.id)
    .then(data => {
        res.json({ data });
    })
    .catch(error => {
        console.log(error);
    })
})

// POST a new book
app.post('/books', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    db.none('INSERT INTO books(title, author) VALUES($1, $2)', [title, author])
      .then(() => {
        res.status(201).json({ message: 'Book added' });
      })
      .catch(error => {
        console.log(error);
      });
  });

// PUT update a book

// DELETE a book

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));