import { createAction, props } from '@ngrx/store';
import { Attributes, Group } from '../../interfaces/user';

const profile = createAction('[Profile] User', props<{ identifier: string }>());

const profileSuccess = createAction(
  '[Profile] User Success',
  props<{
    id: string;
    attributes: Attributes;
    included?: Group[] | undefined;
  }>(),
);

const profileFailure = createAction('[Profile] User Failure', props<{ error: unknown }>());

export const ProfileActions = { profile, profileSuccess, profileFailure };
