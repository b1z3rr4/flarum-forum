import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

const selectAuthState = createFeatureSelector<AuthState>('auth');

const selectToken = createSelector(selectAuthState, (state: AuthState) => state.token);

const selectError = createSelector(selectAuthState, (state: AuthState) => state.error);

const selectUsername = createSelector(selectAuthState, (state: AuthState) => state.username);

export const AuthSelectors = { selectToken, selectError, selectUsername };
