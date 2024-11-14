import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../services/Profile/Profile.service';
import { ProfileActions } from '../stores/profile/profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ListUsersResponse } from '../interfaces/api';
import { ApiError } from '../interfaces/utils';

// const mockUserGroup = [
//   {
//     attributes: { nameSingular: 'Default', namePlural: 'Defaults', color: '#B72A2A', icon: 'fas fa-wrench', isHidden: 0 },
//     id: '1',
//     type: 'groups',
//   },
// ];

@Injectable()
export class ProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {}

  loadUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.profile),
      switchMap((action) =>
        this.profileService.getUserProfile(action.identifier).pipe(
          map((response: ListUsersResponse) =>
            ProfileActions.profileSuccess({
              id: response.data[0]?.id,
              attributes: response.data[0]?.attributes,
              included: response.included,
            }),
          ),
          catchError((error: ApiError) => of(ProfileActions.profileFailure({ error }))),
        ),
      ),
    );
  });
}
