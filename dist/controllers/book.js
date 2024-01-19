"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAbook = exports.updateABook = exports.getBookByISBN = exports.getBookById = exports.getAllBooks = exports.createABook = void 0;
const book_1 = require("../models/book");
const notification_service_1 = require("../utils/notification-service");
const BOOK_KEYS = ['ISBN', 'title', 'author', 'price', 'quantity', 'isStockLow'];
const THRESHOLD_FOR_LOW_STOCK = 5;
const createABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = new book_1.Book(req.body);
        const savedBook = yield newBook.save();
        res.status(201).json(savedBook);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.createABook = createABook;
const getAllBooks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.Book.find();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.Book.findById(req.params.id);
        if (book) {
            res.status(200).json(book);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getBookById = getBookById;
const getBookByISBN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.Book.findOne({ ISBN: req.params.isbn });
        if (book) {
            res.status(200).json(book);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getBookByISBN = getBookByISBN;
const updateABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const updateData = {};
        const invalidKeys = [];
        Object.keys(req.body).forEach(key => {
            if (BOOK_KEYS.includes(key)) {
                updateData[key] = req.body[key];
            }
            else {
                invalidKeys.push(key);
            }
        });
        if (invalidKeys.length > 0) {
            res.status(400).json({ message: `Invalid field(s) provided: ${invalidKeys.join(', ')}` });
        }
        if (updateData.ISBN) {
            const existingBookWithISBN = yield book_1.Book.findOne({ ISBN: updateData.ISBN, _id: { $ne: bookId } });
            if (existingBookWithISBN) {
                res.status(400).json({ message: 'ISBN already exists' });
            }
        }
        if (typeof updateData.quantity !== 'undefined') {
            updateData.isStockLow = updateData.quantity <= THRESHOLD_FOR_LOW_STOCK;
        }
        else {
            const currentBook = yield book_1.Book.findById(bookId);
            if (currentBook) {
                updateData.isStockLow = currentBook.quantity <= THRESHOLD_FOR_LOW_STOCK;
            }
        }
        const updatedBook = yield book_1.Book.findByIdAndUpdate(bookId, updateData, { new: true });
        if (updatedBook) {
            if (updatedBook.isStockLow) {
                yield (0, notification_service_1.sendNotification)({ type: 'lowStock', details: updatedBook });
            }
            res.status(200).json(updatedBook);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.updateABook = updateABook;
const deleteAbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBook = yield book_1.Book.findByIdAndDelete(req.params.id);
        if (deletedBook) {
            res.status(200).json(deletedBook);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.deleteAbook = deleteAbook;
