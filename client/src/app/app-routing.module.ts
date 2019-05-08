import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent} from './app-main/app-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  // {path: '', pathMatch: 'home', redirectTo: '/app-main'},
  {path: 'home', component: AppMainComponent},
  {path: 'menu', component: NavbarComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: AppComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MenuModule]
})
export class AppRoutingModule { }
