import { feedReducer, FeedState } from './feed/feed.reducer';
import { MetaReducer } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { profileReducer, ProfileState } from './profile/profile.reducer';
import { localStorageSyncReducer } from './local-storage.meta-reducer';

export interface StoreState {
  auth: AuthState;
  profile: ProfileState;
  feed: FeedState;
}

export const stores = { auth: authReducer, profile: profileReducer, feed: feedReducer };

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
