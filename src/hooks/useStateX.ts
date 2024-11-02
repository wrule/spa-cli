import React, { useState } from 'react';
import { freeze, produce } from 'immer';

export
function useStateX<T>(initValue: T): [T, any] {
  const [state, setState] = useState<T>(initValue);
  const freezeState = freeze(state, true);
  return [freezeState, setState];
}
