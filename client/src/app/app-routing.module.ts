import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent} from './app-main/app-main.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path: '', pathMatch:"full", redirectTo:"/carousel"},
  // {path: "carousel", component: CarouselComponent},
  {path: 'home', component: AppMainComponent}, {path: 'menu', component: NavbarComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
