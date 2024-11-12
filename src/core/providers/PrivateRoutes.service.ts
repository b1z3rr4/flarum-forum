import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { selectCurrentUser } from '../stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class PrivateRoutes {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      take(1),
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
