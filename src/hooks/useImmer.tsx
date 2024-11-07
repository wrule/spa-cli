import { freeze } from 'immer';
import { Dispatch, SetStateAction, useState } from 'react';

function useImmer<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(() => {
    let stateValue!: S;
    if (typeof initialState === 'function') {
      stateValue = (initialState as () => S)();
    } else {
      stateValue = initialState;
    }
    return freeze(stateValue, true);
  });
  return [state, setState];
}

export default useImmer;
