// import all 3rd party libraries

import express from 'express'; // import express library that enables us to write the server
import path from 'path'; // utility to combine paths on the file system to serve files
import dotenv from 'dotenv'; // library used for reading the environment variables
import mongoose from 'mongoose'; // ORM framework library
import bodyParser from 'body-parser'; // utlity that helps to convert the http-request into JSON object you want
import BlueBirdPromise from 'bluebird';

// import a module which sets the routing the application. This is coded by me and not a third party library
import auth from './routes/auth';

dotenv.config({ path: path.join(__dirname, '.env') }); // read the environment configuration

const app = express(); // instantiate the express object that will be used as a server
app.use(bodyParser.json()); // configure the server app to use the body parser
mongoose.Promise = BlueBirdPromise; // replace the mongoose's default promise with BlueBird's promise library
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true }); // connect to the MongoDB

app.use('/api/auth', auth); // route all the paths with '/api/auth' to the auth module

// capture all the generic requests to the application and route them to a static index page
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start the server
app.listen(9000, () => console.log('Server is running on localhost:9000'));
