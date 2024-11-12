import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './pages/topics/topics.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../core/providers/AuthGuard.service';
import { PrivateRoutes } from '../core/providers/PrivateRoutes.service';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRole } from '../core/providers/AdminRole.service';

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
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Flarum | Admin',
    canActivate: [PrivateRoutes, AdminRole],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
