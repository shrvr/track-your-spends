import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-process-env
const MONGO_URL = process.env.MONGO_URL;
// eslint-disable-next-line no-process-env
const PASS_SALT = process.env.PASS_SALT;

export default {
  MONGO_URL,
  PASS_SALT,
};
