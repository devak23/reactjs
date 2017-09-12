import express from 'express';
import path from 'path';

const app = express();

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: "invalid credentials" }})
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(9000, () => console.log('Server is running on localhost:9000'));
