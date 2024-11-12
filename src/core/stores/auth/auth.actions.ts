import { createAction, props } from '@ngrx/store';

const login = createAction('[Auth] Login', props<{ username: string; password: string }>());

const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; username: string }>());

const loginFailure = createAction('[Auth] Login Failure', props<{ error: unknown }>());

export const logout = createAction('[Auth] Logout');

export const AuthActions = { login, loginFailure, loginSuccess, logout };
