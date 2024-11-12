import { Component, Input } from '@angular/core';
import { Discussion } from '../../../core/interfaces/discussion';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
  @Input() topic: Discussion = {
    attributes: {
      commentCount: 0,
      createdAt: '',
      lastPostedAt: '',
      lastPostNumber: 0,
      participantCount: 0,
      slug: '',
      title: '',
    },
    id: '',
  };

  constructor() {}
}
