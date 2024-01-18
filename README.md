
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
   git clone https://github.com/lukacspapp/bookstoreAPI.git
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
1. Locally:
   ```
   npm run start
   ```
2. Using Docker:
   - Ensure Docker is installed on your machine.
   - Build and run the container:
     ```sh
     docker-compose up --build
     ```
3. Using Docker image:
   - Pull the image from Docker Hub:
     ```
     docker pull papplukacs/bookstore-api:v1.0
     ```
   - Run the Docker image as a container (named bookstore-container)::
     ```
     docker run -p 3000:3000 --name bookstore-container papplukacs/bookstore-api:v1.0
     ```
  - The API will be available at `http://localhost:3000/api/books`
  - Stop the container using:
    ```
    docker stop <container-id> or docker stop bookstore-container
    ```
  - Remove the container using:
    ```
    docker rm <container-id> or docker rm bookstore-container
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

## Testing the API
- Postman Collection is available [here](https://github.com/lukacspapp/bookstoreAPI/blob/master/BookstoreAPI.postman_collection.json)