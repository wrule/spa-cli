import React, { useState } from 'react';
import { freeze, produce } from 'immer';

export
function useStateX<T>(initValue: T) {
  const [state, setState] = useState<T>(initValue);
  const freezeState = freeze(initValue, true);
  return [freezeState, setState];
}
