import { createAction, props } from '@ngrx/store';
import { Discussion } from '../../interfaces/discussion';

const discussions = createAction('[Feed] List All Discussions');

const discussionsSuccess = createAction('[Feed] List All Discussions Success', props<{ discussions: Discussion[] }>());

const discussionsFailure = createAction('[Feed] List All Discussions Failure', props<{ error: unknown }>());

const discussionCreate = createAction(
  '[Feed] Create a Discussion',
  props<{
    title: string;
    relationships: {
      category?: { data: { id: string; type: 'categories' } };
      tags?: { data: { id: string; type: 'tags' } };
    };
    content: string;
  }>(),
);

const discussionCreateSuccess = createAction('[Feed] Create a Discussion Success', props<{ discussion: Discussion }>());

const discussionCreateFailure = createAction('[Feed] Create a Discussion Failure', props<{ error: unknown }>());

export const FeedActions = {
  discussions,
  discussionCreate,
  discussionsSuccess,
  discussionsFailure,
  discussionCreateSuccess,
  discussionCreateFailure,
};
