import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { RegisterComponent } from './auth/signup/register.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: AppMainComponent },
  { path: 'menu', component: NavbarComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: AppComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MenuModule]
})
export class AppRoutingModule {}
