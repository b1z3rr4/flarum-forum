import { Discussion } from '../../interfaces/discussion';
import { FeedActions } from './feed.actions';
import { createReducer, on } from '@ngrx/store';

export interface FeedState {
  discussions: Discussion[] | null;
  error: unknown | null;
}

export const initialState: FeedState = {
  error: null,
  discussions: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    FeedActions.discussions,
    (state): FeedState => ({
      ...state,
      error: null,
    }),
  ),
  on(
    FeedActions.discussionsSuccess,
    (state, { discussions }): FeedState => ({
      ...state,
      error: null,
      discussions,
    }),
  ),
  on(
    FeedActions.discussionsFailure,
    (state, { error }): FeedState => ({
      ...state,
      error,
    }),
  ),
  on(
    FeedActions.discussionCreate,
    (state): FeedState => ({
      ...state,
      error: null,
    }),
  ),
  on(
    FeedActions.discussionCreateSuccess,
    (state, { discussion }): FeedState => ({
      ...state,
      discussions: [discussion].concat(state.discussions || []),
    }),
  ),
  on(
    FeedActions.discussionCreateFailure,
    (state, { error }): FeedState => ({
      ...state,
      error,
    }),
  ),
);
