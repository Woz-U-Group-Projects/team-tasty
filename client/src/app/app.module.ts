import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppMainComponent } from './app-main/app-main.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SoupsComponent } from './soups/soups.component';
import { SaladsComponent } from './salads/salads.component';
import { BevsComponent } from './bevs/bevs.component';
import { ApptzsComponent } from './apptzs/apptzs.component';
import { DishesComponent } from './dishes/dishes.component';
import { DessertsComponent } from './desserts/desserts.component';

@NgModule({
  declarations: [

    AppComponent,
    AppMainComponent,
    NavbarComponent,
    FavoritesComponent,
    SoupsComponent,
    SaladsComponent,
    BevsComponent,
    ApptzsComponent,
    DishesComponent,
    DessertsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
