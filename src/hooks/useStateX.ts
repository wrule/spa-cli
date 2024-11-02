import React, { useState, useCallback } from 'react';
import { freeze, produce } from 'immer';

export
function useStateX<T>(initValue: T): [T, (updater: (draft: T) => void) => void] {
  const [state, setState] = useState<T>(initValue);
  const freezeState = freeze(state, true);
  const setImmerState = useCallback((updater: (draft: T) => void) => {
    setState(produce(state, updater));
  }, [state]);
  return [freezeState, setImmerState];
}
