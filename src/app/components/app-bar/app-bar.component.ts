import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from '../../../core/stores/auth/auth.selectors';
import { AuthActions } from '../../../core/stores/auth/auth.actions';
import { ProfileActions } from '../../../core/stores/profile/profile.actions';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  name: string | undefined | null = null;
  avatarUrl: string | null | undefined = null;
  username: string | null | undefined = null;

  token$: Observable<string | null> | undefined;
  username$: Observable<string | null> | undefined;

  isLoggedIn: boolean = false;

  logoUrl: string = this.getRandomLogo();

  constructor(private store: Store) {}

  ngOnInit() {
    this.token$ = this.store.select(AuthSelectors.selectToken);
    this.username$ = this.store.select(AuthSelectors.selectUsername);

    this.token$.subscribe({
      next: (token) => {
        this.isLoggedIn = !!token;
      },
    });

    this.username$.subscribe({
      next: (username) => {
        if (username) {
          this.store.dispatch(ProfileActions.profile({ identifier: username }));
        }
      },
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
