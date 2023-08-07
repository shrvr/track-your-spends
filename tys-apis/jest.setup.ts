import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import config from 'src/config';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // If there is an existing connection, close it
  if (mongoose.connection.readyState) {
    config.NODE_ENV = 'test';
    await mongoose.disconnect();
  }

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  config.NODE_ENV = 'development';
});

afterEach(() => {
  jest.restoreAllMocks();
});
