import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';
import sendConfirmationEmail from '../mailer/mailer';

const router = express.Router();

router.post('/', (req, res) => {
  // parse the body to get the data
  const { email, password, firstname, lastname } = req.body.user;

  const user = new User({ email, firstname, lastname });
  user.setPassword(password);
  user.setConfirmationToken();
  user
    .save()
    .then(userRecord => {
      try {
        sendConfirmationEmail(userRecord);
      } catch (e) {
        /* eslint-disable */
        console.log(e);
        /* eslint-enable */
      }

      res.json({ user: userRecord.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;
