import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../../core/stores/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  token$: Observable<string | null> | undefined;
  error$: Observable<unknown | null> | undefined;

  constructor(private store: Store) {}

  onLogin() {
    if (!this.username || !this.password) {
      alert('Please enter both username and password');
      return;
    }

    this.store.dispatch(AuthActions.login({ username: this.username, password: this.password }));
  }
}
