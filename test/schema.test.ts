import { createSchema } from '../src/schemas/schema';

describe('Schema Validation', () => {
  test('validates string successfully', () => {
    const stringSchema = createSchema<string>().string();
    const result = stringSchema.parse('valid');
    expect(result.success).toBe(true);
  });

  test('returns error for invalid string', () => {
    const stringSchema = createSchema<string>().string();
    const result = stringSchema.parse(123);
    expect(result.success).toBe(false);
  });
});