import { RescueTask, Result } from '../src/core/rescue';

describe('RescueTask', () => {
  test('successful async operation', async () => {
    const task = RescueTask.from(async () => 'success');
    const result = await task.rescue(() => 'fallback');
    expect(result).toBe('success');
  });

  test('failed async operation with fallback', async () => {
    const task = RescueTask.from(async () => {
      throw new Error('Failed');
    });
    const result = await task.rescue(() => 'fallback');
    expect(result).toBe('fallback');
  });
});

describe('Result Type', () => {
  test('success result', () => {
    const result: Result<string, Error> = { 
      success: true, 
      data: 'success' 
    };
    expect(result.success).toBe(true);
  });
});