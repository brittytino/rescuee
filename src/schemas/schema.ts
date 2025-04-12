import { Result } from '../core/rescue';

export function createSchema<T>() {
  const validators: Array<(value: unknown) => Result<unknown, string>> = [];

  return {
    string() {
      validators.push((v) => 
        typeof v === 'string' ? { success: true, data: v } : { success: false, error: 'Not string' }
      );
      return this as any;
    },
    parse(value: unknown): Result<T, string[]> {
      const errors: string[] = [];
      let parsed = value;

      for (const validate of validators) {
        const result = validate(parsed);
        if (!result.success) errors.push(result.error);
      }

      return errors.length === 0 
        ? { success: true, data: parsed as T }
        : { success: false, error: errors };
    }
  };
}