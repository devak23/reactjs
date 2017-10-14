import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import parseErrors from '../utils/parseErrors';
import authenticate from '../middlewares/authenticate';
import Book from '../models/Book';

const router = express.Router();
router.use(authenticate);

router.get('/search', (req, res) => {
  request
    .get(
      `https://www.goodreads.com/search/index.xml?key=${process.env
        .GOODREADS_KEY}&q=${req.query.q}`,
    )
    .then(result =>
      parseString(result, (err, goodreadsJson) =>
        res.json({
          books: goodreadsJson.GoodreadsResponse.search[0].results[0].work.map(
            work => ({
              goodreadsId: work.best_book[0].id[0]._,
              title: work.best_book[0].title[0],
              authors: work.best_book[0].author[0].name[0],
              covers: [work.best_book[0].image_url[0]],
              averageRating: work.average_rating[0],
              thumb: work.best_book[0].small_image_url[0],
            }),
          ),
        }),
      ),
    );
});

router.get('/fetchPages', (req, res) => {
  request
    .get(
      `https://www.goodreads.com/book/show/${req.query.q}.xml?key=${process.env
        .GOODREADS_KEY}`,
    )
    .then(result =>
      parseString(result, (err, jsonString) => {
        const numPages = jsonString.GoodreadsResponse.book[0].num_pages[0];
        const pages = numPages ? parseInt(numPages, 10) : 0;
        res.json({ pages });
      }),
    );
});

router.post('/', (req, res) => {
  Book.create({ ...req.body.book, userId: req.currentUser._id })
    .then(book => book.save())
    .then(savedBook => res.status(201).json(savedBook))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

  // const {
  //   goodreadsId,
  //   title,
  //   averageRating,
  //   authors,
  //   pages,
  //   cover,
  // } = req.body.book;
  // const book = new Book({
  //   goodreadsId,
  //   title,
  //   authors,
  //   pages,
  //   averageRating,
  //   cover,
  // });
  // book
  //   .save()
  //   .then(res.status(201).json({ message: 'Book was added!' }))
  //   .catch(err =>
  //     res.status(500).json({ errors: { global: 'Book was not added!' } }),
  //   );
});

router.get('/', (req, res) => {
  Book.find({ userId: req.currentUser._id }).then(books => res.json({ books }));
});

export default router;
