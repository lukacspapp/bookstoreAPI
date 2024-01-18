import { Request, Response } from 'express';
import { Book } from '../models/book';
import { sendNotification } from '../utils/notification-service';

const BOOK_KEYS = ['ISBN', 'title', 'author', 'price', 'quantity', 'isStockLow'];
const THRESHOLD_FOR_LOW_STOCK = 5;

export const createABook = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllBooks = async (_req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getBookByISBN = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findOne({ ISBN: req.params.isbn });
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export const updateABook = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateData: Record<string, any> = {};
    const invalidKeys: string[] = [];

    Object.keys(req.body).forEach(key => {
      if (BOOK_KEYS.includes(key)) {
        updateData[key] = req.body[key];
      } else {
        invalidKeys.push(key);
      }
    });

    if (invalidKeys.length > 0) {
      res.status(400).json({ message: `Invalid field(s) provided: ${invalidKeys.join(', ')}` });
      return;
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (updatedBook) {
      if (updatedBook.quantity <= THRESHOLD_FOR_LOW_STOCK) {
        await sendNotification({ type: 'lowStock', details: updatedBook });
      }
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteAbook = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (deletedBook) {
      res.status(200).json(deletedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};