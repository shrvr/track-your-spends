import express from 'express';
import mongoose from 'mongoose';
import config from './config';

const app = express();
const port = 5000;

mongoose
  .connect(`${config.MONGO_URL}`)
  .then(() => console.log('DB Conncetion Successful !!'))
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
