import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListUsersResponse } from '../../interfaces/api';
import { catchError, switchMap } from 'rxjs';
import { API_URL } from '../../constants/variables';
import { AuthSelectors } from '../../stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) {}

  getUserProfile(identifier: string) {
    return this.store.select(AuthSelectors.selectToken).pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
          return this.httpClient.get<ListUsersResponse>(`${API_URL}/users?filter[username]=${identifier}`, { headers });
        } else {
          throw new Error('Token not found');
        }
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }
}
