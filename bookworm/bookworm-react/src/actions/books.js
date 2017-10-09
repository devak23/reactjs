import api from '../api';

export const addBook = book => () =>
  api.book.addBook(book).catch(err => console.log('Book was not added', err)); // TODO: how to properly do this?

export const loadBooks = () => () => api.book.loadBooks().then(books => books);
