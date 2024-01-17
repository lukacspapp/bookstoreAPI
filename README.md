install

1. nvm use
2. npm install
3. docker pull mongo
4. docker run --name mongodb -d -p 27017:27017 mongo
5. npm run dev

Create a .env file in the root directory and add the following:

```
mongodb://localhost/bookstore-db
```