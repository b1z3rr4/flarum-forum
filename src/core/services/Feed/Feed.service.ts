import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/variables';
import { CreateDiscussionRequest, CreateDiscussionResponse, ListDiscussionsResponse } from '../../interfaces/api';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../stores/auth/auth.selectors';
import { catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) {}

  getDiscussions() {
    return this.store.select(selectCurrentUser).pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Token ${token}`);

          return this.httpClient.get<ListDiscussionsResponse>(`${API_URL}/discussions`, { headers });
        } else {
          throw new Error('Token not found');
        }
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  postDiscussion(params: CreateDiscussionRequest) {
    return this.store.select(selectCurrentUser).pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Token ${token}`);

          return this.httpClient.post<CreateDiscussionResponse>(
            `${API_URL}/discussions`,
            {
              data: {
                attributes: {
                  title: params.title,
                  content: params.content,
                },
              },
            },
            { headers },
          );
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
