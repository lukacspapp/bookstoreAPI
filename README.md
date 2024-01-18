install

1. nvm use
2. npm install
3. docker pull mongo
4. docker run --name mongodb -d -p 27017:27017 mongo
5. npm run start

or

```
docker-compose up --build
```

Create a .env file in the root directory and add the following:

```
mongodb://localhost/bookstore-db
```

The server will run on http://localhost:3000

DB_URI=mongodb+srv://test:test@bookstoredb.sht6mkg.mongodb.net/?retryWrites=true&w=majority