import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    goodreadsId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: String,
      required: true,
    },
    pages: {
      type: String,
      required: false,
    },
    averageRating: {
      type: String,
      required: false,
    },
    cover: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

// TODO: Test this!
schema.index(
  { title: 1, authors: 1 },
  { unique: 'The book already exists in our database' },
);

export default mongoose.model('Book', schema);
