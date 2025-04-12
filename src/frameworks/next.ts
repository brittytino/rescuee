import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { createSchema } from '../schemas/schema';

export function withValidation<T>(schema: ReturnType<typeof createSchema<T>>) {
  return (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    const result = schema.parse(req.body);
    if (!result.success) return res.status(400).json({ errors: result.error });
    return handler(req, res);
  };
}