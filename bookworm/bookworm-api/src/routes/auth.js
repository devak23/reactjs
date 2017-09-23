import express from 'express'; // import the express library
import jwt from 'jsonwebtoken';
import User from '../models/User'; // import the User model object defined by us User.js
import { sendResetPasswordEmail } from '../mailer/mailer';

const router = express.Router(); // create a router

// handle the post request on the root path
router.post('/', (req, res) => {
  // read the credentials from the request. This is is a JSON object converted by the body-parser library
  const { credentials } = req.body;

  // invoke the ORM method provided by Mongoose
  User.findOne({ email: credentials.email }) // search for the user whose email is ...
    .then(user => {
      // if the user is valid, invoke the checkPassword method on User object
      if (user && user.isValidPassword(credentials.password)) {
        // if so, send the response with user object in it
        res.json({ user: user.toAuthJSON() });
      } else {
        res
          .status(400)
          .json({ errors: { global: 'You have entered invalid credentials' } });
      }
    });
});

router.post('/confirmation', (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: '', confirmed: true },
    { new: true },
  ).then(
    user =>
      user
        ? res.json({ user: user.toAuthJSON() })
        : res.status(400).json({
            errors: {
              global: "Couldn't find the user for the requested token",
            },
          }),
  );
});

router.post('/reset_password_request', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    try {
      sendResetPasswordEmail(user);
      res.send({});
    } catch (e) {
      console.log(e);
      res.status(400).json({
        errors: {
          global:
            'If the email is registered with us, you should receive a reset email in your inbox',
        },
      });
    }
  });
});

router.post('/validate_token', (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, err => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: 'Invalid token' });
    } else {
      res.json({});
    }
  });
});

router.post('/reset_password', (req, res) => {
  // get the token and new password
  const { token, password } = req.body.data;
  // verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      res.status(401).json({ errors: { global: 'Invalid token' } });
    } else {
      User.findOne({ _id: decoded._id }).then(user => {
        if (user) {
          user.setPassword(password);
          user.save();
          res.json({});
        } else {
          res.status(400).json({ errors: { global: 'Invalid user!' } });
        }
      });
    }
  });
});

export default router; // expose the router to the index page where it can be imported
