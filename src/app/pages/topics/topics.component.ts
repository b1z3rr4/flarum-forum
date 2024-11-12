import { Component, OnInit } from '@angular/core';
import { Discussion } from '../../../core/interfaces/discussion';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent implements OnInit {
  discussions: Discussion[] = [];

  constructor() {}

  ngOnInit() {
    console.log('On Init...');
  }
}
