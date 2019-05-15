import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppMainComponent } from './app-main/app-main.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuModule } from './menu/menu.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
<<<<<<< HEAD

    AppComponent,
    AppMainComponent,
    NavbarComponent,
    FavoritesComponent,
    CarouselComponent
=======
    AppComponent,
    NavbarComponent
>>>>>>> brandon
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
