import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    deptno: {
      type: Number,
      required: true,
    },
    dname: {
      type: String,
      required: true,
    },
    loc: {
      type: String,
      required: true,
    },
  },
  { collection: 'dept' },
);

export default mongoose.model('Department', schema);
