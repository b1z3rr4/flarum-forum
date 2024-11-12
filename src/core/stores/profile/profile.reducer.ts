import { createReducer, on } from '@ngrx/store';
import { ProfileActions } from './profile.actions';
import { Attributes, Group } from '../../interfaces/user';
import { Nullable } from '../../interfaces/utils';

export interface ProfileState {
  id: string | null;
  attributes: Nullable<Attributes>;
  included?: Group[] | undefined;
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
  included: [],
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
    (state, { attributes, id, included }): ProfileState => ({
      ...state,
      id,
      included,
      attributes,
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
