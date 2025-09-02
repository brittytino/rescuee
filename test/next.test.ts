import { withValidation } from '../src/frameworks/next';
import { createSchema } from '../src/schemas/schema';
import { NextApiRequest, NextApiResponse } from 'next';

describe('withValidation', () => {
  test('blocks invalid requests', async () => {
    const schema = createSchema<{ name: string }>().string();
    const handler = jest.fn();
    const wrappedHandler = withValidation(schema)(handler);
    
    const req = { body: 123 } as NextApiRequest;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    
    await wrappedHandler(req, res as unknown as NextApiResponse);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});