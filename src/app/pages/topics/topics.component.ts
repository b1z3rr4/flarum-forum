import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent {
  topics = [
    {
      title: 'Angular Or React: Which better?',
      user: '@b1z3rr4',
      content: 'A war about which is better, but we will think about which is worse?',
      commentCount: 10,
    },
    {
      title: 'Best practices for Component Design',
      user: '@dev_guru',
      content: "Let's discuss the most efficient patterns in Angular for designing scalable components.",
      commentCount: 5,
    },
    {
      title: 'State Management in Angular: NgRx vs Akita',
      user: '@john_doe',
      content: 'What is the better choice for state management in large scale Angular applications?',
      commentCount: 2,
    },
  ];

  categories = [
    {
      categoryTitle: 'Series',
      postCount: 825,
    },
    {
      categoryTitle: 'Games',
      postCount: 453,
    },
    {
      categoryTitle: 'Technology',
      postCount: 120,
    },
  ];

  constructor() {}
}
