
# Book Store API  

A simple and efficient RESTful API for managing a book store. Built with Node.js, Express, and MongoDB, this API supports CRUD operations for books.  

---

## Features  
- Retrieve all books in the store.  
- Fetch details of a single book by ID.  
- Add a new book to the store.  
- Update an existing book’s details.  
- Delete a book from the store.  

---

## Technologies Used  
- **Node.js**: Backend runtime environment.  
- **Express.js**: Framework for building the API.  
- **MongoDB**: Database for storing book data.  
- **dotenv**: Managing environment variables.  

---

## Setup Instructions  

### 1. Clone the Repository  
   ```bash
   git clone https://github.com/91web/book-store-api
   ```  

### 2. Install Dependencies  
   ```bash
   npm install
   ```  

### 3. Set Up Environment Variables  
   Create a `.env` file in the root directory and add your MongoDB connection string:  
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```  

### 4. Run the Server  
   ```bash
   npm start
   ```  

---

## API Endpoints  

### 1. Get All Books  
- **Endpoint**: `GET /api/books/get`  
- **Response**:  
  ```json
  {
    "success": true,
    "message": "Books retrieved successfully",
    "data": [
      {
        "_id": "1",
        "title": "Book Title",
        "author": "Author Name",
        "year": 2025
      }
    ]
  }
  ```  

### 2. Get Single Book  
- **Endpoint**: `GET /api/books/get/:id`  
- **Response**:  
  ```json
  {
    "success": true,
    "message": "Book details retrieved successfully",
    "data": {
      "_id": "1",
      "title": "Book Title",
      "author": "Author Name",
      "year": 2025
    }
  }
  ```  

### 3. Add New Book  
- **Endpoint**: `POST /api/books/add`  
- **Request Body**:  
  ```json
  {
    "title": "New Book",
    "author": "New Author",
    "year": 2025
  }
  ```  
- **Response**:  
  ```json
  {
    "success": true,
    "message": "Book added successfully",
    "data": {
      "_id": "2",
      "title": "New Book",
      "author": "New Author",
      "year": 2025
    }
  }
  ```  

### 4. Update Book  
- **Endpoint**: `PUT /api/books/update/:id`  
- **Request Body**:  
  ```json
  {
    "title": "Updated Book",
    "author": "Updated Author",
    "year": 2026
  }
  ```  
- **Response**:  
  ```json
  {
    "success": true,
    "message": "Book updated successfully",
    "data": {
      "_id": "1",
      "title": "Updated Book",
      "author": "Updated Author",
      "year": 2026
    }
  }
  ```  

### 5. Delete Book  
- **Endpoint**: `DELETE /api/books/delete/:id`  
- **Response**:  
  ```json
  {
    "success": true,
    "message": "Book deleted successfully",
    "data": {
      "_id": "1",
      "title": "Book Title",
      "author": "Author Name",
      "year": 2025
    }
  }
  ```  

---

## Contribution  
Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.  

---

## License  
This project is licensed under the MIT License.  
```
