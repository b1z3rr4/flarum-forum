import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './pages/topics/topics.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

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
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Flarum | Admin',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
