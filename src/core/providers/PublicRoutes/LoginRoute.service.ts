import { Injectable } from '@angular/core';
import { GuardResult, MaybeAsync, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthSelectors } from '../../stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoginRoute {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): MaybeAsync<GuardResult> {
    return this.store.select(AuthSelectors.selectToken).pipe(
      map((token) => {
        if (token) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }),
    );
  }
}
