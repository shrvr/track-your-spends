import request from 'supertest';

import app from 'src/index';

// Create a mock implementation of the save method
const saveMock = jest.fn();

// Mocking the User model to isolate the tests
jest.mock('src/models/User', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    save: saveMock,
  })),
}));

describe('POST /api/auth/register', () => {
  it('should create a new user and return data', async () => {
    const newUser = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      country: 'USA',
      profession: 'Software Engineer',
    };

    // Resetting the mock implementation for this test case
    saveMock.mockResolvedValue({
      _id: 'random12345',
      email: 'john.doe@example.com',
    });
    const response = await request(app).post('/api/auth/register').send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      message: 'Registration Successful',
      _id: 'random12345',
      email: 'john.doe@example.com',
    });

    // Assert that the User model's save method was called with the right arguments
    expect(saveMock).toHaveBeenCalled();
  });

  it('should return 500 if user creation fails', async () => {
    jest.resetAllMocks();
    // Override the mocked save method to reject instead of resolving
    saveMock.mockRejectedValue(new Error());

    const newUser = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      country: 'USA',
      profession: 'Software Engineer',
    };

    const response = await request(app).post('/api/auth/register').send(newUser);

    expect(response.statusCode).toBe(500);
  });
});
