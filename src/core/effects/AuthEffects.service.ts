import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthActions } from '../../core/stores/auth/auth.actions';
import { AuthService } from '../services/Auth/Auth.service';
import { ApiError } from '../interfaces/utils';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((credentials) =>
        this.authService.auth(credentials).pipe(
          map((response) => AuthActions.loginSuccess({ token: response.token, username: credentials.username })),
          catchError((error: ApiError) => of(AuthActions.loginFailure({ error }))),
        ),
      ),
    );
  });

  navigateAfterLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigate(['/']);
        }),
      );
    },
    { dispatch: false },
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/login']);
        }),
      );
    },
    { dispatch: false },
  );
}
