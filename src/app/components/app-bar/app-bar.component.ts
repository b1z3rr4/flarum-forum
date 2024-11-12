import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser } from '../../../core/stores/auth/auth.selectors';
import { AuthActions } from '../../../core/stores/auth/auth.actions';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  name: string = 'Natalia Bezerra';
  userName: string = '@b1z3rr4';
  avatarUrl: string | null = null;
  logoUrl: string = this.getRandomLogo();

  isLoggedIn$: Observable<string | null> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectCurrentUser);
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
