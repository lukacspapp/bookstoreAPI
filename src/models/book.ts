import mongoose, { Document } from 'mongoose';

export interface Book extends Document{
  ISBN: string;
  title: string;
  author: string,
  price: number,
  quantity: number,
  isStockLow: boolean,
}

const bookSchema = new mongoose.Schema({
  ISBN: {type: String, required: true, unique: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  isStockLow: {type: Boolean, required: true},
})

export const Book = mongoose.model<Book>('Book', bookSchema)

