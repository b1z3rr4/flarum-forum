import { Action, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { STATE_KEY } from '../constants/keys';
import { AuthState } from './auth/auth.reducer';

export interface StateApp {
  auth: AuthState;
}

export function localStorageSyncReducer(reducer: ActionReducer<StateApp>): ActionReducer<StateApp> {
  return (state: StateApp | undefined, action: Action): StateApp => {
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      const storedState = localStorage.getItem(STATE_KEY);

      if (storedState) {
        const parsedState = JSON.parse(storedState) as StateApp;

        return {
          ...state,
          auth: parsedState.auth,
        };
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem(STATE_KEY, JSON.stringify({ auth: nextState.auth }));

    return nextState;
  };
}
