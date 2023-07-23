# node-express-pg-rest-api
A simple REST API with Node.js and Express that can Create, Read, Update, and Delete data (CRUD operations) from PostgreSQL.

## Requirements
- Node.js
- PostgreSQL
- NPM

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Clone the repo:

```
git clone https://github.com/knbrlo/node-express-pg-rest-api.git
cd node-express-pg-rest-api
```

2. Install NPM dependencies:
```
npm install
```

3. Ensure you have PostgreSQL running on your local machine.

4. Create a new PostgreSQL database named booksdb (or another name of your choice).

5. Create a new table within your database with the following SQL command:
```
CREATE TABLE books (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100),
   author VARCHAR(100)
);
```

6. In the server.js file, replace 'username', 'password', and 'booksdb' with your PostgreSQL username, password, and the database name you chose in step 4:
```
const db = pgp('postgres://username:password@localhost:5432/booksdb');
```

7. Start the server:
```
node server.js
```


## Usage
Use a tool like Postman or Insomnia to send HTTP requests to the API endpoints:

GET all books: http://localhost:3000/books
GET a single book by ID: http://localhost:3000/books/:id
POST a new book: http://localhost:3000/books with a JSON body like { "title": "Book Title", "author": "Author Name" }
PUT update a book: http://localhost:3000/books/:id with a JSON body like { "title": "New Book Title", "author": "New Author Name" }
DELETE a book: http://localhost:3000/books/:id

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page if you want to contribute.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.