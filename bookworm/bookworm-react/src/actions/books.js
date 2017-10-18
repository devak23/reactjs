import { normalize } from "normalizr";
import { bookSchema } from "../schemas";

import api from "../api";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";

// data.entities.books
const booksFetched = data => ({
  type: BOOKS_FETCHED,
  data
});

const bookCreated = data => ({
  type: BOOK_CREATED,
  data
});

export const addBook = data => dispatch =>
  api.book
    .addBook(data)
    .then(book => dispatch(bookCreated(normalize(book, [bookSchema]))))
    .catch(err => console.log("Book was not added", err)); // TODO: how to properly do this?

export const fetchBooks = () => dispatch =>
  api.book
    .fetchBooks()
    .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));
