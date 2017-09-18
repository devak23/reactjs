import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
  // parse the body to get the data
  const { email, password, firstname, lastname } = req.body.user;

  // check if the user object exists
  // User.findOne({ email }).then(
  //   res.status(400).json({ errors: { global: 'User already exists' } }),
  // );

  const user = new User({ email, firstname, lastname });
  user.setPassword(password);
  user
    .save()
    .then(userRecord => res.json({ user: userRecord.toAuthJSON() }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;
