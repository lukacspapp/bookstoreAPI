import express from 'express';
import mongoose from 'mongoose';
import { port, dbURI } from './config/db';
import router from './routes/books';

const app = express();

const startServer = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected successfully to the bookstore-db database 🎉');

    app.use((req, _res, next) => {
      console.log(`🚨🚨 Incoming request ${req.method} = ${req.url}`);
      next();
    });

    app.use(express.json());
    app.use('/api', router);

    app.use('*', (_req, res) => {
      res.status(404).json({ message: 'Resource not found' });
    });

    app.listen(port, () => {
      console.log(`Server is 🏃 on ${port}`)
    })
  } catch (error) {
    console.log(error);
    console.log('Something Went Wrong 😑');
  }
};

startServer();