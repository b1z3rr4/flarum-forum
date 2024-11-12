import { Component } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  name: string = 'Natalia Bezerra';
  userName: string = '@b1z3rr4';
  avatarUrl: string | null = null;
  logoUrl: string = this.getRandomLogo();

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
