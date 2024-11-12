import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './pages/topics/topics.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    title: 'Flarum | Home',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Flarum | Login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
