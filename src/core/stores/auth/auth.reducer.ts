import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export interface AuthState {
  token: string | null;
  error: unknown | null;
  loading: boolean;
  username: string | null;
}

export const initialState: AuthState = {
  token: null,
  error: null,
  loading: false,
  username: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): AuthState => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    AuthActions.loginSuccess,
    (state, { token, username }): AuthState => ({
      ...state,
      token,
      username,
      loading: false,
    }),
  ),
  on(
    AuthActions.loginFailure,
    (state, { error }): AuthState => ({
      ...state,
      error,
      loading: false,
    }),
  ),
  on(
    AuthActions.logout,
    (state): AuthState => ({
      ...state,
      token: null,
    }),
  ),
);
