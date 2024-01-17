import express from "express";
import {
  createABook,
  getAllBooks,
  getBookByISBN,
  getBookById,
  updateABook,
  deleteAbook
} from "../controllers/book";

const router = express.Router();

router.route('/books')
  .get(getAllBooks)
  .post(createABook)

router.route('/books/:id')
  .get(getBookById)
  .patch(updateABook)
  .delete(deleteAbook);

router.route('/books/isbn/:isbn')
  .get(getBookByISBN)

export default router;