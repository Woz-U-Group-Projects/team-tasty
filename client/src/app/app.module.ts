import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppMainComponent } from './app-main/app-main.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [

    AppComponent,
    AppMainComponent,
    NavbarComponent,
    FavoritesComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
