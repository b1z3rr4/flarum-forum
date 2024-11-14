import { Injectable } from '@angular/core';
import { Router, MaybeAsync, GuardResult } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ProfileSelectors } from '../../stores/profile/profile.selectors';
import { Group } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AdminRoutes {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(): MaybeAsync<GuardResult> {
    return this.store.select(ProfileSelectors.selectGroup).pipe(
      map((groups) => {
        const userRole = this.getUserRole(groups);

        if (userRole !== 'Admin') {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }),
    );
  }

  getUserRole(group: Group[] = []) {
    return group.find(({ type }) => type === 'groups')?.attributes.nameSingular;
  }
}
