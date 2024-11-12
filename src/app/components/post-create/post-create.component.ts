import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
})
export class PostCreateComponent {
  userImageUrl = 'https://randomuser.me/api/portraits/men/10.jpg';
  postContent = '';

  avatarUrl: string | null = null;
}
