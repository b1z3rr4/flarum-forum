import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from './feed.reducer';

export const selectFeedState = createFeatureSelector<FeedState>('feed');

export const selectDiscussions = createSelector(selectFeedState, (state: FeedState) => state.discussions);
