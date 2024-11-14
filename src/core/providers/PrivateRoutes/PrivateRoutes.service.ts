import { Injectable } from '@angular/core';
import { GuardResult, MaybeAsync, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthSelectors } from '../../stores/auth/auth.selectors';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrivateRoutes {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): MaybeAsync<GuardResult> {
    return this.store.select(AuthSelectors.selectToken).pipe(
      map((token) => {
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      }),
    );
  }
}
