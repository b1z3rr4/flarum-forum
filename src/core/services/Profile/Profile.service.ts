import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/variables';
import { ListUsersResponse } from '../../interfaces/api';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../stores/auth/auth.selectors';
import { catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) {}

  getUserProfile(identifier: string) {
    return this.store.select(selectCurrentUser).pipe(
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
