import { Action, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { StoreState } from '.';
import { STATE_KEY } from '../constants/variables';

// middlewares
export function localStorageSyncReducer(reducer: ActionReducer<StoreState>): ActionReducer<StoreState> {
  return (state: StoreState | undefined, action: Action): StoreState => {
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      const storedState = localStorage.getItem(STATE_KEY);

      if (storedState) {
        const parsedState = JSON.parse(storedState) as StoreState;

        return parsedState;
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem(STATE_KEY, JSON.stringify(nextState));

    return nextState;
  };
}
