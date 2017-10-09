import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';
import Book from '../models/Book';

const router = express.Router();
router.use(authenticate);

router.get('/search', (req, res) => {
  request
    .get(
      `https://www.goodreads.com/search/index.xml?key=ugaHGsexl3Yk89H3B8LrQ&q=${req
        .query.q}`,
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

  // res.json({
  //   books: [
  //     {
  //       goodreadsId: 1,
  //       title: '1984',
  //       authors: 'Orwell',
  //       covers: [
  //         'https://images.gr-assets.com/books/1348990566l/5470.jpg',
  //         'https://images.gr-assets.com/books/1504611957l/9577857.jpg',
  //       ],
  //       pages: 198,
  //     },
  //     {
  //       goodreadsId: 2,
  //       title: 'Three Men in a Boat',
  //       authors: 'Jerome K. Jerome',
  //       covers: [
  //         'https://images.gr-assets.com/books/1392791656l/4921.jpg',
  //         'https://images.gr-assets.com/books/1312036878l/627830.jpg',
  //       ],
  //       pages: 256,
  //     },
  //   ],
  // });
});

router.get('/fetchPages', (req, res) => {
  request
    .get(
      `https://www.goodreads.com/book/show/${req.query
        .q}.xml?key=ugaHGsexl3Yk89H3B8LrQ`,
    )
    .then(result =>
      parseString(result, (err, jsonString) => {
        res.json({ pages: jsonString.GoodreadsResponse.book[0].num_pages[0] });
      }),
    );
});

router.post('/', (req, res) => {
  const { title, averageRating, authors, pages } = req.body.book;
  const book = new Book({ title, authors, pages, averageRating });
  book
    .save()
    .then(res.status(201).json({ message: 'Book was added!' }))
    .catch(err =>
      res.status(500).json({ errors: { global: 'Book was not added!' } }),
    );
});

export default router;
