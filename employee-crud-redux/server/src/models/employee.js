import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    empno: {
      type: Number,
      required: true,
    },
    ename: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    hireDate: {
      type: Number,
      required: false,
    },
    sal: {
      type: Number,
    },
    comm: {
      type: Number,
    },
    deptno: {
      type: Number,
      required: true,
    },
  },
  { collection: 'emp' },
);

export default mongoose.model('Employee', schema);
