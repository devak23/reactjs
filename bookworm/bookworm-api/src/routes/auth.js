import express from 'express'; // import the express library
import User from '../models/User'; // import the User model object defined by us User.js

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
      res.status(400).json({ errors: { global: 'You have entered invalid credentials' } });
    }
  });
});

export default router; // xpose the router to the index page where it can be imported
