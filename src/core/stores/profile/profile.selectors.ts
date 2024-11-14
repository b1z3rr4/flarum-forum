import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.reducer';

const selectProfileState = createFeatureSelector<ProfileState>('profile');

const selectProfile = createSelector(selectProfileState, (state: ProfileState) => state?.attributes);

const selectGroup = createSelector(selectProfileState, (state: ProfileState) => state?.included);

export const ProfileSelectors = { selectProfile, selectGroup };
