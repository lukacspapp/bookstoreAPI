"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("../controllers/book");
const router = express_1.default.Router();
router.route('/books')
    .get(book_1.getAllBooks)
    .post(book_1.createABook);
router.route('/books/:id')
    .get(book_1.getBookById)
    .patch(book_1.updateABook)
    .delete(book_1.deleteAbook);
router.route('/books/isbn/:isbn')
    .get(book_1.getBookByISBN);
exports.default = router;
