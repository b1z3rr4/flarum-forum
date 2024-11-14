import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './pages/topics/topics.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PrivateRoutes } from '../core/providers/PrivateRoutes/PrivateRoutes.service';
import { LoginRoute } from '../core/providers/PublicRoutes/LoginRoute.service';
import { AdminRoutes } from '../core/providers/PrivateRoutes/AdminRoutes.service';

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
    canActivate: [LoginRoute],
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Flarum | Admin',
    canActivate: [PrivateRoutes, AdminRoutes],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
