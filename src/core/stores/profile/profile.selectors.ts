import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.reducer';

export const selectProfileState = createFeatureSelector<ProfileState>('profile');

export const selectProfile = createSelector(selectProfileState, (state: ProfileState) => state?.attributes);

export const selectGroup = createSelector(selectProfileState, (state: ProfileState) => state?.included);
