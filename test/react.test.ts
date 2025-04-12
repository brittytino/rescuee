import { renderHook, waitFor } from '@testing-library/react';
import { useRescue } from '../src/frameworks/react';
import { RescueTask } from '../src/core/rescue';

describe('useRescue', () => {
  it('handles successful async operation', async () => {
    const task = RescueTask.from(async () => 'success');
    const { result } = renderHook(() => useRescue(task));
    
    await waitFor(() => {
      expect(result.current[0]).toBe('success');
    });
  });
});