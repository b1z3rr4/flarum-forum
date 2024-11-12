import { createAction, props } from '@ngrx/store';

const profile = createAction('[Profile] User', props<{ identifier: string }>());

const profileSuccess = createAction(
  '[Profile] User Success',
  props<{
    id: string;
    attributes: {
      username: string;
      joinDate: string;
      bio?: string;
      avatarUrl?: string;
    };
  }>(),
);

const profileFailure = createAction('[Profile] User Failure', props<{ error: unknown }>());

export const ProfileActions = { profile, profileSuccess, profileFailure };
