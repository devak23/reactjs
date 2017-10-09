import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
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
    rating: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

schema.index(
  { title: 1, authors: 1 },
  { unique: 'The book already exists in our database' },
);

export default mongoose.model('Book', schema);
