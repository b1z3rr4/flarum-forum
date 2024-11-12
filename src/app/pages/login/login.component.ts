import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../../core/stores/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private store: Store) {}

  onLogin() {
    if (!this.username || !this.password) {
      alert('Please enter both username and password');
      return;
    }

    this.store.dispatch(AuthActions.login({ username: this.username, password: this.password }));
  }
}
