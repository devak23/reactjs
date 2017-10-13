import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import BlueBirdPromise from 'bluebird';

import employees from './routes/employees';

// ------------------- config environment ------------------------ //
dotenv.config({ path: path.join(__dirname, '.env') });

// ------------------- config app ------------------------ //
const app = express();
app.use(bodyParser.json());

// ------------------- configure mongoose ------------------------ //
mongoose.Promise = BlueBirdPromise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });

// ------------------- configure routes ------------------------ //
app.use('/api/v1/employees', employees);

// ---------------- configure default handler ------------------- //
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ---------------- start server ------------------- //
app.listen(9000, () => console.log('Server listening on 9000'));
