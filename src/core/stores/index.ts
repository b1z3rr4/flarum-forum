import { MetaReducer } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducers';
import { localStorageSyncReducer } from './local-storage.meta-reducer';
import { profileReducer, ProfileState } from './profile/profile.reducer';

export interface StoreState {
  auth: AuthState;
  profile: ProfileState;
}

export const stores = { auth: authReducer, profile: profileReducer };

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
