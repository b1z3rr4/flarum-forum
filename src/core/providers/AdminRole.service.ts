import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { selectGroup } from '../stores/profile/profile.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminRole {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectGroup).pipe(
      take(1),
      map((group) => {
        const groupType = group?.length ? group.find(({ attributes }) => attributes.nameSingular === 'Admin') : null;

        if (!groupType) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }),
    );
  }
}
