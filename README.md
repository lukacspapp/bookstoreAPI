
# Bookstore API

## Description
Bookstore API is a RESTful service designed for managing a bookstore's inventory. It allows for adding, updating, deleting, and retrieving book records. The API also includes a notification feature to alert when a book's stock is low.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Docker**
- **Jest**
- **MongoDB-Memory-Server**

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/bookstoreAPI.git
   ```
2. Navigate to the project directory:
   ```
   cd bookstoreAPI
   ```
3. Ensure the correct Node.js version (20.9.0) is being used:
   ```
   nvm use 20.9.0
   ```
   _Note: Install Node.js 20.9.0 if it's not already installed._
4. Install dependencies:
   ```
   npm install
   ```
5. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add the following line:
     ```
     DB_URI=mongodb+srv://test:test@bookstoredb.sht6mkg.mongodb.net/?retryWrites=true&w=majority
     ```

## Running the Application
1. To run the application locally:
   ```
   npm run start
   ```
2. To run the application using Docker:
   - Ensure Docker is installed on your machine.
   - Build and run the container:
     ```sh
     docker-compose up --build
     ```

## API Endpoints
- `GET /api/books`: Retrieve all books in the inventory.
- `POST /api/books`: Add a new book to the inventory.
- `GET /api/books/:id`: Retrieve a book by its ID.
- `PATCH /api/books/:id`: Update the details of a specific book.
- `DELETE /api/books/:id`: Remove a book from the inventory.
- `GET /api/books/isbn/:isbn`: Retrieve a book by its ISBN.

## Testing
- Run tests using:
  ```
  npm run test
  ```

## API Documentation
- API documentation is available on [Confluence](https://papplukacs.atlassian.net/wiki/spaces/BSA/overview)

## Docker Image
- The Docker image is available on [Docker Hub](https://hub.docker.com/r/papplukacs/bookstore-api)
- Pull the image using:
  ```
  docker pull papplukacs/bookstore-api:v1.0
  ```

