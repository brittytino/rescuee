import { useState, useEffect } from 'react';
import { RescueTask } from '../core/rescue';

export function useRescue<T>(task: RescueTask<T>) {
  const [state, setState] = useState<{ data?: T; error?: unknown }>({});

  useEffect(() => {
    task.rescue((error) => {
      setState({ error });
      return null;
    }).then((data) => {
      if (data) setState({ data });
    });
  }, [task]);

  return [state.data, state.error];
}