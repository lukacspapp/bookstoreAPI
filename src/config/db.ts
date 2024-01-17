import dotenv from 'dotenv';
dotenv.config();

export const port = 3000;
export const dbURI = process.env.DB_URI || '';
