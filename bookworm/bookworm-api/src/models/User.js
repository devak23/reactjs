import mongoose from 'mongoose'; // import ORM library
import bcrypt from 'bcrypt'; // import encryption library. One way hash
import jwt from 'jsonwebtoken'; // import JSON web token library
import uniqueValidator from 'mongoose-unique-validator';

// TODO: add uniqueness and email validation to email fields

// define a new schema defined by this structure (dont confuse the word schema with Oracle schema
// Schema in this sense means the layout of the object... not the db concept)
const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    passwordHash: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// define isValidPassword method which compares the hashed password in DB with
// newly hashed password from user input.
schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// define the generateJWT method on the User object
schema.methods.generateJWT = function generateJWT() {
  // the first part of the object are all the public claims that you want the user to see. This
  // intentional
  return jwt.sign(
    {
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      confirmed: this.confirmed,
    },
    process.env.JWT_SECRET, // access the secret from the environment variable
  );
};

// define the method toAuthJSON that will convert the User object into a JSON
schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    confirmed: this.confirmed,
    token: this.generateJWT(),
  };
};

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

schema.plugin(uniqueValidator, { message: 'This email is already taken' });

// export the schema as a User object.
export default mongoose.model('User', schema);
