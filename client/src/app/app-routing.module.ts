import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppMainComponent} from './app-main/app-main.component'

const routes: Routes = [{path:"home", component: AppMainComponent}];
=======
import { AppMainComponent } from './app-main/app-main.component'
import { Navbar } from './navbar/navbar.component'

const routes: Routes = [
  //{path: '', pathMatch:"full", redirectTo:"/carousel"},
  //{path: "carousel", component: CarouselComponent},
  {path:"home", component: AppMainComponent}, {path:"menu", component: Navbar}
];


>>>>>>> brandon

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
