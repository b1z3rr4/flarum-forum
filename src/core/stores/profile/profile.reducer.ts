import { createReducer, on } from '@ngrx/store';
import { ProfileActions } from './profile.actions';

export interface ProfileState {
  id: string | null;
  attributes: {
    username: string | null;
    joinDate: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    displayName?: string | null;
  };
  error: unknown | null;
}

export const initialState: ProfileState = {
  id: null,
  attributes: {
    username: null,
    joinDate: null,
    bio: null,
    avatarUrl: null,
  },
  error: null,
};

export const profileReducer = createReducer(
  initialState,
  on(
    ProfileActions.profile,
    (state): ProfileState => ({
      ...state,
    }),
  ),
  on(
    ProfileActions.profileSuccess,
    (state, { attributes, id }): ProfileState => ({
      ...state,
      attributes,
      id,
    }),
  ),
  on(
    ProfileActions.profileFailure,
    (state, { error }): ProfileState => ({
      ...state,
      error,
    }),
  ),
);
