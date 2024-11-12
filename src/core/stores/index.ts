import { MetaReducer } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { profileReducer, ProfileState } from './profile/profile.reducer';
import { localStorageSyncReducer } from './local-storage.meta-reducer';

export interface StoreState {
  auth: AuthState;
  profile: ProfileState;
}

export const stores = { auth: authReducer, profile: profileReducer };

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
