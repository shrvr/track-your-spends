import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import authRoute from './routes/auth';

const app = express();
const port = config.PORT;

if (config.NODE_ENV !== 'test') {
  mongoose
    .connect(`${config.MONGO_URL}`)
    .then(() => console.log('DB Conncetion Successful !!'))
    .catch((err) => {
      console.log(err);
    });
}

app.use(express.json());
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (config.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;
