import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';

<<<<<<< HEAD
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: AppMainComponent },
  { path: 'menu', component: NavbarComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: AppComponent }
=======
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
>>>>>>> origin/ashley
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule, MenuModule]
})
export class AppRoutingModule {}
=======
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
>>>>>>> origin/ashley
