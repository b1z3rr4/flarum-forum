import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../core/stores/auth/auth.reducer';
import { AuthEffects } from '../core/effects/AuthEffects.service';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    TopicCardComponent,
    TopicsComponent,
    PostCreateComponent,
    CategoryCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
