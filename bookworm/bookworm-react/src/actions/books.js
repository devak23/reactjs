import api from '../api';

const addBook = book => () =>
  api.book.addBook(book).catch(err => console.log('Book was not added', err)); // TODO: how to properly do this?

export default addBook;
