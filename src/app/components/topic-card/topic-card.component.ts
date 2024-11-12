import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
  @Input() topic: { title: string; user: string; content: string; commentCount: number } = {
    title: 'Angular Or React: Which better?',
    user: '@b1z3rr4',
    content: 'A war about which is better, but we will think about which is worse?',
    commentCount: 10,
  };

  constructor() {}
}
