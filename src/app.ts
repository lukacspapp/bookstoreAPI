import express from 'express';
import router from './routes/books';

const app = express();

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`🚨🚨 Incoming request ${req.method} = ${req.url}`);
  next();
});

app.use('/api', router);

app.use('*', (_req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

export default app;
