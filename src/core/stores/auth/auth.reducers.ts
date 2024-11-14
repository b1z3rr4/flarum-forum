import { createReducer, on } from '@ngrx/store';
import { Nullable } from '../../interfaces/utils';
import { AuthActions } from './auth.actions';

export interface AuthState {
  token: string;
  username: string;
  error: unknown;
  loading: boolean;
}

const initialState: Nullable<AuthState> = {
  error: null,
  token: null,
  loading: null,
  username: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): Nullable<AuthState> => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    AuthActions.loginSuccess,
    (state, { token, username }): Nullable<AuthState> => ({
      ...state,
      loading: false,
      token,
      username,
    }),
  ),
  on(
    AuthActions.loginFailure,
    (state, { error }): Nullable<AuthState> => ({
      ...state,
      error,
      loading: false,
    }),
  ),
  on(
    AuthActions.logout,
    (state): Nullable<AuthState> => ({
      ...state,
      error: null,
      token: null,
      loading: null,
      username: null,
    }),
  ),
);
