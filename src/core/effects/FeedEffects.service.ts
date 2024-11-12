import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../services/Feed/Feed.service';
import { FeedActions } from '../stores/feed/feed.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiError } from '../interfaces/utils';
import { DiscussionMapper } from '../mappers/DiscussionMapper';

@Injectable({
  providedIn: 'root',
})
export class FeedEffects {
  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {}

  discussion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeedActions.discussions),
      switchMap(() =>
        this.feedService.getDiscussions().pipe(
          map((response) =>
            FeedActions.discussionsSuccess({
              discussions: response.data.map((discussion) => DiscussionMapper.toDomain(discussion, response.included)),
            }),
          ),
          catchError((error: ApiError) => of(FeedActions.discussionsFailure({ error }))),
        ),
      ),
    );
  });

  discussionCreate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeedActions.discussionCreate),
      switchMap((discussion) =>
        this.feedService.postDiscussion(discussion).pipe(
          map((response) =>
            FeedActions.discussionCreateSuccess({ discussion: DiscussionMapper.toDomain(response.data, response.included) }),
          ),
          catchError((error: ApiError) => of(FeedActions.discussionCreateFailure({ error }))),
        ),
      ),
    );
  });
}
