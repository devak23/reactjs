import { createSelector } from "reselect";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";

export default function books(state = {}, action = {}) {
  switch (action.type) {
    case BOOKS_FETCHED:
    case BOOK_CREATED:
      return { ...state, ...action.data.entities.books };
    default:
      return state;
  }
}

// SELECTORS
export const bookSelector = state => state.books;

export const allBooksSelector = createSelector(bookSelector, booksHash =>
  Object.values(booksHash)
);
