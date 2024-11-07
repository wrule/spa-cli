import { freeze, produce, Draft } from 'immer';
import { Dispatch, SetStateAction, useState } from 'react';

type Updater<S> = (Draft: S) => void;

function useImmer<S>(initialState: S | (() => S)): [S, (updater: Updater<S>) => void] {
  const [state, setState] = useState(() => {
    let stateValue!: S;
    if (typeof initialState === 'function') {
      stateValue = (initialState as () => S)();
    } else {
      stateValue = initialState;
    }
    return freeze(stateValue, true);
  });
  const setStateProduce = (updater: Updater<S>) => {
    const nextState = produce(state, updater);
    if (nextState !== state) {
      setState(nextState);
    }
  };
  return [state, setStateProduce];
}

export default useImmer;
