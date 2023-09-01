/* eslint-disable no-process-env */
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const PASS_SALT = process.env.PASS_SALT;
const NODE_ENV = process.env.NODE_ENV;

const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_LOGO_URL = process.env.EMAIL_LOGO_URL;

const OTP_EXPIRATION_TIME = process.env.OTP_EXPIRATION_TIME;

export default {
  MONGO_URL,
  PASS_SALT,
  NODE_ENV,
  PORT,
  EMAIL_SERVICE,
  EMAIL_USER,
  EMAIL_PASSWORD,
  EMAIL_LOGO_URL,
  OTP_EXPIRATION_TIME,
};
