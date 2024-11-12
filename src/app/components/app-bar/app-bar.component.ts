import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser, selectUsername } from '../../../core/stores/auth/auth.selectors';
import { AuthActions } from '../../../core/stores/auth/auth.actions';
import { ProfileActions } from '../../../core/stores/profile/profile.actions';
import { selectProfile } from '../../../core/stores/profile/profile.selectors';
import { Attributes } from '../../../core/interfaces/user';
import { Nullable } from '../../../core/interfaces/utils';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  name: string | undefined | null = null;
  avatarUrl: string | null | undefined = null;
  username: string | null | undefined = null;

  logoUrl: string = this.getRandomLogo();

  isLoggedIn$: Observable<string | null> | undefined;
  username$: Observable<string | null> | undefined;
  attributes$: Observable<Nullable<Attributes> | null> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectCurrentUser);

    this.username$ = this.store.select(selectUsername);

    this.attributes$ = this.store.select(selectProfile);

    this.username$.subscribe((username) => {
      if (username) {
        this.store.dispatch(ProfileActions.profile({ identifier: username }));
      }
    });

    this.attributes$.subscribe((profile) => {
      if (profile) {
        this.name = profile.displayName;
        this.avatarUrl = profile.avatarUrl;
        this.username = '@' + profile.username;
      }
    });
  }

  getRandomLogo(): string {
    const logos = ['https://placeimg.com/50/50/tech', 'https://placeimg.com/50/50/nature', 'https://placeimg.com/50/50/people'];
    return logos[Math.floor(Math.random() * logos.length)];
  }

  createPost() {
    console.log('Create Post...');
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  goToProfile() {
    console.log('Go to profile...');
  }
}
