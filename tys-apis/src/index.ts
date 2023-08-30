import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import User from './models/User';
import authRoute from './routes/auth';
import { sendOneTimePasswordEmail } from './routes/forgotPassword';
import { generateOneTimeCode, storeOneTimeCode } from './routes/otpService';

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

app.post('/api/forgotPassword', async (req, res) => {
  try {
    const { send_to, sent_from } = req.body;
    const otp = generateOneTimeCode();
    const otpExpirationTime = Number(config.OTP_EXPIRATION_TIME);
    const logoUrl = config.EMAIL_LOGO_URL;
    const user = await User.findOne({ email: send_to });

    if (user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await storeOneTimeCode(send_to, otp, otpExpirationTime);
    await sendOneTimePasswordEmail(otp, send_to, sent_from, otpExpirationTime, logoUrl);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error: ' + error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
