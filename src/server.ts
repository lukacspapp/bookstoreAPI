import express from 'express';
import mongoose from 'mongoose';
import { port, dbURI } from './config/db';

const app = express();
mongoose.connect(dbURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to the bookstore-db database");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is 🏃 on port ${port}`);
});
