# Creating a server for a library

## Description
This Node.js application serves as a simple book management system. It provides APIs to manage a collection of books, allowing users to perform CRUD (Create, Read, Update, Delete) operations on the book repository.

Users can retrieve all available books, add new books with specified authors, titles, and optional tags, as well as update existing book details based on their unique identifiers. The application employs Express.js for routing and MongoDB as the database to store book information.



## Running the Application

1. **Installation**:
   - Clone the repository:
     ```
     git clone https://github.com/singhhkm/backend.git
     cd backend
     ```

2. **Install Dependencies**:
   ```npm install```


4. **Database Configuration**:
- Set up your database configuration in `config.js` or `.env` file.

4. **Running the Application**:
```npm start```



## Seeding the Database



```npm run index.js```



## APIs

### Get all books

- **Endpoint**: `/api/books/`
- **Method**: `GET`
- **Description**: Retrieves all books.
- **Request**: None
- **Response**:
  - `success`: Boolean indicating success status.
  - `notes`: Array of book objects.

### Add a new book

- **Endpoint**: `/api/books/`
- **Method**: `POST`
- **Description**: Adds a new book.
- **Request**:
  - `Author`: String (minimum length: 3).
  - `Title`: String (minimum length: 5).
  - `tag`: String (optional).
- **Response**:
  - `success`: Boolean indicating success status.
  - `books`: Newly added book object.

### Update books

- **Endpoint**: `/api/books/:id`
- **Method**: `PUT`
- **Description**: Updates an existing book by ID.
- **Request**:
  - `Author`: String (optional).
  - `Title`: String (optional).
  - `tag`: String (optional).
- **Response**:
  - `success`: Boolean indicating success status.
  - `note`: Updated book object.