/* eslint-disable no-process-env */
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const PASS_SALT = process.env.PASS_SALT;
const NODE_ENV = process.env.NODE_ENV;

export default {
  MONGO_URL,
  PASS_SALT,
  NODE_ENV,
  PORT,
};
