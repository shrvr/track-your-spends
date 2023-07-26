import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-process-env
const MONGO_URL = process.env.MONGO_URL;

export default {
  MONGO_URL,
};
