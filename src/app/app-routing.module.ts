import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './pages/topics/topics.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../core/providers/AuthGuard.service';
import { PrivateRoutes } from '../core/providers/PrivateRoutes.service';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    title: 'Flarum | Home',
    canActivate: [PrivateRoutes],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Flarum | Login',
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
