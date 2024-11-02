import React, { useState, useCallback } from 'react';
import { freeze, produce } from 'immer';

export
function useStateX<T>(initValue: T): [T, (updater: (draft: T) => void) => void] {
  const [state, setState] = useState<T>(initValue);
  const freezeState = freeze(state, true);
  const setImmerState = (updater: (draft: T) => void) => {
    const nextState = produce(state, updater);
    if (nextState !== state) {
      setState(nextState);
    }
  };
  return [freezeState, setImmerState];
}
