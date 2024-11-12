import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedActions } from '../../../core/stores/feed/feed.actions';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
})
export class PostCreateComponent {
  userImageUrl = 'https://randomuser.me/api/portraits/men/10.jpg';
  postContent = '';

  avatarUrl: string | null = null;

  constructor(private store: Store) {}

  onPost() {
    const lines = this.postContent.split('\n');
    const title = lines[0];
    const content = lines.slice(1).join('\n');

    if (title && content) {
      this.store.dispatch(
        FeedActions.discussionCreate({
          title,
          content,
          relationships: {},
        }),
      );

      this.postContent = '';
    }
  }
}
