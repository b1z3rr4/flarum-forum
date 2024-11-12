import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedActions } from '../../../core/stores/feed/feed.actions';
import { selectDiscussions } from '../../../core/stores/feed/feed.selectors';
import { Observable } from 'rxjs';
import { Discussion } from '../../../core/interfaces/discussion';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent implements OnInit {
  discussions: Discussion[] = [];

  discussions$: Observable<Discussion[] | null> | undefined = undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(FeedActions.discussions());

    this.discussions$ = this.store.select(selectDiscussions);

    this.discussions$.subscribe((discussions) => {
      if (discussions) {
        this.discussions = discussions;
      }
    });
  }
}
