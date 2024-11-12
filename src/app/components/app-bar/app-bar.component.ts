import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  name: string | undefined | null = null;
  avatarUrl: string | null | undefined = null;
  username: string | null | undefined = null;

  logoUrl: string = this.getRandomLogo();

  constructor() {}

  ngOnInit() {
    console.log('On init...');
  }

  getRandomLogo(): string {
    const logos = ['https://placeimg.com/50/50/tech', 'https://placeimg.com/50/50/nature', 'https://placeimg.com/50/50/people'];
    return logos[Math.floor(Math.random() * logos.length)];
  }

  createPost() {
    console.log('Create Post...');
  }

  logout() {
    console.log('Logout...');
  }

  goToProfile() {
    console.log('Go to profile...');
  }
}
