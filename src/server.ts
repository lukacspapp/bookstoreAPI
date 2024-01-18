import mongoose from 'mongoose';
import { port, dbURI } from './config/db';
import app from './app';

const startServer = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected successfully to the bookstore-db database 🎉');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Something went wrong 😑', error);
  }
};

startServer();
