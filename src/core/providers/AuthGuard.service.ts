import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { selectCurrentUser } from '../stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      take(1),
      map((token) => {
        if (token) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      }),
    );
  }
}
